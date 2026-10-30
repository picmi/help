<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { page } = useData()

const isOnePagerPage = computed(() =>
  page.value.relativePath === 'business/about-picmi/picmi-at-a-glance.md' ||
  route.path.endsWith('/business/about-picmi/picmi-at-a-glance.html'),
)

const explainers = [
  ['recruiting-people', 'Recruiting people'],
  ['managing-applications', 'Managing applications'],
  ['engaging-organisations', 'Engaging organisations'],
  ['understanding-notifications', 'Understanding notifications'],
  ['understanding-users', 'Understanding users'],
  ['provisional-users', 'Provisional users'],
  ['upcoming-season', 'Upcoming season'],
  ['workflow-design-hierarchy', 'Workflow design hierarchy'],
  ['jobseeker-sign-in', 'How jobseekers get back into PICMI'],
]
</script>

<template>
  <div v-if="isOnePagerPage" class="one-pager-outline" role="navigation" aria-label="One-page explainers">
  <div class="one-pager-outline__title">One-page explainers</div>
  <ul>
    <li v-for="explainer in explainers" :key="explainer[0]">
      <a :href="`#${explainer[0]}`">{{ explainer[1] }}</a>
    </li>
  </ul>
  </div>
</template>

<style scoped>
.one-pager-outline {
  margin-top: 24px;
  border-left: 1px solid var(--vp-c-divider);
  padding-left: 16px;
  font-size: 13px;
  font-weight: 500;
}

.one-pager-outline__title {
  line-height: 32px;
  font-size: 14px;
  font-weight: 600;
}

.one-pager-outline ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.one-pager-outline a {
  display: block;
  overflow: hidden;
  color: var(--vp-c-text-2);
  line-height: 28px;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.25s;
}

.one-pager-outline a:hover {
  color: var(--vp-c-text-1);
}
</style>
