/**
 * AiExplain Types
 */

export type AiExplainResponseFormat = 'markdown' | 'html';

export interface AiExplainConfig {
    /**
     * Path to the search index JSON file (relative to public directory)
     * @default '/search-index.json'
     */
    indexPath?: string;

    /**
     * API endpoint for the chat backend
     * @default '/kb/chat'
     */
    apiEndpoint?: string;

    /**
     * Placeholder text for the input
     * @default 'Ask a question...'
     */
    placeholder?: string;

    /**
     * Title shown in the chat header
     * @default 'AI Assistant'
     */
    title?: string;

    /**
     * Keyboard shortcut to open chat (uses Ctrl/Cmd)
     * @default 'i'
     */
    shortcut?: string;

    /**
     * Primary accent color (CSS color value)
     * @default '#f97316' (orange-500)
     */
    accentColor?: string;

    /**
     * Position of the floating button
     * @default 'bottom-center'
     */
    position?: 'bottom-center' | 'bottom-right' | 'bottom-left';

    /**
     * Enable/disable the chat feature
     * @default true
     */
    enabled?: boolean;

    /**
     * API Key for the backend
     */
    apiKey?: string;

    /**
     * Preferred response format from the chat backend
     * @default 'markdown'
     */
    responseFormat?: AiExplainResponseFormat;
}

export interface AiExplainMessage {
    role: 'user' | 'assistant';
    content: string;
    format?: AiExplainResponseFormat;
    prompt?: string;
    sources?: SearchResult[];
    status?: 'searching' | 'answering' | 'complete';
}

export interface SearchResult {
    title: string;
    url: string;
    content: string;
    pageTitle?: string;
    type?: string;
    section?: string;
    score?: number;
}
