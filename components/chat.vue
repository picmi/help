<script setup lang="ts">
/**
 * AiExplainChat - Main Chat Sidebar Component
 *
 * A sliding sidebar panel with the AI chat interface.
 */


import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { aiExplainFocusInputEvent, useAiExplain } from '../composables/useAiExplain';
import type { AiExplainMessage, SearchResult } from '../types';

const props = defineProps<{
  apiEndpoint?: string;
  indexPath?: string;
  title?: string;
  accentColor?: string;
}>();

const {
  isOpen,
  messages,
  input,
  loading,
  sendMessage,
  clearChat: clearAiExplainChat,
  closeChat,
} = useAiExplain({
  apiEndpoint: props.apiEndpoint,
  indexPath: props.indexPath,
});

const title = computed(() => props.title || 'AI Assistant');
const accentColor = computed(() => props.accentColor || 'var(--vp-c-brand-1)');
const hasPendingAssistantMessage = computed(() =>
  loading.value && messages.value.some((msg) => msg.role === 'assistant' && msg.status !== 'complete')
);

type SourceGroupKey = 'faq' | 'section' | 'page';
type SourceGroup = {
  key: SourceGroupKey;
  label: string;
  sources: SearchResult[];
};
type SourcePanelMode = 'hidden' | 'expanded' | 'compact';

const widthStorageKey = 'picmi-help:aiexplain-chat-width';
const defaultSidebarWidth = 440;
const minSidebarWidth = 360;
const sidebarWidth = ref(defaultSidebarWidth);
const isResizing = ref(false);
const openCompletedSourceGroups = ref<Record<number, Partial<Record<SourceGroupKey, boolean>>>>({});
const openCompletedSourceItems = ref<Record<number, Record<string, boolean>>>({});
const sourcePanelModes = ref<Record<number, SourcePanelMode>>({});
const scrollContainer = ref<HTMLElement | null>(null);
const sidebarRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLTextAreaElement | null>(null);
const sourcePanelTimers = new Map<string, ReturnType<typeof setTimeout>>();
const assistantMessageSeenAt = new Map<number, number>();
const sourceRevealDelayMs = 1000;
const sourceContractDelayMs = 1000;
let previousBodyCursor = '';
let previousBodyUserSelect = '';

const sidebarStyle = computed(() => ({
  '--aiexplain-sidebar-width': `${sidebarWidth.value}px`,
  '--aiexplain-accent-color': accentColor.value,
}));

function maxSidebarWidth() {
  if (typeof window === 'undefined') {
    return defaultSidebarWidth;
  }

  return Math.max(minSidebarWidth, window.innerWidth - 48);
}

function clampSidebarWidth(width: number) {
  return Math.min(Math.max(Math.round(width), minSidebarWidth), maxSidebarWidth());
}

function saveSidebarWidth(width: number) {
  window.localStorage.setItem(widthStorageKey, String(width));
}

function setSidebarWidth(width: number, persist = false) {
  sidebarWidth.value = clampSidebarWidth(width);

  if (persist && typeof window !== 'undefined') {
    saveSidebarWidth(sidebarWidth.value);
  }
}

function loadSidebarWidth() {
  const savedWidth = Number(window.localStorage.getItem(widthStorageKey));

  if (Number.isFinite(savedWidth) && savedWidth > 0) {
    setSidebarWidth(savedWidth);
  }
}

function focusInput() {
  void nextTick(() => inputRef.value?.focus());
}

// Auto-scroll to bottom when messages change
watch(messages, async () => {
  syncSourcePanelStates();
  await nextTick();
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
  }
}, { deep: true });

watch(sourcePanelModes, async () => {
  await nextTick();
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
  }
}, { deep: true });

// Focus input when sidebar opens
watch(isOpen, (open) => {
  if (open) {
    focusInput();
  }
});

function handleFocusInputEvent() {
  focusInput();
}

function handleWindowResize() {
  setSidebarWidth(sidebarWidth.value);
}

function handleResizeMove(e: PointerEvent) {
  if (!isResizing.value) return;

  const sidebarRight = sidebarRef.value?.getBoundingClientRect().right ?? window.innerWidth - 24;
  setSidebarWidth(sidebarRight - e.clientX);
}

function stopResize() {
  if (!isResizing.value) return;

  isResizing.value = false;
  document.body.style.cursor = previousBodyCursor;
  document.body.style.userSelect = previousBodyUserSelect;
  window.removeEventListener('pointermove', handleResizeMove);
  window.removeEventListener('pointerup', stopResize);
  window.removeEventListener('pointercancel', stopResize);
  saveSidebarWidth(sidebarWidth.value);
}

