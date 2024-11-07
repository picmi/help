# Integration Configuration integration overview

## PICMI-Integration Configuration integration fields

Here’s the integration fields table created from your CSV data, following the specified formatting and guidelines:

| **Field Name**                      | **Description**                                    | **Validation/Constraint/Default Value**                                                    | **Source**                |
|-------------------------------------|----------------------------------------------------|--------------------------------------------------------------------------------------------|---------------------------|
| **Employee number**                 | Unique identifier for the employee                 |                                                                                            | Integration Configuration |
| **First names**                     | Employee's given names                             |                                                                                            | Personal Information      |
| **Surname**                         | Employee's family name                             |                                                                                            | Personal Information      |
| **Birth date**                      | Employee's birthdate                               | Format: dd/MM/yyyy                                                                         | Personal Information      |
| **Gender**                          | Employee's gender                                  | M, F, A. Default: A. Mandatory                                                             | Personal Information      |
| **Address line 1**                  | Employee's postal address (Street)                 | 1. No address → Empty 2. Not supplied → No address supplied 3. Full address without commas | Personal Information      |
| **Address line 2**                  | Employee's postal address (Region)                 |                                                                                            | Personal Information      |
| **Address line 3**                  | Employee's postal address (Locality)               |                                                                                            | Personal Information      |
| **Address line 4**                  | Employee's postal address (Postal Code)            |                                                                                            | Personal Information      |
| **Home phone**                      | Employee's home phone number                       | 13 characters only                                                                         | Personal Information      |
| **Occupation**                      | Employee's occupation                              | Mandatory                                                                                  | Integration Configuration |
| **Pay point**                       | Designated pay point for the employee              | Mandatory                                                                                  | Integration Configuration |
| **Costing code**                    | Employee's costing code                            | Mandatory                                                                                  | Integration Configuration |
| **Apprentice**                      | Apprentice status                                  | Y, N, T, F. Default: N. Mandatory                                                          |                           |
| **Start date**                      | Employee's start date                              | Format: dd/MM/yyyy. Mandatory                                                              | Job                       |
| **Employee type**                   | Type of employment                                 | S, W. Default: W. Mandatory                                                                |                           |
| **Pay frequency**                   | Frequency of pay                                   | W, F, H, Q, M. Default: W. Mandatory                                                       |                           |
| **Salary**                          | Employee's salary                                  | [Blank], Money. Default: [Blank]. Mandatory                                                |                           |
| **Hourly pay rate 1**               | Employee's primary hourly pay rate                 |                                                                                            | Job                       |
| **Tax code**                        | Employee's tax code                                |                                                                                            | Questions                 |
| **IRD number**                      | Employee's tax identification number               | Format: 000-000-000 (digits only). Mandatory                                               | Questions                 |
| **Payment method**                  | Method of payment                                  | B, Q, C. Default: B. Mandatory                                                             | Integration Configuration |
| **Bank account**                    | Employee's bank account number                     | Format: 00-0000-0000000-00 (digits only)                                                   | Questions                 |
| **Bank reference**                  | Reference used for bank transactions               |                                                                                            | Integration Configuration |
| **Bank particulars**                | Particulars for bank transactions                  |                                                                                            | Integration Configuration |
| **Hours worked per day**            | Hours worked by the employee per day               | Default: 8. Mandatory                                                                      |                           |
| **Hours worked per period**         | Hours worked by the employee per pay period        | Default: 5. Mandatory                                                                      |                           |
| **Annual leave type**               | Type of annual leave                               | F, P, C. Default: C. Mandatory                                                             |                           |
| **Annual leave units**              | Units for annual leave                             | D, H. Default: H. Mandatory                                                                |                           |
| **Email address**                   | Employee's email address                           |                                                                                            |                           |
| **Email payslip**                   | Whether the employee receives payslip via email    | Y, N, T, F. Default: Y. Mandatory                                                          | Integration Configuration |
| **Print payslip**                   | Whether the payslip is printed                     | Y, N, T, F                                                                                 | Integration Configuration |
| **GSCM**                            | GSCM flag                                          | Y, N, T, F. Default: N. Mandatory                                                          |                           |
| **Use average daily pay**           | Use of average daily pay method                    | Y, N, T, F. Default: Y. Mandatory                                                          |                           |
| **Time in lieu units**              | Units for time in lieu                             | D, H. Default: D. Mandatory                                                                |                           |
| **Time in lieu pay on termination** | Whether time in lieu is paid on termination        | Y, N, T, F. Default: Y. Mandatory                                                          |                           |
| **KiwiSaver entry status**          | Employee's KiwiSaver entry status                  | N, A, O, E. Mandatory                                                                      | Questions                 |
| **KiwiSaver opt in date**           | Date the employee opted into KiwiSaver             |                                                                                            | Questions                 |
| **KiwiSaver employee active**       | Whether the employee is actively contributing      |                                                                                            | Questions                 |
| **KiwiSaver employee percentage**   | Employee's KiwiSaver contribution percentage       |                                                                                            | Integration Configuration |
| **KiwiSaver ESCT tax rate code**    | KiwiSaver employee's ESCT tax rate code            |                                                                                            | Integration Configuration |
| **KiwiSaver contrib GL account**    | General ledger account for KiwiSaver contributions |                                                                                            | Integration Configuration |
| **KiwiSaver opt out**               | Whether the employee opted out of KiwiSaver        |                                                                                            | Questions                 |
| **KiwiSaver opt out date**          | Date the employee opted out of KiwiSaver           |                                                                                            | Questions                 |
| **Sick leave units**                | Units for sick leave                               | D, H. Default: D                                                                           |                           |
| **SL full entitlement**             | Full sick leave entitlement                        | Default: 10                                                                                |                           |
| **SL next entitlement**             | Next sick leave entitlement                        | Default: 10                                                                                |                           |
| **SL maximum**                      | Maximum sick leave entitlement                     | Default: 20                                                                                |                           |
| **FVL recording method**            | Method for recording FVL                           | D, H. Default: D                                                                           |                           |
| **FVL full entitlement**            | Full FVL entitlement                               | Default: 10                                                                                |                           |
| **FVL next entitlement**            | Next FVL entitlement                               | Default: 10                                                                                |                           |
| **End**                             | End flag or status                                 | Default: E. Mandatory                                                                      |                           |

<explanation>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
