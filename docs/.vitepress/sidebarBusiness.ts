export function sidebarBusiness() {
    return [
        { text: 'FAQs', link: '/business/faqs' },
        {
            text: 'Getting Started',
            collapsed: true,
            items: [
                { text: 'Recruiting people', link: '/business/about-picmi/recruiting-people' },
                { text: 'Creating an account', link: '/business/article/creating-an-account' },
                { text: 'Understanding users', link: '/business/about-picmi/users' },
                { text: 'Understanding applications', link: '/business/about-picmi/applications' },
                { text: 'Understanding hiring', link: '/business/about-picmi/hiring-elements' },
                { text: 'Understanding billing', link: '/business/about-picmi/billing' },
                {
                    text: 'Understanding using PICMI', collapsed: false, items: [
                        { text: 'Search filters', link: '/business/article/search' },
                        { text: 'Dates', link: '/business/about-picmi/dates' },
                    ]
                },
                { text: 'Understanding notifications', link: '/business/article/notifications' },
            ]
        },
        {
            text: 'Jobs',
            collapsed: false,
            items: [
                {
                    text: 'Create',
                    link: '/business/article/creating-a-job',
                    collapsed: false,
                    items: [
                        { text: 'Status', link: '/business/article/job-status' },
                        { text: 'Job application controls', link: '/business/article/job-application-controls' },
                    ]
                },
                { text: 'Duplicate', link: '/business/article/duplicate-a-job' },
                { text: 'Preview', link: '/business/article/previewing-a-job' },
                { text: 'Publish', link: '/business/article/preparing-a-job-ready-publish' },
            ],
        },
        {
            text: 'People',
            collapsed: false,
            items: [
                { text: 'Change status', link: '/business/article/changing-application-status' },
                { text: 'Bulk change status', link: '/business/article/bulk-status-change' },
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
                {
                    text: 'Status messages',
                    link: '/business/article/status-message'
                },
                {
                    text: 'Search for applications',
                    link: '/business/article/searching-for-people'
                },
                {
                    text: 'Export application details',
                    link: '/business/article/export'
                },
            ],
        },
        {
            text: 'Workflows',
            collapsed: false,
            items: [
                { text: 'Linked files', link: '/business/workflows/linked-files' },
                {
                    text: 'Work status', items: [
                        { text: 'Question options', link: '/business/workflows/questions-work-status' },
                        { text: 'Right to work', link: '/business/workflows/right-to-work' },
                        {
                            text: 'Storing biometric data from documents',
                            link: '/business/workflows/storing-biometric-data'
                        },
                    ]
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
                            text: "API", collapsed: true, items: [
                                {
                                    text: 'CheckWorkRights',
                                    link: '/business/integrations/check-work-rights'
                                },

                                {
                                    text: 'Dataphyll',
                                    link: '/business/integrations/dataphyll'
                                },
                                {
                                    text: 'EmploymentHero',
                                    link: '/business/integrations/employment-hero'
                                },
                                {
                                    text: 'Hectre',
                                    link: '/business/integrations/hectre'
                                },
                                {
                                    text: 'iPayroll',
                                    link: '/business/integrations/ipayroll'
                                },
                                {
                                    text: 'PayHero',
                                    link: '/business/integrations/payhero'
                                },

                                {
                                    text: 'SmoothPay',
                                    link: '/business/integrations/smooth-pay'
                                },
                                {
                                    text: 'Tātou',
                                    link: '/business/integrations/tatou'
                                },
                                {
                                    text: 'Xero',
                                    link: '/business/integrations/xero'
                                },
                            ]
                        },
                        {
                            text: "CSV", collapsed: true, items: [
                                {
                                    text: 'AgriSmart',
                                    link: '/business/integrations/agrismart'
                                },
                                {
                                    text: 'Crystal',
                                    link: '/business/integrations/crystal'
                                },
                                {
                                    text: 'Hectre',
                                    link: '/business/integrations/hectre'
                                },
                                {
                                    text: 'MYOB IMS',
                                    link: '/business/integrations/myob-ims'
                                },
                                {
                                    text: 'PackManager',
                                    link: '/business/integrations/packmanager'
                                },
                                {
                                    text: 'PaySauce',
                                    link: '/business/integrations/paysauce'
                                },
                                {
                                    text: 'Smartly',
                                    link: '/business/integrations/smartly'
                                },
                            ]
                        },


                    ]
                },
                { text: 'Events', link: '/business/integrations/integration-events' },
                { text: 'Download reports', link: '/business/integrations/download-reports' },
            ],
        },
        {
            text: 'Users',
            collapsed: true,
            items: [
                {
                    text: 'Add or remove',
                    link: '/business/article/creating-business-users',
                },
            ],
        },
    ]
}
