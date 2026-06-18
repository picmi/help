import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import {
  buildSearchIndex,
  extractSearchKeywords,
  extractFaqBlocks,
  extractSectionChunks,
  faqAnchorId,
  getPageUrl,
  normalizeSearchKeywordText,
  normalizeMarkdownText,
  removeFaqHeadingLines,
  resolveVitePressLinkTarget,
  stripMarkdownInline,
} from './build-search-index'

const tempDirs: string[] = []

async function makeTempDir(): Promise<string> {
  const tempDir = await mkdtemp(path.join(tmpdir(), 'picmi-search-index-'))
  tempDirs.push(tempDir)

  return tempDir
}

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })))
})

describe('markdown text normalization', () => {
  it('extracts searchable keywords from support-style questions', () => {
    const keywords = extractSearchKeywords("What to do with 'The foreignkey_id is not found' error?")

    expect(normalizeSearchKeywordText("What\u2019s the difference?")).toBe('whats the difference')
    expect(keywords.split(' ')).toEqual([
      'foreignkey_id',
      'foreignkey',
      'id',
      'not',
      'found',
      'error',
    ])
  })

  it.each([
    [
      'absolute URL',
      'See [PICMI](https://jobs.picmi.io).',
      'See [PICMI](https://jobs.picmi.io).',
    ],
    [
      'relative URL with title',
      'See [local docs](../guide/upcoming-season.md "Title").',
      'See [local docs](../guide/upcoming-season.md "Title").',
    ],
    [
      'autolink URL',
      'Go to <https://jobs.picmi.io/go>.',
      'Go to <https://jobs.picmi.io/go>.',
    ],
  ])('keeps markdown link targets in searchable content: %s', (_name, input, expected) => {
    expect(normalizeMarkdownText(input)).toBe(expected)
  })

  it.each([
    [
      'relative markdown file',
      'See [status](../about-picmi/applications.md#application-status).',
      'See [status](/business/about-picmi/applications#application-status).',
    ],
    [
      'hash-only target',
      'See [visibility](#visibility).',
      'See [visibility](/business/article/status-message#visibility).',
    ],
    [
      'relative markdown file with title',
      'See [guide](../guide/upcoming-season.md "Upcoming season").',
      'See [guide](/business/guide/upcoming-season "Upcoming season").',
    ],
  ])('resolves relative markdown link targets in searchable content: %s', (_name, input, expected) => {
    expect(
      normalizeMarkdownText(input, {
        currentFile: path.resolve('/repo/docs/business/article/status-message.md'),
        docsRoot: path.resolve('/repo/docs'),
        pageUrl: '/business/article/status-message',
      }),
    ).toBe(expected)
  })

  it.each([
    ['linked FAQ heading', '[FAQs](faqs)', 'FAQs'],
    ['inline link', 'See [PICMI](https://jobs.picmi.io)', 'See PICMI'],
    ['custom icon syntax', 'Select :::icon cog-outline Settings:::', 'Select cog-outline'],
    ['identifier with underscore', '`foreignkey_id`', 'foreignkey_id'],
  ])('keeps plain text for heading and title contexts: %s', (_name, input, expected) => {
    expect(stripMarkdownInline(input)).toBe(expected)
  })

  it.each([
    ['singular FAQ heading', '## FAQ', false],
    ['plural FAQ heading', '### FAQs', false],
    ['linked FAQ heading', '## [FAQs](faqs)', false],
    ['long FAQ page title', '# Frequently Asked Questions (FAQs)', true],
    ['non-FAQ heading', '## Not FAQ', true],
  ])('filters FAQ heading lines: %s', (_name, line, shouldKeep) => {
    const result = removeFaqHeadingLines(['Intro text', line, 'Outro text'].join('\n'))

    if (shouldKeep) {
      expect(result).toContain(line)
    } else {
      expect(result).not.toContain(line)
    }
  })
})

describe('FAQ extraction', () => {
  it.each([
    [
      'three-colon block',
      [
        '::: faq Can I use foreignkey_id?',
        'See [support](https://help.picmi.io) for details.',
        ':::',
      ].join('\n'),
      'Can I use foreignkey_id?',
      'can-i-use-foreignkey_id',
      '[support](https://help.picmi.io)',
    ],
    [
      'four-colon block with nested container',
      [
        ":::: faq What to do with 'The foreignkey_id is not found' error?",
        'See [support](https://help.picmi.io) for details.',
        '',
        '::: prompt',
        'Check the integration setup.',
        ':::',
        '::::',
      ].join('\n'),
      "What to do with 'The foreignkey_id is not found' error?",
      'what-to-do-with-the-foreignkey_id-is-not-found-error',
      '[support](https://help.picmi.io)',
    ],
    [
      'question with punctuation',
      '::: faq Smartly errors because of special characters in the name. What can I do?\nAnswer.\n:::',
      'Smartly errors because of special characters in the name. What can I do?',
      'smartly-errors-because-of-special-characters-in-the-name-what-can-i-do',
      'Answer.',
    ],
  ])(
    'uses the faq.vue anchor behavior and keeps answer content: %s',
    (_name, content, question, anchor, answerFragment) => {
    const [faq] = extractFaqBlocks(content)

    expect(faq).toBeDefined()
    expect(faq.question).toBe(question)
    expect(faq.anchor).toBe(anchor)
    expect(faq.anchor).toBe(faqAnchorId(faq.rawQuestion))
    expect(faq.answer).toContain(answerFragment)
    },
  )
})