function startResize(e: PointerEvent) {
  if (e.button !== 0 || window.innerWidth <= 640) return;

  e.preventDefault();
  isResizing.value = true;
  previousBodyCursor = document.body.style.cursor;
  previousBodyUserSelect = document.body.style.userSelect;
  document.body.style.cursor = 'ew-resize';
  document.body.style.userSelect = 'none';
  window.addEventListener('pointermove', handleResizeMove);
  window.addEventListener('pointerup', stopResize);
  window.addEventListener('pointercancel', stopResize);
  handleResizeMove(e);
}

function handleResizeKeydown(e: KeyboardEvent) {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

  e.preventDefault();
  setSidebarWidth(sidebarWidth.value + (e.key === 'ArrowLeft' ? 24 : -24), true);
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage(input.value);
  }
}

function adjustTextareaHeight(e: Event) {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = 'auto';
  target.style.height = Math.min(target.scrollHeight, 200) + 'px';
}

function clearChat() {
  openCompletedSourceGroups.value = {};
  openCompletedSourceItems.value = {};
  clearSourcePanelTimers();
  assistantMessageSeenAt.clear();
  sourcePanelModes.value = {};
  clearAiExplainChat();
}

function hasSources(msg: AiExplainMessage) {
  return Boolean(msg.sources?.length);
}

function isProcessingMessage(msg: AiExplainMessage, index: number) {
  return loading.value
      && index === messages.value.length - 1
      && msg.role === 'assistant'
      && msg.status !== 'complete';
}

function sourcePanelMode(messageIndex: number, msg: AiExplainMessage): SourcePanelMode {
  if (!hasSources(msg)) {
    return 'hidden';
  }

  return sourcePanelModes.value[messageIndex] ?? 'hidden';
}

function hasVisibleSourcePanel(messageIndex: number, msg: AiExplainMessage) {
  return sourcePanelMode(messageIndex, msg) !== 'hidden';
}

function isExpandedSourcePanel(messageIndex: number, msg: AiExplainMessage) {
  return sourcePanelMode(messageIndex, msg) === 'expanded';
}

function updateSourcePanelMode(messageIndex: number, mode: SourcePanelMode) {
  if (sourcePanelModes.value[messageIndex] === mode) return;

  sourcePanelModes.value = {
    ...sourcePanelModes.value,
    [messageIndex]: mode,
  };
}

function sourcePanelTimerKey(messageIndex: number, timerName: 'reveal' | 'contract') {
  return `${messageIndex}:${timerName}`;
}

function clearSourcePanelTimer(messageIndex: number, timerName: 'reveal' | 'contract') {
  const key = sourcePanelTimerKey(messageIndex, timerName);
  const timer = sourcePanelTimers.get(key);

  if (!timer) return;

  clearTimeout(timer);
  sourcePanelTimers.delete(key);
}

function clearSourcePanelTimers() {
  sourcePanelTimers.forEach((timer) => clearTimeout(timer));
  sourcePanelTimers.clear();
}

function scheduleSourcePanelTimer(
    messageIndex: number,
    timerName: 'reveal' | 'contract',
    delay: number,
    callback: () => void,
) {
  if (typeof window === 'undefined') return;

  const key = sourcePanelTimerKey(messageIndex, timerName);

  if (sourcePanelTimers.has(key)) return;

  const timer = window.setTimeout(() => {
    sourcePanelTimers.delete(key);
    callback();
  }, delay);

  sourcePanelTimers.set(key, timer);
}

function scheduleSourcePanelContract(messageIndex: number) {
  scheduleSourcePanelTimer(messageIndex, 'contract', sourceContractDelayMs, () => {
    const msg = messages.value[messageIndex];

    if (!msg || msg.role !== 'assistant' || !hasSources(msg)) return;

    updateSourcePanelMode(messageIndex, 'compact');
  });
}

function scheduleSourcePanelReveal(messageIndex: number) {
  const seenAt = assistantMessageSeenAt.get(messageIndex) ?? Date.now();
  const delay = Math.max(0, sourceRevealDelayMs - (Date.now() - seenAt));

  scheduleSourcePanelTimer(messageIndex, 'reveal', delay, () => {
    const msg = messages.value[messageIndex];

    if (!msg || msg.role !== 'assistant' || !hasSources(msg)) return;

    updateSourcePanelMode(messageIndex, 'expanded');

    if (msg.content || msg.status === 'complete') {
      scheduleSourcePanelContract(messageIndex);
    }
  });
}

