<template>
  <div :id="anchorId" class="faq-item">
    <div
        class="faq-question"
        @click="toggle"
        @mouseleave="isHovered = false"
        @mouseover="isHovered = true"
    >

      <h3>
        <a
            v-if="isHovered || isActive"
            :href="`#${anchorId}`"
            class="faq-anchor"
        >
          #
        </a>
        {{ question }}
      </h3>
      <span class="toggle-icon">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <div v-if="isOpen" class="faq-answer">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useActiveQuestion } from '../composables/useActionQuestion.ts'

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  expandAll: {
    type: Boolean,
    default: false,
  },
})

const { activeQuestion, setActiveQuestion } = useActiveQuestion()

const isOpen = ref(false)
const isHovered = ref(false)

// Generate a URL-friendly anchor ID based on the question text
const anchorId = computed(() => {
  return props.question.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
})

// Check if the current question is active
const isActive = computed(() => activeQuestion.value === anchorId)

const toggle = () => {
  setActiveQuestion(anchorId.value)
  isOpen.value = !isOpen.value
}

// Watch for external expandAll changes
watch(() => props.expandAll, (newVal) => {
  isOpen.value = newVal
})
</script>

<style scoped>
.faq-item {
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  position: relative;
}

.faq-item h3 {
  margin-top: unset;
}

.faq-question {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
}

.faq-question h3 {
  margin-left: 0.5rem;
}

.faq-anchor {
  position: absolute;
  margin-left: -0.87em;
  text-decoration: none;
  color: #888;
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0; /* Start hidden */
  transition: color 0.25s, opacity 0.25s;
}

.faq-question:hover .faq-anchor,
/*.faq-question .faq-anchor.active {
  opacity: 1; !* Show on hover or when active *!
}*/

.faq-answer {
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
}

.toggle-icon {
  font-size: 1.5rem;
  margin-left: auto;
}
</style>
