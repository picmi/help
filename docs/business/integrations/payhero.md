# PayHero integration overview

## PICMI-PayHero integration fields

| **Field Name**                                    | **Description**                                                                  | **Validation/Constraint/Default Value**                | **Source**                |
|---------------------------------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------|---------------------------|
| **First name**                                    | Given name of the individual.                                                    | Mandatory                                              | Personal Information      |
| **Surname**                                       | Family name of the individual.                                                   | Mandatory                                              | Personal Information      |
| **Preferred name**                                | Preferred name used by the individual, typically the first and surname combined. | First + Surname, Mandatory                             | Personal Information      |
| **Email**                                         | Email address of the individual.                                                 |                                                        | Personal Information      |
| **Phone**                                         | Phone number of the individual.                                                  |                                                        | Personal Information      |
| **Birthdate**                                     | Date of birth of the individual.                                                 |                                                        | Personal Information      |
| **Gender**                                        | Gender identity of the individual.                                               | Gender Diverse                                         | Personal Information      |
| **Street address**                                | Street address of the individual.                                                | AddressPostal > StreetAddress                          | Personal Information      |
| **City**                                          | City where the individual resides.                                               | AddressPostal > Region                                 | Personal Information      |
| **Postcode**                                      | Postal code for the individual's address.                                        | AddressPostal > PostalCode                             | Personal Information      |
| **Emergency contact name**                        | Name of the individual's emergency contact.                                      |                                                        | Questions                 |
| **Emergency contact phone**                       | Phone number of the individual's emergency contact.                              |                                                        | Questions                 |
| **Bank account number**                           | Bank account number of the individual (stripped of dashes).                      |                                                        | Questions                 |
| **Tax number**                                    | Individual's tax number (IRD number, stripped of dashes).                        | Mandatory                                              | Questions                 |
| **Tax code**                                      | Tax code applicable to the individual.                                           | Mandatory                                              | Questions                 |
| **Start date**                                    | Start date of employment or contract.                                            | Today + 1 day, Mandatory                               | Job                       |
| **Job title**                                     | Title of the individual's position.                                              |                                                        | Job                       |
| **KiwiSaver pre-existing member**                 | Indicates if the individual is a pre-existing KiwiSaver member.                  | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| **KiwiSaver rate**                                | Contribution rate for KiwiSaver.                                                 | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| **KiwiSaver opt-out date**                        | Date set when an individual opts out of KiwiSaver.                               | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| **Enrolment date**                                | Date of enrolment in KiwiSaver.                                                  | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| **Employer subsidy contribution tax rate (esct)** | Tax rate for employer subsidy contributions.                                     |                                                        | Integration Configuration |
| **Pay rate**                                      | Rate of pay for the individual.                                                  |                                                        | Job                       |
| **Salary flag**                                   | Indicator for salary employment type; must be set to avoid API errors.           | FALSE, Mandatory                                       | Integration Configuration |
| **Contractor flag**                               | Indicator for contractor employment type; must be set to avoid API errors.       | FALSE, Mandatory                                       | Integration Configuration |
| **Active flag**                                   | Status indicator for employment; defaults to TRUE if active.                     | TRUE                                                   | Integration Configuration |
| **Email pay slips**                               | Preference for receiving payslips via email.                                     | Email payslip to provided email address                | Integration Configuration |
| **Payment cycle**                                 | Cycle for payment processing.                                                    | API + No Pay Cycle, No PayCycle                        | Integration Configuration |

<explanation>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
