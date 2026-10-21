# PayHero integration overview

See [API integration authentication and planning](api-authentication.md) for the cross-integration view of
how the partner key is obtained and whether advance planning is needed.

## PayHero: Integration configuration

| Configuration                                                                                                                      | Description                                                                                            | Values                                                                              |
|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| [API key](#cfg-api-key){#cfg-api-key}                                                                                              | Partner API key used to authenticate requests to PayHero                                               | Text (required)                                                                     |
| [Employer Subsidy Contribution Tax Rate](#cfg-employer-subsidy-contribution-tax-rate){#cfg-employer-subsidy-contribution-tax-rate} | Tax rate deducted from Superannuation Employer Contribution, expressed as a percentage                 | PayHero/NZ tax rates lookup                                                         |
| [Default pay cycle](#cfg-default-pay-cycle){#cfg-default-pay-cycle}                                                                | PayHero pay cycle applied on employee creation                                                         | PayHero pay cycles                                                                  |
| [Email payslips](#cfg-email-pay-slips){#cfg-email-pay-slips}                                                                       | Send payslips via email                                                                                | Send email payslips if there is a provided email address; Never send email payslips |
| [Default employee status on creation](#cfg-default-employee-status){#cfg-default-employee-status}                                  | PayHero employee status applied on employee creation                                                   | PayHero employee statuses                                                           |
| [Add holiday pay as you go](#cfg-holiday-pay-as-you-go){#cfg-holiday-pay-as-you-go}                                                | Whether to apply Holiday Pay As You Go                                                                 | Yes, apply holiday pay as you go; No, do not apply holiday pay as you go            |
| [Employee label](#cfg-employee-label){#cfg-employee-label}                                                                         | Static label applied to all employees created via PICMI                                                | Label is added to the employee                                                      |
| [Employee label color](#cfg-employee-label-color){#cfg-employee-label-color}                                                       | Hex color code for the static label (defaults to PICMI’s spring green: #25ce81)                        | Hex color                                                                           |
| [Add role-based label](#cfg-add-role-label){#cfg-add-role-label}                                                                   | Automatically apply a label based on the employee’s role in PICMI                                      | Yes, apply role-based labels; No, do not apply role-based labels (uses Job Title)   |
| [Role label color](#cfg-role-label-color){#cfg-role-label-color}                                                                   | Hex color code for automatically applied role-based labels (defaults to PICMI’s spring green: #25ce81) | Hex color                                                                           |

## PICMI-PayHero integration fields

| Field Name                                                                                    | **Description**                                                                  | **Validation/Constraint/Default Value**                | **Source**                |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------|---------------------------|
| [First name](#first-name)                                                                     | Given name of the individual.                                                    | Mandatory                                              | Personal Information      |
| [Surname](#surname)                                                                           | Family name of the individual.                                                   | Mandatory                                              | Personal Information      |
| [Preferred name](#preferred-name)                                                             | Preferred name used by the individual, typically the first and surname combined. | First + Surname, Mandatory                             | Personal Information      |
| [Email](#email)                                                                               | Email address of the individual.                                                 |                                                        | Personal Information      |
| [Phone](#phone)                                                                               | Phone number of the individual.                                                  |                                                        | Personal Information      |
| [Birthdate](#birthdate)                                                                       | Date of birth of the individual.                                                 |                                                        | Personal Information      |
| [Gender](#gender)                                                                             | Gender identity of the individual.                                               | Gender Diverse                                         | Personal Information      |
| [Street address](#street-address)                                                             | Street address of the individual.                                                | AddressPostal > StreetAddress                          | Personal Information      |
| [City](#city)                                                                                 | City where the individual resides.                                               | AddressPostal > Region                                 | Personal Information      |
| [Postcode](#postcode)                                                                         | Postal code for the individual's address.                                        | AddressPostal > PostalCode                             | Personal Information      |
| [Emergency contact name](#emergency-contact-name)                                             | Name of the individual's emergency contact.                                      |                                                        | Questions                 |
| [Emergency contact phone](#emergency-contact-phone)                                           | Phone number of the individual's emergency contact.                              |                                                        | Questions                 |
| [Bank account number](#bank-account-number)                                                   | Bank account number of the individual (stripped of dashes).                      |                                                        | Questions                 |
| [Tax number](#tax-number)                                                                     | Individual's tax number (IRD number, stripped of dashes).                        | Mandatory                                              | Questions                 |
| [Tax code](#tax-code)                                                                         | Tax code applicable to the individual.                                           | Mandatory                                              | Questions                 |
| [Start date](#start-date)                                                                     | Start date of employment or contract.                                            | Today + 1 day, Mandatory                               | Job                       |
| [Job title](#job-title)                                                                       | Title of the individual's position.                                              |                                                        | Job                       |
| [KiwiSaver pre-existing member](#kiwisaver-pre-existing-member)                               | Indicates if the individual is a pre-existing KiwiSaver member.                  | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| [KiwiSaver rate](#kiwisaver-rate)                                                             | Contribution rate for KiwiSaver.                                                 | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| [KiwiSaver opt-out date](#kiwisaver-opt-out-date)                                             | Date set when an individual opts out of KiwiSaver.                               | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| [Enrolment date](#enrolment-date)                                                             | Date of enrolment in KiwiSaver.                                                  | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| [Employer subsidy contribution tax rate (esct)](#employer-subsidy-contribution-tax-rate-esct) | Tax rate for employer subsidy contributions.                                     |                                                        | Integration Configuration |
| [Pay rate](#pay-rate)                                                                         | Rate of pay for the individual.                                                  |                                                        | Job                       |
| [Salary flag](#salary-flag)                                                                   | Indicator for salary employment type; must be set to avoid API errors.           | FALSE, Mandatory                                       | Integration Configuration |
| [Contractor flag](#contractor-flag)                                                           | Indicator for contractor employment type; must be set to avoid API errors.       | FALSE, Mandatory                                       | Integration Configuration |
| [Active flag](#active-flag)                                                                   | Status indicator for employment; defaults to TRUE if active.                     | TRUE                                                   | Integration Configuration |
| [Email pay slips](#email-pay-slips)                                                           | Preference for receiving payslips via email.                                     | Email payslip to provided email address                | Integration Configuration |
| [Payment cycle](#payment-cycle)                                                               | Cycle for payment processing.                                                    | API + No Pay Cycle, No PayCycle                        | Integration Configuration |

## Customer API credentials

To create an employee in PayHero, PICMI needs API credentials belonging to your own PayHero company.

::: prompt
Do not use another organisation's API key or a personal credential. Your PayHero credentials should only be used for
your own company's connection.
:::

### Apply for PayHero API access

PayHero documents private integrations for companies on its Universe plan. Review the [PayHero API integration
requirements](https://support.payhero.co.nz/en/articles/12015635-payhero-api-integration), complete the private
integration application, and email it to `api@flexitime.works`.

PayHero says it will respond within 10 working days. Once your application is approved, use the credentials PayHero
issues for your company and enter the required API credential in PICMI.

::: prompt
PayHero also documents a separate partner-integration process. That process is for software providers building an
integration for multiple PayHero customers, not for a customer connecting its own PayHero company to PICMI.
:::

:::: explanation

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

:::: faq How long does it take for PayHero to respond to a private API application?
PayHero says it will respond within 10 working days. Start the application early if the integration is needed by a
specific date.

::: prompt
See [Apply for PayHero API access](#apply-for-payhero-api-access)
:::
::::

:::: faq Where do I get the PayHero API credential for my company?
Apply for private API access through PayHero if your company is on the Universe plan. PayHero will provide the
credentials needed for your approved private integration.

::: prompt
See [Apply for PayHero API access](#apply-for-payhero-api-access)
:::
::::

:::: faq I have an invalid PayHero API credential error, what should I do?
Check that the credential belongs to the PayHero company connected to PICMI and that your private API access has been
approved. Do not substitute another organisation's or a partner integration credential.

::: prompt
See [Apply for PayHero API access](#apply-for-payhero-api-access)
:::
::::
