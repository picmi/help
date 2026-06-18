#!/usr/bin/env node
import { create, insertMultiple } from '@orama/orama'
import { persist } from '@orama/plugin-data-persistence'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

export type CliOptions = {
    docsDir: string
    outputPath: string
}

export type SearchRecordType = 'text' | 'page' | 'page-heading' | 'section' | 'faq'

export type SearchRecord = {
    title: string
    pageTitle: string
    url: string
    content: string
    type: SearchRecordType
    section: string
    headings: string
    keywords: string
    searchText: string
}

export type HeadingChunk = {
    title: string
    rawTitle: string
    level: number
    content: string
    anchor: string
}

export type FaqBlock = {
    rawQuestion: string
    question: string
    answer: string
    anchor: string
    start: number
    end: number
}

type SourceLine = {
    text: string
    start: number
    end: number
}

type StripMarkdownInlineOptions = {
    preserveMarkdownLinks?: boolean
    linkResolver?: (target: string) => string
}

export type BuildSearchIndexOptions = Partial<CliOptions> & {
    cwd?: string
    log?: boolean
}

export type BuildSearchIndexResult = {
    files: string[]
    records: SearchRecord[]
    outputFile: string
}

export type NormalizeMarkdownTextOptions = {
    currentFile?: string
    docsRoot?: string
    pageUrl?: string
}

const DEFAULT_DOCS_DIR = './docs'
const DEFAULT_OUTPUT_PATH = './docs/public/search-index.json'

export const SEARCH_STOP_WORDS = [
    'a',
    'an',
    'and',
    'are',
    'as',
    'at',
    'be',
    'because',
    'but',
    'by',
    'can',
    'do',
    'does',
    'for',
    'from',
    'has',
    'have',
    'how',
    'i',
    'if',
    'in',
    'into',
    'is',
    'it',
    'of',
    'on',
    'or',
    'should',
    'that',
    'the',
    'their',
    'there',
    'this',
    'to',
    'was',
    'what',
    'when',
    'where',
    'who',
    'why',
    'with',
    'you',
    'your',
]

const SEARCH_STOP_WORD_SET = new Set(SEARCH_STOP_WORDS)

export function parseCliArgs(argv: string[]): CliOptions {
    const options: CliOptions = {
        docsDir: DEFAULT_DOCS_DIR,
        outputPath: DEFAULT_OUTPUT_PATH,
    }

    for (let i = 0; i < argv.length; i++) {
        const arg = argv[i]

        if (arg === '--docs' && argv[i + 1]) {
            options.docsDir = argv[++i]
            continue
        }

        if (arg === '--output' && argv[i + 1]) {
            options.outputPath = argv[++i]
            continue
        }

        throw new Error(`Unknown or incomplete argument: ${arg}`)
    }

    return options
}

export function withoutFrontmatter(content: string): string {
    return content.replace(/^\s*---\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/, '')
}

