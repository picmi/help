export function sidebarBusiness() {
    return [
        { text: 'FAQs', link: '/business/faqs' },
        {
            text: 'Getting Started',
            collapsed: true,
            items: [
                { text: 'Create account', link: '/business/article/creating-an-account' },
            ]
        },
        {
            text: 'Users', collapsed: true, items: [
                { text: 'Understanding Users', link: '/business/article/user-types' },
            ]
        },
        {
            text: 'Jobs',
            collapsed: false,
            items: [
                { text: 'Create', link: '/business/article/creating-a-job' },
                { text: 'Duplicate', link: '/business/article/duplicate-a-job' },
                { text: 'Preview', link: '/business/article/previewing-a-job' },
                { text: 'Publish', link: '/business/article/preparing-a-job-ready-publish' },
            ],
        },
        {
            text: 'People',
            collapsed: false,
            items: [
                { text: 'Invites', link: '/business/article/inviting-for-jobs' },
                { text: 'Provisional user', link: '/business/article/provisional-user' },
                {
                    text: 'Change pay rates for application',
                    link: '/business/article/changing-pay-rates-for-applications'
                },
                {
                    text: 'Add individual employment conditions',
                    link: '/business/article/creating-individual-employment-conditions'
                },
                {
                    text: 'Checking application configuration',
                    link: '/business/article/checking-application-configuration'
                },
            ],
        },
        {
            text: 'Integrations',
            collapsed: true,
            items: [
                {
                    text: 'Types', link: '/business/integrations/integrations',
                    collapsed: true,
                    items: [
                        {
                            text: 'iPayroll',
                            link: '/business/integrations/ipayroll'
                        },
                        {
                            text: 'Tātou',
                            link: '/business/integrations/tatou'
                        },
                        {
                            text: 'PayHero',
                            link: '/business/integrations/payhero'
                        },
                        {
                            text: 'Xero',
                            link: '/business/integrations/xero'
                        },
                        {
                            text: 'CheckWorkerRights',
                            link: '/business/integrations/check-worker-rights'
                        },
                        {
                            text: 'SmoothPay',
                            link: '/business/integrations/smooth-pay'
                        },
                        {
                            text: 'EmploymentHero',
                            link: '/business/integrations/employment-hero'
                        },
                        {
                            text: 'Crystal',
                            link: '/business/integrations/crystal'
                        },
                        {
                            text: 'Smartly',
                            link: '/business/integrations/smartly'
                        },
                        {
                            text: 'AgriSmart',
                            link: '/business/integrations/agrismart'
                        },
                        {
                            text: 'Hectre',
                            link: '/business/integrations/hectre'
                        },
                        {
                            text: 'PaySauce',
                            link: '/business/integrations/paysauce'
                        },
                        {
                            text: 'MYOB IMS',
                            link: '/business/integrations/myob-ims'
                        },
                        {
                            text: 'Dataphyll',
                            link: '/business/integrations/dataphyll'
                        },
                        {
                            text: 'PackManager',
                            link: '/business/integrations/packmanager'
                        },
                    ]
                },
                { text: 'Events', link: '/business/integrations/integration-events' },
                { text: 'Download reports', link: '/business/integrations/download-reports' },
            ],
        },
    ]
}
