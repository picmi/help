import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './ui-instructions.css'
import faq from '../../../components/faq.vue'


DefaultTheme.enhanceApp = ({ app }) => {
    app.component('faq', faq)
}

export default DefaultTheme

