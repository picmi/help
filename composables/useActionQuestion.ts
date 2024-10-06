import { ref } from 'vue'

const activeQuestion = ref(null)

export function useActiveQuestion() {
    const setActiveQuestion = (questionId) => {
        // If the same question is clicked, toggle it off
        if (activeQuestion.value === questionId) {
            activeQuestion.value = null
        } else {
            activeQuestion.value = questionId
        }
    }

    return {
        activeQuestion,
        setActiveQuestion,
    }
}
