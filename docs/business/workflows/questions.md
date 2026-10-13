# Create and manage reusable questions

Questions are reusable Library Items that collect information from participants. A question can be linked to several
workflows, so check its usage before editing it.

## Who this is for

This article is for organisation and business users who create application or onboarding workflows.

## Question types

| Question type       | Use it for                                                    |
|---------------------|---------------------------------------------------------------|
| **Text**            | A free-text answer.                                           |
| **Address**         | A physical or street address.                                 |
| **Phone**           | A phone number.                                               |
| **Email**           | An email address.                                             |
| **Number**          | A numeric answer, such as hours or a rate.                    |
| **NZ bank account** | A New Zealand bank account number.                            |
| **AU bank account** | An Australian bank account number.                            |
| **AU BSB**          | An Australian BSB or bank-routing number.                     |
| **NZ IRD**          | A New Zealand IRD number.                                     |
| **AU TFN**          | An Australian tax file number.                                |
| **File**            | A file upload, such as a passport or certificate.             |
| **Date**            | A calendar date.                                              |
| **Single select**   | Choosing one option from a list.                              |
| **Multi-select**    | Choosing more than one option from a list.                    |
| **Declaration**     | Answering yes with a description, or no.                      |
| **Accept**          | Giving an either-or answer for an acceptance or confirmation. |
| **Table**           | Providing structured tabular data.                            |

## Create a question

::: instructions

1. Go to **Setup** > **Questions**.
2. Select **Create question**.
3. Enter the participant-facing **Prompt**.
4. Add the **Hint prompt** or subtext when participants need extra guidance.
5. Choose the **Question type**.
6. Add answer choices or other type-specific settings when shown.
7. Select the required file settings, finance profile, or table profile when applicable.
8. Check the question preview.
9. Save the question.

:::

Keep prompts specific. For example, use “Upload a photo of the photo page of your passport” rather than “Passport”.

## Edit a question

::: instructions

1. Go to **Setup** > **Questions**.
2. Search for the question by its prompt or title.
3. Open the question and choose **Edit**.
4. Review the question's usage before changing shared wording, choices, or rules.
5. Make your changes and check the preview.
6. Save the question.

:::

The **Question type** of a **Single select** question cannot be changed after creation. Create a new question when a
different type is needed.

## Hide or delete a question

Use **Hide from lists** when you want to keep a question available to workflows that already use it but prevent it from
appearing in normal question lists. Hiding is different from deleting: it does not remove the question from existing
workflows.

Before deleting or removing a question, check where it is used and what participant or integration process depends on
it. The exact deletion behavior can depend on the question's links and permissions.

## Reuse a question in a workflow

::: instructions

1. Open **Setup** > **Workflows** and select **Edit** mode.
2. Open the **Library** panel.
3. Search for the question by its title or description.
4. Filter by **Question type** if needed.
5. Add the question before or after the selected item, or drag it onto a page.
6. Select the workflow item and review its details in the **Inspector**.
7. Save the workflow.

:::

The workflow controls where the question appears. The reusable question controls its prompt, type, choices, and
question-specific settings.

## Question configuration

| Field                | What it does                                                            |
|----------------------|-------------------------------------------------------------------------|
| **Prompt**           | The question participants answer.                                       |
| **Hint prompt**      | Supporting text or subtext shown with the prompt.                       |
| **Question type**    | Determines the kind of answer collected.                                |
| **Answer choices**   | Options shown for **Single select** and **Multi-select** questions.     |
| **Files accepted**   | File categories accepted by a **File** question.                        |
| **Required**         | Whether the participant must answer the question.                       |
| **Question preview** | Shows how the question is expected to appear.                           |
| **Hide from lists**  | Removes the question from normal lists without removing existing links. |

Finance and table questions also require a profile.
See [Configure file, finance, and table questions](./question-profiles.md).

## Example

Create a **Single select** question called “Which worksite will you attend?” with options for each site. Reuse it in
the seasonal and permanent onboarding workflows. If one workflow needs different options, create a separate question
rather than changing the shared one.

## Common mistakes

- Using **Text** when **Email**, **Phone**, **Number**, or **Date** would provide better validation.
- Editing a shared question without checking where it is used.
- Hiding a question when the intention is to remove it from a workflow.
- Expecting to change a **Single select** question into another type after creation.

## Related articles

- [Choosing the right question type](./question-types.md)
- [Configure file, finance, and table questions](./question-profiles.md)
- [Add and reuse Library Items](./adding-library-items.md)
- [Manage duplicate questions](./managing-duplicate-questions.md)
