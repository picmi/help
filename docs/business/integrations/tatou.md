# Tātou integration overview

::: prompt
Each job may have only one active Tātou integration. Disabled integrations do not count as active. If you need help
setting up integrations, see [Setting up integrations](setting-up-integrations.md).
:::

:::: explanation

## Uniqueness detection

PICMI only checks for duplicates based on email, not Staff ID. This means that if an employee’s email is different,
PICMI will assume they are a new hire, even if they are actually the same person in Tātou.
::::

## Tātou: Integration configuration

| Configuration                                                                                                 | Description                                                       | Values                  |
|---------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------|
| [Security token](#cfg-tatou-token){#cfg-tatou-token}                                                          | Integrations available in the system                              | Text (required)         |
| [Default contract type](#cfg-tatou-default-contract-type){#cfg-tatou-default-contract-type}                   | Contract type to apply to all applications                        | Casual                  |
| [Default earning rule](#cfg-tatou-default-earning-rule){#cfg-tatou-default-earning-rule}                      | Contract type to apply to all applications (introduced Sept 2026) | Tatou earning rules     |
| [Default role](#cfg-tatou-default-role){#cfg-tatou-default-role}                                              | Tatou earning rules available on this organisation                | Tatou roles             |
| [Default employee status on creation](#cfg-tatou-default-employee-status){#cfg-tatou-default-employee-status} | Tatou employee status set on employee creation                    | Tatou employee statuses |

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

:::: explanation

## FAQ

:::: faq How can I view the staff ID?
The external ID in PICMI is the unique identifier assigned to an employee. You can view it by following these steps:

1. Navigate to the **Integration**.
2. Select Integration: **Tātou**
3. Select **Employee (Show)**
4. Click **Submit**
5. Locate the **Staff ID** field.

Alternatively:

1. Go to **People**
2. Select :::icon cog-outline::: **Customise Columns**
3. Locate **Jobseeker** section
4. Select **External Identifiers**
5. Locate the **person** row :::icon checkbox-marked-outline:::
6. View the external identifiers (if there is only one then this will match the integration)

::: prompt
Staff ID requires a mapping and is by default setup via the External Identifier created on the integration
configuration.
:::
::::

:::: faq Duplicate Tātou integration error
This error means that more than one active Tātou integration is configured on the same job. PICMI allows each job to
have only one active Tātou integration so it knows which integration to use for employee synchronisation.

Disabled integrations are ignored and do not cause this error.

To fix the error:

1. Open the job's [integration settings](setting-up-integrations.md#sync-settings).
2. Leave only one Tātou integration active for the job.
3. Disable or remove any duplicate active Tātou integrations.
4. Try the employee synchronisation again.

If the error continues after you have checked the job's integration settings, contact
[PICMI support](https://www.picmi.io/contact-us) and include the job name and the error message.
::::

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)


