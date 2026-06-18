<script setup lang="ts">
/**
 * AiExplainChat - Main Chat Sidebar Component
 *
 * A sliding sidebar panel with the AI chat interface.
 */


import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { aiExplainFocusInputEvent, useAiExplain } from '../composables/useAiExplain';

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
  clearChat,
  closeChat,
} = useAiExplain({
  apiEndpoint: props.apiEndpoint,
  indexPath: props.indexPath,
});

const title = computed(() => props.title || 'AI Assistant');
const accentColor = computed(() => props.accentColor || 'var(--vp-c-brand-1)');

const widthStorageKey = 'picmi-help:aiexplain-chat-width';
const defaultSidebarWidth = 440;
const minSidebarWidth = 360;
const sidebarWidth = ref(defaultSidebarWidth);
const isResizing = ref(false);
const scrollContainer = ref<HTMLElement | null>(null);
const sidebarRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLTextAreaElement | null>(null);
let previousBodyCursor = '';
let previousBodyUserSelect = '';

const sidebarStyle = computed(() => ({
  '--aiexplain-sidebar-width': `${sidebarWidth.value}px`,
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

onMounted(() => {
  loadSidebarWidth();
  window.addEventListener(aiExplainFocusInputEvent, handleFocusInputEvent);
  window.addEventListener('resize', handleWindowResize);
});

onBeforeUnmount(() => {
  stopResize();
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
            <div class="aiexplain-message-content" v-html="msg.content" />
          </div>

          <!-- Loading indicator -->
          <div v-if="loading" class="aiexplain-loading">Thinking...</div>
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
  color: v-bind(accentColor);
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

.aiexplain-message.user .aiexplain-message-content {
  max-width: min(82%, 320px);
  color: var(--vp-button-brand-text);
  background: v-bind(accentColor);
  border-radius: 12px 12px 4px 12px;
}

.aiexplain-message.assistant .aiexplain-message-content {
  max-width: calc(100% - 38px);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px 12px 12px 4px;
}

.aiexplain-avatar {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: color-mix(in srgb, v-bind(accentColor) 14%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.aiexplain-avatar svg {
  width: 14px;
  height: 14px;
  color: v-bind(accentColor);
}

.aiexplain-message-content {
  padding: 10px 13px;
  font-size: 14px;
  line-height: 1.55;
  overflow-wrap: anywhere;
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
  color: var(--vp-button-brand-text);
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
  color: var(--vp-button-brand-text);
}

.aiexplain-loading {
  font-size: 12px;
  color: var(--vp-c-text-2);
  animation: pulse 1.5s infinite;
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
  background: v-bind(accentColor);
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
  color: v-bind(accentColor);
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
</style>