function syncSourcePanelStates() {
  if (typeof window === 'undefined') return;

  messages.value.forEach((msg, messageIndex) => {
    if (msg.role !== 'assistant') return;

    if (!assistantMessageSeenAt.has(messageIndex)) {
      assistantMessageSeenAt.set(messageIndex, Date.now());
    }

    if (!hasSources(msg)) return;

    const mode = sourcePanelMode(messageIndex, msg);

    if (mode === 'hidden') {
      scheduleSourcePanelReveal(messageIndex);
      return;
    }

    if (mode === 'expanded' && (msg.content || msg.status === 'complete')) {
      scheduleSourcePanelContract(messageIndex);
    }
  });

  for (const key of sourcePanelTimers.keys()) {
    const [messageIndexValue] = key.split(':');
    const messageIndex = Number(messageIndexValue);

    if (!messages.value[messageIndex]) {
      const timer = sourcePanelTimers.get(key);

      if (timer) {
        clearTimeout(timer);
      }

      sourcePanelTimers.delete(key);
    }
  }

  for (const messageIndex of assistantMessageSeenAt.keys()) {
    if (!messages.value[messageIndex]) {
      assistantMessageSeenAt.delete(messageIndex);
    }
  }
}

function sourceKey(source: SearchResult, index: number) {
  return `${source.url}:${source.title}:${index}`;
}

function sourceCountLabel(count = 0) {
  return `${count} ${count === 1 ? 'source' : 'sources'}`;
}

function sourceTypeLabel(type?: string) {
  switch (type) {
    case 'faq':
      return 'FAQ';
    case 'section':
      return 'Section';
    case 'page':
    case 'page-heading':
      return 'Page';
    case 'text':
      return 'Passage';
    default:
      return 'Source';
  }
}

function sourceLocation(source: SearchResult) {
  if (source.pageTitle && source.pageTitle !== source.title) {
    return source.pageTitle;
  }

  if (source.section && source.section !== source.title) {
    return source.section;
  }

  return '';
}

function sourceContent(source: SearchResult) {
  return source.content.replace(/\s+/g, ' ').trim();
}

function escapeHtml(value: string) {
  return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
}

function sourceLinkHref(target: string) {
  const [rawHref = ''] = target.trim().replace(/^<|>$/g, '').split(/\s+/);
  const href = rawHref.trim();

  if (/^(?:\/|#|https?:\/\/|mailto:)/i.test(href)) {
    return href;
  }

  return '';
}

function renderEscapedSourceFormatting(value: string) {
  return escapeHtml(value)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/__([^_]+)__/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/_([^_\s][^_]*?)_/g, '<em>$1</em>');
}

function renderSourceInlineMarkdown(value: string) {
  let html = '';
  let lastIndex = 0;
  const linkPattern = /\[([^\]]+)]\(([^)]+)\)/g;

  for (const match of value.matchAll(linkPattern)) {
    const index = match.index ?? 0;
    const [fullMatch, label, target] = match;
    const href = sourceLinkHref(target);

    html += renderEscapedSourceFormatting(value.slice(lastIndex, index));
    html += href
        ? `<a href="${escapeHtml(href)}">${renderEscapedSourceFormatting(label)}</a>`
        : renderEscapedSourceFormatting(label);
    lastIndex = index + fullMatch.length;
  }

  html += renderEscapedSourceFormatting(value.slice(lastIndex));

  return html;
}

function sourceContentHtml(source: SearchResult) {
  const content = sourceContent(source);

  if (!content) {
    return '';
  }

  return `<p>${renderSourceInlineMarkdown(content)}</p>`;
}

function sourceGroupKey(source: SearchResult): SourceGroupKey {
  if (source.type === 'faq') {
    return 'faq';
  }

  if (source.type === 'section') {
    return 'section';
  }

  return 'page';
}

function sourceGroups(sources: SearchResult[] = []): SourceGroup[] {
  const groups: Record<SourceGroupKey, SourceGroup> = {
    faq: { key: 'faq', label: 'FAQs', sources: [] },
    section: { key: 'section', label: 'Sections', sources: [] },
    page: { key: 'page', label: 'Pages', sources: [] },
  };

  for (const source of sources) {
    groups[sourceGroupKey(source)].sources.push(source);
  }

  return Object.values(groups).filter((group) => group.sources.length > 0);
}

function isCompletedSourceGroupOpen(messageIndex: number, groupKey: SourceGroupKey) {
  return Boolean(openCompletedSourceGroups.value[messageIndex]?.[groupKey]);
}

function toggleCompletedSourceGroup(messageIndex: number, groupKey: SourceGroupKey, groupSources: SearchResult[]) {
  const currentGroups = openCompletedSourceGroups.value[messageIndex] ?? {};
  const nextIsOpen = !currentGroups[groupKey];

  openCompletedSourceGroups.value = {
    ...openCompletedSourceGroups.value,
    [messageIndex]: {
      ...currentGroups,
      [groupKey]: nextIsOpen,
    },
  };

  if (nextIsOpen) {
    openCompletedSourceItems.value = {
      ...openCompletedSourceItems.value,
      [messageIndex]: {
        ...(openCompletedSourceItems.value[messageIndex] ?? {}),
        ...Object.fromEntries(groupSources.map((source) => [completedSourceItemKey(source), false])),
      },
    };
  }
}

