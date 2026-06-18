/**
 * AiExplain Composable for Vue 3
 *
 * Provides reactive state and methods for the AI chat.
 * Uses singleton pattern to share state across components.
 */

import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import type { AiExplainConfig, AiExplainMessage, SearchResult } from '../types';

type RuntimeConfig = Required<Pick<AiExplainConfig, 'indexPath' | 'apiEndpoint' | 'shortcut' | 'apiKey'>>;

type IndexedSearchDocument = SearchResult & {
    pageTitle?: string;
    type?: string;
    section?: string;
    headings?: string;
    keywords?: string;
    searchText?: string;
};

type SearchHit = {
    id?: string;
    score: number;
    document: IndexedSearchDocument;
};

type QueryAnalysis = {
    normalized: string;
    importantTokens: string[];
    specificTokens: string[];
    variants: string[];
};

type RankedSearchHit = SearchHit & {
    rankScore: number;
    tokenCoverage: number;
    specificTokenCoverage: number;
    exactPhraseMatch: boolean;
};

const defaultConfig: RuntimeConfig = {
    indexPath: '/search-index.json',
    apiEndpoint: '/kb/chat',
    shortcut: 'i',
    apiKey: '',
};

const searchStopWords = [
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
];

const searchStopWordSet = new Set(searchStopWords);
const searchableProperties = [
    'title',
    'pageTitle',
    'section',
    'headings',
    'keywords',
    'content',
    'searchText',
];
const focusedSearchProperties = [
    'title',
    'pageTitle',
    'section',
    'headings',
    'keywords',
];
const searchFieldBoosts = {
    title: 9,
    pageTitle: 5,
    section: 4,
    headings: 4,
    keywords: 7,
    content: 1.6,
    searchText: 1,
};
const maxSearchCandidates = 36;
const maxContextCharsPerSource = 1800;

export const aiExplainFocusInputEvent = 'aiexplain:focus-input';
export const aiExplainOpenChatEvent = 'aiexplain:open-chat';

