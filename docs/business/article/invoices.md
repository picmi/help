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

| **Card**              | **What it means**                                                                                                                                                                                                                          |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Billable**          | The number of accepted applications in the selected period that are considered billable. An application is billable when its first acceptance occurred within the selected invoice period.                                                 |
| **Non-billable**      | The number of accepted applications in the selected period that are not considered billable. This usually means the application had already been accepted before the selected period and was accepted or reissued again during the period. |
| **Accepted total**    | The total number of accepted applications found for the selected period. This equals **Billable** plus **Non-billable**.                                                                                                                   |
| **First accepts**     | The number of applications that have been accepted once. These are generally first-time accepted applications.                                                                                                                             |
| **Single reissue**    | The number of applications that have been accepted twice. This indicates one reissue or second acceptance for the same application.                                                                                                        |
| **Multiple reissues** | The number of applications that have been accepted more than twice. This indicates repeated reissues or acceptances for the same application.                                                                                              |

## Understand the invoice table

The invoice table shows the individual accepted application records behind the summary cards. You can sort the table by
its columns to review the results by worker, organisation, job, acceptance date, accepted count, or billable status.

| **Column**         | **What it means**                                                                                                                                                                                                      |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**           | The worker or applicant's name.                                                                                                                                                                                        |
| **Email**          | The worker or applicant's email address.                                                                                                                                                                               |
| **Organisation**   | The organisation connected to the accepted application (useful if only multiple organisations)                                                                                                                         |
| **Job title**      | The job or opportunity title for the application.                                                                                                                                                                      |
| **Last accepted**  | The most recent date the application was accepted.                                                                                                                                                                     |
| **Accepted times** | The number of times this application has reached the accepted state. A value of **1** means a first accept, **2** means a single reissue, and a value greater than **2** means multiple reissues.                      |
| **Billable**       | Shows **Yes** when the application is billable for the selected period. Shows **No** when the application appears in the period but is not billable, usually because it was first accepted before the selected period. |

## Why an item may be non-billable

An accepted application may appear as non-billable when it was first accepted before the selected invoice period, then
accepted or reissued again during the selected period.

For example, if an application was first accepted during July, it appears as billable in a July invoice report. If the
same application was already accepted in June and accepted again in July, it can appear in the July report as
non-billable because it was not first accepted in July.

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