function completedSourceGroupSources(messageIndex: number, sources: SearchResult[] = []) {
  const openGroups = openCompletedSourceGroups.value[messageIndex] ?? {};

  return sourceGroups(sources)
      .filter((group) => openGroups[group.key])
      .flatMap((group) => group.sources);
}

function completedSourceItemKey(source: SearchResult) {
  return `${source.url}:${source.title}`;
}

function isCompletedSourceItemOpen(messageIndex: number, source: SearchResult, index: number) {
  return Boolean(openCompletedSourceItems.value[messageIndex]?.[completedSourceItemKey(source)]);
}

function setCompletedSourceItemOpen(
    messageIndex: number,
    source: SearchResult,
    index: number,
    isOpen: boolean,
) {
  openCompletedSourceItems.value = {
    ...openCompletedSourceItems.value,
    [messageIndex]: {
      ...(openCompletedSourceItems.value[messageIndex] ?? {}),
      [completedSourceItemKey(source)]: isOpen,
    },
  };
}

function areCompletedSourceItemsOpen(messageIndex: number, sources: SearchResult[] = []) {
  const visibleSources = completedSourceGroupSources(messageIndex, sources);

  return visibleSources.length > 0
      && visibleSources.every((source, index) => isCompletedSourceItemOpen(messageIndex, source, index));
}

function completedSourceExpandLabel(messageIndex: number, sources: SearchResult[] = []) {
  return areCompletedSourceItemsOpen(messageIndex, sources) ? 'Collapse' : 'Expand';
}

function toggleCompletedSourceItems(messageIndex: number, sources: SearchResult[] = []) {
  const visibleSources = completedSourceGroupSources(messageIndex, sources);
  const shouldOpen = !areCompletedSourceItemsOpen(messageIndex, sources);
  const nextItems = {
    ...(openCompletedSourceItems.value[messageIndex] ?? {}),
  };

  visibleSources.forEach((source) => {
    nextItems[completedSourceItemKey(source)] = shouldOpen;
  });

  openCompletedSourceItems.value = {
    ...openCompletedSourceItems.value,
    [messageIndex]: nextItems,
  };
}

function handleCompletedSourceItemToggle(
    messageIndex: number,
    source: SearchResult,
    index: number,
    event: Event,
) {
  setCompletedSourceItemOpen(messageIndex, source, index, (event.target as HTMLDetailsElement).open);
}

function sourcePath(source: SearchResult) {
  if (typeof window === 'undefined') {
    return source.url;
  }

  try {
    const url = new URL(source.url, window.location.origin);

    return `${url.pathname}${url.hash}`;
  } catch {
    return source.url;
  }
}

onMounted(() => {
  loadSidebarWidth();
  syncSourcePanelStates();
  window.addEventListener(aiExplainFocusInputEvent, handleFocusInputEvent);
  window.addEventListener('resize', handleWindowResize);
});

onBeforeUnmount(() => {
  stopResize();
  clearSourcePanelTimers();
  assistantMessageSeenAt.clear();
  window.removeEventListener(aiExplainFocusInputEvent, handleFocusInputEvent);
  window.removeEventListener('resize', handleWindowResize);
});
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="fade">
      <div
          v-if="isOpen"
          class="aiexplain-backdrop"
          @click="closeChat"
      />
    </Transition>

    <!-- Sidebar -->
    <Transition name="slide">
      <div
          v-if="isOpen"
          ref="sidebarRef"
          :class="['aiexplain-sidebar', { resizing: isResizing }]"
          :style="sidebarStyle"
      >
        <div
            aria-label="Resize chat panel"
            aria-orientation="vertical"
            class="aiexplain-resize-handle"
            role="separator"
            tabindex="0"
            @keydown="handleResizeKeydown"
            @pointerdown="startResize"
        />

        <!-- Header -->
        <div class="aiexplain-header">
          <div class="aiexplain-header-title">
            <svg class="aiexplain-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3l1.45 2.9L16.5 7l-2.05 2.1.5 3.4L12 11l-2.95 1.5.5-3.4L7.5 7l3.05-1.1L12 3z"/>
            </svg>
            <span>{{ title }}</span>
          </div>
          <div class="aiexplain-header-actions">
            <button @click="clearChat" class="aiexplain-btn-icon" title="Clear chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/>
              </svg>
            </button>
            <button @click="closeChat" class="aiexplain-btn-icon" title="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Messages -->
        <div ref="scrollContainer" class="aiexplain-messages">
          <!-- Empty state -->
          <div v-if="messages.length === 0" class="aiexplain-empty">
            <h4>How can I help?</h4>
            <p>Ask me about the documentation.</p>
          </div>

          <!-- Message list -->
          <div
              v-for="(msg, i) in messages"
              :key="i"
              :class="['aiexplain-message', msg.role]"
          >
            <div v-if="msg.role === 'assistant'" class="aiexplain-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3l1.45 2.9L16.5 7l-2.05 2.1.5 3.4L12 11l-2.95 1.5.5-3.4L7.5 7l3.05-1.1L12 3z"/>
              </svg>
            </div>
            <div v-if="msg.role === 'assistant'" class="aiexplain-assistant-stack">
