<script lang="ts" setup>
import { computed } from 'vue';
import Chat from './chat.vue';
import FloatingBar from './floatingbar.vue';
import { useAiExplainFeatureToggle } from '../composables/useAiExplainFeatureToggle';

const { aiExplainEnabled } = useAiExplainFeatureToggle();

const apiEndpoint = computed(() =>
  import.meta.env.DEV
    ? 'http://localhost:5000/kb/chat'
    : 'https://api.picmi.io/kb/chat',
);
</script>

<template>
  <template v-if="aiExplainEnabled">
<!--    <FloatingBar
        :api-endpoint="apiEndpoint"
        index-path="/search-index.json"
        placeholder="Ask about PICMI help..."
        position="bottom-right"
    />-->
    <Chat
        :api-endpoint="apiEndpoint"
        index-path="/search-index.json"
        title="PICMI Help Assistant"
    />
  </template>
</template>
