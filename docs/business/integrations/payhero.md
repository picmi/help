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

## API Key Management for PayHero Integration

To create an employee in PayHero requires a PICMI partner API access key

### Request a PICMI partner API access key

The key can only be received by email from an email request to PayHero Support. Click <a href="mailto:
support@payhero.co.nz?subject=PICMI  partner API access key&body=Please provide me with the PICMI partner API access key to be used for my organisation">this link</a> to open an email template in your mail client.

> **To:** <a href="mailto:
    support@payhero.co.nz?subject=PICMI  partner API access key&body=Please provide me with the PICMI partner API access key to be used for my organisation">support@payhero.co.nz</a><br/>
> **Subject:** PICMI  partner API access key<br/>
> **Body** Please provide me with the PICMI partner API access key to be used for my organisation


<explanation>

### Who is doing what

| **Actor**           | **Description**                                                                        |
|---------------------|----------------------------------------------------------------------------------------|
| **Shared Customer** | Business using both PICMI and PayHero.                                                 |
| **PICMI**           | Integration partner facilitating the connection between shared customer and PayHero.   |
| **PayHero Team**    | Owner of the API infrastructure, responsible for generating partner-specific API keys. |

<prompt>

The customer can have their own private API keys to act for themselves and provide partner keys to third-party
like PICMI

</prompt>

### Responsibilities

| **Actor**           | **Responsibilities**                                                                                                                                                           |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Shared Customer** | Notify PayHero that they are using PICMI as their integration partner and request a PICMI-specific API key from the PayHero team to ensure compatibility with the integration. |
| **PICMI**           | Use the PICMI-specific API key for each request to ensure both the customer and PayHero know the request is from PICMI.                                                        |
| **PayHero Team**    | Generate PICMI-specific API keys upon request for shared customers, ensuring they are added to the PICMI integration for verification.                                         |

<prompt>

The **partner API key** for PICMI is **not viewable** to the customer through the PayHero application but is provided via
email

</prompt>

</explanation>

<explanation>

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

<faq question="How long does it take for PayHero to respond with an API access key?">

It is usually same working day, but get onto it as soon as possible.

<prompt>

See [request a PICMI partner API access key](#request-a-picmi-partner-api-access-key)

</prompt>

</faq>

<faq question="Where is the PICMI partner API access key in the application?">

It is not available for self-service and must be provided from PayHero support. 

<prompt>

See [request a PICMI partner API access key](#request-a-picmi-partner-api-access-key)

</prompt>

</faq>


<faq question="I have the error 'Invalid API key', what should I do?">

You need to ensure that you have a PICMI partner API access key. You may be using your private API access key that is self-service from the PayHero application. 

<prompt>

See [request a PICMI partner API access key](#request-a-picmi-partner-api-access-key)

</prompt>

</faq>


</explanation>