<!--
              <div v-if="msg.prompt" class="aiexplain-response-prompt">
                <span>Replying to</span>
                <strong>{{ msg.prompt }}</strong>
              </div>
-->

              <Transition name="aiexplain-response-swap" mode="out-in">
                <div
                    v-if="msg.content"
                    key="answer"
                    class="aiexplain-message-content aiexplain-assistant-content"
                    v-html="msg.content"
                />
                <div
                    v-else-if="isProcessingMessage(msg, i)"
                    key="writing"
                    class="aiexplain-message-content aiexplain-assistant-content aiexplain-writing-content"
                >
                  <span class="aiexplain-inline-loading">Writing...</span>
                </div>
              </Transition>

              <Transition name="aiexplain-sources-flow">
                <section
                    v-if="hasVisibleSourcePanel(i, msg)"
                    class="aiexplain-sources"
                    aria-label="Found help centre sources"
                >
                  <div :class="['aiexplain-sources-header', { completed: !isExpandedSourcePanel(i, msg) }]">
                    <span>Found in help centre</span>
                    <span class="aiexplain-source-count">{{ sourceCountLabel(msg.sources?.length) }}</span>

                    <div v-if="!isExpandedSourcePanel(i, msg)" class="aiexplain-source-chip-list">
                      <button
                          v-for="group in sourceGroups(msg.sources)"
                          :key="group.key"
                          :aria-pressed="isCompletedSourceGroupOpen(i, group.key)"
                          :class="['aiexplain-source-chip', { active: isCompletedSourceGroupOpen(i, group.key) }]"
                          type="button"
                          @click="toggleCompletedSourceGroup(i, group.key, group.sources)"
                      >
                        <span>{{ group.label }}</span>
                        <span v-if="group.sources.length > 1" class="aiexplain-source-chip-badge">
                          {{ group.sources.length }}
                        </span>
                      </button>
                      <button
                          v-if="completedSourceGroupSources(i, msg.sources).length > 0"
                          :class="[
                            'aiexplain-source-chip',
                            'action',
                            { expanded: areCompletedSourceItemsOpen(i, msg.sources) },
                          ]"
                          type="button"
                          @click="toggleCompletedSourceItems(i, msg.sources)"
                      >
                        <span>{{ completedSourceExpandLabel(i, msg.sources) }}</span>
                        <svg
                            aria-hidden="true"
                            class="aiexplain-source-chip-chevron"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <Transition name="aiexplain-source-list-flow">
                    <div
                        v-if="isExpandedSourcePanel(i, msg)"
                        class="aiexplain-source-list compact"
                    >
                      <details
                          v-for="(source, sourceIndex) in msg.sources"
                          :key="sourceKey(source, sourceIndex)"
                          class="aiexplain-source-detail"
                      >
                        <summary class="aiexplain-source-summary">
                          <span class="aiexplain-source-one-line">
                            <a :href="source.url" class="aiexplain-source-summary-link" @click.stop>
                              {{ source.title }}
                            </a>
                          </span>
                          <span class="aiexplain-source-type-badge">{{ sourceTypeLabel(source.type) }}</span>
                        </summary>

                        <div class="aiexplain-source-detail-content">
                          <div v-if="sourceLocation(source)" class="aiexplain-source-location">
                            {{ sourceLocation(source) }}
                          </div>
                          <div class="aiexplain-source-url">{{ sourcePath(source) }}</div>
                          <div
                              v-if="sourceContent(source)"
                              class="aiexplain-source-expanded-content"
                              v-html="sourceContentHtml(source)"
                          />
                        </div>
                      </details>
                    </div>
                  </Transition>

                  <div
                      v-if="!isExpandedSourcePanel(i, msg) && completedSourceGroupSources(i, msg.sources).length > 0"
                      class="aiexplain-source-list expanded-type"
                  >
                    <details
                        v-for="(source, sourceIndex) in completedSourceGroupSources(i, msg.sources)"
                        :key="sourceKey(source, sourceIndex)"
                        class="aiexplain-source-detail"
                        :open="isCompletedSourceItemOpen(i, source, sourceIndex)"
                        @toggle="handleCompletedSourceItemToggle(i, source, sourceIndex, $event)"
                    >
                      <summary class="aiexplain-source-summary">
                        <span class="aiexplain-source-one-line">
                          <a :href="source.url" class="aiexplain-source-summary-link" @click.stop>
                            {{ source.title }}
                          </a>
                        </span>
                        <span class="aiexplain-source-type-badge">{{ sourceTypeLabel(source.type) }}</span>
                      </summary>

                      <div class="aiexplain-source-detail-content">
                        <div v-if="sourceLocation(source)" class="aiexplain-source-location">
                          {{ sourceLocation(source) }}
                        </div>
                        <div class="aiexplain-source-url">{{ sourcePath(source) }}</div>
                        <div
                            v-if="sourceContent(source)"
                            class="aiexplain-source-expanded-content"
                            v-html="sourceContentHtml(source)"
                        />
                      </div>
                    </details>
                  </div>
                </section>
              </Transition>

            </div>
            <div v-else class="aiexplain-message-content aiexplain-user-content" v-html="msg.content" />
          </div>

          <!-- Loading indicator -->
          <div v-if="loading && !hasPendingAssistantMessage" class="aiexplain-loading">Searching docs...</div>
        </div>

        <!-- Input -->
        <div class="aiexplain-input-container">
          <div class="aiexplain-input-wrapper">
            <textarea
                ref="inputRef"
                v-model="input"
                @keydown="handleKeydown"
                @input="adjustTextareaHeight"
                placeholder="Ask a question..."
                rows="1"
                class="aiexplain-input"
            />
            <button
                @click="sendMessage(input)"
                :disabled="loading || !input.trim()"
                class="aiexplain-send-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.aiexplain-backdrop {
  position: fixed;
  inset: 0;
  background: color-mix(in srgb, var(--vp-c-bg) 62%, transparent);
  backdrop-filter: blur(2px);
  z-index: 999;
}

