# Adding provisional users

Create provisional users when a person does not have an email address currently available. Provisional users are created
for a specific job and can access the application using the details provided by the business.

Once you have [created a job](opportunity-create.md), open its **Provisional User** page. The job name is shown in an
outlined chip so you can confirm which job you are working on.

::: prompt
As a business, help people set up an email account as soon as possible. A provisional user can switch to email-based
access after they add a valid, deliverable email address to their profile.
:::

## Choose how to add users

The **Provisional User** page provides three ways to add users:

- **Add a single user**: add one row and complete it before creating the user.
- **Add multiple users**: add blank rows and complete them inline in the table.
- **Import users**: paste rows copied from a spreadsheet into the import workspace.

Adding a user to the table does not create the user. Users are created only after you select eligible rows and choose
**Create selected users**.

## Add a single user

Use this option when you want to enter one person at a time.

1. Open the **Provisional User** page for the job.
2. Select **Add a single user**.
3. Enter the user's **Name** and **Expiry** in the panel.
4. Select **Add to list**.

The user is added to the table and the panel remains open, so you can add another user without reopening it. You can
edit the row in the table before creating the user.

## Add multiple users

Use this option when you want to prepare several blank rows in the table.

1. Open the **Provisional User** page for the job.
2. Select **Add multiple users**.
3. Enter the number of rows you need.
4. Complete the **Name** and **Expiry** cells inline in the table.

These rows are added to the list as pending users. They are not created until you select the rows and choose
**Create selected users**.

## Import users

Use the import workspace to paste user details from a spreadsheet.

### Prepare the import

1. Go to Employment > Jobs > choose a job
2. Click :::icon dots-vertical::: to open the menu.
3. Click  **Create Provisional User**
4. Select **Import users**.
5. Download the import template or copy it to your clipboard.
6. Open the template in your spreadsheet application. It contains two columns:
   - **Name**
   - **Expiry**
7. Add the users to the spreadsheet and copy the rows, including the headings.

### Paste and confirm the import

1. Paste the spreadsheet data into the import workspace.
2. Wait for PICMI to detect the format. The workspace shows the number of rows found.
3. Confirm the source type: **Google Sheets**, **Excel**, **Numbers**, or **CSV**.
4. If one or more rows have no **Expiry** value, enter a default expiry when prompted.

The default expiry applies only to rows where **Expiry** is blank. It does not replace expiry values already present in
the pasted data.

Once a valid paste is detected, the paste area and initial instructions are replaced by the confirmation step. The
fixed footer contains **Add to list**, which remains disabled until a valid paste is ready.

Select **Add to list** to add the imported rows to the table. Adding rows does not create the users yet.

After the rows are added, the import controls are replaced by a success message. Select **Import more users** if you
want to import another set of rows.

::: prompt
If the paste is empty or invalid, PICMI shows an error and keeps the paste area available so you can try again.
:::

## Review and create users

After adding users by any method, review the rows in the table before creating the users.

- Edit rows inline, including **Name** and **Expiry**.
- When no rows are selected, follow the instruction shown above the table: update the rows, then select the users you
  want to create.
- When rows are selected, the selection toolbar replaces that instruction.
- The create action shows a badge with the number of eligible pending users.
- **Create selected users** remains visible, but is disabled when none of the selected rows are pending.
- Clear the selection or remove the selected rows using the selection toolbar.

When you are ready, select the pending users you want to create and choose **Create selected users**. Only then are the
users created for the job.

## After creating provisional users

Provisional users have access details for signing in to PICMI and do not use a username and password. To manage users
after creation, use the relevant user and application details in **People**.

If a provisional user later provides a valid, deliverable email address, entering it on their profile allows them to
switch to email-based access. They can then receive PICMI emails and use the account functionality available to regular
users across multiple applications.