describe('section extraction', () => {
  it('excludes FAQ blocks and standalone FAQ headings from section records', () => {
    const content = [
      '# Page title',
      'Intro with [link](https://example.com).',
      '',
      '## Details',
      'Details text.',
      '',
      '## FAQ',
      '::: faq Can I do this?',
      'FAQ answer.',
      ':::',
      '',
      '## Next steps',
      'Next text.',
    ].join('\n')
    const faqBlocks = extractFaqBlocks(content)
    const chunks = extractSectionChunks(content, faqBlocks)

    expect(chunks.map((chunk) => chunk.title)).toEqual([
      'Page title',
      'Details',
      'Next steps',
    ])
    expect(chunks.some((chunk) => /^FAQs?$/i.test(chunk.title))).toBe(false)
    expect(chunks.map((chunk) => chunk.content).join('\n')).not.toContain('FAQ answer')
    expect(chunks.find((chunk) => chunk.title === 'Page title')?.content).toContain(
      '[link](https://example.com)',
    )
  })
})

describe('page URL conversion', () => {
  it.each([
    ['root index', '/repo/docs/index.md', '/'],
    ['section index', '/repo/docs/business/index.md', '/business'],
    [
      'nested article',
      '/repo/docs/business/check-work-rights.md',
      '/business/check-work-rights',
    ],
  ])('converts markdown paths into VitePress URLs: %s', (_name, filePath, expected) => {
    expect(getPageUrl(path.resolve(filePath), path.resolve('/repo/docs'))).toBe(expected)
  })
})

describe('link target resolution', () => {
  it.each([
    [
      'same-directory extensionless link',
      'integrations#troubleshooting',
      '/repo/docs/business/integrations/packmanager.md',
      '/business/integrations/packmanager',
      '/business/integrations/integrations#troubleshooting',
    ],
    [
      'parent-directory markdown link',
      '../about-picmi/applications.md#application-status',
      '/repo/docs/business/article/status-message.md',
      '/business/article/status-message',
      '/business/about-picmi/applications#application-status',
    ],
    [
      'hash-only link',
      '#copy-from-all-applications',
      '/repo/docs/business/article/status-message.md',
      '/business/article/status-message',
      '/business/article/status-message#copy-from-all-applications',
    ],
    [
      'root public asset',
      '/assets/upcoming-season.pdf',
      '/repo/docs/business/guide/upcoming-season.md',
      '/business/guide/upcoming-season',
      '/assets/upcoming-season.pdf',
    ],
    [
      'external URL',
      'https://help.picmi.io/business/article/opportunity-send-invite.html',
      '/repo/docs/business/guide/upcoming-season.md',
      '/business/guide/upcoming-season',
      'https://help.picmi.io/business/article/opportunity-send-invite.html',
    ],
    [
      'relative link with title suffix',
      'guide/upcoming-season.md "Upcoming season"',
      '/repo/docs/business/index.md',
      '/business',
      '/business/guide/upcoming-season "Upcoming season"',
    ],
  ])('resolves VitePress links: %s', (_name, target, currentFile, pageUrl, expected) => {
    expect(
      resolveVitePressLinkTarget(target, {
        currentFile: path.resolve(currentFile),
        docsRoot: path.resolve('/repo/docs'),
        pageUrl,
      }),
    ).toBe(expected)
  })
})

describe('buildSearchIndex', () => {
  it('writes an Orama index and returns page, section, and FAQ records', async () => {
    const cwd = await makeTempDir()
    const docsDir = path.join(cwd, 'docs')
    await mkdir(path.join(docsDir, 'business'), { recursive: true })
    await writeFile(
      path.join(docsDir, 'index.md'),
      [
        '---',
        'title: Frontmatter title',
        '---',
        '# Home page',
        'Welcome to [PICMI](https://jobs.picmi.io).',
        'Read [check work rights](business/check-work-rights.md#details).',
        '',
        '## [FAQs](faqs)',
        '::: faq Can I use foreignkey_id?',
        'Answer with [docs](business/check-work-rights.md "Check work rights").',
        ':::',
      ].join('\n'),
    )
    await writeFile(
      path.join(docsDir, 'business', 'check-work-rights.md'),
      ['# Check work rights', 'Text content.'].join('\n'),
    )

    const result = await buildSearchIndex({
      cwd,
      docsDir: './docs',
      outputPath: './docs/public/search-index.json',
      log: false,
    })
    const output = await readFile(path.join(docsDir, 'public', 'search-index.json'), 'utf8')
    const homePage = result.records.find((record) => record.type === 'page' && record.url === '/')
    const faqRecord = result.records.find((record) => record.type === 'faq')

    expect(JSON.parse(output)).toHaveProperty('docs')
    expect(result.files).toHaveLength(2)
    expect(result.outputFile).toBe(path.join(docsDir, 'public', 'search-index.json'))
    expect(homePage?.title).toBe('Home page')
    expect(homePage?.content).toContain('[PICMI](https://jobs.picmi.io)')
    expect(homePage?.content).toContain('[check work rights](/business/check-work-rights#details)')
    expect(homePage?.headings).toContain('Home page')
    expect(homePage?.keywords).toContain('home')
    expect(homePage?.searchText).toContain('Welcome to [PICMI](https://jobs.picmi.io).')
    expect(faqRecord).toMatchObject({
      title: 'Can I use foreignkey_id?',
      url: '/#can-i-use-foreignkey_id',
      content: 'Answer with [docs](/business/check-work-rights "Check work rights").',
      type: 'faq',
      headings: 'Home page > FAQ',
    })
    expect(faqRecord?.keywords).toContain('foreignkey_id')
    expect(faqRecord?.searchText).toContain('Can I use foreignkey_id?')
    expect(result.records.some((record) => /^FAQs?$/i.test(record.title))).toBe(false)
    expect(result.records.some((record) => record.url === '/business/check-work-rights')).toBe(
      true,
    )
  })
})