export function extractFrontmatterTitle(content: string): string | null {
    const match = content.match(/^\s*---\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/)
    if (!match) return null

    const titleMatch = match[1].match(/^title:\s*(.+?)\s*$/m)
    if (!titleMatch) return null

    return titleMatch[1].trim().replace(/^['"]|['"]$/g, '') || null
}

export function removeScripts(content: string): string {
    return content
        .replace(/<script\s+setup\b[\s\S]*?<\/script>/gi, '')
        .replace(/<script\b[\s\S]*?<\/script>/gi, '')
}

export function cleanContent(content: string): string {
    return removeScripts(withoutFrontmatter(content)).trim()
}

function markdownLinkText(
    match: string,
    label: string,
    target: string,
    options: StripMarkdownInlineOptions,
): string {
    if (!options.preserveMarkdownLinks) {
        return stripMarkdownInline(label, options)
    }

    return `[${label}](${options.linkResolver?.(target) ?? target})`
}

export function stripMarkdownInline(
    value: string,
    options: StripMarkdownInlineOptions = {},
): string {
    const rawHtmlTagPattern = options.preserveMarkdownLinks
        ? /<(?!https?:\/\/|mailto:)[^>]+>/gi
        : /<[^>]+>/g

    return value
        .replace(/:::\s*icon\s+([a-zA-Z0-9_-]+)(?:\s+.*?)?\s*:::/g, '$1')
        .replace(/!\[([^\]]*)]\(([^)]+)\)/g, (match, label: string, target: string) =>
            options.preserveMarkdownLinks ? `!${markdownLinkText(match, label, target, options)}` : markdownLinkText(match, label, target, options),
        )
        .replace(/\[([^\]]+)]\(([^)]+)\)/g, (match, label: string, target: string) =>
            markdownLinkText(match, label, target, options),
        )
        .replace(/\[([^\]]+)]\[[^\]]*]/g, '$1')
        .replace(/\{#[^}]+}/g, '')
        .replace(/<((?:https?:\/\/|mailto:)[^>]+)>/gi, (_match, url: string) =>
            options.preserveMarkdownLinks ? `<${url}>` : url,
        )
        .replace(rawHtmlTagPattern, '')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/__([^_]+)__/g, '$1')
        .replace(/_([^_\s][^_]*?)_/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/~~([^~]+)~~/g, '$1')
        .replace(/[`*~]/g, '')
        .trim()
}

function splitLinkTarget(target: string): {
    destination: string
    suffix: string
} {
    const trimmed = target.trim()
    const match = trimmed.match(/^(\S+)(\s+['"][^'"]*['"])?$/)

    if (!match) {
        return { destination: trimmed, suffix: '' }
    }

    return {
        destination: match[1],
        suffix: match[2] ?? '',
    }
}

function normalizeVitePressPath(value: string): string {
    const normalized = path.posix.normalize(value.replace(/\\/g, '/'))
    const withoutMarkdownExtension = normalized.replace(/\.(?:md|html)$/i, '')
    const withoutIndex = withoutMarkdownExtension
        .replace(/\/index$/i, '')
        .replace(/^\/index$/i, '/')

    return withoutIndex === '.' ? '/' : withoutIndex
}

export function resolveVitePressLinkTarget(
    target: string,
    options: NormalizeMarkdownTextOptions,
): string {
    if (!options.currentFile || !options.docsRoot || !options.pageUrl) {
        return target
    }

    const { destination, suffix } = splitLinkTarget(target)
    const isAngleWrapped = destination.startsWith('<') && destination.endsWith('>')
    const href = isAngleWrapped ? destination.slice(1, -1) : destination

    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) {
        return target
    }

    const hrefMatch = href.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/)
    if (!hrefMatch) {
        return target
    }

    const pathname = hrefMatch[1]
    const query = hrefMatch[2] ?? ''
    const hash = hrefMatch[3] ?? ''
    let resolvedPath: string

    if (!pathname) {
        resolvedPath = options.pageUrl
    } else if (pathname.startsWith('/')) {
        resolvedPath = normalizeVitePressPath(pathname)
    } else {
        const currentRelativeFile = path.relative(options.docsRoot, options.currentFile).replace(/\\/g, '/')
        const currentRelativeDir = path.posix.dirname(currentRelativeFile)
        resolvedPath = normalizeVitePressPath(path.posix.join('/', currentRelativeDir, pathname))
    }

    const resolvedTarget = `${resolvedPath}${query}${hash}${suffix}`

    return isAngleWrapped ? `<${resolvedTarget}>` : resolvedTarget
}

export function normalizeMarkdownText(
    value: string,
    options: NormalizeMarkdownTextOptions = {},
): string {
    return stripMarkdownInline(value, {
        preserveMarkdownLinks: true,
        linkResolver: (target) => resolveVitePressLinkTarget(target, options),
    })
        .replace(/^:{3,}\s*\w+.*$/gm, '')
        .replace(/^:{3,}\s*$/gm, '')
        .replace(/^#{1,6}\s+/gm, '')
        .replace(/^\s{0,3}>\s?/gm, '')
        .replace(/^\s*[-*+]\s+/gm, '')
        .replace(/^\s*\d+\.\s+/gm, '')
        .replace(/\{\{[^}]+}}/g, '')
        .replace(/\r\n/g, '\n')
        .replace(/[ \t]+/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim()
}

export function normalizeSearchKeywordText(value: string): string {
    return value
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/&/g, ' and ')
        .replace(/[\u2019']/g, '')
        .replace(/[^a-z0-9_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
}

export function extractSearchKeywords(...values: string[]): string {
    const keywords = new Set<string>()

    for (const value of values) {
        for (const token of normalizeSearchKeywordText(value).split(' ')) {
            if (!token || SEARCH_STOP_WORD_SET.has(token)) continue
            if (token.length < 2 && !/\d/.test(token)) continue

            keywords.add(token)

            for (const part of token.split('_')) {
                if (part && !SEARCH_STOP_WORD_SET.has(part) && (part.length >= 2 || /\d/.test(part))) {
                    keywords.add(part)
                }
            }
        }
    }

    return [...keywords].join(' ')
}

export function slugifyHeading(value: string): string {
    return stripMarkdownInline(value)
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

export function faqAnchorId(question: string): string {
    return question
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
}

export function extractTitle(content: string, filePath: string): string {
    const contentWithoutFrontmatter = withoutFrontmatter(content)
    const h1Match = contentWithoutFrontmatter.match(/^#(?!#)\s+(.+)$/m)

    if (h1Match) {
        const h1Title = stripMarkdownInline(h1Match[1])
        if (h1Title) return h1Title
    }

    const frontmatterTitle = extractFrontmatterTitle(content)
    if (frontmatterTitle) return frontmatterTitle

    return path.basename(filePath, path.extname(filePath))
}

export function getPageUrl(filePath: string, docsRoot: string): string {
    const relativePath = path
        .relative(docsRoot, filePath)
        .replace(/\\/g, '/')
        .replace(/\.md$/i, '')
        .replace(/\/index$/, '')
        .replace(/^index$/, '')

    return relativePath ? `/${relativePath}` : '/'
}

function createSearchRecord(record: Omit<SearchRecord, 'headings' | 'keywords' | 'searchText'> & {
    headings?: string
}): SearchRecord {
    const headings = record.headings ?? ''
    const keywords = extractSearchKeywords(
        record.title,
        record.pageTitle,
        record.section,
        headings,
        record.url,
        record.type,
    )
    const searchText = [
        record.title,
        record.pageTitle,
        record.section,
        headings,
        keywords,
        record.content,
    ]
        .filter(Boolean)
        .join('\n')

    return {
        ...record,
        headings,
        keywords,
        searchText,
    }
}

function splitLinesWithOffsets(content: string): SourceLine[] {
    const lines: SourceLine[] = []
    let start = 0

    while (start < content.length) {
        const newlineIndex = content.indexOf('\n', start)
        const end = newlineIndex === -1 ? content.length : newlineIndex + 1

        lines.push({
            text: content.slice(start, end),
            start,
            end,
        })

        start = end
    }

    return lines
}

function lineWithoutEol(line: string): string {
    return line.replace(/\r?\n$/, '')
}

function isContainerClose(line: string, fenceLength: number): boolean {
    const match = line.trim().match(/^(:{3,})$/)
    return Boolean(match && match[1].length >= fenceLength)
}

export function extractFaqBlocks(
    content: string,
    options: NormalizeMarkdownTextOptions = {},
): FaqBlock[] {
    const lines = splitLinesWithOffsets(content)
    const blocks: FaqBlock[] = []

    for (let i = 0; i < lines.length; i++) {
        const openingLine = lineWithoutEol(lines[i].text)
        const openingMatch = openingLine.match(/^\s{0,3}(:{3,})\s+faq\s+(.+?)\s*$/)

        if (!openingMatch) continue

        const fenceLength = openingMatch[1].length
        const rawQuestion = openingMatch[2].trim()
        let closeLineIndex = -1

        for (let j = i + 1; j < lines.length; j++) {
            if (isContainerClose(lineWithoutEol(lines[j].text), fenceLength)) {
                closeLineIndex = j
                break
            }
        }

        const answerStart = lines[i].end
        const answerEnd = closeLineIndex >= 0 ? lines[closeLineIndex].start : content.length
        const blockEnd = closeLineIndex >= 0 ? lines[closeLineIndex].end : content.length
        const question = stripMarkdownInline(rawQuestion)

        if (question) {
            blocks.push({
                rawQuestion,
                question,
                answer: normalizeMarkdownText(content.slice(answerStart, answerEnd), options),
                anchor: faqAnchorId(rawQuestion),
                start: lines[i].start,
                end: blockEnd,
            })
        }

        if (closeLineIndex >= 0) {
            i = closeLineIndex
        }
    }

    return blocks
}

export function removeFaqBlocks(content: string, faqBlocks = extractFaqBlocks(content)): string {
    let output = ''
    let previousEnd = 0

    for (const block of faqBlocks) {
        output += content.slice(previousEnd, block.start)
        previousEnd = block.end
    }

    return output + content.slice(previousEnd)
}

export function removeFaqHeadingLines(content: string): string {
    return splitLinesWithOffsets(content)
        .filter((line) => {
            const headingMatch = lineWithoutEol(line.text).match(/^\s{0,3}#{1,6}\s+(.+?)\s*$/)

            return !headingMatch || !/^FAQs?$/i.test(stripMarkdownInline(headingMatch[1]))
        })
        .map((line) => line.text)
        .join('')
}

export function extractSectionChunks(
    content: string,
    faqBlocks: FaqBlock[],
    options: NormalizeMarkdownTextOptions = {},
): HeadingChunk[] {
    const chunks: HeadingChunk[] = []
    const source = removeFaqHeadingLines(removeFaqBlocks(content, faqBlocks))
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const headings: Array<{
        level: number
        title: string
        rawTitle: string
        index: number
        contentStart: number
    }> = []

    let match: RegExpExecArray | null
    while ((match = headingRegex.exec(source)) !== null) {
        const title = stripMarkdownInline(match[2])

        if (!title) continue

        headings.push({
            level: match[1].length,
            title,
            rawTitle: match[2].trim(),
            index: match.index,
            contentStart: headingRegex.lastIndex,
        })
    }

    for (let i = 0; i < headings.length; i++) {
        const heading = headings[i]
        const nextHeading = headings
            .slice(i + 1)
            .find((candidate) => candidate.level <= heading.level)
        const contentEnd = nextHeading ? nextHeading.index : source.length

        chunks.push({
            title: heading.title,
            rawTitle: heading.rawTitle,
            level: heading.level,
            content: normalizeMarkdownText(source.slice(heading.contentStart, contentEnd), options),
            anchor: slugifyHeading(heading.rawTitle),
        })
    }

    return chunks
}

export async function getMarkdownFiles(dir: string): Promise<string[]> {
    const dirents = await readdir(dir, { withFileTypes: true })
    const files = await Promise.all(
        dirents.map(async (dirent) => {
            const resolvedPath = path.resolve(dir, dirent.name)

            if (dirent.isDirectory()) {
                return getMarkdownFiles(resolvedPath)
            }

            return resolvedPath.toLowerCase().endsWith('.md') ? [resolvedPath] : []
        }),
    )

    return files.flat().sort((a, b) => a.localeCompare(b))
}

export async function createSearchRecords(docsRoot: string): Promise<{
    files: string[]
    records: SearchRecord[]
}> {
    const files = await getMarkdownFiles(docsRoot)
    const records: SearchRecord[] = []

    for (const file of files) {
        const rawContent = await readFile(file, 'utf8')
        const cleanedContent = cleanContent(rawContent)
        const pageTitle = extractTitle(rawContent, file)
        const pageUrl = getPageUrl(file, docsRoot)
        const normalizeOptions = {
            currentFile: file,
            docsRoot,
            pageUrl,
        }
        const faqBlocks = extractFaqBlocks(cleanedContent, normalizeOptions)
        const sectionChunks = extractSectionChunks(cleanedContent, faqBlocks, normalizeOptions)
        const pageContentWithoutFaqBlocks = removeFaqHeadingLines(removeFaqBlocks(cleanedContent, faqBlocks))
        const pageHeadings = [
            pageTitle,
            ...sectionChunks
                .map((chunk) => chunk.title)
                .filter((title) => title !== pageTitle),
        ].join(' ')

        if (cleanedContent.length <= 2500 || sectionChunks.length === 0) {
            records.push(createSearchRecord({
                title: pageTitle,
                pageTitle,
                url: pageUrl,
                content: normalizeMarkdownText(pageContentWithoutFaqBlocks, normalizeOptions),
                type: 'page',
                section: pageTitle,
                headings: pageHeadings,
            }))
        }

        for (const chunk of sectionChunks) {
            records.push(createSearchRecord({
                title: chunk.title,
                pageTitle,
                url: `${pageUrl}#${chunk.anchor}`,
                content: chunk.content,
                type: chunk.level === 1 ? 'page-heading' : 'section',
                section: pageTitle,
                headings: [pageTitle, chunk.title].filter(Boolean).join(' > '),
            }))
        }

        for (const faq of faqBlocks) {
            records.push(createSearchRecord({
                title: faq.question,
                pageTitle,
                url: `${pageUrl}#${faq.anchor}`,
                content: faq.answer,
                type: 'faq',
                section: pageTitle,
                headings: [pageTitle, 'FAQ'].join(' > '),
            }))
        }
    }

    return { files, records }
}

