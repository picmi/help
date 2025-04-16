### Guidelines for technical writers: creating Help Centre pages for PICMI

When writing Help Centre pages for PICMI, it's important to provide clear, user-friendly instructions on interacting
with the concepts in the product as well as how to use user interface (UI).

As well as formatting, there are major components to help:

* [no component](#no-component): general information about using PICMI
* [explanation](#explanation): for more general business concepts
* [instructions](#instructions): specifically for how to perform actions on the screen
* [prompt](#prompts): extra information (short)
* [faq](#faqs): Frequently Asked Question which is usually problem-focussed
* [icons](#icons-available): inline representations

#### Examples of specific workflows

* [search filters on tables or lists](#search-filters-on-tables-or-lists)
* [customise columns](#customise-columns)
* [edit a row through a menu](#edit-a-row-through-a-menu)
* [selection in a menu](#selection-in-a-menu)

Depending on the audience, instructions can be written in **detailed form** for beginners or **short form** for more
advanced users. This guide outlines the steps for writing both types of instructions effectively.

The major goal for PICMI is to have clear instructions to needing images to describe the user interface because updates
are hard to maintain.

## No component

Use when the content stands alone and is general information that applies broadly. This section does not use a component
wrapper. Example uses:

- Introductions or overviews of a feature
- Background context that applies across multiple tasks

## Explanation

Use to break down business concepts or workflows with more depth. Explanations should:

- Be used sparingly and only when something needs conceptual clarity
- Appear either at the end of the page or as their own section
- Be written in clear language that assumes the user is not a subject-matter expert

**Example:**

```markdown
::: explanation
PICMI allows you to reuse messages that have been sent previously, which can save time and help maintain consistency.
:::
```

Where there is more than one nested markdown component, add an extra colon ":" making it four "::::" so that the closing
is known

```markdown
:::: explanation

### heading

content
::: prompt
dfdfd
:::

### heading

content
::: prompt
dfdfd
:::
::::
```

## Instructions

Instructions are captured inside the markdown:

```markdown
::: instructions
content
:::
```

Where there is more than one nested markdown component, add an extra colon ":" making it four "::::" so that the closing
is known

```markdown
:::: instructions

### heading

content
::: prompt
dfdfd
:::

### heading

content
::: prompt
dfdfd
:::
::::
```

One nested component can be done by exlcuding the last closing ":::" and should be avoided to make the markdown
maintainable and understandable

```markdown
::: instructions

### heading

content
::: prompt
dfdfd
:::
```

### **Headings for Clear Organization**

- Always use appropriate headings (`#`, `##`, `###`) to break down instructions into logical sections.
    - Use `#` for the main title of the help page.
    - Use `##` for each major task, like **Duplicating a Listing** or **Making Final Changes**.
    - For smaller sections within a task, use `###`.

### **Focus on User Actions**

- Write each instruction step based on user actions (e.g., clicking buttons, selecting options).
- Use **bold** for naming specific UI elements like buttons, menus, or tabs, ensuring they stand out.

  **Example:**
   ```markdown
   1. Go to **Jobs**.
   2. Click on the **job** title to start editing.
   ```

### **Use Icons and Symbols**

- When icons or symbols are present in the interface (like vertical dots or checkboxes), include them in the
  instructions for clarity.

  **Example:**
   ```markdown
  Click :::icon dots-vertical Action::: to open the menu. 
  Click :::icon dots-horizontal More::: to open the menu.
  Locate the row :::icon checkbox-marked-outline::: with the listing/job to duplicate
   ```

---

### 2. **Writing Detailed vs. Short Form Instructions**

### **Detailed Form Instructions**

- **When to use**: For users who need step-by-step guidance or may not be familiar with the UI.
- **What to include**: Provide a separate step for each action, using descriptive text to guide users through the
  interface. New contexts (like a dialog or a navigational pane) should be a subsequent numbering.

  **Example:**

   ```markdown
   ## To Create a Duplicate (Detailed Form)
   
   1. Go to **Jobs**.
   2. Locate the row :::icon checkbox-marked-outline::: with the **job** to duplicate.
   3. Click &vellip; (vertical dots) to open the menu.
   4. Select **Duplicate Job**.
   5. Click **Duplicate** in the dialog to create the new job.
   ```

    - **Benefit**: Provides full context for each step and is useful for less experienced users or when a process
      involves multiple clicks or navigation paths.
    - **Best practice**: Always assume users may not be familiar with the product's layout, so give explicit
      instructions at each stage. Start from the top-level of the application.

---

### **Short Form Instructions**

- **When to use**: For internal or advanced users who are already familiar with the product's navigation.
- **What to include**: Condense multiple steps into a single line, showing only the essential path or actions using `>`
  to indicate navigation. Use title case for the elements with labels and lower case for dynamic aspects.

  **Example:**

   ```markdown
   ## To Create a Duplicate (Short Form)

   Jobs > job [:::icon vertical-dots:::] > Duplicate Job > Duplicate
   ```

    - **Benefit**: It's quick to read and write, suitable for advanced users or team members who understand the
      product’s UI.
    - **Best practice**: Use this format when communicating internally or for users who prefer efficiency and know the
      system.

---

### 3. **Choosing the Right Form Based on Audience**

- **Detailed Form** is ideal for external users, especially those who are less experienced or may not use the system
  often. It ensures that no steps are missed and avoids confusion.

  **Example in Help Page:**
   ```markdown
   ## Making Final Changes (Detailed Form)

   1. Go to **Jobs**.
   2. On the newly duplicated job, click on the **job** title to start editing.
   3. Move through the fields and update values as needed.
   4. Click **Save** when you're done.
   ```

- **Short Form** is better suited for power users, administrators, or developers. It focuses only on the actions,
  skipping over detailed descriptions.

  **Example in Help Page:**
   ```markdown
   ## Making Final Changes (Short Form)

   Jobs > job [:::icon vertical-dots:::] > Edit > [update fields] > Save
   ```

---

### 4. **Using Notes and Additional Information**

- When providing information that doesn't fit directly into the step-by-step format, like important warnings or
  exceptions, use blockquotes for clarity.

  **Example:**
   ```markdown
   > **Note:** Vacancy numbers are not copied and must be set individually.
   ```

## Prompts

Use to provide short, supportive hints or context that help the user understand *why* or *when* to take an action.
Prompts should:

- Be concise (1–3 sentences)
- Follow the instruction they relate to
- Include details that are not critical to completing the task but are helpful or clarifying

**Example:**

```markdown
::: prompt
You can reuse existing messages and see what you have already sent.
:::
```

## FAQs

PICMI Help Centre content supports FAQs using a special markdown format. Use this format to keep content structured and consistent across the platform.

### Format

Use the `:::faq` markdown component to create each FAQ item.

Basic structure:
```markdown
:::faq What is PICMI?
PICMI is a tool that connects people (your potential workforce) with you (the employer) through a streamlined hiring process.
:::
```

### Best Practices

- **Be concise**: Each FAQ should directly answer the question without unnecessary fluff.
- **Use line breaks** to improve readability where needed.
- **Support with links**: Add links to relevant Help Centre articles for further reading or actions.
- **Use `<prompt>` or `<explanation>`** blocks only when needed. Avoid mixing them inside the main answer unless it adds clear value.
- **Use lists** for step-by-step guidance or alternatives.
- **Group related questions** under meaningful subheadings using `##`.

### Examples

**Do**:
```markdown
:::faq What should I do if I can't log in?
Make sure you're using the correct email. If needed, click “Forgot Password” to reset.
:::
```

### Prompt and Explanation

To enrich your FAQ with helpful context:

- Use `:::prompt` to provide reminders, warnings, or clarifications.
- Use `:::explanation` when deeper reasoning or multi-step conceptual explanation is needed.
- With nested, always use the component properly using four colons ":" `::::`.

```markdown
::::faq Why didn’t the person receive the invite email?
Check for typos in their email address or junk folder settings.
:::prompt
Provisional users do not receive emails.
:::
::::
```

### Tips

- FAQs should be standalone. Don’t assume users have read other pages.
- When referring to PICMI concepts (like application statuses), link to the appropriate page.
- Use consistent phrasing across FAQs to build familiarity.

## Icons available

Below is the list of currently used icons with their markdown for inserting into the help pages.

To generate this list:

```bash
grep -h -Eo ':::icon[[:space:]]+[^[:space:]:]+' --include='*.md' -r . \
  | sed -E 's/^:::icon[[:space:]]+//' \
  | sort \
  | uniq \
  | awk '{ print "* `" $0 "` :::icon " $0 ":::" }' \
  | pbcopy
```

* `account-circle-outline` :::icon account-circle-outline:::
* `account-eye-outline` :::icon account-eye-outline:::
* `account-lock-outline` :::icon account-lock-outline:::
* `arrow-left` :::icon arrow-left:::
* `bell-outline` :::icon bell-outline:::
* `card-account-details-outline` :::icon card-account-details-outline:::
* `cellphone-screenshot` :::icon cellphone-screenshot:::
* `check` :::icon check:::
* `check-circle` :::icon check-circle:::
* `checkbox-marked-outline` :::icon checkbox-marked-outline:::
* `chevron-down` :::icon chevron-down:::
* `chevron-right` :::icon chevron-right:::
* `close` :::icon close:::
* `cloud-download-outline` :::icon cloud-download-outline:::
* `cog-outline` :::icon cog-outline:::
* `content-copy` :::icon content-copy:::
* `dots-horizontal` :::icon dots-horizontal:::
* `dots-vertical` :::icon dots-vertical:::
* `download` :::icon download:::
* `exclamation` :::icon exclamation:::
* `eye-outline` :::icon eye-outline:::
* `flip-horizontal` :::icon flip-horizontal:::
* `flip-vertical` :::icon flip-vertical:::
* `help-circle-outline` :::icon help-circle-outline:::
* `horizontal-dots` :::icon horizontal-dots:::
* `menu` :::icon menu:::
* `open-in-new` :::icon open-in-new:::
* `passport` :::icon passport:::
* `pencil-outline` :::icon pencil-outline:::
* `plus` :::icon plus:::
* `printer` :::icon printer:::
* `refresh` :::icon refresh:::
* `rotate-left` :::icon rotate-left:::
* `rotate-right` :::icon rotate-right:::
* `toggle-switch-outline` :::icon toggle-switch-outline:::

## Examples of documenting specific types of workflow

These examples are key workflows:

* [search filters on tables or lists](#search-filters-on-tables-or-lists)
* [customise columns](#customise-columns)
* [edit a row through a menu](#edit-a-row-through-a-menu)
* [selection in a menu](#selection-in-a-menu)

### Search filters on tables or lists

```
1. ...
2. User the filters to find previous messages
  * **Search Messages**: look for groups of messages with similar text
  * **Status**: narrow the search based on application status
  * **Dates**: narrow the search on dates of the status message change
  * **Jobs**
  * **Show latest reason only**
  * **Show hidden reasons**
3. Locate the message
  * **Message**: text stored (also expand displays the entire message formatted)
  * **Visibility**: [internal or shared](#visibility)
  * **Application status**: [status](../about-picmi/applications.md#application-status) when the message was stored
  * **Updated**: date when the message was stored
4. ...
```

### Customise columns

```
1. Go to **People**.
2. Select :::icon cog-outline::: **Customise Columns**
3. Locate **Personalise Conditions** section
4. Select
    * **Status Message**: shows the text
    * **Message Visibility**: show shared/internal
5. Click **Save** when you're done
6. The **Status Message** and/or **Message Visibility** column will now show in the table for all entries
7. Locate the **application** row :::icon checkbox-marked-outline:::
```

### Edit a row through a menu

```
1. Go to **People**.
2. Locate the **application** row :::icon checkbox-marked-outline:::.
3. Click &vellip; (vertical dots) to open the menu.
4. ...
```

### Selection in a menu

```markdown
1. ...
2. Locate the **application** row :::icon checkbox-marked-outline:::.
3. Click &vellip; (vertical dots) to open the menu.
4. Select **Status messages**.
5. ...
```