.aiexplain-sidebar {
  position: fixed;
  top: 24px;
  right: 24px;
  bottom: 24px;
  width: min(var(--aiexplain-sidebar-width, 440px), calc(100vw - 48px));
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--vp-shadow-4, 0 24px 80px rgba(0, 0, 0, 0.18));
  transition: width 0.15s ease;
}

.aiexplain-sidebar.resizing {
  transition: none;
}

.aiexplain-resize-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 10px;
  cursor: ew-resize;
  touch-action: none;
}

.aiexplain-resize-handle::before {
  position: absolute;
  top: 12px;
  bottom: 12px;
  left: 0;
  width: 2px;
  content: '';
  background: transparent;
  transition: background-color 0.2s;
}

.aiexplain-resize-handle:hover::before,
.aiexplain-resize-handle:focus-visible::before,
.aiexplain-sidebar.resizing .aiexplain-resize-handle::before {
  background: var(--vp-c-brand-1);
}

.aiexplain-resize-handle:focus-visible {
  outline: none;
}

.aiexplain-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.aiexplain-header-title {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  color: var(--vp-c-text-1);
  font-size: 16px;
  font-weight: 700;
}

.aiexplain-header-actions {
  display: flex;
  gap: 6px;
}

.aiexplain-icon {
  width: 18px;
  height: 18px;
  color: var(--aiexplain-accent-color, var(--vp-c-brand-1));
}

.aiexplain-btn-icon {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: background-color 0.2s, color 0.2s;
}

.aiexplain-btn-icon:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.aiexplain-btn-icon:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.aiexplain-btn-icon svg {
  width: 16px;
  height: 16px;
}

.aiexplain-messages {
  flex: 1;
  overflow-y: auto;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--vp-c-bg);
}

.aiexplain-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--vp-c-text-2);
}

.aiexplain-empty h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
}

.aiexplain-empty p {
  font-size: 14px;
  margin: 0;
}

.aiexplain-message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.aiexplain-message.user {
  justify-content: flex-end;
}

.aiexplain-message.assistant {
  width: 100%;
}

.aiexplain-user-content {
  max-width: min(82%, 320px);
  color: var(--vp-c-text-1);
  background: var(--aiexplain-accent-color, var(--vp-c-brand-1));
  background: color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 10%, var(--vp-c-bg));
  border: 1px solid color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 64%, var(--vp-c-divider));
  border-radius: 12px 12px 4px 12px;
}

.aiexplain-assistant-stack {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 auto;
  gap: 8px;
  max-width: none;
  min-width: 0;
}

.aiexplain-assistant-content {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px 12px 12px 4px;
}

.aiexplain-writing-content {
  display: flex;
  align-items: center;
  min-height: 42px;
}

