# Creating a contract template

In PICMI, **contracts** are generated from contract templates, which act as reusable blueprints for employment agreements. These templates contain field substitutions (chips) that dynamically pull in details from the organisation, job, workflow answers, and personal overrides.

When a person completes the application process, a resulting contract is created. This contract is personalised with the specific details for that job and individual, replacing the placeholders from the template with actual data. Once signed, it becomes a legally binding agreement.

Since templates are designed for consistency, any changes to a contract must be made in a way that ensures the correct details appear for the right roles. The following steps will guide you through creating and updating contracts effectively.

::: prompt
Limitations of contract substitutions: Contract templates in PICMI allow for personalised content through field substitutions, but they do not support conditionally including or excluding entire sections based on job roles or other criteria. See [hiring elements](../about-picmi/hiring-elements.md#contract)
:::

:::: instructions
## Create contract template

The status of the contract template is viewable per contract template row in the Contract Template view.

1. Locate **Menu**, select **Contracts**
2. Click **Create Contract Template**
3. Enter a name
4. Click Create
5. Enter the text with field substitutions.

The contract template will be added to the list

::: prompt
Often it is best to [duplicate a contract template](duplicate-a-contract-template) rather than start new
:::
::::

:::: instructions
## Add a field substitution

1. Locate in the text where to add the field substitution chip
2. Click to place the cursor
3. On the right side, locate and click the chip

The chip will be added into the text ready for dynamic text to be added

::: prompt
The same chip can be added multiple times to a contract.
:::
::::

:::: instructions
## Delete a field substitution in the text

1. Locate in the field substitution chip
2. Click to the **right of the chip** to place the cursor
3. On the keyboard, delete to remove

The chip will be removed from the text but not from the right-hand side, this is a separate process

::: prompt
Removing the one chip does not remove any other of the same type from the page.
:::
::::

:::: instructions
## Remove a chip selection from the list

1. On the right side, locate in the field substitution chip in the list
2. Click on the chip to unselect

Unselecting the chip will not remove a chip from the text, this is a separate process

::: prompt
Always validate the document if at all unsure.
:::
::::


:::: instructions
## Validate the contract template

The Validate button ensures that all required field substitutions (chips) are correctly placed in the contract before it can be saved. When you click Validate, PICMI checks:

* **Matching chips**: each chip in the text must correspond to a valid field from the list on the right. If a chip is missing or incorrectly copied, validation will fail.
*  **Unused fields**: if a field from the list on the right is required but not used in the contract, validation will highlight the issue.
* **Broken or old chips**: if a contract has been copied and pasted, the chips may still be linked to the original contract. These need to be deleted and re-added for validation to succeed.

1. Click **Validate**

::: prompt
If validation fails, review the chips, remove any invalid ones, and replace them using the list on the right. Once all fields match correctly, the contract can be saved and used.
:::
::::


:::: instructions
## Save the contract template

1. Click **Save**

This will always validate the document first and notify of errors
::::

