# Xero integration overview

## PICMI-Xero integration fields

| **Field Name**                                      | **Description**                                                                | **Validation/Constraint/Default Value**                                                                                               | **Source**                |
|-----------------------------------------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| **Employee ID**                                     | Unique identifier for the employee                                             | -1 if updating, otherwise uses employee ID                                                                                            | Integration Configuration |
| **First Name**                                      | First name of the employee                                                     | Maximum 35 characters Mandatory                                                                                                       | Personal Information      |
| **Last Name**                                       | Last name of the employee                                                      | Maximum 35 characters Mandatory                                                                                                       | Personal Information      |
| **Date Of Birth**                                   | Employee's date of birth                                                       | Must follow the format YYYY-MM-DD Mandatory                                                                                           | Job                       |
| **Gender**                                          | Gender of the employee                                                         | Options: M/F                                                                                                                          | Personal Information      |
| **Email**                                           | Employee's email address                                                       | Mandatory if the account type is not 'Staff' More in [troubleshooting](#troubleshooting) sub-alias emails for existing archived users | Job                       |
| **Phone Number**                                    | Employee's phone number                                                        | Maximum 15 digits with single spaces, no plus sign (+)                                                                                | Personal Information      |
| **Address**                                         | Employee’s home address, including street, city, suburb, and postcode          | Mandatory                                                                                                                             | Personal Information      |
| **Employment Type**                                 | Type of employment (eg, full-time, part-time)                                  |                                                                                                                                       | Integration Configuration |
| **Job Title**                                       | Job title of the employee                                                      |                                                                                                                                       | Job                       |
| **IRD Number**                                      | The employee's IRD (Inland Revenue Department) number                          |                                                                                                                                       | Personal Information      |
| **Tax Code**                                        | Employee's tax code                                                            | Options: M, M SL, ME, ME SL, etc Refer to NZ tax codes                                                                                | Personal Information      |
| **Special Tax Rate Percentage**                     | Special tax rate percentage                                                    |                                                                                                                                       | Personal Information      |
| **Has Special Student Loan Rate**                   | Whether the employee has a special student loan rate                           |                                                                                                                                       | Personal Information      |
| **Special Student Loan Rate Percentage**            | The percentage for the special student loan rate                               |                                                                                                                                       | Personal Information      |
| **Is Eligible For KiwiSaver**                       | Employee’s eligibility for KiwiSaver                                           |                                                                                                                                       | Job                       |
| **ESCT Rate Percentage**                            | Employer superannuation contribution tax rate                                  |                                                                                                                                       | Job                       |
| **KiwiSaver Employee Contribution Rate Percentage** | Employee’s KiwiSaver contribution percentage                                   | Options: 0%, 3%, 4%, 6%, 8%, 10%                                                                                                      | Personal Information      |
| **KiwiSaver Employer Contribution Rate Percentage** | Employer’s KiwiSaver contribution percentage                                   | Options: 3%, 4%, 5%, 6%, 7%, 8%, 9%, 10%                                                                                              | Integration Configuration |
| **KiwiSaver Opt Out Date**                          | The date the employee opted out of KiwiSaver                                   |                                                                                                                                       | Job                       |
| **KiwiSaver Contribution Holiday End Date**         | End date of the employee’s KiwiSaver contribution holiday                      |                                                                                                                                       | Job                       |
| **Has Student Loan Balance**                        | Whether the employee has a remaining student loan balance                      |                                                                                                                                       | Personal Information      |
| **Student Loan Balance**                            | The remaining balance of the employee’s student loan as per the letter from IR |                                                                                                                                       | Personal Information      |
| **Student Loan As At**                              | Date of the letter indicating the student loan balance                         |                                                                                                                                       | Personal Information      |
| **Payment Method**                                  | Method by which the employee is paid (eg, Cheque, Electronically, Manual)      | Options: Cheque, Electronically, Manual                                                                                               | Integration Configuration |
| **Account Name**                                    | Name of the employee’s bank account                                            | Maximum 32 characters Mandatory                                                                                                       | Personal Information      |
| **Account Number**                                  | Employee’s bank account number                                                 | Digits only, maximum 8 digits Mandatory                                                                                               | Personal Information      |
| **Sort Code**                                       | Employee’s bank account sort code                                              | Must be exactly 6 digits Mandatory                                                                                                    | Personal Information      |
| **Start Date**                                      | Employment start date                                                          | Must follow the format YYYY-MM-DD                                                                                                     | Job                       |

## Authorisation

* [OAuth](integrations.md#different-ways-to-authorise-picmi-to-transfer-data)

## Troubleshooting

If you notice any discrepancies between PICMI and Xero:

- **Re-authorisation**: If needed, re-authorise the integration by reconnecting your Xero account.
- **Email field with sub-alias**: If an employee's job has ended and some time has passed, you can’t create a new user
  with the same email
  address. To handle this, PICMI will automatically create the user using a [sub-alias email](../faqs#emails) of the
  original email **adding the month and year** (eg `hone.smith+08-2024@example.com`)

<box>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</box>
