# Filter fields by group and label in a contract template

Use group filter chips and search text filter to quickly narrow down the list of available or inserted fields when
working in a contract template.

This works in both:

* [**Insert Fields :::icon plus-circle-outline:::** mode](insert-fields-in-a-contract-template.md)
* [**Navigate Inserted :::icon crosshairs-gps:::** mode](navigate-inserted-fields-in-a-contract-template.md)

::: prompt
Use the group filter chips first, then use the text filter to narrow the visible chip labels further.
:::

:::: explanation

## Group filter chips

Field chips are grouped by their source. The filter chips at the top let you switch between these groups to reduce what
is shown.

Depending on the contract, you may see groups such as:

* **Information (Individual)**: personal details for the person completing employment contracts
* **Organisation (Receiving)**: details for the receiving organisation on service contracts
* **Organisation (Sending)**: details for the organisation issuing the contract
* **Listing**: details from the job or listing
* **Proposal**: details from the proposal
* **Question**: values collected from workflow questions

Click a group chip to show fields from that section only.

## Text filter

Use the **Filter by label** field to narrow the visible chips by name.

As you type:

* the list updates in real time
* only fields matching the text are shown
* the filter applies within the currently visible group(s)

This is useful when:

* a group contains many fields
* you know part of the field name
* you want to quickly confirm whether a field exists in the current view

::::

## How the available groups change

Field availability depends on the type of contract being created.

There are two contract types:

* **Employment contracts**
* **Service contracts**

The type is determined by whether the contract is already attached to a job or proposal.

| Situation                                                                              | Groups shown                                                                         | What to expect                                                                                                             |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Contract is not yet attached to a job or proposal                                      | PICMI can show both employment and service groups                                    | PICMI does this because the final contract type is not known yet. You should only add fields that match to the final type. |
| Employment contract, or contract attached to a job                                     | **Information (Individual)**, **Organisation (Sending)**, **Listing**, **Question**  | Service-only fields do not show once the contract type is known                                                            |
| Service contract, or contract attached to a proposal                                   | **Organisation (Receiving)**, **Organisation (Sending)**, **Proposal**, **Question** | Employment-only fields do not show once the contract type is known                                                         |
| Contract was created before the type was known and includes fields from the other type | Validation can fail later when the contract is attached to a job or proposal         | Remove or replace the wrong-type fields so the contract matches the final type                                             |

::: prompt
Once the contract type is known, PICMI stops showing the field groups for the other contract type.
:::

:::: instructions

## Filter fields by group

1. Select **Insert Fields :::icon plus-circle-outline:::** or **Navigate Inserted :::icon crosshairs-gps:::**
2. Click the group chip for the section you want to work with
3. Review only the chips shown for that section

This makes it easier to work through one source of fields at a time.
::::

:::: instructions

## Filter fields by label

1. Select **Insert Fields :::icon plus-circle-outline:::** or **Navigate Inserted :::icon crosshairs-gps:::**
2. Click the relevant group chip if needed
3. Type part of the field name into **Filter by label**
4. Review the remaining visible chips
5. Clear the text to show the full list again

This is the fastest way to find a specific field when the list is long.
::::

## Troubleshoot missing or invalid fields

1. Confirm whether the contract is employment or service looking through the workflow and checking for the job or
   proposal
2. The template content will have red fields that need to be removed because the fields are not on the right for the
   contract type
3. If the contract is the wrong type (making the error incorrect), the workflow(s) this contract is attached to will
   need to be updated to the correct type of job or proposal.

This usually happens when a contract template was edited before PICMI knew whether it would be used for employment or
service.

::: prompt

A contract template is not necessarily limited to either a job or a proposal. However, if it is used across both
employment and service types, it cannot have fields that are exclusive to either.

:::
