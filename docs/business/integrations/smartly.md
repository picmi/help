# Smartly integration overview

## PICMI-Smartly integration fields

| **Field Name**                    | **Description**                                                               | **Validation/Constraint/Default Value**                                                                                                                                                                                         | **Source**                       |
|-----------------------------------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| **Employee code**                 | External identifier for the employee, generated according to predefined rules | A-Z0-9 (5 chars) (case insensitive)                                                                                                                                                                                             | Integration                      |
| **First name**                    | Given name of the employee                                                    | No special characters except apostrophe (')                                                                                                                                                                                     | Questions                        |
| **Surname**                       | Family name of the employee                                                   | No special characters except apostrophe (')                                                                                                                                                                                     | Questions                        |
| **Date of birth**                 | Birthdate of the employee                                                     | Format: dd/MM/yyyy                                                                                                                                                                                                              | Questions                        |
| **Gender**                        | Gender identity of the employee                                               | M, F, N. Default: N                                                                                                                                                                                                             | Questions                        |
| **Address 1**                     | Primary address of the employee                                               | Max 30 charactersIf not supplied, label as "Not Supplied"                                                                                                                                                                       | Personal Information (Jobseeker) |
| **Address 2**                     | Secondary address information (e.g., locality)                                | Max 30 characters                                                                                                                                                                                                               | Personal Information (Jobseeker) |
| **Address 3**                     | Tertiary address information (e.g., region and postal code)                   | Max 30 characters                                                                                                                                                                                                               | Personal Information (Jobseeker) |
| **Regional anniversary day**      | Regional public holiday for the employee                                      | AKL, CANS, CAN, CHAT, HAW, MAR, NEL, OTA, STH, TAR, WEL, WES                                                                                                                                                                    | Integration Configuration        |
| **Contact phone number**          | Landline phone number of the employee                                         | Optional                                                                                                                                                                                                                        | Personal Information (Jobseeker) |
| **Mobile phone number**           | Mobile phone number of the employee                                           | 0-9 (max 12), New Zealand numbers only                                                                                                                                                                                          | Personal Information (Jobseeker) |
| **Email**                         | Email address of the employee                                                 | Required if EmailPaySlip is selected                                                                                                                                                                                            | Personal Information (Jobseeker) |
| **Start date**                    | Date the employee's contract begins                                           | Format: dd/MM/yyyy Default to today                                                                                                                                                                                             | Job                              |
| **Position**                      | Job title of the employee                                                     | Mandatory                                                                                                                                                                                                                       | Job                              |
| **Position start date**           | Date the employee started their current position                              |                                                                                                                                                                                                                                 |                                  |
| **Team**                          | Team or department the employee belongs to                                    |                                                                                                                                                                                                                                 |                                  |
| **Home costing**                  | Cost allocation related to the employee's home location                       |                                                                                                                                                                                                                                 |                                  |
| **Tenure ID**                     | Employment type of the employee (e.g., full-time, part-time)                  | 1 Full Time, 2 Part Time, 3 Casual, 4 Working Proprietor, 13 Fixed Term - Full Time, 14 Fixed Term - Part Time                                                                                                                  | Integration Configuration        |
| **IRD number**                    | Employee's tax identification number                                          | Format: 000-000-000                                                                                                                                                                                                             | Questions                        |
| **Tax code**                      | Employee's tax code                                                           | NZ IRD                                                                                                                                                                                                                          | Questions                        |
| **Special rate**                  | Special tax rate for the employee, if applicable                              |                                                                                                                                                                                                                                 |                                  |
| **Bank account number**           | Employee's bank account number                                                | Format: 00-0000-0000000-00                                                                                                                                                                                                      | Questions                        |
| **ECG description**               | Description of the employee's specific pay group                              | Business-specific pay group description, must be added manually or in the CSVExample: "SLU Payrun"                                                                                                                              | Integration Configuration        |
| **Rate**                          | Pay rate for the employee                                                     |                                                                                                                                                                                                                                 | Job                              |
| **KiwiSaver option**              | KiwiSaver contribution status of the employee                                 | 1 Opting In (Automatic enrolment), 6 Opting In (Existing member), 8 Opting In (Voluntary enrolment), 3 Opting Out, 9 Opting Out (Over 65), 4 Savings Suspension, 5 Exempt, 7 Exempt (Casual/Tempemployee), 10 Exempt (Under 18) | Questions                        |
| **KiwiSaver contribution**        | Percentage of the employee's contribution to KiwiSaver                        | 0-10. Default: 0                                                                                                                                                                                                                | Questions                        |
| **Employer subsidy contribution** | Employer contribution to the employee's KiwiSaver account                     | Set when employee is setDefault: 0                                                                                                                                                                                              | Integration Configuration        |
| **Pay group description**         | Description of the employee's pay group                                       | Business-specific pay group description, must be added manually or in the CSVExample: "SLU Payrun"                                                                                                                              | Integration Configuration        |
| **Standard hours per day**        | Standard number of working hours per day for the employee                     | 0-24. Default: 0                                                                                                                                                                                                                |                                  |
| **Standard days per week**        | Standard number of working days per week for the employee                     | 0-7. Default: 0                                                                                                                                                                                                                 |                                  |
| **Annual leave entitlement**      | Number of annual leave days the employee is entitled to                       | 4-20. Default: 4                                                                                                                                                                                                                |                                  |
| **Sick leave entitlement**        | Number of sick leave days the employee is entitled to.                        | 5-99. Default: 10                                                                                                                                                                                                               |                                  |
| **Sick leave after months**       | Number of months after which sick leave is granted.                           | 0-12. Default: 0                                                                                                                                                                                                                |                                  |
| **Email payslip**                 | Whether the employee opts to receive payslips via email.                      | 0 No, 1 Yes. Default: 1                                                                                                                                                                                                         | Integration Configuration        |

<box>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</box>