.aiexplain-response-swap-enter-active,
.aiexplain-response-swap-leave-active {
  transition:
      opacity 220ms ease,
      transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.aiexplain-response-swap-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.aiexplain-response-swap-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.aiexplain-avatar {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 14%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.aiexplain-avatar svg {
  width: 14px;
  height: 14px;
  color: var(--aiexplain-accent-color, var(--vp-c-brand-1));
}

.aiexplain-message-content {
  padding: 10px 13px;
  color: var(--vp-c-text-1);
  font-size: 14px;
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.aiexplain-response-prompt {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
  color: var(--vp-c-text-3);
  font-size: 12px;
  line-height: 1.35;
}

.aiexplain-response-prompt strong {
  min-width: 0;
  overflow: hidden;
  color: var(--vp-c-text-2);
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.aiexplain-message-content :deep(p),
.aiexplain-message-content :deep(ul),
.aiexplain-message-content :deep(ol) {
  margin-top: 0;
}

.aiexplain-message-content :deep(p) {
  margin-bottom: 10px;
}

.aiexplain-message-content :deep(p:last-child),
.aiexplain-message-content :deep(ul:last-child),
.aiexplain-message-content :deep(ol:last-child) {
  margin-bottom: 0;
}

.aiexplain-message-content :deep(ul),
.aiexplain-message-content :deep(ol) {
  margin-bottom: 12px;
  padding-left: 1.35rem;
}

.aiexplain-message-content :deep(ul) {
  list-style: disc outside;
}

.aiexplain-message-content :deep(ol) {
  list-style: decimal outside;
}

.aiexplain-message-content :deep(li) {
  display: list-item;
  margin: 4px 0;
  padding-left: 2px;
}

.aiexplain-message-content :deep(strong) {
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.aiexplain-message.user .aiexplain-message-content :deep(strong) {
  color: var(--vp-c-text-1);
}

.aiexplain-message-content :deep(code) {
  padding: 1px 5px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
  border-radius: 4px;
  font-size: 0.92em;
}

.aiexplain-message-content :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.aiexplain-message.user .aiexplain-message-content :deep(a),
.aiexplain-message.user .aiexplain-message-content :deep(code) {
  color: var(--vp-c-text-1);
}

.aiexplain-sources {
  align-self: flex-start;
  box-sizing: border-box;
  width: fit-content;
  max-width: 100%;
  padding: 0;
  color: var(--vp-c-text-1);
  background: transparent;
  border: 0;
  border-radius: 0;
}

.aiexplain-sources-flow-enter-active,
.aiexplain-sources-flow-leave-active {
  overflow: hidden;
  transform-origin: top;
  transition:
      opacity 500ms ease,
      transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
      max-height 500ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform, max-height;
}

.aiexplain-sources-flow-enter-from,
.aiexplain-sources-flow-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.aiexplain-sources-flow-enter-to,
.aiexplain-sources-flow-leave-from {
  max-height: 720px;
  opacity: 1;
  transform: translateY(0);
}

.aiexplain-source-list-flow-enter-active,
.aiexplain-source-list-flow-leave-active {
  overflow: hidden;
  transform-origin: top;
  transition:
      opacity 500ms ease,
      transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
      max-height 500ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform, max-height;
}

.aiexplain-source-list-flow-enter-from,
.aiexplain-source-list-flow-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-8px);
}

.aiexplain-source-list-flow-enter-to,
.aiexplain-source-list-flow-leave-from {
  max-height: 640px;
  opacity: 1;
  transform: translateY(0);
}

.aiexplain-sources-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 700;
}

.aiexplain-sources-header:not(.completed) {
  justify-content: space-between;
}

.aiexplain-sources-header.completed {
  justify-content: flex-start;
}

.aiexplain-source-count {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 600;
}

.aiexplain-source-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.aiexplain-source-detail {
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.aiexplain-source-detail[open] {
  border-color: color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 45%, var(--vp-c-divider));
}

.aiexplain-source-summary {
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
  padding: 8px 10px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  list-style: none;
}

.aiexplain-source-summary::-webkit-details-marker {
  display: none;
}

.aiexplain-source-summary::after {
  flex: 0 0 auto;
  color: var(--vp-c-text-3);
  content: '›';
  font-size: 15px;
  line-height: 1;
  transition: transform 0.15s ease;
}

.aiexplain-source-detail[open] > .aiexplain-source-summary::after {
  transform: rotate(90deg);
}

.aiexplain-source-chip-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
}

.aiexplain-source-list.expanded-type {
  margin-top: 8px;
}

.aiexplain-source-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  padding: 4px 8px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.aiexplain-source-chip:hover,
.aiexplain-source-chip.active {
  color: var(--vp-c-text-1);
  background: color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 11%, var(--vp-c-bg-soft));
  border-color: color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 50%, var(--vp-c-divider));
}

