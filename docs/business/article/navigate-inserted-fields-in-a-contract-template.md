# Navigate inserted fields in a contract template

Use **Navigate Inserted :::icon crosshairs-gps:::** mode to move through the field substitutions already placed in a contract template. This makes it easier to find each field in the contract without scanning all available chips. 

Also see [**Insert Fields :::icon plus-circle-outline:::** mode](insert-fields-in-a-contract-template.md).

::: prompt
Use field groups and search text to narrow the field set down
:::

:::: explanation
## What navigate mode shows

In navigate mode, PICMI shows only the inserted chips, grouped by their section such as **Information (Individual)** or **Listing**.

When you click a chip on the right:

* PICMI moves to that field in the contract text
* if the same field has been inserted more than once, each click moves to the next matching location
* when the last matching location is reached, the next click cycles back to the first one near the top of the document

If a field is inserted two or more times, the chip on the right shows a numbered badge to indicate how many matching fields exist in the contract.

This view is useful when checking:

* which fields are already used in the contract
* where each field appears in the document
* whether repeated fields have been inserted in all expected places
:::: 

:::: instructions
## Switch to navigate mode

1. Open the contract template using [Preview/edit](preview-and-edit-a-contract-template)
2. Click **Navigate Inserted :::icon crosshairs-gps:::**

Only the chips already used in the contract template will remain visible.
::::

:::: instructions
## Navigate to an inserted field

1. Click a chip on the right
2. Review the matching field location in the contract text
3. Click the same chip again to move to the next matching location, if there is more than one
4. Continue clicking to cycle through all matching locations
5. Return to **Insert Fields :::icon plus-circle-outline:::** if additional chips need to be added

When the last matching location has been reached, PICMI cycles back to the first one.
::::

:::: instructions
## Use number badges on repeated fields

1. Open **Navigate Inserted :::icon crosshairs-gps:::**
2. Look for chips with a numbered badge
3. Use the badge to identify fields that appear two or more times
4. Click the chip repeatedly to move through each matching location in the contract

This is useful when checking that repeated fields have been placed everywhere they are needed.
::::

:::: instructions
## Use navigate mode during troubleshooting

1. Open **Navigate Inserted :::icon crosshairs-gps:::**
2. Click through the chips to confirm each field appears in the expected place
3. Return to **Insert Fields** to replace any missing or incorrect chips
4. Click **Validate** when finished

This is particularly useful after copying content from another contract template or when checking repeated fields.

::: prompt
If validation fails after copying and pasting a contract, the chips usually need to be deleted and re-added from the available field lists.
:::
::::
