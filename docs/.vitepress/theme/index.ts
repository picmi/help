import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'
import faq from '../../../components/faq.vue'
import explanation from '../../../components/explanation.vue'
import prompt from '../../../components/prompt.vue'
import instructions from '../../../components/instructions.vue';
import { Theme } from 'vitepress';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('faq', faq)
        app.component('explanation', explanation)
        app.component('prompt', prompt)
        app.component('instructions', instructions)
    },
} satisfies Theme;
