import { defineConfig } from 'vitepress'
import { nav } from './nav';
import { sidebarJobseeker } from './sidebarJobseeker';
import { sidebarBusiness } from './sidebarBusiness';
import { explanation, faq, instructions, prompt } from '../../plugins/markdown-it-block';
import { icon } from '../../plugins/markdown-it-inline';

// const version = '1.0.0';

export default defineConfig({
    lang: 'en-US',
    title: 'Help Centre',
    description: 'How can we help?',
    markdown: {
        config(md) {
            faq(md);
            instructions(md);
            explanation(md);
            prompt(md);
            icon(md);
        }
    },
    ignoreDeadLinks: [
        (url) => {
            return url.toLowerCase().includes('template.docx')
        }
    ],
    lastUpdated: true,
    themeConfig: {
        logo: { light: '/logo-no-name-outline-black.svg', dark: '/logo-no-name-outline-white.svg' },
        nav: nav(),
        sidebar: {
            '/jobseeker': sidebarJobseeker(),
            '/business': sidebarBusiness(),
        },
        footer: {
            message: 'PICMI is the simple hiring tool that helps make your job their first choice',
            copyright: 'Copyright © 2018-present PICMI'
        },
        search: {
            provider: 'local'
        }
    },
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-196x196.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-96x96.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-16x16.png" }],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-128.png" }],
        ['link', { rel: "manifest", href: "/assets/favicons/manifest.json" }],
        ['link', { rel: "icon", href: "/assets/favicons/favicon.ico" }],
        ['meta', { name: "theme-color", content: "#ffffff" }],
        // ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
        }],
        // ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lato&display=swap" }],
    ],
});

