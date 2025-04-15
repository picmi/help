import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

function useMarkdownIt(
    md: MarkdownIt,
    markdownTag: string,
    matcher: RegExp,
    openingTag: (content: string) => string,
    closingTag: string) {
    md.use(container, markdownTag, {
        validate(params: string) {
            return params.trim().match(matcher)
        },
        render(tokens, idx) {
            const m = tokens[idx].info.trim().match(matcher)
            if (!m) {
                return closingTag;
            }

            const question = m[1];
            if (tokens[idx]?.nesting === 1) {
                return openingTag(question);
            } else {
                // this path is never actually used
                return closingTag;
            }
        }
    })
}

export function faq(md: MarkdownIt): void {
    const markdownTag = 'faq';
    const matcher: RegExp = /^faq\s+(.*)$/;
    const openingTag = (content: string): string => `<faq question="${content}" :expandAll="expandAll">\n`;
    const closingTag = '</faq>\n';
    useMarkdownIt(md, markdownTag, matcher, openingTag, closingTag);
}

export function prompt(md: MarkdownIt): void {
    const markdownTag = 'prompt';
    const matcher: RegExp = /^prompt\s*$/;
    const openingTag = (content: string): string => `<prompt>\n\n`;
    const closingTag = '</prompt>\n';
    useMarkdownIt(md, markdownTag, matcher, openingTag, closingTag);
}

export function instructions(md: MarkdownIt): void {
    md.use(container, 'instructions');
}

export function explanation(md: MarkdownIt): void {
    md.use(container, 'explanation');
}

