<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';
import AiExplainHost from '../../../components/AiExplainHost.vue';
import AiExplainNavButton from '../../../components/AiExplainNavButton.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <AiExplainNavButton />
    </template>

    <template #layout-bottom>
      <AiExplainHost />
    </template>
  </Layout>
</template>
