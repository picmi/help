export function sidebarJobseeker() {
    return [
        {
            text: 'Getting Started',
            collapsible: true,
            items: [
                // { text: 'Getting Started', link: '/guide/what-is-vitepress' },
            ],
        },
        {
            text: 'Your jobs',
            collapsible: true,
            items: [
                // { text: 'Getting Started', link: '/guide/what-is-vitepress' },
            ],
        },
        {
            text: 'Your account',
            collapsible: true,
            items: [
                // { text: 'Getting Started', link: '/guide/what-is-vitepress' },
            ],
        },
        {
            text: 'Safety',
            collapsible: true,
            items: [
                // { text: 'Getting Started', link: '/guide/what-is-vitepress' },
            ],
        },
        {
            text: 'About PICMI',
            collapsible: true,
            items: [
                {
                    text: 'Getting Started', link: '/jobseeker/about-picmi/getting-started',
                    items: [
                        { text: 'Creating an account', link: '/jobseeker/article/creating-an-account' },
                    ]
                },
                { text: 'Creating an account', link: '/jobseeker/article/creating-an-account' },
            ]
        },
    ]
}
