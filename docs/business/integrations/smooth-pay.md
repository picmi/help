# SmoothPay integration overview

## PICMI-SmoothPay integration fields

| Field Name                                               | Description                                                     | Validation/Constraint/Default Value                                                              | Source                    |
|----------------------------------------------------------|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------|---------------------------|
| [Id](#id){#id}                                           | Unique identifier for the employee in the integration system    | Mandatory                                                                                        | Integration Configuration |
| [First name](#first-name){#first-name}                   | The first name of the employee                                  | (special characters are optionally stripped if set in configuration)                             | Personal Information      |
| [Surname](#surname){#surname}                            | The surname of the employee                                     | (special characters are optionally stripped if set in configuration)                             | Personal Information      |
| [Email](#email){#email}                                  | Email address of the employee                                   |                                                                                                  | Job                       |
| [Address](#address){#address}                            | The postal address of the employee                              | Comma-separated lines will be converted to multi-line, eg Don't include town or postcode         | Personal Information      |
| [Birthdate](#birthdate){#birthdate}                      | The date of birth of the employee                               | Format: YYYY-MM-DD                                                                               | Job                       |
| [Gender](#gender){#gender}                               | The gender of the employee                                      | M [default] or F                                                                                 | Personal Information      |
| [Contract](#contract){#contract}                         | Type of employment contract                                     | Permanent [default], Temporary, Casual, Contractor/Agent                                         | Integration Configuration |
| [Days per week](#days-per-week){#days-per-week}          | Number of days the employee works per week                      | Default 5                                                                                        | Integration Configuration |
| [Employment](#employment){#employment}                   | Employment type of the employee                                 | Full time [default], Part time, Piece worker                                                     | Integration Configuration |
| [ESCT rate](#esct-rate){#esct-rate}                      | Employee’s ESCT (Employer Superannuation Contribution Tax) rate | Decimal                                                                                          | Integration Configuration |
| [Hours per day](#hours-per-day){#hours-per-day}          | Number of hours the employee works per day                      | Default 8                                                                                        | Integration Configuration |
| [Hours per week](#hours-per-week){#hours-per-week}       | Number of hours the employee works per week                     | Default 40                                                                                       | Integration Configuration |
| [Irregular](#irregular){#irregular}                      | Indicates if the employee has irregular work patterns           | true        false [empty]                                                                        | Integration Configuration |                
| [KiwiSaver status](#kiwisaver-status){#kiwisaver-status} | Employee's KiwiSaver enrolment status                           | T/F (enrolled)                                                                                   | Questions                 |
| [Payment](#payment){#payment}                            | Payment method for the employee                                 | Cash, Cheque, Direct credit [default]                                                            | Integration Configuration |
| [Payslip](#payslip){#payslip}                            | Payslip delivery method for the employee                        | Normal (print/email) [default], no payslip, email only, print only                               | Integration Configuration |
| [Phone](#phone){#phone}                                  | Contact phone number of the employee                            |                                                                                                  | Personal Information      |
| [Postcode](#postcode){#postcode}                         | The postcode of the employee's address                          |                                                                                                  | Personal Information      |
| [Pre-tax earnings](#pre-tax-earnings){#pre-tax-earnings} | Pre-tax earnings of the employee                                |                                                                                                  | Personal Information      |
| [Visa status](#visa-status){#visa-status}                | Employment visa status of the employee                          |                                                                                                  | Questions                 |
| [Start date](#start-date){#start-date}                   | The start date of the employee’s contract                       | Format: YYYY-MM-DD start date, defaults to today                                                 | Job                       |
| [Family name](#family-name){#family-name}                | The last name of the employee                                   | Mandatory                                                                                        | Personal Information      |
| [Tax code](#tax-code){#tax-code}                         | The tax code applicable to the employee                         | NZ: CAE, EDW, M, MSL, ME, MESL, ND [default], NSW, S, SSL, SB, SBSL, SH, SHSL, ST, STSL, STC, WT | Personal Information      |
| [IRD number](#ird-number){#ird-number}                   | The IRD number for tax purposes                                 |                                                                                                  | Questions                 |
| [Town](#town){#town}                                     | The town or region of the employee's address                    |                                                                                                  | Personal Information      |
| [Wage type](#wage-type){#wage-type}                      | Type of wage payment for the employee                           | waged [default], variable salary, fixed salary, net salary (NZ only)                             | Integration Configuration |

:::: explanation
## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)
::::
