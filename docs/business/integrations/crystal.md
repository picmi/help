# Crystal integration overview

## PICMI-Crystal integration fields

| **Field Name**                                                                | **Description**                                       | **Validation/Constraint/Default Value**                                                                             | **Source**                       |
|-------------------------------------------------------------------------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------|
| [Emp no.](#emp-no){#emp-no}                                                   | External identifier for the employee.                 |                                                                                                                     | Integration                      |
| [Employee first names](#employee-first-names){#employee-first-names}          | Given names of the employee.                          |                                                                                                                     | Personal Information (Jobseeker) |
| [Employee last name](#employee-last-name){#employee-last-name}                | Family name of the employee.                          |                                                                                                                     | Personal Information (Jobseeker) |
| [Gender](#gender){#gender}                                                    | Gender identity of the employee.                      | M, F, N/D. Default: N/D                                                                                             | Personal Information (Jobseeker) |
| [Start date](#start-date){#start-date}                                        | Employment start date.                                | dd/MM/yyyy. Default to job start and must be no earlier than tomorrow (so if started in past, the date is tomorrow) | Contract/Job                     |
| [Date of birth](#date-of-birth){#date-of-birth}                               | Birthdate of the employee.                            | dd/MM/yyyy                                                                                                          | Personal Information (Jobseeker) |
| [Address](#address){#address}                                                 | Postal address of the employee.                       | Not supplied, or address                                                                                            | Personal Information (Jobseeker) |
| [Postal code](#postal-code){#postal-code}                                     | Postal code for the employee's address.               | AddressPostal > PostalCode                                                                                          | Personal Information (Jobseeker) |
| [Home phone number](#home-phone-number){#home-phone-number}                   | Home phone number of the employee.                    |                                                                                                                     | Personal Information (Jobseeker) |
| [Mobile phone number](#mobile-phone-number){#mobile-phone-number}             | Mobile phone number of the employee.                  |                                                                                                                     | Personal Information (Jobseeker) |
| [Email address](#email-address){#email-address}                               | Email address of the employee.                        |                                                                                                                     | Personal Information (Jobseeker) |
| [Email payslips](#email-payslips){#email-payslips}                            | Preference for receiving payslips via email.          | Default: Y                                                                                                          | Crystal                          |
| [IRD number](#ird-number){#ird-number}                                        | IRD number of the employee.                           | Format: 000-000-000                                                                                                 | Questions                        |
| [Tax code](#tax-code){#tax-code}                                              | Tax code assigned to the employee.                    | NZ IRD                                                                                                              | Questions                        |
| [Hourly rate for wages](#hourly-rate-for-wages){#hourly-rate-for-wages}       | Hourly wage rate for the employee.                    |                                                                                                                     | Contract/Job                     |
| [Pay frequency](#pay-frequency){#pay-frequency}                               | Frequency of payments for the employee.               |                                                                                                                     | Crystal                          |
| [Bank account number](#bank-account-number){#bank-account-number}             | Bank account number of the employee.                  | Format: 00-0000-0000000-00                                                                                          | Questions                        |
| [KS employee %](#ks-employee-percentage){#ks-employee-percentage}             | KiwiSaver employee contribution percentage.           | Numbers only                                                                                                        | Questions                        |
| [KS employer %](#ks-employer-percentage){#ks-employer-percentage}             | KiwiSaver employer contribution percentage.           | Numbers only, set when employee is set                                                                              | Crystal                          |
| [KS ESCT %](#ks-esct-percentage){#ks-esct-percentage}                         | Employer superannuation contribution tax (ESCT) rate. | Numbers only                                                                                                        | Crystal                          |
| [Emergency contact](#emergency-contact){#emergency-contact}                   | Name of the employee's emergency contact.             |                                                                                                                     | Questions                        |
| [Emergency contact phone](#emergency-contact-phone){#emergency-contact-phone} | Phone number of the employee's emergency contact.     |                                                                                                                     | Questions                        |

<explanation>

General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
