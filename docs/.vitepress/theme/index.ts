import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './ui-instructions.css'
import FAQItem from '../../../components/FaqItem.vue'


DefaultTheme.enhanceApp = ({ app }) => {
    app.component('FAQItem', FAQItem)
}

export default DefaultTheme

