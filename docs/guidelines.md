### Guidelines for Technical Writers: Creating Help Pages for PICMI

When writing help pages for PICMI, it's important to provide clear, user-friendly instructions on interacting with the user interface (UI). Depending on the audience, instructions can be written in **detailed form** for beginners or **short form** for more advanced users. This guide outlines the steps for writing both types of instructions effectively.

The major goal for PICMI is to have clear instructions to needing images to describe the user interface because updates are hard to maintain. 

---

### 1. **Structuring UI Instructions**

#### **Headings for Clear Organization**
- Always use appropriate headings (`#`, `##`, `###`) to break down instructions into logical sections.
    - Use `#` for the main title of the help page.
    - Use `##` for each major task, like **Duplicating a Listing** or **Making Final Changes**.
    - For smaller sections within a task, use `###`.

#### **Focus on User Actions**
- Write each instruction step based on user actions (e.g., clicking buttons, selecting options).
- Use **bold** for naming specific UI elements like buttons, menus, or tabs, ensuring they stand out.

  **Example:**
   ```markdown
   1. Go to **Jobs**.
   2. Click on the **job** title to start editing.
   ```

#### **Use Icons and Symbols**
- When icons or symbols are present in the interface (like vertical dots or checkboxes), include them in the instructions for clarity.

  **Example:**
   ```markdown
  Click Action [&vellip;] to open the menu. 
  Click More [&hellip;] to open the menu.
  Locate the row <span class="mdi mdi-checkbox-marked-outline"></span> with the listing/job to duplicate
   ```

  **Cheatsheet**
    ```markdown
    &vellip; &amp;vellip; <span class="mdi mdi-dots-vertical"/>
    &hellip; &amp;hellip; <span class="mdi mdi-dots-horizontal"/>
    <span class="mdi mdi-checkbox-marked-outline">
    <span class="mdi mdi-content-copy"/> 
    <span class="mdi mdi-open-in-new"/>
    <span class="mdi mdi-refresh"/>
    <span class="mdi mdi-exclamation"/>
    <span class="mdi mdi-check primary"/>
    ```

---

### 2. **Writing Detailed vs. Short Form Instructions**

#### **Detailed Form Instructions**
- **When to use**: For users who need step-by-step guidance or may not be familiar with the UI.
- **What to include**: Provide a separate step for each action, using descriptive text to guide users through the interface. New contexts (like a dialog or a navigational pane) should be a subsequent numbering.

  **Example:**

   ```markdown
   ## To Create a Duplicate (Detailed Form)
   
   1. Go to **Jobs**.
   2. Locate the row <span class="mdi mdi-checkbox-marked-outline"></span> with the **job** to duplicate.
   3. Click &vellip; (vertical dots) to open the menu.
   4. Select **Duplicate Job**.
   5. Click **Duplicate** in the dialog to create the new job.
   ```

    - **Benefit**: Provides full context for each step and is useful for less experienced users or when a process involves multiple clicks or navigation paths.
    - **Best practice**: Always assume users may not be familiar with the product's layout, so give explicit instructions at each stage. Start from the top-level of the application.

---

#### **Short Form Instructions**
- **When to use**: For internal or advanced users who are already familiar with the product's navigation.
- **What to include**: Condense multiple steps into a single line, showing only the essential path or actions using `>` to indicate navigation. Use title case for the elements with labels and lower case for dynamic aspects.

  **Example:**

   ```markdown
   ## To Create a Duplicate (Short Form)

   Jobs > job [&vellip;] > Duplicate Job > Duplicate
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

   Jobs > job [&vellip;] > Edit > [update fields] > Save
   ```

---

### 4. **Using Notes and Additional Information**

- When providing information that doesn't fit directly into the step-by-step format, like important warnings or exceptions, use blockquotes for clarity.

  **Example:**
   ```markdown
   > **Note:** Vacancy numbers are not copied and must be set individually.
   ```

---

### 5. **Testing and Reviewing**

- Always preview the markdown output to ensure the formatting appears correctly.
- Test the instructions in the actual product interface to ensure that they guide users effectively.

By following these guidelines, technical writers can create help pages that are both informative and adaptable to different user needs, ensuring a smooth experience for all users interacting with PICMI's interface.
