<script lang="ts" setup>
/**
 * AiExplainFloatingBar - Floating Input Bar Component
 *
 * A sleek floating input bar at the bottom of the page.
 */

import { useAiExplain } from '../composables/useAiExplain';
import { computed, ref } from 'vue';

const props = defineProps<{
  apiEndpoint?: string;
  indexPath?: string;
  placeholder?: string;
  accentColor?: string;
  position?: 'bottom-center' | 'bottom-right' | 'bottom-left';
}>();

const {
  isOpen,
  isFocused,
  input,
  messages,
  loading,
  sendMessage,
  openChat,
} = useAiExplain({
  apiEndpoint: props.apiEndpoint,
  indexPath: props.indexPath,
});

const placeholder = computed(() =>
    messages.value.length > 0 ? 'Continue...' : (props.placeholder || 'Ask a question...')
);
const accentColor = computed(() => props.accentColor || 'var(--vp-c-brand-1)');
const position = computed(() => props.position || 'bottom-center');

const inputRef = ref<HTMLTextAreaElement | null>(null);

const positionClass = computed(() => {
  switch (position.value) {
    case 'bottom-right':
      return 'position-right';
    case 'bottom-left':
      return 'position-left';
    default:
      return 'position-center';
  }
});

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    if (input.value.trim()) {
      openChat();
      sendMessage(input.value);
    }
  }
}

function handleFocus() {
  isFocused.value = true;
}

function handleBlur() {
  setTimeout(() => {
    isFocused.value = false;
  }, 200);
}

function focusInput() {
  inputRef.value?.focus();
}

function handleSendClick() {
  if (input.value.trim()) {
    openChat();
    sendMessage(input.value);
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="float">
      <div
          v-if="!isOpen"
          :class="['aiexplain-floating-bar', positionClass, { expanded: isFocused || input.length > 0 }]"
      >
        <div
            :class="{ expanded: isFocused || input.length > 0 }"
            class="aiexplain-floating-container"
            @click="focusInput"
        >
          <textarea
              ref="inputRef"
              v-model="input"
              :placeholder="placeholder"
              class="aiexplain-floating-input"
              rows="1"
              @blur="handleBlur"
              @focus="handleFocus"
              @keydown="handleKeydown"
          />

          <!-- Collapsed state: Shortcut hint -->
          <div v-if="!isFocused && input.length === 0" class="aiexplain-hint">
            <span class="aiexplain-shortcut">Ctrl+I</span>
            <div class="aiexplain-hint-icon">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Expanded state: Send button -->
          <button
              v-if="isFocused || input.length > 0"
              :disabled="loading || !input.trim()"
              class="aiexplain-floating-send"
              @click.stop="handleSendClick"
          >
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.aiexplain-floating-bar {
  position: fixed;
  bottom: 24px;
  z-index: 998;
  transition: width 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
}

.position-center {
  left: 50%;
  transform: translateX(-50%);
}

.position-right {
  right: 24px;
}

.position-left {
  left: 24px;
}

.aiexplain-floating-bar.expanded.position-center {
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 640px;
  padding: 0 16px;
}

.aiexplain-floating-bar.expanded.position-right,
.aiexplain-floating-bar.expanded.position-left {
  width: min(620px, calc(100vw - 48px));
}

.aiexplain-floating-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  box-shadow: var(--vp-shadow-3, 0 16px 48px rgba(0, 0, 0, 0.18));
  cursor: text;
  transition: width 0.3s ease, max-width 0.3s ease, border-color 0.2s, box-shadow 0.2s;
  width: 360px;
  height: 50px;
}

.aiexplain-floating-container:focus-within {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-3, 0 16px 48px rgba(0, 0, 0, 0.18)), 0 0 0 3px var(--vp-c-brand-soft);
}

.aiexplain-floating-container.expanded {
  width: 100%;
  max-width: 620px;
  padding: 6px 8px;
}

.aiexplain-floating-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  padding: 8px 20px;
  font-size: 16px;
  color: var(--vp-c-text-1);
  font-family: inherit;
  height: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.aiexplain-floating-input::-webkit-scrollbar {
  display: none;
}

.aiexplain-floating-input::placeholder {
  color: var(--vp-c-text-3);
  opacity: 1;
}

.aiexplain-hint {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  pointer-events: none;
}

.aiexplain-shortcut {
  font-size: 10px;
  font-family: monospace;
  color: var(--vp-c-text-2);
}

.aiexplain-hint-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: color-mix(in srgb, v-bind(accentColor) 12%, transparent);
  border: 1px solid color-mix(in srgb, v-bind(accentColor) 30%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.aiexplain-hint-icon svg {
  width: 16px;
  height: 16px;
  color: v-bind(accentColor);
}

.aiexplain-floating-send {
  flex-shrink: 0;
  padding: 8px;
  margin-right: 4px;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  color: var(--vp-button-brand-text);
  background: v-bind(accentColor);
  border-color: v-bind(accentColor);
  transition: filter 0.2s, transform 0.2s;
}

.aiexplain-floating-send:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.aiexplain-floating-send:hover:not(:disabled) {
  filter: brightness(1.2);
  transform: scale(1.05);
}

.aiexplain-floating-send:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.aiexplain-floating-send svg {
  width: 20px;
  height: 20px;
}

/* Transition */
.float-enter-active,
.float-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.float-enter-from,
.float-leave-to {
  transform: translateY(150%);
  opacity: 0;
}

@media (max-width: 640px) {
  .aiexplain-floating-bar.position-right,
  .aiexplain-floating-bar.position-left {
    right: 12px;
    left: 12px;
    bottom: 16px;
  }

  .aiexplain-floating-bar.position-center {
    right: 12px;
    left: 12px;
    bottom: 16px;
    transform: none;
  }

  .aiexplain-floating-bar.expanded.position-center {
    left: 12px;
    transform: none;
    width: auto;
    padding: 0;
  }

  .aiexplain-floating-bar.expanded.position-right,
  .aiexplain-floating-bar.expanded.position-left {
    width: auto;
  }

  .aiexplain-floating-container {
    width: 100%;
  }
}
</style>
