# Crystal integration overview

## PICMI-Crystal integration fields

| **Field Name**              | **Description**                                       | **Validation/Constraint/Default Value**                                                                             | **Source** {#source}             |
|-----------------------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------|
| **Emp no.**                 | External identifier for the employee.                 |                                                                                                                     | Integration                      |
| **Employee first names**    | Given names of the employee.                          |                                                                                                                     | Personal Information (Jobseeker) |
| **Employee last name**      | Family name of the employee.                          |                                                                                                                     | Personal Information (Jobseeker) |
| **Gender**                  | Gender identity of the employee.                      | M, F, N/D. Default: N/D                                                                                             | Personal Information (Jobseeker) |
| **Start date**              | Employment start date.                                | dd/MM/yyyy. Default to job start and must be no earlier than tomorrow (so if started in past, the date is tomorrow) | Contract/Job                     |
| **Date of birth**           | Birthdate of the employee.                            | dd/MM/yyyy                                                                                                          | Personal Information (Jobseeker) |
| **Address**                 | Postal address of the employee.                       | Not supplied, or address                                                                                            | Personal Information (Jobseeker) |
| **Postal code**             | Postal code for the employee's address.               | AddressPostal > PostalCode                                                                                          | Personal Information (Jobseeker) |
| **Home phone number**       | Home phone number of the employee.                    |                                                                                                                     | Personal Information (Jobseeker) |
| **Mobile phone number**     | Mobile phone number of the employee.                  |                                                                                                                     | Personal Information (Jobseeker) |
| **Email address**           | Email address of the employee.                        |                                                                                                                     | Personal Information (Jobseeker) |
| **Email payslips**          | Preference for receiving payslips via email.          | Default: Y                                                                                                          | Crystal                          |
| **IRD number**              | IRD number of the employee.                           | Format: 000-000-000                                                                                                 | Questions                        |
| **Tax code**                | Tax code assigned to the employee.                    | NZ IRD                                                                                                              | Questions                        |
| **Hourly rate for wages**   | Hourly wage rate for the employee.                    |                                                                                                                     | Contract/Job                     |
| **Pay frequency**           | Frequency of payments for the employee.               |                                                                                                                     | Crystal                          |
| **Bank account number**     | Bank account number of the employee.                  | Format: 00-0000-0000000-00                                                                                          | Questions                        |
| **KS employee %**           | KiwiSaver employee contribution percentage.           | Numbers only                                                                                                        | Questions                        |
| **KS employer %**           | KiwiSaver employer contribution percentage.           | Numbers only, set when employee is set                                                                              | Crystal                          |
| **KS ESCT %**               | Employer superannuation contribution tax (ESCT) rate. | Numbers only                                                                                                        | Crystal                          |
| **Emergency contact**       | Name of the employee's emergency contact.             |                                                                                                                     | Questions                        |
| **Emergency contact phone** | Phone number of the employee's emergency contact.     |                                                                                                                     | Questions                        |

<explanation>

General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
