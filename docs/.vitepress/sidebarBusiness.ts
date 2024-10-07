export function sidebarBusiness() {
    return [
        {
            text: 'Getting Started',
            collapsible: true,
            items: [
                { text: 'FAQs', link: '/business/faqs' },
                { text: 'Create account', link: '/business/article/creating-an-account' },
            ]
        },
        {
            text: 'Jobs',
            collapsible: true,
            items: [
                { text: 'Create', link: '/business/article/creating-a-job' },
                { text: 'Duplicate', link: '/business/article/duplicate-a-job' },
                { text: 'Preview', link: '/business/article/previewing-a-job' },
                { text: 'Publish', link: '/business/article/preparing-a-job-ready-publish' },
            ],
        },
        {
            text: 'People',
            collapsible: true,
            items: [
                { text: 'Invites', link: '/business/article/inviting-for-jobs' },
                {
                    text: 'Change pay rates for application',
                    link: '/business/article/changing-pay-rates-for-applications'
                },
                {
                    text: 'Add individual employment conditions',
                    link: '/business/article/creating-individual-employment-conditions'
                },
            ],
        },
        {
            text: 'Integrations',
            collapsible: true,
            items: [
                { text: 'Integration events', link: '/business/integrations/integration-events' },
            ],
        },
    ]
}
