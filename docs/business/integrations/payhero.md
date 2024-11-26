# PayHero integration overview

## PICMI-PayHero integration fields

| Field Name                                                                                    | **Description**                                                                  | **Validation/Constraint/Default Value**                | **Source**                |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------|---------------------------|
| [First name](#first-name)                                                                     | Given name of the individual.                                                    | Mandatory                                              | Personal Information      |
| [Surname](#surname)                                                                           | Family name of the individual.                                                   | Mandatory                                              | Personal Information      |
| [Preferred name](#preferred-name)                                                             | Preferred name used by the individual, typically the first and surname combined. | First + Surname, Mandatory                             | Personal Information      |
| [Email](#email)                                                                               | Email address of the individual.                                                 |                                                        | Personal Information      |
| [Phone](#phone)                                                                               | Phone number of the individual.                                                  |                                                        | Personal Information      |
| [Birthdate](#birthdate)                                                                       | Date of birth of the individual.                                                 |                                                        | Personal Information      |
| [Gender](#gender)                                                                             | Gender identity of the individual.                                               | Gender Diverse                                         | Personal Information      |
| [Street address](#street-address)                                                             | Street address of the individual.                                                | AddressPostal > StreetAddress                          | Personal Information      |
| [City](#city)                                                                                 | City where the individual resides.                                               | AddressPostal > Region                                 | Personal Information      |
| [Postcode](#postcode)                                                                         | Postal code for the individual's address.                                        | AddressPostal > PostalCode                             | Personal Information      |
| [Emergency contact name](#emergency-contact-name)                                             | Name of the individual's emergency contact.                                      |                                                        | Questions                 |
| [Emergency contact phone](#emergency-contact-phone)                                           | Phone number of the individual's emergency contact.                              |                                                        | Questions                 |
| [Bank account number](#bank-account-number)                                                   | Bank account number of the individual (stripped of dashes).                      |                                                        | Questions                 |
| [Tax number](#tax-number)                                                                     | Individual's tax number (IRD number, stripped of dashes).                        | Mandatory                                              | Questions                 |
| [Tax code](#tax-code)                                                                         | Tax code applicable to the individual.                                           | Mandatory                                              | Questions                 |
| [Start date](#start-date)                                                                     | Start date of employment or contract.                                            | Today + 1 day, Mandatory                               | Job                       |
| [Job title](#job-title)                                                                       | Title of the individual's position.                                              |                                                        | Job                       |
| [KiwiSaver pre-existing member](#kiwisaver-pre-existing-member)                               | Indicates if the individual is a pre-existing KiwiSaver member.                  | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| [KiwiSaver rate](#kiwisaver-rate)                                                             | Contribution rate for KiwiSaver.                                                 | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| [KiwiSaver opt-out date](#kiwisaver-opt-out-date)                                             | Date set when an individual opts out of KiwiSaver.                               | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| [Enrolment date](#enrolment-date)                                                             | Date of enrolment in KiwiSaver.                                                  | Changable on KiwiSaverStatus contribution rate mapping | Questions                 |
| [Employer subsidy contribution tax rate (esct)](#employer-subsidy-contribution-tax-rate-esct) | Tax rate for employer subsidy contributions.                                     |                                                        | Integration Configuration |
| [Pay rate](#pay-rate)                                                                         | Rate of pay for the individual.                                                  |                                                        | Job                       |
| [Salary flag](#salary-flag)                                                                   | Indicator for salary employment type; must be set to avoid API errors.           | FALSE, Mandatory                                       | Integration Configuration |
| [Contractor flag](#contractor-flag)                                                           | Indicator for contractor employment type; must be set to avoid API errors.       | FALSE, Mandatory                                       | Integration Configuration |
| [Active flag](#active-flag)                                                                   | Status indicator for employment; defaults to TRUE if active.                     | TRUE                                                   | Integration Configuration |
| [Email pay slips](#email-pay-slips)                                                           | Preference for receiving payslips via email.                                     | Email payslip to provided email address                | Integration Configuration |
| [Payment cycle](#payment-cycle)                                                               | Cycle for payment processing.                                                    | API + No Pay Cycle, No PayCycle                        | Integration Configuration |

<explanation>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
