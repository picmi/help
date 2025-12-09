# Understanding Items in Workflows (shared, specific and linked)

PICMI [workflows](understanding-workflows.md) are built from three (plus one) layers:

1. **Workflows**
2. **Pages** inside each workflow
3. **Items** on each page (such as questions, personal information fields, headings, files, and videos)
4. (plus one) **Links on items** to external files or videos

:::prompt
Some items are **shared across many workflows**, while others belong **only to one workflow**. Updates behave differently depending on which type you are working with.  
:::

This guide explains how updates flow so you know what will change—and where.

:::explanation
## 1. Shared Items Used Across Multiple Workflows

**(Example: Questions and Personal Information fields)**

Some items in PICMI are used in more than one workflow. These live in a central place.

### When you update these items:

- The change appears in **every workflow that uses them**
- You only need to update them once
- This can save a lot of time

### Important to know:

If you edit a shared question (for example, adding options or changing the wording),  
**all workflows using that question will immediately show the new version**.

If you need that item to be different in different workflows, create a separate copy. (This is rare in practice.)
:::

::::explanation

## 2. Specific Items That Belong to One Workflow

**(Example: Headings, videos, file links)**

These items only exist in the workflow where you added them.

### When you update them:

- The change happens **only in that single workflow**
- Other workflows will not change
- If you want the same update in other workflows, you will need to edit each one

### Example:

If you replace a video or update a heading, you need to make the same change everywhere it appears.  
These items do *not* update automatically across multiple workflows.

:::prompt
PICMI is exploring shared versions of these items in the future.
:::
::::

:::explanation

## 3. Linked Files and Videos Stored Outside PICMI

**(Example: PDFs in Google Drive, videos on YouTube)**

Some items in PICMI do not contain the content directly.  
They simply **link** to a file or video stored somewhere else.

Think of these as a **window** to the content rather than a copy of it.

### When you update the file at the source:

- The person completing the workflow will see the new version
- You do not need to change anything in PICMI  
  **as long as the link stays the same**

### Example:

If you replace a PDF inside Google Drive but keep the same file location:  
Every workflow using that link will show the updated PDF automatically.

This can be very helpful, but it can also surprise people who expect the workflow to keep the old version.
:::

## Summary Table

| Type of Item                                                         | What Happens When You Update It?                                  | Where Do Changes Show Up?     |
|----------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------|
| **Shared items** (questions, Personal Information fields)            | Update once → changes everywhere                                  | All workflows using that item |
| **Workflow-specific items** (headings, images, videos, instructions) | Update stays only in that workflow                                | Only the workflow you edited  |
| **Linked external files** (Drive PDFs, YouTube videos)               | Update the file in Drive/YouTube → PICMI shows the latest version | All workflows using the link  |


## Why This Matters for You

Understanding how updates work helps you:

- Avoid surprises when a change appears in more than one workflow
- Know when you must update multiple workflows manually
- Understand why updating a PDF in Google Drive updates PICMI automatically
- Make better choices about when to reuse items or when to ask for a separate copy

This helps keep your workflows clean, consistent, and up to date.

If you ever need help deciding which type of item you are editing, PICMI Support is here to help.
