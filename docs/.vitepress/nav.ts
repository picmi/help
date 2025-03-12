export function nav() {
    return [
        { text: 'PICMI', link: 'https://jobs.picmi.io' },
        { text: 'Jobseeker', link: '/jobseeker/', activeMatch: '/jobseeker/' },
        { text: 'Business', link: '/business/', activeMatch: '/business/' },
        /*
        {
            text: version,
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
                },
            ],
        },
        */
    ]
}
