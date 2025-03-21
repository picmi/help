# Tātou integration overview

<explanation>

## Uniqueness detection

PICMI only checks for duplicates based on email, not Staff ID. This means that if an employee’s email is different, PICMI will assume they are a new hire, even if they are actually the same person in Tātou.

</explanation>

## PICMI-Tātou integration fields

| Field Name                                               | Description                                                   | Validation/Constraint/Default Value | Source                    |
|----------------------------------------------------------|---------------------------------------------------------------|-------------------------------------|---------------------------|
| [ID](#id){#id}                                           | Unique identifier                                             |                                     | Integration Configuration |
| [First names](#first-names){#first-names}                | Given name(s) of the individual.                              |                                     | Personal Information      |
| [Surname](#surname){#surname}                            | Family name of the individual.                                |                                     | Personal Information      |
| [Email](#email){#email}                                  | Email address of the individual.                              |                                     | Personal Information      |
| [Birthdate](#birthdate){#birthdate}                      | Date of birth of the individual.                              |                                     | Personal Information      |
| [Nationality](#nationality){#nationality}                | Nationality of the individual.                                |                                     | Personal Information      |
| [Next hourly rate](#next-hourly-rate){#next-hourly-rate} | The remuneration rate for the individual.                     |                                     | Job                       |
| [Effective from](#effective-from){#effective-from}       | Start date for the next hourly rate to take effect.           | Plus one day                        | Job                       |
| [Job title](#job-title){#job-title}                      | Title of the individual’s position.                           |                                     | Job                       |
| [Start date](#start-date){#start-date}                   | Start date of employment or contract.                         |                                     | Job                       |
| [Recruitment type](#recruitment-type){#recruitment-type} | Type of recruitment for the individual.                       | Default (NZ Employee)               | Integration Configuration |
| [Contract type](#contract-type){#contract-type}          | Type of contract under which the individual is employed.      |                                     | Integration Configuration |
| [Primary role](#primary-role){#primary-role}             | Primary role of the individual in the organisation.           |                                     | Integration Configuration |
| [Status](#status){#status}                               | Employment status of the individual (e.g., active, inactive). | Inactive                            | Integration Configuration |

<explanation>

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
