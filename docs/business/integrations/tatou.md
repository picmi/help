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

## Configuration settings

These settings are configured on the Tātou integration. A job is then assigned to the relevant integration, so
different jobs can use different Tātou earning rules and settings.

| Configuration                                                                                         | Description                                                                                                                         | Values                  |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| [Security token](#cfg-tatou-token){#cfg-tatou-token}                                                  | Token used to connect PICMI to Tātou                                                                                                | Text (required)         |
| [Contract type](#cfg-tatou-default-contract-type){#cfg-tatou-default-contract-type}                   | Contract type applied when an employee is created                                                                                   | Casual                  |
| [Earning rule](#cfg-tatou-default-earning-rule){#cfg-tatou-default-earning-rule}                      | Earning rule applied when an employee is created                                                                                    | Tātou earning rules     |
| [Role](#cfg-tatou-default-role){#cfg-tatou-default-role}                                              | Role applied when an employee is created                                                                                            | Tātou roles             |
| [Employee status on creation](#cfg-tatou-default-employee-status){#cfg-tatou-default-employee-status} | Employee status applied when an employee is created                                                                                 | Tātou employee statuses |
| [Top up to hourly rate](#cfg-tatou-topup-to-hourly-rate){#cfg-tatou-topup-to-hourly-rate} | Integration-level fallback for whether Tātou tops earnings up to the agreed hourly rate | Optional |
| [Weekly minimum earnings](#cfg-tatou-weekly-min-earnings){#cfg-tatou-weekly-min-earnings} | Integration-level fallback for the minimum agreed weekly earnings sent to Tātou        | Optional; currency |

### Top up to hourly rate

**Top up to hourly rate** controls whether Tātou tops the person's earnings up to the agreed hourly rate. The setting
has three choices:

| Choice | Meaning |
|--------|---------|
| **Inherit** | Use the setting from the parent level. |
| **Yes** | Explicitly top up earnings to the agreed hourly rate. |
| **No** | Explicitly do not top up earnings to the agreed hourly rate. |

The inheritance order is:

1. The Tātou integration setting provides the organisation-wide default.
2. The job setting can inherit the integration setting or override it.
3. A personal applicant override can inherit the job setting or explicitly override it.

**Inherit** is different from **No**. Inherit delegates the decision to the parent level. No is an explicit instruction
not to top up. Selecting **No** at any level stops inheritance and disables top-up for that level and any more specific
level that is set to Inherit.

::: prompt
**Warning:** Selecting **No** at the integration, job, or personal override level explicitly disables top-up at that
level. More specific settings set to **Inherit** will continue that **No** value.
:::

For example:

- Integration: **Yes** → job: **Inherit** → applicant: **Inherit** = top up (**Yes** flows through both levels).
- Integration: **Yes** → job: **No** → applicant: **Inherit** = do not top up (**No** stops inheritance at the job).
- Integration: **Yes** → job: **Inherit** → applicant: **No** = do not top up for that applicant only.

Use the integration setting when the same rule applies to multiple jobs. Set the final contractual requirement on the
job, because the job details are used for the employment contract. Use a personal override only when an individual
applicant has an agreed exception. If a personal override is set to Inherit, the applicant follows the job setting; if a
job is set to Inherit, it follows the Tātou integration setting.

The [job settings](../article/opportunity-create.md#job-settings) provide job-level values for these fields. You can
set values for an individual through [personal
overrides](../article/creating-individual-employment-conditions.md#fields-that-can-be-overridden).
Tātou uses the most specific value available, in this order:

1. Personal override
2. Job setting
3. Tātou integration setting

The selected values are used when Tātou creates or updates the employee's employment details.

## Usage

Separate Tātou integrations when business requirements call for different earning rules, roles, contract types, pay
arrangements, or worker groups. Assign each job to the integration with the appropriate settings. For example:

- **RSE – First/Second Year** job → **Tātou – RSE First/Second Year** integration
- **RSE – Third Year+** job → **Tātou – RSE Third Year+** integration

The RSE scheme is one example only. Other organisations may need separate integrations for different Tātou earning
rules, roles, contract types, pay arrangements, or worker groups.

### RSE example

RSE workers in their first and second seasons must be paid at least the applicable adult minimum wage. Workers
returning for their third or subsequent RSE seasons must be paid at least the minimum wage plus 10%. These requirements
may require separate Tātou earning rules and integrations for first/second-season and third-or-later-season workers.

As at late 2026, the RSE instructions in force from 1 April 2026 describe these requirements in [Immigration New
Zealand's authoritative guidance](https://www.immigration.govt.nz/opsmanual/89139.htm), and the adult minimum wage is
$23.95 per hour from 1 April 2026 according
to [Employment New Zealand](https://www.employment.govt.nz/pay-and-hours/pay-and-wages/minimum-wage/minimum-wage-rates-and-types).
Minimum wage rates are reviewed annually, so check the current guidance before configuring an earning rule.

For example, weekly minimum earnings can be calculated from an agreed hourly rate and weekly hours:

- `$25/hour × 30 hours = $750` weekly minimum earnings
- `$27.50/hour × 30 hours = $825` weekly minimum earnings

These are calculation examples only. `weekly_min_earnings` can be configured at the integration, job, or personal
override level. The most specific value available is applied to the employee's employment details.

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
