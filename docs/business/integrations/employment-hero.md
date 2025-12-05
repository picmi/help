# EmploymentHero integration overview

## EmploymentHero: integration configuration

| Configuration                                                                            | Description                                                                      | Values                                                             |
|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [Api key](#cfg-apiKey){#cfg-apiKey}                                                      | Authorization key from My Account > Account Details (or OAuth)-set prefer access | API Key string                                                     |
| [Prefer access](#cfg-preferAccess){#cfg-preferAccess}                                    | Preference between OAuth and API key when both present                           | OAuth, API Key                                                     |
| [Business identifier](#cfg-businessId){#cfg-businessId}                                  | Required to load other values (e.g. https://api.yourpayroll.com.au/Business/...) | Numeric business ID                                                |
| [Timezone](#cfg-zoneInfo){#cfg-zoneInfo}                                                 | Local timezone for dates                                                         | System time zones (e.g. `(UTC+10:00) Canberra, Melbourne, Sydney`) |
| [Employment type](#cfg-employmentType){#cfg-employmentType}                              | Type of employment                                                               | Values loaded from integration endpoint                            |
| [Days per Week (Wages on hourly rate)](#cfg-daysPerWeek){#cfg-daysPerWeek}               | Days typically worked per week                                                   | 1–7                                                                |
| [Hours per Day (Wages on hourly rate)](#cfg-hoursPerDay){#cfg-hoursPerDay}               | Hours typically worked per day                                                   | 0–24                                                               |
| [Rate unit](#cfg-rateUnit){#cfg-rateUnit}                                                | Unit of pay rate                                                                 | Values loaded from integration endpoint                            |
| [Pay Category (requires business id)](#cfg-payCategory){#cfg-payCategory}                | Default pay category                                                             | Values loaded from integration endpoint                            |
| [Business Location (requires business id)](#cfg-businessLocation){#cfg-businessLocation} | Location of business                                                             | Values loaded from integration endpoint                            |
| [Pay Schedule (requires business id)](#cfg-paySchedule){#cfg-paySchedule}                | Employee pay schedule                                                            | Values loaded from integration endpoint                            |

## PICMI-EmploymentHero integration fields

| **Field Name**                                                                                         | **Description**                                     | **Validation/Constraint/Default Value**                                                                             | **Source**                |
|--------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------|
| [Bank account name](#bank-account-name){#bank-account-name}                                            | Name on your bank account                           |                                                                                                                     | Questions                 |
| [Bank account](#bank-account){#bank-account}                                                           | Bank account number                                 | Australian Rules                                                                                                    | Questions                 |
| [BSB](#bsb){#bsb}                                                                                      | BSB Number                                          |                                                                                                                     | Questions                 |
| [Date of birth](#date-of-birth){#date-of-birth}                                                        | What is your date of birth?                         |                                                                                                                     | Questions                 |
| [Emergency contact's phone number](#emergency-contacts-phone-number){#emergency-contacts-phone-number} | Emergency contact's phone number                    |                                                                                                                     | Questions                 |
| [Emergency contact's name](#emergency-contacts-name){#emergency-contacts-name}                         | Emergency contact's name                            |                                                                                                                     | Questions                 |
| [Emergency contact relationship](#emergency-contact-relationship){#emergency-contact-relationship}     | What is their relationship to you?                  |                                                                                                                     | Questions                 |
| [Employment type](#employment-type){#employment-type}                                                  | Type of employment                                  |                                                                                                                     | Integration Configuration |
| [First name](#first-name){#first-name}                                                                 | Given name of the employee                          | Mandatory                                                                                                           | Personal Information      |
| [Hours per day](#hours-per-day){#hours-per-day}                                                        | Number of hours the employee works per day          |                                                                                                                     | Integration Configuration |
| [Hours per week](#hours-per-week){#hours-per-week}                                                     | Number of hours the employee works per week         |                                                                                                                     | Integration Configuration |
| [ID](#id){#id}                                                                                         | Unique identifier for the employee                  |                                                                                                                     | Integration Configuration |
| [Is enabled for timesheets](#is-enabled-for-timesheets){#is-enabled-for-timesheets}                    | Indicates if the employee is enabled for timesheets | TRUE                                                                                                                | Integration Configuration |
| [Job title](#job-title){#job-title}                                                                    | Title of the employee’s position                    |                                                                                                                     | Contract/Job              |
| [Mobile phone](#mobile-phone){#mobile-phone}                                                           | Mobile phone number of the employee                 |                                                                                                                     | Personal Information      |
| [Pay schedule](#pay-schedule){#pay-schedule}                                                           |                                                     |                                                                                                                     | Integration Configuration |
| [Pay slip notification type](#pay-slip-notification-type){#pay-slip-notification-type}                 |                                                     | Email                                                                                                               | Integration Configuration |
| [Preferred name](#preferred-name){#preferred-name}                                                     | Preferred name of the employee                      |                                                                                                                     | Personal Information      |
| [Primary pay category](#primary-pay-category){#primary-pay-category}                                   |                                                     |                                                                                                                     | Integration Configuration |
| [Residential country](#residential-country){#residential-country}                                      | What is your postal address?                        |                                                                                                                     | Questions                 |
| [Residential postcode](#residential-postcode){#residential-postcode}                                   | What is your postal address?                        |                                                                                                                     | Questions                 |
| [Residential state](#residential-state){#residential-state}                                            | What is your postal address?                        |                                                                                                                     | Questions                 |
| [Residential street address](#residential-street-address){#residential-street-address}                 | What is your postal address?                        |                                                                                                                     | Questions                 |
| [Residential suburb](#residential-suburb){#residential-suburb}                                         | What is your postal address?                        |                                                                                                                     | Questions                 |
| [Start date](#start-date){#start-date}                                                                 | Start date of employment                            | Mandatory                                                                                                           | Job                       |
| [STSL debt](#stsl-debt){#stsl-debt}                                                                    |                                                     |                                                                                                                     | Integration Configuration |
| [Super fund name](#super-fund-name){#super-fund-name}                                                  |                                                     |                                                                                                                     | Integration Configuration |
| [Surname](#surname){#surname}                                                                          | Family name of the employee                         | Mandatory                                                                                                           | Personal Information      |
| [Tax category](#tax-category){#tax-category}                                                           |                                                     |                                                                                                                     | Integration Configuration |
| [Tax file number](#tax-file-number){#tax-file-number}                                                  | If yes, enter your TFN                              | Mandatory <br/>000-000-000: no TFN<br>111-111-111: Still waiting<br>333-333-333: under 18<br>444-444-444: exemption | Questions                 |
| [Working holiday visa country](#working-holiday-visa-country){#working-holiday-visa-country}           | Nationality of the employee                         |                                                                                                                     | Personal Information      |
| [Working holiday visa start date](#working-holiday-visa-start-date){#working-holiday-visa-start-date}  | If yes, enter your visa start date                  |                                                                                                                     | Questions                 |



## Authorisation

To connect PICMI with EmploymentHero, we can either use **OAuth** (a simple one-click authorisation) or an **API key**.
Just make sure you sign in to both EmploymentH

:::: explanation
### OAuth

For OAuth ensure that are already signed in to both systems in your browser to link the two systems.

[Read more about OAuth in our integrations guide](integrations.md#different-ways-to-authorise-picmi-to-transfer-data)

### Key things to know about EmploymentHero's authorisation rules:

- When you first connect PICMI to EmploymentHero, EmploymentHero gives us a **one-time code**. This code **expires after
  5 minutes**, so it
  must be used quickly.
- That one-time code lets PICMI securely request:
    - An **access token** – this allows us to talk to EmploymentHero on your behalf.
    - A **refresh token** – this allows us to keep that connection going over time.
- The **access token** only lasts **30 minutes**, but don’t worry – PICMI refreshes it automatically in the background.
- The **refresh token** lasts **30 days**, but again, you don’t need to worry – PICMI automatically refreshes it after *
  *20 days** to keep things running smoothly.
- If the **refresh token ever expires**, you’ll need to re-authorise PICMI by going through the connection process
  again.
::::

:::: explanation
### API key

The API key is copied from Employment Hero and saved in the Configuration.

1. Sign in to Employment Hero
2. Top right button to menu > My Account
3. Locate Account Details > Api key
4. Click copy to clipboard
5. Paste back in PICMI > Integration
6. Save
::::

## Troubleshooting

If you notice any discrepancies between PICMI and EmploymentHero:

- **Re-authorisation**: If needed, re-authorise the integration by reconnecting your EmploymentHero account.
- **Email field with sub-alias**: If an employee's job has ended and some time has passed, you can’t create a new user
  with the same email
  address. To handle this, PICMI will automatically create the user using a [sub-alias email](../faqs#emails) of the
  original email **adding the month and year** (eg `hone.smith+08-2024@example.com`)

::: prompt
PICMI will automatically keep your token up to date by refreshing it before it expires (at about the half-way point)
:::

:::: explanation
## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)
::::

