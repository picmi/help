<script lang="ts" setup>
import { aiExplainOpenChatEvent } from '../composables/useAiExplain';
import { useAiExplainFeatureToggle } from '../composables/useAiExplainFeatureToggle';

const { aiExplainEnabled } = useAiExplainFeatureToggle();

function openAiChat() {
  window.dispatchEvent(new Event(aiExplainOpenChatEvent));
}
</script>

<template>
  <button
      v-if="aiExplainEnabled"
      aria-label="Open AI chat"
      class="ai-chat-nav-button"
      type="button"
      @click="openAiChat"
  >
    <span class="ai-chat-nav-button-container">
      <span aria-hidden="true" class="mdi mdi-message-text-outline ai-chat-nav-icon" />
      <span class="ai-chat-nav-label">AI Explain</span>
    </span>
    <span aria-hidden="true" class="ai-chat-nav-keys">
      <kbd class="ai-chat-nav-key" />
      <kbd class="ai-chat-nav-key">I</kbd>
    </span>
  </button>
</template>

<style scoped>
.ai-chat-nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 40px;
  margin-left: 24px;
  margin-right: 12px;
  padding: 0 10px 0 12px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-alt);
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}

.ai-chat-nav-button:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand-1);
}

.ai-chat-nav-button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.ai-chat-nav-button-container {
  display: flex;
  align-items: center;
}

.ai-chat-nav-icon {
  margin-right: 8px;
  font-size: 16px;
  line-height: 1;
}

.ai-chat-nav-keys {
  direction: ltr;
  display: flex;
  align-items: center;
}

.ai-chat-nav-key {
  display: block;
  margin: 2px 0 0;
  border: 1px solid var(--vp-c-divider);
  border-right: none;
  border-radius: 4px 0 0 4px;
  padding-left: 6px;
  min-width: 0;
  width: auto;
  height: 22px;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-base);
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  transition: color 0.5s, border-color 0.5s;
}

.ai-chat-nav-key + .ai-chat-nav-key {
  border-right: 1px solid var(--vp-c-divider);
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding-right: 6px;
  padding-left: 2px;
}

.ai-chat-nav-key:first-child {
  font-size: 0;
}

.ai-chat-nav-key:first-child::after {
  color: var(--vp-c-text-2);
  content: 'Ctrl';
  font-size: 12px;
  letter-spacing: normal;
}

.mac .ai-chat-nav-key:first-child::after {
  content: '\2318';
}

@media (max-width: 767px) {
  .ai-chat-nav-button {
    width: 36px;
    height: 55px;
    justify-content: center;
    margin-right: 8px;
    padding: 0;
    background: transparent;
    border-color: transparent;
  }

  .ai-chat-nav-icon {
    margin-right: 0;
  }

  .ai-chat-nav-label,
  .ai-chat-nav-keys {
    display: none;
  }
}
</style>
