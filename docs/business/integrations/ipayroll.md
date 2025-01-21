# iPayroll integration overview

## Integration configuration

| Configuration                                       | Description                              | Values                                                                               |
|-----------------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------|
| [Token](#cfg-token){#cfg-token}                     | Token provided for authentication        | [Retrieve the API key](#retrieving-a-token) from CheckWorkRights by application user |
| [Employer Subsidy](#cfg-subsidy){#cfg-subsidy}      | Employer subsidy contribution tax (ESCT) | 10.5%, 17.5%, 30%, 33%, 39%                                                          |
| [Payment Method](#cfg-payment){#cfg-payment}        | Payment method                           | Bank, Cheque, Cash                                                                   |
| [Payment Frequency](#cfg-frequency){#cfg-frequency} | Payment frequency                        | Weekly, Fortnightly, Monthly                                                         |
| [Cost Centre](#cfg-cost){#cfg-cost}                 | Cost Center                              | Populated from iPayroll for your organisation                                        |
| [User Defined Group](#cfg-user){#cfg-user}          | User Defined groups                      | Populated from iPayroll for your organisation                                        |

## PICMI-iPayroll integration fields

| **Field Name**                                                                                                                                            | **Description**                                                  | **Validation/Constraint/Default Value**                | **Source**                |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------|---------------------------|
| [Id](#id){#id}                                                                                                                                            | Unique identifier for the record.                                |                                                        | Integration Configuration |
| [First names](#first-names){#first-names}                                                                                                                 | Given name(s) of the individual.                                 |                                                        | Personal Information      |
| [Surname](#surname){#surname}                                                                                                                             | Family name of the individual.                                   |                                                        | Personal Information      |
| [Email](#email){#email}                                                                                                                                   | Email address of the individual.                                 |                                                        | Personal Information      |
| [Phone](#phone){#phone}                                                                                                                                   | Phone number of the individual.                                  |                                                        | Personal Information      |
| [Birthdate](#birthdate){#birthdate}                                                                                                                       | Date of birth of the individual.                                 |                                                        | Personal Information      |
| [Gender](#gender){#gender}                                                                                                                                | Gender of the individual.                                        |                                                        | Personal Information      |
| [Street address](#street-address){#street-address}                                                                                                        | The street address of the individual.                            | AddressPostal > StreetAddress                          | Personal Information      |
| [Locality](#locality){#locality}                                                                                                                          | Locality of the address.                                         | AddressPostal > Locality                               | Personal Information      |
| [City](#city){#city}                                                                                                                                      | City of the address.                                             | AddressPostal > Region                                 | Personal Information      |
| [Postcode](#postcode){#postcode}                                                                                                                          | Postal code of the address.                                      | AddressPostal > PostalCode                             | Personal Information      |
| [Country](#country){#country}                                                                                                                             | Country of the address.                                          | AddressPostal > CountryName                            | Personal Information      |
| [Address not supplied](#address-not-supplied){#address-not-supplied}                                                                                      | Indicates if the address is not provided.                        | AddressPostal > NotSupplied                            | Personal Information      |
| [Bank account number](#bank-account-number){#bank-account-number}                                                                                         | The individual's bank account number.                            |                                                        | Questions                 |
| [Payment frequency](#payment-frequency){#payment-frequency}                                                                                               | Frequency of payment (e.g., weekly, monthly).                    |                                                        | Integration Configuration |
| [Payment method](#payment-method){#payment-method}                                                                                                        | Method of payment (e.g., direct deposit, cheque).                |                                                        | Integration Configuration |
| [KiwiSaver status](#kiwisaver-status){#kiwisaver-status}                                                                                                  | Current status of the individual's KiwiSaver membership.         | Changeable on KiwiSaverStatus factors                  | Questions                 |
| [KiwiSaver rate](#kiwisaver-rate){#kiwisaver-rate}                                                                                                        | Contribution rate for the KiwiSaver scheme.                      | Changeable on KiwiSaverStatus factors                  | Questions                 |
| [Employer subsidy contribution tax rate (ESCT)](#employer-subsidy-contribution-tax-rate-esct){#employer-subsidy-contribution-tax-rate-esct}               | Tax rate for employer contributions to KiwiSaver.                |                                                        | Integration Configuration |
| [KiwiSaver age range](#kiwisaver-age-range){#kiwisaver-age-range}                                                                                         | Age range applicable for KiwiSaver contributions.                |                                                        | Questions                 |
| [KiwiSaver casual auto enroll exempt](#kiwisaver-casual-auto-enroll-exempt){#kiwisaver-casual-auto-enroll-exempt}                                         | Indicates if the individual is exempt from automatic enrollment. | Changeable on KiwiSaverStatus factors                  | Questions                 |
| [KiwiSaver opt-out date](#kiwisaver-opt-out-date){#kiwisaver-opt-out-date}                                                                                | Date the individual opted out of KiwiSaver contributions.        | Changeable on KiwiSaverStatus factors                  | Questions                 |
| [Employer subsidy](#employer-subsidy){#employer-subsidy}                                                                                                  | Amount of employer subsidy for KiwiSaver contributions.          | Changeable on KiwiSaverStatus factors (auto populated) | Integration Configuration |
| [Tax number (Inland Revenue Department (IRD) number)](#tax-number-inland-revenue-department-ird-number){#tax-number-inland-revenue-department-ird-number} | Unique tax number for the individual.                            | Changeable on KiwiSaverStatus factors                  | Questions                 |
| [Tax code](#tax-code){#tax-code}                                                                                                                          | Tax code assigned to the individual for tax purposes.            |                                                        | Questions                 |
| [Start date](#start-date){#start-date}                                                                                                                    | Start date of employment or contract.                            |                                                        | Job                       |
| [Job title](#job-title){#job-title}                                                                                                                       | Title of the individual’s position.                              |                                                        | Job                       |
| [Pay rate](#pay-rate){#pay-rate}                                                                                                                          | Rate of pay for the individual.                                  |                                                        | Job                       |

## How PICMI works with iPayroll

PICMI integrates with iPayroll via a separate user in your organisation that has the access role [API User](https://support.ipayroll.co.nz/portal/en/kb/articles/user-access-api-user#API_User).

<instructions>

## Retrieving a token

iPayroll uses an oAuth process to issue a token which requires you to have a separate user with the API user access that you
agree to issue a token

<prompt>

if you are currently signed in with your payroll user, log out first so that you can log in with your API user.

</prompt>

1. Use the URL provided by PICMI—if you are not logged
2. Log in with your credentials that access to setting up an API 
3. Click **Authorize**
4. Provide the token back to PICMI to be added to your integration

<prompt>

Updating a token in PICMI is currently not self-service and requires help from PICMI

</prompt>

</instructions>

<explanation>

## FAQs

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>

<faq question="I already have a log in, do I need another account for the integration?" :expandAll="expandAll">

Yes, a new user must be created. You are allowed to use the same password.

</faq>

<faq question="How can I create an API user" :expandAll="expandAll">

In iPayroll > Setup > Users > Add User with access Api User (see [iPayroll help](https://support.ipayroll.co.nz/portal/en/kb/articles/user-access-roles-defined#Adding_users_to_your_iPayroll_Organisation))

</faq>

<faq question="How do I know if I have an integration access?" :expandAll="expandAll">

In iPayroll > Setup > Users, look for a user with naming convention [organisation number]apipicmi (eg 54443apipicmi)

</faq>


<faq question="How do I know if I have an active integration key" :expandAll="expandAll">

In iPayroll > Setup > Users, look for user [organisation number]apipicmi and in the right hand icons is one for active integration (with the ability to deactivate the integration)

</faq>

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>

<script setup lang="ts">import {ref} from 'vue';

const expandAll = ref(false);

const toggleExpandAll = () => {
expandAll.value = !expandAll.value;
}
</script>

