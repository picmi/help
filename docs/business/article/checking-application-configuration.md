# Check Configuration and field validation

**Check Configuration** checks whether an employment job or services proposal is ready for a person to apply, receive a
contract, and
send data to any enabled integrations.

PICMI runs this check when you select **Check Configuration**. It is also run
automatically when you send an invite, duplicate an opportunity, make an offer, or complete an application.

::: prompt
Users see this as **Check Configuration**. Behind the scenes, PICMI is validating the fields needed by the workflow,
contract template, opportunity, organisation, and integrations.
:::

## Check Configuration has failed and there is a field with `Not found` in the **Passed** column

If any fields show in the Passed column **Not found** and the Source column has **Integration**, PICMI cannot
find where that required value should come from.

The most likely cause is a duplicate workflow question. The question may exist, but the active workflow or integration
mapping may be referencing a different question with the same name.

For example, with PayHero, KiwiSaver fields usually need to come from workflow question fields.
If those questions are missing, removed, or not mapped, the integration cannot pass Check Configuration.

To fix this:

1. Check the opportunity has the correct workflow
2. Check the workflow includes the required questions or information fields from the Title column
3. Check whether there are duplicate questions with the same name
4. Check the integration mapping points to the question used by the workflow, not another duplicate
5. If the integration should not be used for this opportunity, turn it off or remove that integration setting

Save the changes and run **Check Configuration** again

See [Managing Duplicate Questions](../workflows/managing-duplicate-questions.md) for more detail.

::: prompt
A field can pass even if the applicant has not answered it yet. Check Configuration is checking that the field has a
valid source, not that the applicant has already supplied the value.
:::

## Run Check Configuration

:::: instructions

## Check a job or proposal

1. Go to either:
    * **Employment** > **Jobs**
    * **Services** > **Proposals**
2. Locate the opportunity row :::icon checkbox-marked-outline:::
3. Click &vellip; (vertical dots) to open the menu
4. Select **Check Configuration**
5. Click **Check Configuration** in the dialog
6. Use **Hide Passed** to focus on rows that need action
7. Fix any failed rows, save the changes, and run **Check Configuration** again
   ::::

## Read the results

| Column            | Meaning                                                                                         |
|-------------------|-------------------------------------------------------------------------------------------------|
| **Title**         | Field being checked                                                                             |
| **Passed**        | :::icon check-circle::: means it passed. **Not found**, **Empty**, or **Not Available** failed. |
| **Group**         | Area the field belongs to, such as Organisation, Job, Personal, PayHero, or another integration |
| **Source**        | Whether the field is needed for the **Contract** or an **Integration**                          |
| **Current Value** | The value or source PICMI can currently use                                                     |
| **Description**   | Extra detail about what the field is for                                                        |

## What Check Configuration checks

Check Configuration reviews:

* the application workflow
* the contract template in the workflow
* organisation details needed by the contract
* opportunity/job details, including remuneration
* active integrations on the opportunity
* required integration mappings and default values

It does not check answers that only exist later, after the applicant completes the workflow.

## Failed contract fields

### Empty

**Empty** means a contract field is required, but the opportunity or organisation has no value for it yet.

Check:

* organisation profile/details
* opportunity title, location, dates, and work details
* remuneration or pay rate fields
* information fields used in the contract template

Add the missing value, save, and run **Check Configuration** again.

### Not Available

**Not Available** means the contract template contains a field that does not apply to this opportunity type.

This can happen when:

* an employment contract template is used for a service proposal
* a service agreement template is used for an employment job
* a custom template includes fields for the wrong recipient type

Check the opportunity type and the contract template attached to the workflow. Replace the template or remove the
incompatible fields.

### Missing or multiple contract templates

The workflow must have exactly one contract template.

If the workflow has no contract template, add the correct contract step. If it has more than one, keep the correct one
and remove the duplicate or outdated template.

### Missing workflow

The opportunity must have an application workflow before PICMI can check contract fields or integration fields.

Open the opportunity, select or create the correct workflow, save, and run **Check Configuration** again.

## Failed integration fields

### Not found

**Not found** means an enabled integration requires this field, but PICMI cannot find a valid source.

If the missing value should come from a workflow question, this is most often caused by duplicate questions. A person may
see the right question name in the workflow or mapping, but PICMI may be referencing a different question with the same
name.

The source might need to be:

* a workflow question
* a personal or information field in the workflow
* an organisation field
* an opportunity/job field
* an integration configuration value
* a default integration value

Review the integration settings for the opportunity, update the mapping, save, and run **Check Configuration** again.

::: prompt
If a mapped workflow question was deleted or replaced, the mapping may need to be updated even though the integration
was previously working. If there are duplicate questions, check that the mapping points to the same question used by the
workflow.
:::

## Successful rows that need no action

Some rows may pass without showing an actual applicant value, but there is an entry in the Current Value column.

| Current Value                     | Meaning                                                  |
|-----------------------------------|----------------------------------------------------------|
| **Workflow (Question)**           | The applicant will answer this in the workflow           |
| **Workflow (Personal)**           | The value will come from a personal or information field |
| **Opportunity**                   | The value will come from the job or proposal             |
| **Integration (Configuration)**   | The value will come from integration settings            |
| **Default (Integration Setting)** | The integration supplies a default value                 |
| **Optional (Not Used)**           | The field is optional and does not need a value          |
| **Excluded**                      | The field is intentionally excluded by configuration     |

## FAQs

::: faq Why does PICMI check configuration when I send an invite?
PICMI checks before sending the invite so the person is not invited into an application that cannot later produce a
contract or send required integration data.
:::

::: faq What does a field with a source of **Integration** not pass configuration mean?
It usually means the active integration (eg Payroll) needs values from a mapped question (eg `KiwiSaverStatus` or `KiwiSaverRate`),
but those fields are not mapped to a workflow question, personal field, opportunity field, integration setting, or
default value. Fix the mapping or turn off the integration for that opportunity if it should not be used.
:::

::: faq Why does an Integration field show **Not found** when the question exists?
The most likely cause is a duplicate question. Two questions can have the same name, so the workflow may look correct
while it is actually referencing a different question from the one used by the integration mapping. See
[Managing Duplicate Questions](../workflows/managing-duplicate-questions.md).
:::

::: faq Why does a row pass when Current Value is blank?
Some values are supplied later by the applicant. A workflow question can pass because PICMI knows where the answer will
come from, even though the person has not answered yet.
:::

::: faq Can I ignore Optional, Default, or Excluded rows?
Yes. These are successful results. Only failed rows, such as **Not found**, **Empty**, or **Not Available**, need
action.
:::

::: faq Who can fix Check Configuration errors?
It depends on the failed row. Opportunity and organisation fields can usually be fixed by editing the opportunity or
organisation details. Workflow, contract template, and integration mapping problems may need PICMI
support.
:::

::: faq When should I contact support?
Contact support if you cannot edit the missing field, the correct workflow or contract template is not available, an
integration field has no suitable mapping source, or the same error remains after saving changes and running **Check
Configuration** again.
:::

## Related articles

* [Sending invites](opportunity-send-invite)
* [Preparing a job ready to publish](../guide/jobs/preparing-a-job-ready-publish.md)
* [Setting up integrations](../integrations/setting-up-integrations.md)
