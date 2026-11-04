# Invoices

The **Invoices** page helps you review accepted employment applications for a selected invoice period. It shows which
accepted applications are potentially billable, which are non-billable, and the worker and job details behind the
figures.

This page is a reporting view for tracking what may go into an invoice. It is not the list of invoices already issued
to your business. For information about billing, issued invoices, and historical invoice records, see the
[billing guide](../about-picmi/billing.md).

:::: instructions

## Open the Invoices page

1. Goto Profile :::icon account-circle-outline::: > Invoices
2. Use the filters to find accepted applications:
    * **Organisation**: you may belong to multiple organisations
    * **Dates**: expand the search beyond the current invoice period
    * click Apply to each after selection to search
3. Locate the applications of interest

When you open the current invoice view, PICMI uses the current month as the default invoice period. The selected period
appears above the summary cards. Depending on your organisation settings, the
period may also show the organisation's time zone.

:::prompt
Some people belong to multiple organisations and may have access to multiple businesses or organisations. Use the
invoice search area to choose the organisations included in the report.
:::

::::

## Filter invoice results

Use the invoice search area to choose the organisations and dates included in the report.

| **Field**                   | **What it means**                                                                                                                                                                                                                                                                            |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Available Organisations** | Choose one or more organisations to include in the invoice results. This field is optional. If no organisation is selected, PICMI uses the current organisation. Use this when you have access to multiple businesses or organisations and want to include or compare their invoice results. |
| **Dates**                   | Choose the start and end date for the invoice period. This field is optional. If no dates are selected, PICMI defaults to the current month. The report looks for accepted applications within this date range.                                                                              |

::: prompt
If the figures look different from what you expected, check the selected date range and selected organisations first.
:::

## Understand the summary cards

The summary cards show a quick count of the accepted applications found for the selected period.

The report includes each employment application with a genuine transition into **Accepted** during the selected period,
using the organisation's time zone. Each application appears once. Archiving or restoring an application does not count
as another acceptance.

| **Card**              | **What it means**                                                                                                                                                                        |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Billable**          | Applications with exactly one genuine acceptance in their complete history. Because the report includes applications accepted in the selected period, this acceptance is in that period. |
| **Non-billable**      | Applications with more than one genuine acceptance. Reissued applications are not billable, even if an acceptance occurred in the selected period.                                       |
| **Accepted total**    | The total number of application rows returned for the period. This equals **First accepts** plus **Single reissue** plus **Multiple reissues**.                                          |
| **First accepts**     | Applications with exactly one genuine acceptance in their complete history.                                                                                                              |
| **Single reissue**    | Applications with exactly two genuine acceptances in their complete history.                                                                                                             |
| **Multiple reissues** | Applications with three or more genuine acceptances in their complete history.                                                                                                           |

## Understand the invoice table

The invoice table shows the individual accepted application records behind the summary cards. You can sort the table by
its columns to review the results by worker, organisation, job, acceptance date, accepted count, or billable status.

| **Column**         | **What it means**                                                                                                                                                                                                               |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**           | The worker or applicant's name.                                                                                                                                                                                                 |
| **Email**          | The worker or applicant's email address.                                                                                                                                                                                        |
| **Organisation**   | The organisation connected to the accepted application (useful if only multiple organisations)                                                                                                                                  |
| **Job title**      | The job or opportunity title for the application.                                                                                                                                                                               |
| **Last accepted**  | The most recent date the application was accepted.                                                                                                                                                                              |
| **Accepted times** | The number of genuine transitions into **Accepted** in the application's complete history. A value of **1** means accepted once, **2** means accepted twice, and a value greater than **2** means accepted three or more times. |
| **Billable**       | Shows **Yes** when the application has exactly one genuine acceptance in its complete history. Shows **No** when it has been accepted more than once.                                                                           |

## Worked examples

Each row below represents one application in the report. The report includes it because at least one genuine acceptance
occurred during the selected period. Acceptance history is counted across the application's complete history, including
acceptances before the selected period.

| Application history                                        | Acceptance-history category                      | Accepted times | Billable? |
|------------------------------------------------------------|--------------------------------------------------|----------------|-----------|
| Accepted                                                   | First accepts (accepted once)                    | 1              | Yes       |
| Accepted → In progress → Accepted                          | Single reissue (accepted twice)                  | 2              | No        |
| Accepted last month → In progress → Accepted this month    | Single reissue (accepted twice)                  | 2              | No        |
| Accepted → In progress → Accepted → In progress → Accepted | Multiple reissues (accepted three or more times) | 3              | No        |

The second and third examples have the same classification: each application has two genuine acceptances. It does not
matter whether both happened in the selected period or the first happened earlier. A reissue is not billable.

### How the totals reconcile

The report shows two classifications of the same applications. Do not add the billing cards to the acceptance-history
cards. Within the acceptance-history classification, **Accepted total** equals **First accepts** plus **Single reissue**
plus **Multiple reissues**. Within the billing classification, **Billable** equals **First accepts**, and
**Non-billable** equals **Single reissue** plus **Multiple reissues**.

For example:

| Acceptance-history card | Applications |
|-------------------------|--------------|
| Accepted total          | 1,366        |
| First accepts           | 1,286        |
| Single reissue          | 62           |
| Multiple reissues       | 18           |

These acceptance-history figures produce the billing totals:

| Billing card | Calculation                                  | Applications |
|--------------|----------------------------------------------|--------------|
| Billable     | First accepts                                | 1,286        |
| Non-billable | Single reissue + Multiple reissues (62 + 18) | 80           |
| Total        | Billable + Non-billable                      | 1,366        |

An earlier calculation could show 1,304 billable and 62 non-billable because it allowed an application to remain
billable after a reissue. The corrected calculation counts every application with more than one genuine acceptance as
non-billable.

## Troubleshooting no results

If no results match the selected filters, the page shows **No invoices. Try another search.**

If this happens:

1. Check that the **Dates** cover the invoice period you want to review.
2. Check whether you selected the correct **Available Organisations**.
3. Clear the organisation filter if you only want to report on the current organisation.
4. Try the current month if you are unsure which period contains the accepted applications.

## Limitations

The **Invoices** page helps identify accepted applications that may need to be billed, but it does not create, send, or
process invoices.

It does not show:

- invoice numbers
- invoice amounts, pricing, tax, or GST
- payment status
- due dates
- accounting-system export details

**Billable** is based on application acceptance history in PICMI. It does not mean an invoice has already been issued,
paid, approved by finance, or exported to an accounting system.

## See also

- [Billing guide](../about-picmi/billing.md) for billing frequency, issued invoices, payment options, and historical
  invoice records.
