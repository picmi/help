# Application Bulk Status Change Guide

Each application has a status and an optional status message. You can update these in bulk, allowing you to efficiently
manage and customise statuses across multiple applications at once.


<explanation>

## Key points
- **Bulk Changes:** You can change the status or message of multiple applications simultaneously.
- **Single Status Type:** Only one type of status can be changed per action, but you may select as many applications as
  fit that status type.
- **Message Customisation:** You can add a unique message for each status change, copy from an existing message, or
  create a new message from scratch.
- **Reusability:** New messages can be reused across different status changes.
- **Notifications and Counts:** The system will notify you of pending changes and display the number of applications to
  be updated.

</explanation>

## Fields

| **Column**             | **Description**                                                                                                                                 |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Name                   | The name of the person associated with the application.                                                                                         |
| Job                    | The job linked to the application.                                                                                                              |
| Status                 | The current status of the application.                                                                                                          |
| Last Action            | The last date or time the status was updated.                                                                                                   |
| Current Status Message | Displays the most recent status message, if available.                                                                                          |
| New Action             | Available actions for the selected status (there may be multiple options per status).                                                           |
| New Status Message     | Editable field for new status messages (note: will be truncated if too long or if it contains multiple lines).                                  |
| Update                 | Displays the change status as: <br/> `Pending` (ready for update)<br/> `Ready` (selected for update)<br/> `Done` (changes applied successfully) |

## Summary for bulk status change

1. **Select Applications**: Start by selecting a base set of applications from People.
2. **Narrow Down**: Refine the selection by choosing specific rows for the bulk change.
3. **Apply Status Change and Messages**: Choose the new status and add any accompanying messages.
4. **Review and Finalise**: Continue adjusting as needed until all intended changes are complete.

<prompt>

You may add a message without changing the status.

</prompt>

<instructions>

## Select available applications

1. Go to **People**
2. Check the **person** rows <span class="mdi mdi-checkbox-marked-outline"></span>
3. Click Bulk Status Change <span class="mdi mdi-chevron-right"></span> from the action menu to open the [next step](#narrow-down)

<prompt>

An individual [application can **also** be changed](changing-application-status) outside of this process

</prompt>

## Select applications to change

4. Check the **rows** <span class="mdi mdi-checkbox-marked-outline"></span> of applications to **change**

<prompt>

When rows are selected, the **action menu** will be displayed above the table with available options

</prompt>


## Select status change action and add messages

5. Locate the **available actions** in the action menu, and choose one to apply across the selected applications
   * only rows with the action listed in the **new action** will be selected
   * selected actions will be highlighted

<prompt>

The Update column in each row will show whether is it will be updated or not. The **total number of rows affected** is shown in **Update** in action menu

</prompt>

**Add new status message**

6. Click **Add Message** in the action menu
7. Enter your message in the text field
8. Click **Add to Selected** when you're done

**Add existing status message**

9. Click **Add Message** in the action menu
6. Your message in the text field will currently be empty
5. Click **Show Existing**<span class="mdi mdi-chevron-right"></span> to bring up previous messages in a table
4. Locate an existing message in the table, or search for another
5. Click **Show** to view the existing message (because it is long or formatted)
6. Click **Copy** for the message to be entered into the existing text field
7. Update the text field if further changes are required
8. Click **Add to Selected** when you're ready

<prompt>

Each new message is still changeable by clicking on the edit pencil on any **New Status Message** chip

</prompt>

## Review and finalise with update

17. Click **Update** in the action menu 
8. Repeat these steps until complete
9. Click <span class="mdi mdi-arrow-left">Back</span> when you are done

<prompt>

When working with different sets of changes, the pending changes notification will help with further selection before update

</prompt>

</instructions>