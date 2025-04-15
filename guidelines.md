### Guidelines for technical writers: creating Help Centre pages for PICMI

When writing Help Centre pages for PICMI, it's important to provide clear, user-friendly instructions on interacting with the concepts in the product as well as how to use user interface (UI). 

As well as formatting, there are major components to help:

* [no component](#no-component): general information about using PICMI
* [explanation](#explanations): for more general business concepts
* [instructions](#instructions): specifically for how to perform actions on the screen
* [prompt](#prompts): extra information (short)
* [faq](#faqs): Frequently Asked Question which is usually problem-focussed
* [icons](#icons-available): inline representations

Depending on the audience, instructions can be written in **detailed form** for beginners or **short form** for more advanced users. This guide outlines the steps for writing both types of instructions effectively.

The major goal for PICMI is to have clear instructions to needing images to describe the user interface because updates are hard to maintain.

## No component



## Explanations


## Instructions

Instructions are captured inside the markdown:

```markdown
::: instructions
content
:::
```

Where there is more than one nested markdown component, add an extra colon ":" making it four "::::" so that the closing is known 

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

One nested component can be done by exlcuding the last closing ":::" and should be avoided to make the markdown maintainable and understandable

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
- When icons or symbols are present in the interface (like vertical dots or checkboxes), include them in the instructions for clarity.

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
- **What to include**: Provide a separate step for each action, using descriptive text to guide users through the interface. New contexts (like a dialog or a navigational pane) should be a subsequent numbering.

  **Example:**

   ```markdown
   ## To Create a Duplicate (Detailed Form)
   
   1. Go to **Jobs**.
   2. Locate the row :::icon checkbox-marked-outline::: with the **job** to duplicate.
   3. Click &vellip; (vertical dots) to open the menu.
   4. Select **Duplicate Job**.
   5. Click **Duplicate** in the dialog to create the new job.
   ```

    - **Benefit**: Provides full context for each step and is useful for less experienced users or when a process involves multiple clicks or navigation paths.
    - **Best practice**: Always assume users may not be familiar with the product's layout, so give explicit instructions at each stage. Start from the top-level of the application.

---

### **Short Form Instructions**
- **When to use**: For internal or advanced users who are already familiar with the product's navigation.
- **What to include**: Condense multiple steps into a single line, showing only the essential path or actions using `>` to indicate navigation. Use title case for the elements with labels and lower case for dynamic aspects.

  **Example:**

   ```markdown
   ## To Create a Duplicate (Short Form)

   Jobs > job [:::icon vertical-dots:::] > Duplicate Job > Duplicate
   ```

    - **Benefit**: It's quick to read and write, suitable for advanced users or team members who understand the product’s UI.
    - **Best practice**: Use this format when communicating internally or for users who prefer efficiency and know the system.

---

### 3. **Choosing the Right Form Based on Audience**

- **Detailed Form** is ideal for external users, especially those who are less experienced or may not use the system often. It ensures that no steps are missed and avoids confusion.

  **Example in Help Page:**
   ```markdown
   ## Making Final Changes (Detailed Form)

   1. Go to **Jobs**.
   2. On the newly duplicated job, click on the **job** title to start editing.
   3. Move through the fields and update values as needed.
   4. Click **Save** when you're done.
   ```

- **Short Form** is better suited for power users, administrators, or developers. It focuses only on the actions, skipping over detailed descriptions.

  **Example in Help Page:**
   ```markdown
   ## Making Final Changes (Short Form)

   Jobs > job [:::icon vertical-dots:::] > Edit > [update fields] > Save
   ```

---

### 4. **Using Notes and Additional Information**

- When providing information that doesn't fit directly into the step-by-step format, like important warnings or exceptions, use blockquotes for clarity.

  **Example:**
   ```markdown
   > **Note:** Vacancy numbers are not copied and must be set individually.
   ```

## Prompts

## FAQs


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
