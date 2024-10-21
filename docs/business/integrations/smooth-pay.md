# SmoothPay integration overview

## PICMI-SmoothPay integration fields

| **Field Name**       | **Description**                                                 | **Validation/Constraint/Default Value**                                                          | **Source**                |
|----------------------|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------|---------------------------|
| **Address**          | The postal address of the employee                              | Comma-separated lines will be converted to multi-line, eg Don't include town or postcode         | Personal Information      |
| **Id**               | Unique identifier for the employee in the integration system    | Mandatory                                                                                        | Integration Configuration |
| **Contract**         | Type of employment contract                                     | Permanent [default], Temporary, Casual, Contractor/Agent                                         | Integration Configuration |
| **Days per week**    | Number of days the employee works per week                      | Default 5                                                                                        | Integration Configuration |
| **Birthdate**        | The date of birth of the employee                               | Format: YYYY-MM-DD                                                                               | Job                       |
| **Email**            | Email address of the employee                                   |                                                                                                  | Job                       |
| **Employment**       | Employment type of the employee                                 | Full time [default], Part time, Piece worker                                                     | Integration Configuration |
| **ESCT rate**        | Employee’s ESCT (Employer Superannuation Contribution Tax) rate | Decimal                                                                                          | Integration Configuration |
| **First name**       | The first name of the employee                                  |                                                                                                  | Personal Information      |
| **Gender**           | The gender of the employee                                      | M [default] or F                                                                                 | Personal Information      |
| **Hours per day**    | Number of hours the employee works per day                      | Default 8                                                                                        | Integration Configuration |
| **Hours per week**   | Number of hours the employee works per week                     | Default 40                                                                                       | Integration Configuration |
| **Irregular**        | Indicates if the employee has irregular work patterns           | true        false [empty]                                                                        | Integration Configuration |                
| **KiwiSaver status** | Employee's KiwiSaver enrolment status                           | T/F (enrolled)                                                                                   | Questions                 |
| **Payment**          | Payment method for the employee                                 | Cash, Cheque, Direct credit [default]                                                            | Integration Configuration |
| **Payslip**          | Payslip delivery method for the employee                        | Normal (print/email) [default], no payslip, email only, print only                               | Integration Configuration |
| **Phone**            | Contact phone number of the employee                            |                                                                                                  | Personal Information      |
| **Postcode**         | The postcode of the employee's address                          |                                                                                                  | Personal Information      |
| **Pre-tax earnings** | Pre-tax earnings of the employee                                |                                                                                                  | Personal Information      |
| **Visa status**      | Employment visa status of the employee                          |                                                                                                  | Questions                 |
| **Start date**       | The start date of the employee’s contract                       | Format: YYYY-MM-DD start date, defaults to today                                                 | Job                       |
| **Family name**      | The last name of the employee                                   | Mandatory                                                                                        | Personal Information      |
| **Tax code**         | The tax code applicable to the employee                         | NZ: CAE, EDW, M, MSL, ME, MESL, ND [default], NSW, S, SSL, SB, SBSL, SH, SHSL, ST, STSL, STC, WT | Personal Information      |
| **IRD number**       | The IRD number for tax purposes                                 |                                                                                                  | Questions                 |
| **Town**             | The town or region of the employee's address                    |                                                                                                  | Personal Information      |
| **Wage type**        | Type of wage payment for the employee                           | waged [default], variable salary, fixed salary, net salary (NZ only)                             | Integration Configuration |

<explanation>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
