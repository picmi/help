# Content Blocks

Content Blocks are reusable Library Items that your organisation can create, manage, and add to workflows.

They help keep common workflow content in one place, so you can reuse the same information across multiple workflows
instead of recreating it each time.

Content Blocks can be used for:

- Page Titles
- Headings
- Images
- Videos
- Data
- item content

::: prompt
Note: workflows are also made up of [questions](./questions.md), Information, and contracts.
:::

## Why use Content Blocks?

Content Blocks are for:

- Reuse the same content across multiple workflows
- Keep workflow content consistent
- Manage shared content from one central list
- Update content without rebuilding workflow items from scratch
- Hide outdated content from lists when it should no longer be used

## Content Block types

When creating a Content Block, you must choose a **Type**.

| Type           | Use for                                                                         |
|----------------|---------------------------------------------------------------------------------|
| **Page Title** | A page title content block                                                      |
| **Heading**    | A heading or title with optional supporting details                             |
| **Data**       | Reusable structured information shown inside the workflow                       |
| **Image**      | A web link to an image with optional title. See [linked files](./linked-files)  |
| **Video**      | A web link to a video with optional title.  See [linked video](./linked-videos) |

:::prompt
The fields shown on the form may change depending on the type you select.
:::

### Required information

Depending on the type, you may need to provide:

- **Title**: required for Heading and Page content blocks
- **Additional details**: used for Heading content blocks and can contain supporting content
- **Data value**: used for Data content blocks
- **Web-link**: required for Image and Video content blocks; enter the URL of the image or video

::: instructions

## Creating a Content Block

To create a Content Block:

1. Go to **Setup** > **Content blocks**.
2. Select **Create Content Block**.
3. Choose the **Type**.
4. Complete the required fields.
5. Save the Content Block.

:::

## Creating a Content Block from the Workflow Builder

You can also create supported Content Blocks while editing a workflow.

::: instructions

1. Go to **Setup** > **Content blocks**.
2. Locate the content block row, click &vellip; (vertical dots) to open the menu.
3. Select **Edit** .
5. Select the option to create a Content Block.
6. Choose the Content Block type.
7. Complete the required fields.
8. Add the Content Block to the selected page or item position.
9. Save the workflow.

:::

::: instructions

## Editing a Content Block

You can edit an existing Content Block to update:

- Type
- Title
- Description or supporting content
- Data value
- Image or video link
- Visibility in lists

To edit a Content Block:

1. Go to **Setup** > **Content blocks**.
2. Use one of the various methods to show the edit details pane
    * Click on the row
    * Click &vellip; (vertical dots) to open the menu, select :::icon pencil-outline **Edit**:::
3. Make your changes.
4. Save.

:::: prompt
Any content block can be **hidden for lists**. See [hiding a content block](#hiding-a-content-block)
::::
:::

## Editing a linked Content Block from the Workflow Builder

::: instructions

1. Go to **Setup** > **Workflows**.
2. Locate the workflow row :::icon checkbox-marked-outline:::, click &vellip; (vertical dots) to open the menu.
3. Select **Edit** mode.
4. Select the page or item that links to the Content Block.
5. Review the Content Block in the Inspector.
6. Edit the linked Content Block if the builder allows editing for that type.
7. Save your changes.

:::

::: prompt
Editing a linked Content Block can affect every workflow using that Content Block. If only one workflow needs different
wording, media, or data, create or link a separate Content Block instead.
:::

## Searching Content Blocks

The Content Blocks search helps you find existing content across one or more organisations, depending on your access.

You can search by:

- Search text
- Content Block type
- Archived or hidden status

If no type is selected, the search includes the standard Content Block types:

- Image
- Data
- Heading
- Video
- Page Title

:::: instructions

## Show more details

1. Select :::icon cog-outline::: **Customise Columns**
2. Select any of the phases to view as new column titles:
    * **Text**
    * **Hidden**
    * **Last modified**
    * **Workflows**

::: prompt
Learn more about [customise columns](../article/customise-columns.md)
:::
::::

## Previewing a Content Block

Content Blocks can be previewed before being used in a workflow.

Preview allows you to check how the content will appear as a workflow step or content item.

This is useful for confirming that:

- The title is correct
- Supporting content displays as expected
- Image or video links are valid
- Page-style content is suitable before being added to a workflow

## Content Blocks in participant workflows

Content Blocks can appear as page titles, section headings, and item content. A participant-facing workflow heading can
show the linked Content Block name and description, depending on the block type and workflow placement.

Preview the workflow after adding or editing Content Blocks to check:

- the page title or heading is clear
- the description appears where expected
- images and videos load correctly
- data content is readable
- the Content Block appears in the intended workflow location

## Hiding a Content Block

Content Blocks are not permanently deleted. Instead, they can be **hidden from lists**.

Hiding a Content Block means it will no longer appear in the normal Content Block list view, helping prevent users from
selecting outdated or unwanted content.

When editing a Content Block, use **Hide from lists**.

Set this to **Yes** if you no longer want the Content Block to appear in standard lists.

## Hiding Content Blocks used in workflows

If a Content Block is linked to one or more workflows, you will need to remove it from those workflows before it can be
hidden.

When hiding a Content Block, you may see the option **On hide, remove from all linked workflows**.

If set to **Yes**, the Content Block will be removed from linked workflows.

:::prompt
**Important:** Removing a Content Block from workflows cannot be undone.

If the Content Block is a page, removing it may also remove the page's items from the workflow.
:::

If you do not choose to remove it from linked workflows, the system may prevent the Content Block from being hidden
until the workflow links are resolved.

## Best practices

When using Content Blocks:

- Use clear, descriptive titles
- Choose the correct type before saving
- Use reusable wording where possible
- Check image and video links before publishing
- Preview content before adding it to workflows
- Hide old content instead of reusing it for a different purpose
- Be careful when removing hidden content from linked workflows

## FAQ

::: faq Can I delete a Content Block?
No. Content Blocks cannot currently be permanently deleted.

If a Content Block should no longer be used, hide it from lists instead.
:::
