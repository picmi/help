# PaySauce integration overview

## PICMI-PaySauce integration fields

| **Field Name**                                       | **Description**                          | **Validation/Constraint/Default Value**                                                                     | **Source**                |
|------------------------------------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------|
| **Reference number**                                 | Unique identifier for the employee       |                                                                                                             | Integration Configuration |
| **First name**                                       | Employee's given name                    |                                                                                                             | Personal Information      |
| **Last name**                                        | Employee's family name                   | Mandatory                                                                                                   | Personal Information      |
| **Date of birth**                                    | Employee's birthdate                     | Format: dd/mm/yyyy. Mandatory                                                                               | Job                       |
| **Gender**                                           | Employee's gender                        | Male, Female                                                                                                | Personal Information      |
| **Email**                                            | Employee's email address                 | Mandatory                                                                                                   | Job                       |
| **Phone**                                            | Employee's phone number                  |                                                                                                             | Personal Information      |
| **Address 1**                                        | Employee's street address                |                                                                                                             | Personal Information      |
| **Address 2**                                        | Employee's locality                      |                                                                                                             | Personal Information      |
| **Address 3**                                        | Employee's city                          |                                                                                                             | Personal Information      |
| **Emergency contact name**                           | Name of emergency contact person         |                                                                                                             | Job                       |
| **Emergency phone**                                  | Phone number of emergency contact person |                                                                                                             | Job                       |
| **IRD number**                                       | Employee's tax number                    | Format: ########. Mandatory                                                                                 | Personal Information      |
| **Bank account**                                     | Employee's bank account number           | Format: ##-####-######-##. Mandatory                                                                        | Personal Information      |
| **Start date**                                       | Employee's start date                    | Format: dd/mm/yyyy Mandatory                                                                                | Job                       |
| **Next financial year date**                         | Date of the next financial year          | Format: dd/mm/yyyy Could be auto derived Mandatory                                                          | Integration Configuration |
| **Tax code**                                         | Employee's tax code                      | M, M SL, ME, ME SL, SB, SB SL, S, S SL, SH, SH SL, ST, ST SL, STC, STC SL, ND, CAE, EDW, NSW, WT. Mandatory | Personal Information      |
| **Tax rate**                                         | Applicable tax rate                      | Required for WT or STC tax codes                                                                            |                           |
| **KiwiSaver employee deduction**                     | Employee's KiwiSaver contribution rate   | 0, 3, 4, 6, 8, 10 Default: 0 if not provided. Mandatory                                                     | Personal Information      |
| **KiwiSaver employer contribution**                  | Employer's KiwiSaver contribution rate   | 3, 4, 5, 6, 7, 8, 9, 10. Mandatory                                                                          | Integration Configuration |
| **Payment type**                                     | Type of payment (salary, hourly, etc)    | Hourly, Annual Salary, Period Salary, Rate & Quantity. Mandatory                                            | Integration Configuration |
| **Payment rate**                                     | Employee's pay rate                      | Mandatory                                                                                                   | Job                       |
| **Payment hours/quantity**                           | Total payment hours or quantity          |                                                                                                             |                           |
| **Payment taxable**                                  | Whether the payment is taxable           | Y, N. Mandatory                                                                                             | Integration Configuration |
| **Leave type**                                       | Employee's leave type                    | Standard Hours, Casual Hours, Varied Hours. Mandatory                                                       | Integration Configuration |
| **Standard hours per pay period**                    | Number of hours worked in a pay period   | Integer value. Mandatory                                                                                    | Integration Configuration |
| **Standard days per pay period**                     | Number of days worked in a pay period    | Integer value. Mandatory                                                                                    | Integration Configuration |
| **Leave paid 8%**                                    | Whether leave is paid at 8%              | Y, N                                                                                                        |                           |
| **Leave anniversary**                                | Anniversary date for leave entitlements  | Format: dd/mm/yyyy Need rules for validation. Mandatory                                                     | Integration Configuration |
| **Entitled leave**                                   | Total entitled leave                     |                                                                                                             |                           |
| **Accrued leave**                                    | Total accrued leave                      | Default: 0                                                                                                  |                           |
| **Total taxable income in current anniversary year** | Cumulative taxable income for the year   | Default: 0                                                                                                  |                           |
| **Annual leave taken**                               | Total annual leave taken                 | Default: 0                                                                                                  |                           |
| **Sick anniversary**                                 | Anniversary date for sick leave          | Format: dd/mm/yyyy                                                                                          |                           |
| **Accrued sick leave**                               | Total accrued sick leave                 | Default: 0                                                                                                  |                           |
| **Accrued alternate leave**                          | Total accrued alternate leave            | Default: 0                                                                                                  |                           |
| **EXTRA deductions**                                 | Any additional deductions                |                                                                                                             |                           |
| **EXTRA allowances**                                 | Any additional allowances                |                                                                                                             |                           |
| **EXTRA other**                                      | Any other additional information         |                                                                                                             |                           |

<box>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</box>
