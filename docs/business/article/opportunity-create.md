# Creating an opportunity

Creating an opportunity (employment job or service proposal) requires a base set of information so that people know what
can be expected.

## Fields

| **Field**                       | **Description**                                                                                                        |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Title**                       |                                                                                                                        |
| **Work hours**                  | The job's general work hours.                                                                                          |
| **Description**                 | The primary description of the job or service                                                                          |
| **Summary**                     | Additional information about the job that can be useful                                                                |
| **Pay rate/remuneration**       | The amount of money to be paid and the frequency (usually hourly). It is defaulted to your organisation local currency |
| **Location**                    | The street address of the position/job/role                                                                            |
| **Location additional details** | Supplementary information about the location                                                                           |
| **Location photos**             | Photos to be shown about the job                                                                                       |
| **Location phone number**       | Any contact phone number for jobseekers about the job                                                                  |
| **Start date**                  | Date the job is expected to begin                                                                                      |
| **End date**                    | Date the job is expected to finish                                                                                     |
| **Summary/additional details**  | Description about other information around the job start/stop or conditions                                            |

## Keep the opportunity description, workflow, and contract consistent

The opportunity **Description** is the variable, opportunity-specific part of the information used in a contract. This
works the same way for an employment job and a service proposal. It is also publicly facing, so people may read it
before
they apply or accept the opportunity. Write it so that it gives a clear overview of the work or service and sets the
right expectations without trying to repeat every question or contractual term.

Use each part for a different purpose:

| Part                        | Purpose                                                                                                                                              |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Opportunity description** | Publicly describe the work or service, scope, and key expectations for this opportunity.                                                             |
| **Workflow**                | Ask structured questions that clarify the person's circumstances, availability, qualifications, or agreement to specific expectations.               |
| **Contract template**       | Provide the fixed agreement wording and insert changing job or person information using [field substitutions](insert-fields-in-a-contract-template). |

The description should provide the context around the workflow. For example, describe the role or service and its main
scope in the opportunity description, then use workflow questions to confirm the details that need to be understood or
agreed for each person. Where an opportunity detail needs to appear in the contract, use the matching substitution
rather
than typing a second version into the fixed contract wording. For employment contracts, the **Description (Job)**
substitution can insert the opportunity description into the contract.

Avoid duplicating the same information in the opportunity description, workflow questions, and contract template.
Duplication makes it more likely that one version will be missed when the opportunity changes, or that two versions will
contradict each other. Check that the public description, workflow expectations, and contractual wording describe the
same arrangement before sending invites.

::: prompt 

**See also**

* [opportunity status](opportunity-status)
* [opportunity controls](opportunity-controls) for managing intake
* [preview a job](opportunity-preview)
* [insert fields in a contract template](insert-fields-in-a-contract-template)

:::

## Job settings

For jobs using the [Tātou integration](../integrations/tatou.md), the following job settings control the employment
details sent to Tātou when an employee is created or updated:

| **Field**                   | **Description**                                                           |
|-----------------------------|---------------------------------------------------------------------------|
| **Top up to hourly rate**   | Whether the employee's earnings should be topped up to their hourly rate. |
| **Weekly minimum earnings** | The minimum weekly earnings agreed for the employee.                      |

### Top up to hourly rate choices

For **Top up to hourly rate**, choose one of:

| Choice      | Meaning                                                      |
|-------------|--------------------------------------------------------------|
| **Inherit** | Use the setting from the integration (if available).         |
| **Yes**     | Explicitly top up earnings to the agreed hourly rate.        |
| **No**      | Explicitly do not top up earnings to the agreed hourly rate. |

**Inherit** is not the same as **No**. Inherit follows the integration's organisation-wide default, while No is an
explicit instruction not to top up. Selecting No at the job level stops inheritance and disables top-up for the job.

Set the final contractual requirement on the job because the job details are used for the employment contract. Use the
Tātou integration setting when the same rule applies to multiple jobs, and leave the job set to **Inherit** so it
follows that default. Use
a [personal override](creating-individual-employment-conditions.md#fields-that-can-be-overridden)
only when an individual applicant has an agreed exception.

For example, if the integration is set to **Yes**, a job set to **Inherit** also uses **Yes**. A personal override set
to **Inherit** follows that job setting, while a personal override set to **No** disables top-up for that applicant
only.

These are job-level defaults. When a job setting and a personal override exist for the same field, the personal override
takes precedence for that person. If no personal override is provided, the job setting is used; if the job is set to
**Inherit**, the Tātou integration setting is used as the fallback.

:::: explanation

## Application information

In the case of an individual changes for a specific jobseeker application on a job.
See [creating individual employment conditions](creating-individual-employment-conditions) for specific fields that can
be set.

A listing can have multiple pay rates so that they can offer higher rates to more experienced people. Having multiple
rates also requires setting up how this information is displayed. There are two places the pay rates can be displayed.
::::

:::: instructions

## Create opportunity

1. Go to either:
    * **Employment** > **Jobs**
    * **Services** > **Proposals**
2. Click :::icon plus **Create**:::  to start the job builder
3. Work through the steps on the builder
    * Use **Next** and **Back** to navigate (**Exit** to stop)
    * Enter the field details as you go (see [fields](#fields))
4. Click **Done** when finished

It will be added to the list

::: prompt
Often it is best to [duplicate](opportunity-duplicate.md) rather than start new particularly because it copies
across [integrations](../integrations/integrations.md)
:::
::::

:::: instructions

## Updating fields

1. Go to either:
    * **Employment** > **Jobs**
    * **Services** > **Proposals**
2. Locate its row :::icon checkbox-marked-outline:::
3. Click &vellip; (vertical dots) to open the menu
4. Click **Edit**
5. Work through each of the sections in the menu
    * Use **Back** and **Save** to navigate
    * Enter the field details as you go
        *
6. Click **Done** when finished

Any changes will be updated on each Save
::::
