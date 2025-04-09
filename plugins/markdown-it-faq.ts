import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

export function markdownItFaq(md: MarkdownIt): void {
    md.use(container, 'faq', {
        validate(params: string) {
            return params.trim().match(/^faq\s+(.*)$/)
        },
        render(tokens, idx) {
            const m = tokens[idx].info.trim().match(/^faq\s+(.*)$/)
            if (!m) {
                return `</faq>\n`;
            }

            const question = m[1];
            if (tokens[idx]?.nesting === 1) {
                return `<faq question="${question}" :expandAll="expandAll">\n`;
            } else {
                // this path is never actually used
                return `</faq>\n`;
            }
        }
    })
}
