# Xero integration overview

PICMI offers two versions of its Xero integration for payroll: one tailored for New Zealand (NZ) and the other for
Australia (AU). To ensure the integration works correctly, your organisation in Xero must match the corresponding
region—NZ or AU—based on where your business operates. This is because Xero's payroll systems have region-specific
requirements, such as IRD numbers and KiwiSaver details for NZ or Tax File Numbers and superannuation details for AU.

* [Payroll NZ](#payroll-nz-integration-configuration)
* [Payroll AU](#payroll-au-integration-configuration)

::: prompt
If your Xero organisation is not set to the correct region, the integration will not function properly.

PICMI currently supports **only ONE connected app on an account at a time**. Please contact us if you require more than
one.
:::

## Payroll NZ: Integration configuration

| Configuration                                                                          | Description                                      | Values                                                                                                                                                                  |
|----------------------------------------------------------------------------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Employer subsidy contribution tax rate](#cfg-subsidy-tax-rate){#cfg-subsidy-tax-rate} | Tax rate applied to employer subsidies           | NZ tax rates                                                                                                                                                            |
| [Employer subsidy](#cfg-subsidy){#cfg-subsidy}                                         | Amount of the employer subsidy                   | 10.5% (MB) for income up to $14,000, 17.5% (M) for $14,001–$48,000, 30% (MH) for $48,001–$70,000, 33% (MT) for $70,001–$180,000, and 39% (MA) for income over $180,000. |
| [Payment method](#cfg-payment-method){#cfg-payment-method}                             | Method of payment for employees                  | Bank, Cash, Cheque                                                                                                                                                      |
| [Engagement type](#cfg-engagement){#cfg-engagement}                                    | Type of engagement with the employee             | Permanent, Fixed Term, Casual                                                                                                                                           |
| [Payment frequency](#cfg-payment-frequency){#cfg-payment-frequency}                    | Frequency of payments to employees               | Weekly, Fortnightly, Monthly                                                                                                                                            |
| [Earnings rate](#cfg-earnings-rate){#cfg-earnings-rate}                                | Default earnings rate to be applied              | EarningsRate from Xero                                                                                                                                                  |
| [Pay run calendar](#cfg-pay-run-calendar){#cfg-pay-run-calendar}                       | Calendar schedule for pay runs                   | PayRunCalendar from Xero                                                                                                                                                |
| [Holiday calendar](#cfg-holiday-calendar){#cfg-holiday-calendar}                       | Calendar used for managing holidays              | HolidayCalendar from Xero                                                                                                                                               |
| [Statement particulars](#cfg-statement-particulars){#cfg-statement-particulars}        | Particulars for bank statements                  |                                                                                                                                                                         |
| [Statement code](#cfg-statement-code){#cfg-statement-code}                             | Code for bank statements                         |                                                                                                                                                                         |
| [Statement reference](#cfg-statement-reference){#cfg-statement-reference}              | Reference for bank statements                    |                                                                                                                                                                         |
| [Days per week](#cfg-days-per-week){#cfg-days-per-week}                                | Number of working days per week for the employee |                                                                                                                                                                         |
| [Hours per day](#cfg-hours-per-day){#cfg-hours-per-day}                                | Number of working hours per day for the employee |                                                                                                                                                                         |
| [Address post code](#cfg-post-code){#cfg-post-code}                                    | Default post code used if not provided           |                                                                                                                                                                         |
| [Address region](#cfg-region){#cfg-region}                                             | Default region used if not provided              |                                                                                                                                                                         |

## Payroll NZ: PICMI-Xero integration fields

| Field Name                                                                                                                                                  | Description                                                                    | Validation/Constraint/Default Value                                                                                                   | Source                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| [Employee ID](#nz-employee-id){#nz-employee-id}                                                                                                             | Unique identifier for the employee                                             | -1 if updating, otherwise uses employee ID                                                                                            | Integration Configuration |
| [First Name](#nz-first-name){#nz-first-name}                                                                                                                | First name of the employee                                                     | Maximum 35 characters Mandatory                                                                                                       | Personal Information      |
| [Last Name](#nz-last-name){#nz-last-name}                                                                                                                   | Last name of the employee                                                      | Maximum 35 characters Mandatory                                                                                                       | Personal Information      |
| [Date Of Birth](#nz-date-of-birth){#nz-date-of-birth}                                                                                                       | Employee's date of birth                                                       | Must follow the format YYYY-MM-DD Mandatory                                                                                           | Job                       |
| [Gender](#nz-gender){#nz-gender}                                                                                                                            | Gender of the employee                                                         | Options: M/F                                                                                                                          | Personal Information      |
| [Email](#nz-email){#nz-email}                                                                                                                               | Employee's email address                                                       | Mandatory if the account type is not 'Staff' More in [troubleshooting](#troubleshooting) sub-alias emails for existing archived users | Job                       |
| [Phone Number](#nz-phone-number){#nz-phone-number}                                                                                                          | Employee's phone number                                                        | Maximum 15 digits with single spaces, no plus sign (+)                                                                                | Personal Information      |
| [Address](#nz-address){#nz-address}                                                                                                                         | Employee’s home address, including street, city, suburb, and postcode          | Mandatory                                                                                                                             | Personal Information      |
| [Engagement Type](#nz-engagement-type){#nz-engagement-type}                                                                                                 | Type of engagement for the employee                                            | Permanent, Fixed Term, Casual (Required for employees of organisations created after 5th August 2024)                                 | Integration Configuration |
| [Job Title](#nz-job-title){#nz-job-title}                                                                                                                   | Job title of the employee                                                      |                                                                                                                                       | Job                       |
| [IRD Number](#nz-ird-number){#nz-ird-number}                                                                                                                | The employee's IRD (Inland Revenue Department) number                          |                                                                                                                                       | Personal Information      |
| [Tax Code](#nz-tax-code){#nz-tax-code}                                                                                                                      | Employee's tax code                                                            | Options: M, M SL, ME, ME SL, etc Refer to NZ tax codes                                                                                | Personal Information      |
| [Special Tax Rate Percentage](#nz-special-tax-rate-percentage){#nz-special-tax-rate-percentage}                                                             | Special tax rate percentage                                                    |                                                                                                                                       | Personal Information      |
| [Has Special Student Loan Rate](#nz-has-special-student-loan-rate){#nz-has-special-student-loan-rate}                                                       | Whether the employee has a special student loan rate                           |                                                                                                                                       | Personal Information      |
| [Special Student Loan Rate Percentage](#nz-special-student-loan-rate-percentage){#nz-special-student-loan-rate-percentage}                                  | The percentage for the special student loan rate                               |                                                                                                                                       | Personal Information      |
| [Is Eligible For KiwiSaver](#nz-is-eligible-for-kiwisaver){#nz-is-eligible-for-kiwisaver}                                                                   | Employee’s eligibility for KiwiSaver                                           |                                                                                                                                       | Job                       |
| [ESCT Rate Percentage](#nz-esct-rate-percentage){#nz-esct-rate-percentage}                                                                                  | Employer superannuation contribution tax rate                                  |                                                                                                                                       | Job                       |
| [KiwiSaver Employee Contribution Rate Percentage](#nz-kiwisaver-employee-contribution-rate-percentage){#nz-kiwisaver-employee-contribution-rate-percentage} | Employee’s KiwiSaver contribution percentage                                   | Options: 0%, 3%, 4%, 6%, 8%, 10%                                                                                                      | Personal Information      |
| [KiwiSaver Employer Contribution Rate Percentage](#nz-kiwisaver-employer-contribution-rate-percentage){#nz-kiwisaver-employer-contribution-rate-percentage} | Employer’s KiwiSaver contribution percentage                                   | Options: 3%, 4%, 5%, 6%, 7%, 8%, 9%, 10%                                                                                              | Integration Configuration |
| [KiwiSaver Opt Out Date](#nz-kiwisaver-opt-out-date){#nz-kiwisaver-opt-out-date}                                                                            | The date the employee opted out of KiwiSaver                                   |                                                                                                                                       | Job                       |
| [KiwiSaver Contribution Holiday End Date](#nz-kiwisaver-contribution-holiday-end-date){#nz-kiwisaver-contribution-holiday-end-date}                         | End date of the employee’s KiwiSaver contribution holiday                      |                                                                                                                                       | Job                       |
| [Has Student Loan Balance](#nz-has-student-loan-balance){#nz-has-student-loan-balance}                                                                      | Whether the employee has a remaining student loan balance                      |                                                                                                                                       | Personal Information      |
| [Student Loan Balance](#nz-student-loan-balance){#nz-student-loan-balance}                                                                                  | The remaining balance of the employee’s student loan as per the letter from IR |                                                                                                                                       | Personal Information      |
| [Student Loan As At](#nz-student-loan-as-at){#nz-student-loan-as-at}                                                                                        | Date of the letter indicating the student loan balance                         |                                                                                                                                       | Personal Information      |
| [Payment Method](#nz-payment-method){#nz-payment-method}                                                                                                    | Method by which the employee is paid (eg, Cheque, Electronically, Manual)      | Options: Cheque, Electronically, Manual                                                                                               | Integration Configuration |
| [Account Name](#nz-account-name){#nz-account-name}                                                                                                          | Name of the employee’s bank account                                            | Maximum 32 characters Mandatory                                                                                                       | Personal Information      |
| [Account Number](#nz-account-number){#nz-account-number}                                                                                                    | Employee’s bank account number                                                 | Digits only, maximum 8 digits Mandatory                                                                                               | Personal Information      |
| [Sort Code](#nz-sort-code){#nz-sort-code}                                                                                                                   | Employee’s bank account sort code                                              | Must be exactly 6 digits Mandatory                                                                                                    | Personal Information      |
| [Start Date](#nz-start-date){#nz-start-date}                                                                                                                | Employment start date                                                          | Must follow the format YYYY-MM-DD                                                                                                     | Job                       |
| [End Date](#nz-end-date){#nz-end-date}                                                                                                                      | Employment end date                                                            | Must follow the format YYYY-MM-DD (defaults to 7 days after if Fixed Term and empty)                                                  | Job                       |

# Payroll AU: Integration configuration

| Configuration                                                                 | Description                                                                           | Values                                                  |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| [Statement text](#cfg-au-statement-text){#cfg-au-statement-text}              | The text that will appear on your employee's bank statement when they receive payment |                                                         |
| [Employment type](#cfg-au-employment){#cfg-au-employment}                     | Type of employment with the employee                                                  | Employee, Contractor                                    |
| [Employment basis](#cfg-au-employment-basis){#cfg-au-employment-basis}        | Basis of engagement with the employee for tax purposes                                | Full-time, part-time, casual, labour hire, non-employee |
| [Address region](#cfg-au-region){#cfg-au-region}                              | Default region used if not provided                                                   | ACT, NSW, NT, QLD, SA, TAS, VIC, WA                     |
| [Earnings Rate](#cfg-au-earnings-rate){#cfg-au-earnings-rate}                 | Xero unique identifier for earnings rate                                              | Optional                                                |
| [Pay Run Calendar](#cfg-au-pay-run-calendar){#cfg-au-pay-run-calendar}        | Xero unique identifier for payroll calendar for the employee                          | Optional                                                |
| [Super Fund](#cfg-au-super-fund){#cfg-au-super-fund}                          | Xero identifier for super fund; requires EmployeeNumber                               | Optional                                                |
| [External Id Generator](#cfg-au-super-fund-emp-id){#cfg-au-super-fund-emp-id} | Recommended to use the 15 digit generator on the integration (for Super Fund)         | Optional                                                |

## Payroll AU: PICMI-Xero integration fields

| Field Name                                                              | Description                                                   | Validation/Constraint/Default Value                    | Source               |
|-------------------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------|----------------------|
| [Surname](#au-surname){#au-surname}                                     | Last name of the employee                                     | Mandatory                                              | Personal Information |
| [First Name](#au-first-name){#au-first-name}                            | First name of the employee                                    | Mandatory                                              | Personal Information |
| [Date Of Birth](#au-date-of-birth){#au-date-of-birth}                   | Employee's date of birth                                      | Optional, preferred format: dd/MM/yyyy                 | Personal Information |
| [Email](#au-email){#au-email}                                           | Employee's email address                                      | Must be a valid email format                           | Personal Information |
| [Phone Number](#au-phone-number){#au-phone-number}                      | Employee's phone number                                       | Maximum 13 digits, no dashes or spaces, no '+'         | Personal Information |
| [Address](#au-address){#au-address}                                     | Employee’s home address, including street, city, and postcode | Mandatory                                              | Personal Information |
| [Gender](#au-gender){#au-gender}                                        | Gender of the employee                                        | Options: Male/Female/Non-Binary/Not Stated             | Personal Information |
| [Job Title](#au-job-title){#au-job-title}                               | Employee’s job title                                          | Optional                                               | Job                  |
| [Employment Type](#au-employment-type){#au-employment-type}             | Type of employment for the employee                           | Optional, Fulltime, Parttime, Casual, Labourhire, etc. | Job                  |
| [Start Date](#au-start-date){#au-start-date}                            | Employment start date                                         | Optional, preferred format: YYYY-MM-DD                 | Job                  |
| [Bank Account Name](#au-bank-account-name){#au-bank-account-name}       | The name of the bank account                                  | Optional, 32 characters maximum                        | Personal Information |
| [Bank Account BSB](#au-bank-account-bsb){#au-bank-account-bsb}          | The BSB number of the account                                 | Optional                                               | Personal Information |
| [Bank Account Number](#au-bank-account-number){#au-bank-account-number} | The account number                                            | Optional                                               | Personal Information |
| [Tax Declaration](#au-tax-declaration){#au-tax-declaration}             | Employee’s tax declaration                                    | Optional                                               | Personal Information |
| [Earnings Rate](#au-earnings-rate){#au-earnings-rate}                   | Xero unique identifier for earnings rate                      | Optional                                               | Configuration        |
| [Pay Run Calendar](#au-pay-run-calendar){#au-pay-run-calendar}          | Xero unique identifier for payroll calendar for employee      | Optional                                               | Configuration        |
| [Super Fund](#au-super-fund){#au-super-fund}                            | Xero identifier for super fund, requires EmployeeNumber       | Optional                                               | Configuration        |

## Authorisation

To connect PICMI with Xero, we use **OAuth** (a simple one-click authorisation). Just make sure you sign in to both Xero
and PICMI in your browser to link the two systems.

[Read more about OAuth in our integrations guide](integrations.md#different-ways-to-authorise-picmi-to-transfer-data)

### Key things to know about Xero's authorisation rules:

- When you first connect PICMI to Xero, Xero gives us a **one-time code**. This code **expires after 5 minutes**, so it
  must be used quickly.
- That one-time code lets PICMI securely request:
    - An **access token** – this allows us to talk to Xero on your behalf.
    - A **refresh token** – this allows us to keep that connection going over time.
- The **access token** only lasts **30 minutes**, but don’t worry – PICMI refreshes it automatically in the background.
- The **refresh token** lasts **60 days**, but again, you don’t need to worry – PICMI automatically refreshes it after *
  *45 days** to keep things running smoothly.
- If the **refresh token ever expires**, you’ll need to re-authorise PICMI by going through the connection process
  again.

## Troubleshooting

If you notice any discrepancies between PICMI and Xero:

- **Re-authorisation**: If needed, re-authorise the integration by reconnecting your Xero account.
- **Email field with sub-alias**: If an employee's job has ended and some time has passed, you can’t create a new user
  with the same email
  address. To handle this, PICMI will automatically create the user using a [sub-alias email](../faqs#emails) of the
  original email **adding the month and year** (eg `hone.smith+08-2024@example.com`)

::: prompt
PICMI will automatically keep your token up to date by refreshing it before it expires (at about the half-way point)
:::

:::: explanation
## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)
::::
