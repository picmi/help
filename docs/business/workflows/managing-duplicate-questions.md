# Managing Duplicate Questions

Duplicate Questions are separate questions that have the same name, or a name so similar that they are easy to confuse.
They can happen when a question is duplicated to create a variant, or when a similar question is created later for a
specific workflow.

PICMI treats each duplicate as a separate question, even when the name looks the same to a person. This matters because
workflows and integrations reference the underlying question, not just the name shown in the list.

::: prompt
In this article, duplicate means the question name is the same. When two questions have the same name, it is easy to
think the right question has been selected even when the workflow is referencing a different question.
:::

## When duplicate questions cause problems

Duplicate Questions can cause problems when:

- a workflow contains the wrong question with the same name
- an integration mapping points to one question, but the active workflow uses another question with the same name
- a user edits one question thinking it is shared, but a different duplicate is used by the workflow
- an old or hidden question is still referenced by a workflow or integration

This is most visible when an integration fails [Check Configuration](../article/checking-application-configuration.md).

::: prompt
If **Check Configuration** shows **Not found** for a field where **Source** is **Integration**, first check for
duplicate questions. The question may exist, but the workflow or integration may be referencing the wrong question with
the same name.
:::

## Find duplicate questions

:::: instructions

## Search the Questions list

1. Go to **Setup** > **Applications**: **Questions**
2. Click :::icon cog-outline::: **Customise Columns**
3. Show columns that help identify the correct question:
    - **Additional Text**
    - **Choices**
    - **Hidden**
    - **Workflows**
    - **Integrations**
4. Click **Save** to retain across refresh
5. Sort only on **Name** column (this groups the names)
6. Search for the exact question name
    - look in the **Duplicate** column
    - also check the **Hidden** column
7. Review any questions with the same or very similar name
8. Compare the duplicate rows before editing, hiding, or adding one to a workflow

::: prompt
The **Workflows** and **Integrations** columns are the most useful columns when checking whether a question is already
in use. See [Customise columns](../article/customise-columns.md) for more detail.
:::
::::

## Decide which question should be used

Before changing anything, identify the question that should remain active.

Use the question that is:

- already used by the correct workflow(s)
- already mapped to the correct integration
- worded correctly for the person completing the workflow
- not hidden from normal lists unless it is intentionally being retired

If two questions are both needed, rename them so the difference is clear. For example, include the country, workflow,
provider, or purpose in the name. Sometimes adding `[archived]` can be useful.

Once you change the name, the question is no longer a duplicate by name.

::: prompt
Do not rely on the question name alone when duplicates exist. Open the question details and check where it is used
before making changes.
:::

## Manage duplication from a question row

Use **Manage Duplication** when one question should become the question used by all matching workflows.

The question row you open **Manage Duplication** from is the selected question. This is the question PICMI will keep in
the workflows you transfer. The duplicate questions are freed up because their workflow references are moved to the
selected question.

:::: instructions

## Open Manage Duplication

