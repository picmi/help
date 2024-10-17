# iPayroll integration overview

## PICMI-iPayroll integration fields

| **Field Name**                                          | **Description**                                                  | **Validation/Constraint/Default Value**               | **Source**                |
|---------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------|---------------------------|
| **Id**                                                  | Unique identifier for the record.                                |                                                       | Integration Configuration |
| **First names**                                         | Given name(s) of the individual.                                 |                                                       | Personal Information      |
| **Surname**                                             | Family name of the individual.                                   |                                                       | Personal Information      |
| **Email**                                               | Email address of the individual.                                 |                                                       | Personal Information      |
| **Phone**                                               | Phone number of the individual.                                  |                                                       | Personal Information      |
| **Birthdate**                                           | Date of birth of the individual.                                 |                                                       | Personal Information      |
| **Gender**                                              | Gender of the individual.                                        |                                                       | Personal Information      |
| **Street address**                                      | The street address of the individual.                            | AddressPostal > StreetAddress                         | Personal Information      |
| **Locality**                                            | Locality of the address.                                         | AddressPostal > Locality                              | Personal Information      |
| **City**                                                | City of the address.                                             | AddressPostal > Region                                | Personal Information      |
| **Postcode**                                            | Postal code of the address.                                      | AddressPostal > PostalCode                            | Personal Information      |
| **Country**                                             | Country of the address.                                          | AddressPostal > CountryName                           | Personal Information      |
| **Address not supplied**                                | Indicates if the address is not provided.                        | AddressPostal > NotSupplied                           | Personal Information      |
| **Bank account number**                                 | The individual's bank account number.                            |                                                       | Questions                 |
| **Payment frequency**                                   | Frequency of payment (e.g., weekly, monthly).                    |                                                       | Integration Configuration |
| **Payment method**                                      | Method of payment (e.g., direct deposit, cheque).                |                                                       | Integration Configuration |
| **KiwiSaver status**                                    | Current status of the individual's KiwiSaver membership.         | Changable on KiwiSaverStatus factors                  | Questions                 |
| **KiwiSaver rate**                                      | Contribution rate for the KiwiSaver scheme.                      | Changable on KiwiSaverStatus factors                  | Questions                 |
| **Employer subsidy contribution tax rate (ESCT)**       | Tax rate for employer contributions to KiwiSaver.                |                                                       | Integration Configuration |
| **KiwiSaver age range**                                 | Age range applicable for KiwiSaver contributions.                |                                                       | Questions                 |
| **KiwiSaver casual auto enroll exempt**                 | Indicates if the individual is exempt from automatic enrollment. | Changable on KiwiSaverStatus factors                  | Questions                 |
| **KiwiSaver opt-out date**                              | Date the individual opted out of KiwiSaver contributions.        | Changable on KiwiSaverStatus factors                  | Questions                 |
| **Employer subsidy**                                    | Amount of employer subsidy for KiwiSaver contributions.          | Changable on KiwiSaverStatus factors (auto populated) | Integration Configuration |
| **Tax number (Inland Revenue Department (IRD) number)** | Unique tax number for the individual.                            | Changable on KiwiSaverStatus factors                  | Questions                 |
| **Tax code**                                            | Tax code assigned to the individual for tax purposes.            |                                                       | Questions                 |
| **Start date**                                          | Start date of employment or contract.                            |                                                       | Job                       |
| **Job title**                                           | Title of the individual’s position.                              |                                                       | Job                       |
| **Pay rate**                                            | Rate of pay for the individual.                                  |                                                       | Job                       |

<box>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</box>
