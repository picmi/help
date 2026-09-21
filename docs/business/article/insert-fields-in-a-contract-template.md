# Insert fields in a contract template

Field substitutions are inserted into a contract template using **Insert Fields :::icon plus-circle-outline:::** mode. These fields appear as chips and are replaced with actual job, organisation, workflow, or personal details when a contract is generated. 

Also see
* [Field groups and search text](filter-fields-by-group-label-in-a-contract-template.md)
* [Navigate Inserted :::icon crosshairs-gps:::](navigate-inserted-fields-in-a-contract-template.md) mode

:::: instructions
## Switch to insert mode

1. Open the contract template using [Preview/edit](preview-and-edit-a-contract-template)
2. Click **Insert Fields  :::icon plus-circle-outline:::**

The available field groups and chips will be shown below the contract text.
::::

:::: instructions
## Insert a field substitution

1. Click in the contract text where the field should be added
2. Locate the correct field group
3. Click the chip to insert it into the contract

The chip will be added to the contract text.

::: prompt
The same chip can be added multiple times to a contract template.
:::
::::

## InformationField catalogue

The following active fields are defined in PICMI's `InformationField` enum. They are grouped in the same way as the
field groups shown in a contract template. The available groups still depend on whether the contract is for employment
or a service proposal.

### Information (Individual)

| **Field**        | **Description**                                 |
|------------------|-------------------------------------------------|
| Given Name       | The person's first names.                       |
| Family Name      | The person's family name.                       |
| Middle Name      | The person's middle name.                       |
| Nickname         | The person's nickname.                          |
| Preferred Name   | The person's preferred name.                    |
| Email            | The person's email address.                    |
| Email (Verified) | Whether the person's email address is verified. |
| Phone            | The person's phone number.                     |
| Phone (Verified) | Whether the person's phone number is verified. |
| Height           | The person's height in metres.                  |
| Zone             | The person's time zone information.             |
| Locale           | The person's locale.                            |
| Nationality      | The person's nationality.                       |
| Profile          | The person's profile.                           |
| Picture          | The person's picture.                           |
| Website          | The person's website.                           |
| Signature        | The person's electronic signature text.         |

### Listing

These fields are available for employment contracts and describe the job or listing.

| **Field**                    | **Description**                                                            |
|------------------------------|----------------------------------------------------------------------------|
| Title                        | The job title.                                                             |
| Description (Job)            | The main job description.                                                  |
| Date Posted (Listing)        | The date the listing was posted.                                          |
| Valid Through (Listing)      | The date the listing is valid through.                                    |
| Work Hours                   | The job's general work hours.                                             |
| Remuneration                 | The job's pay rate or remuneration.                                       |
| Street Address               | The job's street address.                                                 |
| Location (Additional Details)| Additional location details for the job.                                  |
| Start                        | The job start date.                                                        |
| End                          | The job end date.                                                          |
| Summary (Start & End)        | The job's summary of start and end dates or conditions.                    |
| Opportunity Type Label       | The opportunity type label.                                                |
| Incentive Compensation       | Incentive compensation details for the job.                                |
| Benefits                     | Benefits provided for the job.                                             |
| Special Commitments          | Special commitments for the job.                                           |
| Top up to hourly rate        | Whether the employee's earnings should be topped up to their hourly rate.  |
| Weekly minimum earnings      | The minimum weekly earnings agreed for the employee.                       |

For Tātou, **Top up to hourly rate** and **Weekly minimum earnings** can use the job values or the person's [personal
overrides](creating-individual-employment-conditions.md#fields-that-can-be-overridden). A personal override takes
precedence over the job setting, and the job setting takes precedence over the [Tātou integration
setting](../integrations/tatou.md#configuration-settings). For more information, see [Job
settings](opportunity-create.md#job-settings).

### Organisation (Sending)

These fields describe the organisation sending the contract.

| **Field**            | **Description**                                       |
|----------------------|-------------------------------------------------------|
| Name                 | The sending organisation's name.                      |
| Description          | The sending organisation's description.               |
| Email                | The sending organisation's email address.             |
| Email Verified       | Whether the sending organisation's email is verified. |
| Phone                | The sending organisation's phone number.              |
| Phone Verified       | Whether the sending organisation's phone is verified. |
| Zone Info            | The sending organisation's time zone information.     |
| Locale               | The sending organisation's locale.                    |
| Profile              | The sending organisation's profile.                   |
| Picture              | The sending organisation's picture.                   |
| Website              | The sending organisation's website.                   |
| Authorised Signature | The sending organisation's authorised signature.      |

### External Identifier

| **Field**           | **Description**                          |
|---------------------|------------------------------------------|
| External Identifier | An external identifier provided by PICMI. |

### Organisation (Receiving)

These fields describe the organisation receiving the contract, where applicable.

| **Field**            | **Description**                                        |
|----------------------|--------------------------------------------------------|
| Name                 | The receiving organisation's name.                     |
| Description          | The receiving organisation's description.              |
| Email                | The receiving organisation's email address.            |
| Email Verified       | Whether the receiving organisation's email is verified.|
| Phone                | The receiving organisation's phone number.             |
| Phone Verified       | Whether the receiving organisation's phone is verified.|
| Zone Info            | The receiving organisation's time zone information.    |
| Locale               | The receiving organisation's locale.                   |
| Profile              | The receiving organisation's profile.                  |
| Picture              | The receiving organisation's picture.                  |
| Website              | The receiving organisation's website.                  |
| Authorised Signature | The receiving organisation's authorised signature.     |

:::: instructions
## Find a field chip

1. Use the field group chips at the top to move between sections
2. Use the search field to narrow the available chips
3. Click the chip once you have found the correct field

This helps when a section contains many available fields.
::::

:::: instructions
## Check selected chips in the list

1. Review the chips shown as selected in each field group
2. Click a chip in the list to clear its selection if needed

Clearing a chip from the list does not remove it from the contract text.

::: prompt
To remove a chip from the contract itself, click to the right of the chip in the text and delete it from there.
:::
::::