1. Go to **Setup** > **Applications**: **Questions**
2. Search for the duplicate question name (see [search](#search-the-questions-list))
3. Locate the row for the question you want to keep
4. Click :::icon dots-vertical::: (vertical dots) to open the row menu
5. Select **Manage Duplication**

::: prompt
Choose the question to keep before opening **Manage Duplication**. The selected row controls which question the
duplicate workflows will move to. You select other rows while the drawer is open to help with comparing questions.
:::
::::

## Manage Duplicate Question drawer

The **Manage Duplicate Question** drawer shows the selected question at the top.

The drawer has two main areas:

| Area                                                         | What it means                                                                                         |
|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Workflows on Selected Question**                           | Workflows that already use the selected question.                                                     |
| **Duplicate Questions to Transfer to the Selected Question** | Other questions with the same name that can have their workflow references moved to the selected one. |

Each duplicate row shows:

- **Updated**: when that duplicate question was last changed
- **Workflows**: the workflows currently using that duplicate question
- a checkbox to select the duplicate question for transfer

When you select a duplicate row for transfer, all workflows listed on that row are moved to the selected question.

::: prompt
The number beside **Duplicate Questions to Transfer to the Selected Question** shows how many duplicate question records
PICMI found for the selected question name.
:::

:::: instructions

## Transfer duplicate workflows to the selected question

1. In **Workflows on Selected Question**, check the selected question is the question you want to keep
2. In **Duplicate Questions to Transfer to the Selected Question**, review each duplicate row
3. Select the checkbox for the duplicate question row that should be transferred
4. Confirm the transfer if PICMI asks for confirmation
5. Use :::icon refresh::: **Refresh** to reload the drawer if needed
6. Check the transferred workflows now use the selected question
7. Close the drawer
8. Rename or hide the duplicate question records that are no longer used
9. Run [Check Configuration](../article/checking-application-configuration.md) again on any affected jobs or proposals

::: prompt
Transferring duplicate workflows does not delete the duplicate question record. It moves workflow references from the
duplicate question to the selected question, which frees up the duplicate so it can be renamed, hidden, or kept only if
it still has a separate purpose.
:::
::::

## What Manage Duplication changes

**Manage Duplication** changes which question workflow items point to.

It is useful when:

- one question should be reused consistently across several workflows
- duplicate questions have split workflow usage by mistake
- an integration mapping expects one question, but some workflows use another question with the same name
- old duplicate questions need to be freed up before they are renamed or hidden

After using **Manage Duplication**, check any integration mappings that depend on that answer. The integration should
point to the same question now used by the workflow.

## Manually fix a workflow that references the wrong duplicate

Use this approach when only one workflow should change, or when you do not want to transfer all workflows from a
duplicate question to the selected question.

:::: instructions

## Replace the wrong question in a workflow

1. Go to **Setup** > **Workflows**
2. Open the workflow used by the job or proposal
3. Select **Edit**
4. Find the page containing the duplicate question
5. Remove the wrong question from the workflow
6. Add the correct question
7. Save the workflow
8. Run [Check Configuration](../article/checking-application-configuration.md) again on the job or proposal

::: prompt
Removing a question from a workflow does not delete it from the Questions list. It only removes that question from the
workflow. See [Removing from workflows](./removing-from-workflows.md).
:::
::::

## Fix integration mappings affected by duplicates

If an integration needs an answer from a workflow question, the integration mapping must point to the same question that
the workflow uses.

:::: instructions

## Review the integration mapping

1. Go to **Setup** > **Integrations**
2. Open the integration used by the job or proposal
3. Review the **Mappings** section
4. Find the mapping for the failed field
5. Check whether the mapped question is the same question used in the workflow
6. Update the mapping if it points to the wrong duplicate
7. Save the integration
8. Run **Check Configuration** again

::: prompt
If a mapping looks correct by name but still fails, check whether another question has the same name. The selected
source may be the wrong duplicate.
:::
::::

## Hide duplicates that should no longer be used

When a duplicate question should not be selected in new workflows, hide it from lists.

:::: instructions

## Hide a duplicate question

1. Go to **Setup** > **Applications**: **Questions**
2. Search for the duplicate question
3. Open the question
4. Turn on **Hide from lists**
5. Save

::: prompt
Hiding a question helps prevent it being selected again, but it does not automatically remove it from existing workflows
or integration mappings. Check the **Workflows** and **Integrations** columns before relying on the hidden status.
:::
::::

## Best practices

- Remove duplicates from all workflows first
- Rename old duplicated questions after removing from workflows
- Use **Manage Duplication** to move all workflows from a duplicate question to the question you want to keep
- Use **Workflows** and **Integrations** columns when checking question impact
- Hide old duplicates instead of leaving them available for selection
- Run [Check Configuration](../article/checking-application-configuration.md) after changing workflow questions or
  integration mappings
- Keep a shared question when the same answer should feed multiple workflows or integrations
- Create a separate question when one workflow needs different wording, options, validation, or integration behaviour

## Related articles

- [Questions](./questions.md)
- [Updating workflows](./updating-workflows.md)
- [Removing from workflows](./removing-from-workflows.md)
- [Check Configuration and field validation](../article/checking-application-configuration.md)
- [Setting up integrations](../integrations/setting-up-integrations.md)