export async function buildSearchIndex(
    options: BuildSearchIndexOptions = {},
): Promise<BuildSearchIndexResult> {
    const cwd = options.cwd ?? process.cwd()
    const docsDir = options.docsDir ?? DEFAULT_DOCS_DIR
    const outputPath = options.outputPath ?? DEFAULT_OUTPUT_PATH
    const shouldLog = options.log ?? true
    const docsRoot = path.resolve(cwd, docsDir)
    const outputFile = path.resolve(cwd, outputPath)
    const outputDir = path.dirname(outputFile)

    if (shouldLog) {
        console.log('Building Orama search index...')
        console.log(`Scanning: ${docsRoot}`)
    }

    const db = create({
        schema: {
            title: 'string',
            pageTitle: 'string',
            url: 'string',
            content: 'string',
            type: 'string',
            section: 'string',
            headings: 'string',
            keywords: 'string',
            searchText: 'string',
        },
        components: {
            tokenizer: {
                stopWords: SEARCH_STOP_WORDS,
            },
        },
    })
    const { files, records } = await createSearchRecords(docsRoot)

    if (records.length > 0) {
        await insertMultiple(db, records)
    }

    await mkdir(outputDir, { recursive: true })
    // @ts-ignore
    await writeFile(outputFile, await persist(db, 'json'), 'utf8')

    if (shouldLog) {
        console.log(`Indexed ${records.length} records from ${files.length} markdown files.`)
        console.log(`Index saved to: ${outputFile}`)
    }

    return { files, records, outputFile }
}

async function runCli(): Promise<void> {
    await buildSearchIndex(parseCliArgs(process.argv.slice(2)))
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    runCli().catch((error) => {
        console.error('Build failed:', error)
        process.exit(1)
    })
}