// Singleton state - shared across all component instances
const isOpen = ref(false);
const isFocused = ref(false);
const input = ref('');
const messages = ref<AiExplainMessage[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

// Orama database instance (singleton)
let oramaDB: any = null;
let indexLoaded = false;
let configuredPaths: RuntimeConfig = { ...defaultConfig };
let keydownHandlerAdded = false;

function definedRuntimeConfig(config: AiExplainConfig): Partial<RuntimeConfig> {
    return Object.fromEntries(
        Object.entries({
            indexPath: config.indexPath,
            apiEndpoint: config.apiEndpoint,
            shortcut: config.shortcut,
            apiKey: config.apiKey,
        }).filter(([, value]) => value !== undefined),
    ) as Partial<RuntimeConfig>;
}

function resolveSameOriginJsonUrl(indexPath: string): string {
    if (typeof window === 'undefined') {
        return indexPath;
    }

    const url = new URL(indexPath, window.location.origin);

    if (url.origin !== window.location.origin) {
        throw new Error(`Search index must be loaded from the same origin: ${url.href}`);
    }

    if (!url.pathname.endsWith('.json')) {
        throw new Error(`Search index must be a JSON file: ${url.pathname}`);
    }

    return url.href;
}

function requestInputFocus() {
    window.dispatchEvent(new Event(aiExplainFocusInputEvent));
}

function normalizeSearchText(value: string): string {
    return value
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/&/g, ' and ')
        .replace(/[\u2019']/g, '')
        .replace(/[^a-z0-9_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function uniqueValues(values: string[]): string[] {
    return [...new Set(values.filter(Boolean))];
}

function tokenizeSearchText(value: string): string[] {
    const normalized = normalizeSearchText(value);

    return normalized ? normalized.split(' ') : [];
}

function analyzeSearchQuery(query: string): QueryAnalysis {
    const normalized = normalizeSearchText(query);
    const tokens = tokenizeSearchText(query).filter((token) => token.length >= 2 || /\d/.test(token));
    const importantTokens = uniqueValues(tokens.filter((token) => !searchStopWordSet.has(token)));
    const fallbackTokens = importantTokens.length > 0
        ? importantTokens
        : uniqueValues(tokens);
    const specificTokens = fallbackTokens.filter((token) => /[_\d]/.test(token) || token.length >= 5);
    const meaningfulQuery = fallbackTokens.join(' ');
    const specificQuery = specificTokens.join(' ');
    const variants = uniqueValues([
        query.trim(),
        meaningfulQuery,
        specificQuery,
        ...specificTokens.slice(0, 4),
    ]);

    return {
        normalized,
        importantTokens: fallbackTokens,
        specificTokens,
        variants,
    };
}

function configureSearchTokenizer(db: any) {
    const tokenizer = db?.tokenizer;

    if (!tokenizer || !Array.isArray(tokenizer.stopWords)) return;

    tokenizer.stopWords = searchStopWords;
    tokenizer.normalizationCache?.clear?.();
}

function availableSearchProperties(preferredProperties: string[]): string[] {
    const indexedProperties = oramaDB?.data?.index?.searchableProperties;

    if (!Array.isArray(indexedProperties)) return preferredProperties;

    return preferredProperties.filter((property) => indexedProperties.includes(property));
}

function availableBoosts(properties: string[]): Record<string, number> {
    return Object.fromEntries(
        Object.entries(searchFieldBoosts).filter(([property]) => properties.includes(property)),
    );
}

function documentParts(document: IndexedSearchDocument) {
    const title = [
        document.title,
        document.pageTitle,
        document.section,
        document.headings,
        document.keywords,
    ]
        .filter(Boolean)
        .join(' ');
    const body = [
        document.content,
        document.searchText,
        document.url,
    ]
        .filter(Boolean)
        .join(' ');

    return {
        title,
        body,
        combined: `${title} ${body}`,
    };
}

function tokenCoverage(tokens: string[], tokenSet: Set<string>): number {
    if (tokens.length === 0) return 0;

    return tokens.filter((token) => tokenSet.has(token)).length / tokens.length;
}

function rankSearchHit(hit: SearchHit, analysis: QueryAnalysis): RankedSearchHit {
    const parts = documentParts(hit.document);
    const titleTokens = new Set(tokenizeSearchText(parts.title));
    const bodyTokens = new Set(tokenizeSearchText(parts.body));
    const combinedTokens = new Set([...titleTokens, ...bodyTokens]);
    const normalizedTitle = normalizeSearchText(parts.title);
    const normalizedBody = normalizeSearchText(parts.body);
    const normalizedCombined = `${normalizedTitle} ${normalizedBody}`;
    const matchedTokenCoverage = tokenCoverage(analysis.importantTokens, combinedTokens);
    const titleTokenCoverage = tokenCoverage(analysis.importantTokens, titleTokens);
    const matchedSpecificCoverage = tokenCoverage(analysis.specificTokens, combinedTokens);
    const titleSpecificCoverage = tokenCoverage(analysis.specificTokens, titleTokens);
    const titlePhraseMatch = Boolean(analysis.normalized && normalizedTitle.includes(analysis.normalized));
    const bodyPhraseMatch = Boolean(analysis.normalized && normalizedBody.includes(analysis.normalized));
    let rankScore = Math.log1p(Math.max(hit.score, 0)) * 4;

    rankScore += matchedTokenCoverage * 90;
    rankScore += titleTokenCoverage * 55;
    rankScore += matchedSpecificCoverage * 45;
    rankScore += titleSpecificCoverage * 35;

    if (analysis.importantTokens.length > 0 && matchedTokenCoverage === 1) {
        rankScore += 35;
    }

    if (titlePhraseMatch) {
        rankScore += 150;
    } else if (bodyPhraseMatch || normalizedCombined.includes(analysis.normalized)) {
        rankScore += 80;
    }

    for (const token of analysis.specificTokens) {
        if (titleTokens.has(token)) {
            rankScore += 24;
        } else if (bodyTokens.has(token)) {
            rankScore += 14;
        } else {
            rankScore -= 28;
        }
    }

    if (analysis.importantTokens.length >= 3 && matchedTokenCoverage < 0.4) {
        rankScore -= 35;
    }

    if (hit.document.type === 'faq') {
        rankScore += 12;

        if (titlePhraseMatch || titleTokenCoverage >= 0.5) {
            rankScore += 30;
        }
    } else if (hit.document.type === 'page-heading') {
        rankScore += 5;
    } else if (hit.document.type === 'section') {
        rankScore += 3;
    }

    return {
        ...hit,
        rankScore,
        tokenCoverage: matchedTokenCoverage,
        specificTokenCoverage: matchedSpecificCoverage,
        exactPhraseMatch: titlePhraseMatch || bodyPhraseMatch,
    };
}

function isViableSearchHit(hit: RankedSearchHit, analysis: QueryAnalysis): boolean {
    if (hit.exactPhraseMatch) return true;
    if (analysis.importantTokens.length === 0) return hit.rankScore > 20;

    if (analysis.specificTokens.length >= 2 && hit.specificTokenCoverage < 0.5) {
        return false;
    }

    if (analysis.importantTokens.length === 1) {
        return hit.tokenCoverage === 1;
    }

    return hit.tokenCoverage >= 0.5;
}

function searchHitKey(hit: SearchHit): string {
    return hit.id ?? `${hit.document.url}::${hit.document.title}`;
}

function mergeSearchHits(searchResults: SearchHit[][]): SearchHit[] {
    const merged = new Map<string, SearchHit>();

    for (const hits of searchResults) {
        for (const hit of hits) {
            const key = searchHitKey(hit);
            const existing = merged.get(key);

            if (!existing || hit.score > existing.score) {
                merged.set(key, hit);
            } else {
                existing.score += 1;
            }
        }
    }

    return [...merged.values()];
}

function trimRankedHits(hits: RankedSearchHit[], limit: number): RankedSearchHit[] {
    const [topHit] = hits;

    if (!topHit) return [];

    const relativeFloor = topHit.rankScore * (topHit.exactPhraseMatch ? 0.55 : 0.45);

    return hits
        .filter((hit, index) => index === 0 || hit.exactPhraseMatch || hit.rankScore >= relativeFloor)
        .slice(0, limit);
}

function createSearchExcerpt(content: string, analysis: QueryAnalysis): string {
    const normalizedContent = content.replace(/\s+/g, ' ').trim();

    if (normalizedContent.length <= maxContextCharsPerSource) return normalizedContent;

    const lowerContent = normalizedContent.toLowerCase();
    const anchorToken = [...analysis.specificTokens, ...analysis.importantTokens]
        .find((token) => lowerContent.includes(token));
    const anchorIndex = anchorToken ? lowerContent.indexOf(anchorToken) : 0;
    const start = Math.max(0, anchorIndex - 350);
    const end = Math.min(normalizedContent.length, start + maxContextCharsPerSource);
    const prefix = start > 0 ? '...' : '';
    const suffix = end < normalizedContent.length ? '...' : '';

    return `${prefix}${normalizedContent.slice(start, end)}${suffix}`;
}

export function useAiExplain(config: AiExplainConfig = {}) {
    configuredPaths = {
        ...configuredPaths,
        ...definedRuntimeConfig(config),
    };

    // Load the Orama index - using dynamic import to avoid SSR issues
    async function loadIndex(): Promise<void> {
        if (!indexLoaded) {
            try {
                const response = await fetch(resolveSameOriginJsonUrl(configuredPaths.indexPath), {
                    credentials: 'same-origin',
                    headers: {
                        Accept: 'application/json',
                    },
                });

                if (!response.ok) {
                    console.warn('Search index not found. Run `npx aiexplain-build` first.');
                    return;
                }
                const data = await response.text();

                // Dynamic import to avoid CommonJS/ESM issues
                const { restore } = await import('@orama/plugin-data-persistence');
                oramaDB = await restore('json', data);
                configureSearchTokenizer(oramaDB);
                indexLoaded = true;
                console.log('Search index loaded successfully.');
            } catch (err) {
                console.error('Failed to load search index:', err);
            }
        }
    }

    let indexLoadPromise: Promise<void> | null = null;

    function ensureIndexLoaded(): Promise<void> {
        if (indexLoaded) return Promise.resolve();

        indexLoadPromise ??= loadIndex()
            .finally(() => {
                if (!indexLoaded) {
                    indexLoadPromise = null;
                }
            })
            .catch((error) => {
                indexLoadPromise = null;
                throw error;
            });

        return indexLoadPromise;
    }

    // Search the documentation
    async function searchDocs(query: string, limit = 6): Promise<SearchResult[]> {
        await ensureIndexLoaded();
        if (!oramaDB) return [];

        try {
            // Dynamic import to avoid CommonJS/ESM issues
            const { search } = await import('@orama/orama');
            const analysis = analyzeSearchQuery(query);
            const candidateLimit = Math.max(maxSearchCandidates, limit * 8);
            const allProperties = availableSearchProperties(searchableProperties);
            const focusedProperties = availableSearchProperties(focusedSearchProperties);
            const allBoosts = availableBoosts(allProperties);
            const focusedBoosts = availableBoosts(focusedProperties);
            const runSearch = async (params: Record<string, unknown>): Promise<SearchHit[]> => {
                const result = await search(oramaDB, params as any);

                return result.hits as SearchHit[];
            };
            const searches: Promise<SearchHit[]>[] = [];

            for (const term of analysis.variants.slice(0, 6)) {
                searches.push(runSearch({
                    term,
                    limit: candidateLimit,
                    properties: focusedProperties,
                    boost: focusedBoosts,
                    threshold: 0,
                }));
                searches.push(runSearch({
                    term,
                    limit: candidateLimit,
                    properties: allProperties,
                    boost: allBoosts,
                    threshold: 0,
                }));
            }

            searches.push(runSearch({
                term: analysis.importantTokens.join(' ') || query,
                limit: candidateLimit,
                properties: allProperties,
                boost: allBoosts,
                threshold: 1,
            }));
            searches.push(runSearch({
                term: analysis.importantTokens.join(' ') || query,
                limit: candidateLimit,
                properties: allProperties,
                boost: allBoosts,
                threshold: 1,
                where: {
                    type: 'faq',
                },
            }));

            const rankedHits = mergeSearchHits(await Promise.all(searches))
                .map((hit) => rankSearchHit(hit, analysis))
                .filter((hit) => isViableSearchHit(hit, analysis))
                .sort((a, b) => b.rankScore - a.rankScore);

            return trimRankedHits(rankedHits, limit).map((hit) => ({
                title: hit.document.title,
                url: hit.document.url,
                content: createSearchExcerpt(hit.document.content, analysis),
                pageTitle: hit.document.pageTitle,
                type: hit.document.type,
                section: hit.document.section,
                score: hit.rankScore,
            }));
        } catch (err) {
            console.error('Search failed:', err);
            return [];
        }
    }

    // Send a message to the AI
    async function sendMessage(messageText: string): Promise<void> {
        if (!messageText.trim() || loading.value) return;

        const userMsg: AiExplainMessage = { role: 'user', content: messageText };
        messages.value.push(userMsg);
        input.value = '';
        loading.value = true;
        error.value = null;

        try {
            // Get relevant context from docs
            const context = await searchDocs(messageText);
            const contextText = context
                .map((doc) => [
                    `Source: ${doc.title}`,
                    `URL: ${doc.url}`,
                    doc.pageTitle ? `Page: ${doc.pageTitle}` : '',
                    doc.type ? `Type: ${doc.type}` : '',
                    `Content: ${doc.content}`,
                ].filter(Boolean).join('\n'))
                .join('\n---\n');

            // Send to API
            const headers: Record<string, string> = { 'Content-Type': 'application/json' };
            if (configuredPaths.apiKey) {
                headers['Authorization'] = `Bearer ${configuredPaths.apiKey}`;
            }

            const response = await fetch(configuredPaths.apiEndpoint, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    messages: messages.value,
                    context: contextText,
                }),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            if (!response.body) {
                throw new Error('No response body');
            }

            // Handle streaming response
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            const aiMsg: AiExplainMessage = { role: 'assistant', content: '' };
            messages.value.push(aiMsg);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                aiMsg.content += chunk;

                // Update reactive state
                messages.value = [...messages.value.slice(0, -1), { ...aiMsg }];
            }
        } catch (err: any) {
            console.error('Chat error:', err);
            error.value = err.message || 'Something went wrong';
            messages.value.push({
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
            });
        } finally {
            loading.value = false;
        }
    }

    // Clear chat history
    function clearChat() {
        messages.value = [];
        error.value = null;
    }

    // Toggle chat open/closed
    function toggleChat() {
        isOpen.value = !isOpen.value;
    }

    // Open the chat
    function openChat() {
        isOpen.value = true;
    }

    // Close the chat
    function closeChat() {
        isOpen.value = false;
    }

    // Keyboard shortcut handler
    function handleKeydown(e: KeyboardEvent) {
        if (
            (e.ctrlKey || e.metaKey) &&
            e.key.toLowerCase() === configuredPaths.shortcut.toLowerCase()
        ) {
            e.preventDefault();
            openChat();
            void nextTick(requestInputFocus);
        }
        if (e.key === 'Escape' && isOpen.value) {
            closeChat();
        }
    }

    function handleOpenChatEvent() {
        openChat();
        void nextTick(requestInputFocus);
    }

    // Lifecycle hooks - only run once
    onMounted(() => {
        void ensureIndexLoaded();
        if (!keydownHandlerAdded) {
            window.addEventListener('keydown', handleKeydown);
            window.addEventListener(aiExplainOpenChatEvent, handleOpenChatEvent);
            keydownHandlerAdded = true;
        }
    });

    onUnmounted(() => {
        // Don't remove the handler - other components might still use it
    });

    return {
        // State (shared singleton refs)
        isOpen,
        isFocused,
        input,
        messages,
        loading,
        error,

        // Methods
        sendMessage,
        clearChat,
        toggleChat,
        openChat,
        closeChat,
        searchDocs,
    };
}
