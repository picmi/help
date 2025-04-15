import { PluginWithOptions } from 'markdown-it';

export const icon: PluginWithOptions<never> = (md) => {
    function iconInline(state, silent: boolean): boolean {
        const start = state.pos;
        const src = state.src.slice(start);

        if (!src.startsWith(':::')) return false;

        // Match:
        // ::: icon ICON_NAME Optional text here :::
        const match = src.match(/^:::\s*icon\s+([a-zA-Z0-9_-]+)(?:\s+(.*?))?\s*:::/);
        if (!match) return false;

        const iconName = match[1];
        const labelText = match[2] || '';
        const fullMatchLen = match[0].length;

        if (!silent) {
            const token = state.push('icon_inline', 'span', 0);
            token.attrs = [['class', `mdi mdi-${iconName}`]];
            token.content = labelText;
        }

        state.pos += fullMatchLen;
        return true;
    }

    md.inline.ruler.before('emphasis', 'icon_inline', iconInline);

    md.renderer.rules.icon_inline = (tokens, idx) => {
        const token = tokens[idx];
        const cls = token.attrs?.find(([name]) => name === 'class')?.[1] || '';
        const content = token.content || '';
        return `<span class="${cls}">${md.utils.escapeHtml(content)}</span>`;
    };
};