.aiexplain-source-chip:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.aiexplain-source-chip.action {
  color: var(--aiexplain-accent-color, var(--vp-c-brand-1));
  border-color: color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 42%, var(--vp-c-divider));
  font-size: 11px;
  text-transform: uppercase;
}

.aiexplain-source-chip-chevron {
  width: 13px;
  height: 13px;
  flex: 0 0 auto;
  transition: transform 0.18s ease;
}

.aiexplain-source-chip.action.expanded .aiexplain-source-chip-chevron {
  transform: rotate(180deg);
}

.aiexplain-source-chip-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
}

.aiexplain-source-one-line {
  display: flex;
  align-items: baseline;
  flex: 1 1 auto;
  gap: 4px;
  min-width: 0;
}

.aiexplain-source-type-badge {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  min-height: 18px;
  padding: 1px 6px;
  color: var(--aiexplain-accent-color, var(--vp-c-brand-1));
  background: color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--aiexplain-accent-color, var(--vp-c-brand-1)) 24%, transparent);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  line-height: 1.3;
  text-transform: uppercase;
}

.aiexplain-source-summary-link {
  min-width: 0;
  overflow: hidden;
  color: var(--vp-c-text-1);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.35;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.aiexplain-source-summary-link:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.aiexplain-source-summary-link:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.aiexplain-source-detail-content {
  padding: 0 10px 10px 30px;
}

.aiexplain-source-location {
  color: var(--vp-c-text-3);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.3;
}

.aiexplain-source-url {
  margin-top: 4px;
  color: var(--vp-c-text-3);
  font-size: 11px;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.aiexplain-source-expanded-content {
  padding-left: 8px;
  margin-top: 7px;
  color: var(--vp-c-text-2);
  border-left: 2px solid var(--vp-c-divider);
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.aiexplain-source-expanded-content :deep(p) {
  margin: 0;
}

.aiexplain-source-expanded-content :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.aiexplain-source-expanded-content :deep(code) {
  padding: 1px 5px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
  border-radius: 4px;
  font-size: 0.92em;
}

.aiexplain-source-expanded-content :deep(strong) {
  color: var(--vp-c-text-1);
  font-weight: 700;
}

.aiexplain-inline-loading,
.aiexplain-loading {
  font-size: 12px;
  color: var(--vp-c-text-2);
  animation: pulse 1.5s infinite;
}

.aiexplain-inline-loading {
  align-self: flex-start;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.aiexplain-input-container {
  padding: 14px 18px;
  background: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
}

.aiexplain-input-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
}

.aiexplain-input-wrapper:focus-within {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.aiexplain-input {
  flex: 1;
  min-height: 24px;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  padding: 8px 10px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  max-height: 200px;
  font-family: inherit;
}

.aiexplain-input::placeholder {
  color: var(--vp-c-text-3);
  opacity: 1;
}

.aiexplain-send-btn {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: var(--vp-button-brand-text);
  background: var(--aiexplain-accent-color, var(--vp-c-brand-1));
  transition: filter 0.2s, transform 0.2s;
  flex-shrink: 0;
}

.aiexplain-send-btn:hover:not(:disabled) {
  filter: brightness(1.1);
  transform: scale(1.05);
}

.aiexplain-send-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.aiexplain-send-btn svg {
  width: 18px;
  height: 18px;
}

.aiexplain-branding {
  font-size: 11px;
  color: var(--vp-c-text-3);
  text-align: center;
  padding: 10px 18px;
  background: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
}

.aiexplain-branding a {
  color: inherit;
  text-decoration: underline;
}

.aiexplain-branding a:hover {
  color: var(--aiexplain-accent-color, var(--vp-c-brand-1));
}

@media (max-width: 640px) {
  .aiexplain-sidebar {
    inset: 8px;
    width: auto;
    border-radius: 10px;
  }

  .aiexplain-resize-handle {
    display: none;
  }

  .aiexplain-header {
    padding: 14px 16px;
  }

  .aiexplain-messages {
    padding: 16px;
  }

  .aiexplain-input-container {
    padding: 12px 16px;
  }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .aiexplain-response-swap-enter-active,
  .aiexplain-response-swap-leave-active,
  .aiexplain-sources-flow-enter-active,
  .aiexplain-sources-flow-leave-active,
  .aiexplain-source-list-flow-enter-active,
  .aiexplain-source-list-flow-leave-active {
    transition-duration: 1ms;
  }

  .aiexplain-response-swap-enter-from,
  .aiexplain-response-swap-leave-to,
  .aiexplain-sources-flow-enter-from,
  .aiexplain-sources-flow-leave-to,
  .aiexplain-source-list-flow-enter-from,
  .aiexplain-source-list-flow-leave-to {
    transform: none;
  }
}
</style>
