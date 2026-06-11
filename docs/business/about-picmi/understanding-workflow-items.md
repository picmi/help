# Understanding workflow reusable content

PICMI [workflows](understanding-workflows.md) are built by combining structure with reusable content.

The workflow itself controls the participant journey: which pages they see, which items appear on each page, and the
order those items appear in. The wording, questions, contracts, images, and videos sit underneath that structure as
reusable building blocks.

:::prompt
The key goal is **consistency across workflows through reuse**. When the same question, contract, content block, or file
is needed in more than one place, link to the shared version instead of making a separate copy.
:::

## The Workflow Structure

A workflow is made up of:

1. **Pages**
2. **Items** on each page

This is the skeleton of the workflow. It controls grouping and order.

### Pages

Pages group related parts of the workflow together. For example:

- Check Your Fit
- Personal Information
- Health & Safety
- Right to Work
- Agreement

Changing pages changes the structure of the workflow. For example, you might add a new page, rename a page, remove a
page, or move a page earlier or later in the workflow.

### Items

Items are the things placed on pages. They decide what appears in the workflow and in what order. An item might link to:

- a question
- a contract
- a content block

Changing items changes the structure inside a page. For example, you might move a question above a video, add a
contract item to the Agreement page, or remove an image from a page.

:::prompt
Pages and items tell PICMI **where something appears**. The linked question, contract, content block, or file controls
**what the participant sees**.
:::

## The Reusable Building Blocks

Underneath the workflow structure are reusable building blocks. These are maintained separately and then linked into
pages and items.

| Building block      | What it controls                                        | Where it links                                 | Reuse example                                             |
|---------------------|---------------------------------------------------------|------------------------------------------------|-----------------------------------------------------------|
| **Questions**       | The wording, answer type, options, and validation        | Items on pages                                 | The same right-to-work question used in many workflows    |
| **Contracts**       | The contract template shown or issued through a workflow | Items on pages                                 | The same employment agreement used across similar jobs    |
| **Content blocks**  | Page titles, headings, videos, and images                | Page titles link to pages; other blocks to items | The same health and safety heading reused on many pages   |

When a reusable building block is updated, every page or item linking to that building block can show the updated
version. This is useful when the change should be consistent everywhere.

:::explanation
## Content Blocks

Content blocks are reusable pieces of workflow content. They are split into different types:

- **Page titles**
- **Headings**
- **Videos**
- **Images**

Page titles and headings are both title content, but they are used at different levels:

- **Page titles** link only to pages. They name the page and do not have extra explanatory text.
- **Headings** link to items on a page. They can include a title and optional extra text.

Video and image content blocks also link to items on a page. This means the same heading, video, or image reference can
be reused in more than one workflow item, while the same page title can be reused across pages.
:::

## Files Linked From Content Blocks

Video and image content blocks can also link to files that are stored separately.

For example:

- a video content block may link to a YouTube video
- an image content block may link to an image file
- a file or document shown in the workflow may be stored outside PICMI

This creates another layer of reuse. The workflow links to a content block, and the content block links to the file.

:::prompt
If the file changes but the link stays the same, the workflow can show the updated file without changing the workflow
structure.
:::

See [Linked files](../workflows/linked-files.md) and [Linked videos](../workflows/linked-videos.md) for more detail.

## How Updates Flow

| What you change                     | What changes in PICMI                                  | Best used when                                           |
|-------------------------------------|--------------------------------------------------------|----------------------------------------------------------|
| **Pages**                           | The grouping and order of the workflow                 | The participant journey needs to change                  |
| **Items on a page**                 | What appears on a page and in what order               | A question, contract, image, video, or heading moves     |
| **Question**                        | The question wording, answer format, options, or rules | The same answer should be collected consistently         |
| **Contract**                        | The contract template linked through the workflow      | Agreement wording or substitutions need to change        |
| **Page title content block**        | The reusable title linked to a page                    | A page needs a consistent title                          |
| **Heading content block**           | The reusable heading item and optional extra text      | A heading or short explanation should be reused          |
| **Video or image content block**     | The reusable media reference linked to an item         | The displayed media reference should be reused           |
| **File linked from a content block** | The underlying video, image, or downloadable file      | The source file needs to be replaced or corrected        |

## Decision Tree: What Should I Change?

Start with the problem you are trying to solve.

### 1. Is the workflow in the wrong order or grouped incorrectly?

Change the **workflow structure**.

Use this when:

- a page is missing
- pages are in the wrong order
- an item is on the wrong page
- an item needs to move up or down
- the workflow needs a different sequence for participants

This is a pages and items change.

### 2. Is the wording, question, contract, page title, heading, video reference, or image reference wrong?

Change the **linked reusable building block**.

Use this when:

- a question needs clearer wording
- question options or validation need to change
- a contract template needs updated terms
- a page title needs new wording
- a heading title or its optional extra text needs new wording
- a video or image content block points to the wrong media

Before changing it, check whether the same building block is reused elsewhere. If it is reused, make the change only
when the same update should appear everywhere that block is used.

### 3. Is the downloadable file, video file, or image file wrong?

Change the **source file**.

Use this when:

- the PDF has been updated
- the video has been replaced
- the image file is incorrect
- the content is right, but the file itself is outdated

If the file can be replaced while keeping the same permanent link, the content block and workflow do not need to change.

### 4. Should this change apply everywhere or only in one workflow?

Decide whether to reuse or separate.

Use the existing shared building block when the change should be consistent across workflows. Create or link a separate
building block when one workflow needs different wording, a different contract, or different media.

:::explanation
## Practical Examples

**The health and safety video is on the wrong page.**

Change the page item placement. The video content block may not need to change.

**The same health and safety heading has a spelling mistake everywhere.**

Change the shared heading content block once.

**One workflow needs a different version of a question.**

Create or link a separate question for that workflow instead of changing the shared question.

**The PDF linked from a workflow is outdated.**

Replace the source file while keeping the same permanent link, where possible.
:::

## Why This Matters

Separating structure from reusable content helps you:

- keep workflows consistent
- avoid editing the same wording in many places
- control whether a change affects one workflow or many workflows
- update files without rebuilding the workflow
- understand whether a problem is about structure, wording, or the source file

If you are not sure which layer to change, identify what is wrong first: the workflow grouping and order, the reusable
wording or content, or the file linked underneath it.
