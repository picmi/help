# Updating workflows in the Workflow Builder

Use the Workflow Builder to change workflow pages, item order, Library Items, required state, visibility, and linked item
details.

::: prompt
Workflow changes can affect every opportunity using that workflow. If the change should apply to one opportunity only,
[duplicate the workflow](../guide/workflows/creating-a-workflow#step-3-duplicate-your-base-workflow) first.
:::

## Open a workflow

::: instructions

1. Go to **Setup** > **Workflows**.
2. Locate the workflow row, click &vellip; (vertical dots) to open the menu.
3. Choose **Preview**, **Edit**, or **Review** mode.

:::

## Choose the right mode

| Mode        | Use it when you need to                                                                                 |
|-------------|---------------------------------------------------------------------------------------------------------|
| **Preview** | Check the participant experience, including desktop, tablet, and mobile layouts                         |
| **Edit**    | Change pages, items, Library Item links, required state, visibility, and placement                       |
| **Review**  | Audit workflow contents in a searchable table or export the workflow contents for checking outside PICMI |

::: prompt
**Review mode** is for auditing workflow contents. A routing **Review outcome** is different: it means a participant
answer needs human review before the workflow can continue.
:::

## Edit workflow structure

::: instructions

1. Go to **Setup** > **Workflows**.
2. Locate the workflow row, click &vellip; (vertical dots) to open the menu.
3. Select **Edit** mode.
4. Select a page or item in the workflow.
5. Use drag and drop to move the selected page or item.
6. Save your changes.

:::

Use structure changes when:

- a page is missing, out of order, or no longer needed
- an item should appear on a different page
- questions, content, information, or contracts should be reordered
- the participant journey needs a clearer sequence

## Add a Library Item

Library Items are reusable cross-workflow items, such as Questions, Information, Content Blocks, and Contracts.

::: instructions

1. Go to **Setup** > **Workflows**.
2. Locate the workflow row, click &vellip; (vertical dots) to open the menu.
3. Select **Edit** mode.
4. Select the page or item near where the new item should appear.
5. Open the **Library** panel.
6. Search or filter the Library Items.
7. Add the item:
   - choose **Before** or **After** the selected page or item when placement matters
   - drag the Library Item into the workflow when you want to place it visually
8. Review the placement in the workflow.
9. Save your changes.

:::

You can add supported Library Item types from the builder, including:

- Questions
- Information
- Content Blocks, such as headings, images, videos, and data
- Contracts, where supported by the workflow and opportunity classification

::: prompt
Contract and template search results may be filtered by the workflow's opportunity classification. For example, an
employment workflow should use employment contract templates, and a services workflow should use service agreement
templates.
:::

## Locate a linked Library Item

::: instructions

1. Go to **Setup** > **Workflows**.
2. Locate the workflow row, click &vellip; (vertical dots) to open the menu.
3. Select **Edit** mode.
4. Open the **Library** panel.
5. Search for the Library Item name or text.
6. If the item is already linked, use the linked item indicator or locate action to find where it appears in the workflow.
7. Select the located page or item to review it in the Inspector.

:::

Use this before editing or removing shared content so you understand where the Library Item is already used.

## Show or hide Library Items in the Library

Some Library Items are hidden from standard lists to stop older or outdated content being selected again.

::: instructions

1. Go to **Setup** > **Workflows**.
2. Locate the workflow row, click &vellip; (vertical dots) to open the menu.
3. Select **Edit** mode.
4. Open the **Library** panel.
5. Use the Library filters to hide already linked items when you only want to see items that are not in the workflow.
6. Show hidden items when you need to review or restore an older Library Item.

:::

::: prompt
Hidden Library Items may still be linked to existing workflows. Hiding an item from lists is not the same as removing it
from a workflow.
:::

## Use the Inspector

The Inspector shows details for the selected page or item.

Use it to check:

- where the page or item appears in the workflow
- whether the item is required or optional
- visibility conditions, such as **visible when...**
- linked Library Item details
- validation and answer rules
- workflow usage and other linked opportunities, where shown

::: prompt
The Inspector is for checking placement and linked item details before you change shared content. If a Library Item is
used in more than one workflow, edit it only when the same change should apply everywhere.
:::

## Create or edit Library Items from the builder

Some Library Items can be created or edited directly from the Workflow Builder.

Use the builder when you need to:

- create a new Question
- create a new Content Block
- create a Contract, where supported
- edit a linked Question
- edit a linked Content Block

Some linked Library Item types may need to be edited from their main setup area instead of directly in the builder. For
example, some contract template changes may need to be made under **Setup** > **Contracts**.

## How updates affect workflows

When you update a workflow:

- changes to pages and item placement affect the workflow structure
- changes to a linked Library Item can affect every workflow using that item
- active applications continue using the workflow version from when they started
- new participants see the updated workflow

## Best practices

- Use **Preview** mode after each meaningful change.
- Use **Review** mode before publishing or assigning the workflow to more opportunities.
- Keep headings short and clear.
- Ask only for information you genuinely need.
- Check whether a Library Item is shared before changing its wording or rules.
