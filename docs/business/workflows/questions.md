# Questions

Use Questions to collect information and documents from candidates during your Employment or Services workflows. This
page explains what Questions are, how to create and manage them, and how they behave for candidates.

## What is a Question?

A Question is a prompt shown to a candidate that can:

- Collect text, numbers, dates, choices, or files (e.g., passport photo, manuals).
- Be reused across multiple workflows—this means that updating the question will be applied to all workflows it appears in.
- Be optional or required.

Questions appear to candidates in the order you configure within a workflow.

## Types of Questions

|                                                       | Description                                                                                                                                             |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Text](#qt-text){#qt-text}                            | Use for short free‑text answers like names or notes. Avoid using it for emails, phone numbers, dates, or amounts so your agreements stay accurate.      |
| [Address](#qt-address){#qt-address}                   | Collect a full postal or residential address needed on agreements and payroll records. Consider asking which address type you need (service vs postal). |
| [Phone](#qt-tel){#qt-tel}                             | Capture a primary contact number for updates and signing links. Ask for country code to avoid failed messages.                                          |
| [Email](#qt-email){#qt-email}                         | Required for sending agreements and notifications. Encourage a personal, regularly checked email to reduce delays.                                      |
| [Number](#qt-number){#qt-number}                      | For quantities, hours, or rates you’ll calculate with. Set sensible limits (e.g., minimum 0) to prevent mistakes.                                       |
| [File](#qt-file){#qt-file}                            | Collect documents like IDs or certificates. Tell candidates the required format and quality so approvals aren’t delayed.                                |
| [Date](#qt-date){#qt-date}                            | For start dates, birthdays, or expiry dates. Adding limits (no future DOBs) prevents common errors.                                                     |
| [Single select](#qt-single-select){#qt-single-select} | Let candidates choose one option (like role or site) and drive conditional steps. Keep options clear and stable for reporting.                          |
| [Declaration](#qt-declaration){#qt-declaration}       | For disclosures that need a “Yes” plus an explanation (e.g., medical or legal). Make the explanation required only when “Yes.”                          |
| [Yes/no](#qt-accept){#qt-accept}                      | Quick confirmations or consents. Use precise wording if acceptance is legally binding.                                                                  |
| [Data](#qt-data){#qt-data}                            | Capture repeatable rows (e.g., previous jobs or equipment). Define the columns you need so contracts and exports are complete.                          |

## Accessing Questions

1. In the app header, select Setup.
2. Under Applications, choose Questions.

You’ll see:

- A table of existing questions (type, prompt, last modified).
- Pagination controls and filters.
- An action menu for each question.

## Creating a Question

1. Click Create Question (top‑right).
2. Enter the Prompt (what candidates see).
3. Choose the Type (e.g., Text, Multiple choice, File upload).
4. Configure options:
    - Required: prevent submission until answered.
    - Help text: clarify what’s needed.
    - Validation: constrain format/length where offered.
    - For file uploads: specify acceptable formats or size limits if available.
5. Save.

Tip: Keep prompts short and specific (e.g., “Photo of passport page”).

## Editing or Duplicating

- From the Questions list, use the three‑dot menu:
    - Edit to change the prompt, type settings, or validation.
    - Duplicate to create a variant without starting from scratch.
    - Archive/Delete if a question is no longer needed.

Edits to a question affect future use. Active, in‑progress candidate sessions may not retroactively change.

## Organising and Finding Questions

- Use the search bar to find by prompt text.
- Filter by Type (e.g., File) or by other available filters.
- Sort by Last modified to locate recent changes.
- Use **customise columns** to show additional fields in the table:.
  - **Additional Text:** Displays each question’s helper text/subtext so you can quickly review guidance shown to candidates.
  - **Choices:** Shows the option list for single-select questions to verify wording and coverage.
  - **Hidden:** Adds a column indicating whether the question is hidden from the main questions list.
  - **Workflows:** Lists the workflows where each question is used, helping you assess impact before editing.
  - **Integrations:** Indicates mappings to external systems, so you know which questions affect downstream integrations.

## Using Questions in Workflows

- Open Setup → Workflows to add Questions to specific steps.
- Drag to reorder within a step so candidates see them in the intended sequence.
- Reuse Questions across multiple workflows to keep data consistent.

## Best Practices

- Ask only what you need; fewer questions improve completion rates.
- Group related questions in the same workflow step.
- For document uploads, include an example or note about quality (e.g., “All corners visible, no glare”).
- Review and update Questions periodically to reflect current compliance or business needs.

## See also

- Workflows: add, order, and conditionally show Questions.
- Services and Employment setup: guided configuration paths from the Setup menu.

## Configuration

Use these fields when creating or editing a Question.

|                                                               | Description                                                                                              | Type          | Notes                                              |
|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------|----------------------------------------------------|
| [Question Type](#cfg-question-type){#cfg-question-type}       | Controls the kind of response (text, choice, file, etc.). Becomes read-only for Single select questions. | Select        | Read-only if Single select                         |
| [Prompt](#cfg-prompt){#cfg-prompt}                            | The question or prompt that needs an answer                                                              | Text          | Max length: TextField limit                        |
| [Hint prompt on a question](#cfg-subtext){#cfg-subtext}       | Any general information that needs to be provided                                                        | Text          | Max length: TextField limit                        |
| [Files accepted](#cfg-accept){#cfg-accept}                    | Available for files; choose allowed file categories                                                      | Multi-select  | Visible only when type is File                     |
| [Required (file)](#cfg-answer-required){#cfg-answer-required} | At least one file must be included                                                                       | Select (List) | Default: Mandatory; visible only when type is File |
| [Hide from lists](#cfg-is-deleted){#cfg-is-deleted}           | Do not show in the questions list                                                                        | Checkbox      | Off by default                                     |
