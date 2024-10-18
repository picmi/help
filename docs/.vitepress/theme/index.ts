import DefaultTheme from 'vitepress/theme'
import './custom.css'
import faq from '../../../components/faq.vue'
import box from '../../../components/box.vue'
import prompt from '../../../components/prompt.vue'
import instructions from '../../../components/instructions.vue';


DefaultTheme.enhanceApp = ({ app }) => {
    app.component('faq', faq)
    app.component('box', box)
    app.component('prompt', prompt)
    app.component('instructions', instructions)
}

export default DefaultTheme

