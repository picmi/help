# Xero Integration Overview:  Employee


## PICMI-Xero Integration Fields

| **Field Name**                                  | **Description**                                                                 | **Validation/Constraint/Default Value**                                                              | **Source**                       |
|-------------------------------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|----------------------------------|
| **EmployeeID**                                  | Unique identifier for the employee.                                             | `-1` if updating, otherwise uses employee ID.                                                        | Application                      |
| **FirstName**                                   | First name of the employee.                                                     | Maximum 35 characters. Mandatory.                                                                    | Jobseeker (Personal Information) |
| **LastName**                                    | Last name of the employee.                                                      | Maximum 35 characters. Mandatory.                                                                    | Jobseeker (Personal Information) |
| **DateOfBirth**                                 | Employee's date of birth.                                                       | Must follow the format `YYYY-MM-DD`. Mandatory.                                                      | Application (Contract/Job)       |
| **Gender**                                      | Gender of the employee.                                                         | Options: M/F.                                                                                        | Jobseeker (Personal Information) |
| **Email**                                       | Employee's email address.                                                       | Mandatory if the account type is not 'Staff'. More in [troubleshooting] (#troubleshooting) sub-alias | Application (Contract/Job)       |
| **PhoneNumber**                                 | Employee's phone number.                                                        | Maximum 15 digits with single spaces, no plus sign (+).                                              | Jobseeker (Personal Information) |
| **Address**                                     | Employee’s home address, including street, city, suburb, and postcode.          | Mandatory.                                                                                           | Jobseeker (Personal Information) |
| **EmploymentType**                              | Type of employment (e.g., full-time, part-time).                                | No specific constraints.                                                                             | Xero (Integration Configuration) |
| **JobTitle**                                    | Job title of the employee.                                                      | No specific constraints.                                                                             | Application (Contract/Job)       |
| **IRDNumber**                                   | The employee's IRD (Inland Revenue Department) number.                          | No specific constraints.                                                                             | Jobseeker (Personal Information) |
| **TaxCode**                                     | Employee's tax code.                                                            | Options: M, M SL, ME, ME SL, etc. Refer to NZ tax codes.                                             | Jobseeker (Personal Information) |
| **SpecialTaxRatePercentage**                    | Special tax rate percentage.                                                    | No specific constraints.                                                                             | Jobseeker (Personal Information) |
| **HasSpecialStudentLoanRate**                   | Whether the employee has a special student loan rate.                           | No specific constraints.                                                                             | Jobseeker (Personal Information) |
| **SpecialStudentLoanRatePercentage**            | The percentage for the special student loan rate.                               | No specific constraints.                                                                             | Jobseeker (Personal Information) |
| **IsEligibleForKiwiSaver**                      | Employee’s eligibility for KiwiSaver.                                           | No specific constraints.                                                                             | Xero (KiwiSaver Status)          |
| **ESCTRatePercentage**                          | Employer superannuation contribution tax rate.                                  | No specific constraints.                                                                             | Xero (KiwiSaver Status)          |
| **KiwiSaverEmployeeContributionRatePercentage** | Employee’s KiwiSaver contribution percentage.                                   | Options: 0%, 3%, 4%, 6%, 8%, 10%.                                                                    | Jobseeker (Personal Information) |
| **KiwiSaverEmployerContributionRatePercentage** | Employer’s KiwiSaver contribution percentage.                                   | Options: 3%, 4%, 5%, 6%, 7%, 8%, 9%, 10%.                                                            | Xero (Integration Configuration) |
| **KiwiSaverOptOutDate**                         | The date the employee opted out of KiwiSaver.                                   | No specific constraints.                                                                             | Xero (KiwiSaver Status)          |
| **KiwiSaverContributionHolidayEndDate**         | End date of the employee’s KiwiSaver contribution holiday.                      | No specific constraints.                                                                             | Xero (KiwiSaver Status)          |
| **HasStudentLoanBalance**                       | Whether the employee has a remaining student loan balance.                      | No specific constraints.                                                                             | Jobseeker (Personal Information) |
| **StudentLoanBalance**                          | The remaining balance of the employee’s student loan as per the letter from IR. | No specific constraints.                                                                             | Jobseeker (Personal Information) |
| **StudentLoanAsAt**                             | Date of the letter indicating the student loan balance.                         | No specific constraints.                                                                             | Jobseeker (Personal Information) |
| **RegisteredForGST**                            | Whether the employee is registered for GST (Goods and Services Tax).            | Optional field.                                                                                      | Jobseeker (Personal Information) |
| **PaymentMethod**                               | Method by which the employee is paid (e.g., Cheque, Electronically, Manual).    | Options: Cheque, Electronically, Manual.                                                             | Xero (Integration Configuration) |
| **AccountName**                                 | Name of the employee’s bank account.                                            | Maximum 32 characters. Mandatory.                                                                    | Jobseeker (Personal Information) |
| **AccountNumber**                               | Employee’s bank account number.                                                 | Digits only, maximum 8 digits. Mandatory.                                                            | Jobseeker (Personal Information) |
| **SortCode**                                    | Employee’s bank account sort code.                                              | Must be exactly 6 digits. Mandatory.                                                                 | Jobseeker (Personal Information) |
| **StartDate**                                   | Employment start date.                                                          | Must follow the format `YYYY-MM-DD`.                                                                 | Application (Contract/Job)       |
## Authorisation

Xero uses [OAuth](../integrations.md#different-ways-to-authorise-picmi-to-transfer-data)

## Troubleshooting

If you notice any discrepancies between PICMI and Xero:

- [General integration troubleshooting](../integrations#troubleshooting)
- [Integration FAQs](../../faqs#integrations)
- **Re-authorisation**: If needed, re-authorise the integration by reconnecting your Xero account.
- **Email**: If an employee's job has ended and some time has passed, you can’t create a new user with the same email address. To handle this, PICMI will automatically create the user using a [sub-alias](#what-is-a-sub-alias) of the original email **adding the month and year**

### What is a sub-alias?
A sub-alias is a version of an email address that includes an extra part before the "@" symbol. It’s also called an "email alias," "plus address," or "tagged email." For example, if the original email is `hone.smith@example.com`, a sub-alias could be `hone.smith+08-2024@example.com`

**Note:** Some customers already use methods like this, but this approach makes the new email addresses more predictable
