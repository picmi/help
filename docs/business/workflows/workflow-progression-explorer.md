# Workflow Progression Explorer

The Workflow Progression Explorer helps business users examine a workflow's progression rules and related reviews.
Progression rules determine what happens as an application moves through the workflow, including which answers need
business review.

## Open the explorer

In the Business area, open **Workflows** and select the workflow you want to understand. Open that workflow's
progression
or review view to find the explorer. The exact view label may vary.

When the explorer opens, start the **Tour Guide**. It walks you through the interface step by step and is the best way
to learn how to explore the workflow's progression rules and reviews.

## How reviews relate to applications

Some workflows have review questions, such as **Review Consent** or **Review Decision**, where an answer needs a
business review. While a review is pending, the application remains **In Progress**.

Recording a review outcome does not itself cancel the application or change its overall status to **Declined**. If a
review is **Declined**, cancel the application if the business intends to end it. If the outcome is **Unable to
Proceed**,
cancel the application. Use the separate cancellation action so you can account for workflows with multiple review
questions, answers that may change and be reviewed again, and clear [status messages](../article/status-message).

See [Understanding Progressions](../about-picmi/understanding-progressions) for more about progression outcomes and
[Changing application status](../article/changing-application-status) to learn how to cancel an application.
