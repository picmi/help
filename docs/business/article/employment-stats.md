# Understanding application statistics

The **Stats** report shows application activity grouped by **Day**, **Week**, or **Month**. Use the filters to define
which applications and application activity are included.

Stats helps you monitor movement through the recruitment pipeline, review application activity over time, and compare
results across organisations or job listings. It is not a financial invoice report. For billing and first-acceptance
information, see [Invoices](invoices.md).

Applications generally move through this lifecycle:

**Invited** → **In Progress** → **Offered** → **Accepted** → **Completed**

An application may leave the normal lifecycle through a decline, cancellation, or termination.

::: prompt
Stats includes archived application records by default. Use the **Archived** filter when you need to focus on active
records or review archived records separately.
:::

## Open Stats

1. Go to the **Employment** workspace.
2. Open **Stats** for the organisation.
3. Select the filters you need, then apply the search to refresh the report.

## Available filters

### Period

Choose how results are grouped:

- **Day**
- **Week**
- **Month**

Yearly grouping is not currently available.

### Organisation

Use **Available Organisations** to select one or more organisations. The current organisation is always included. This
is useful when comparing organisations you can access.

### Job listing

Use **Job Listing** to select one or more job listings. Leave it empty to include all job listings available to the
search.

### Dates

Use **Dates** to optionally choose a start and end date. The selected dates are inclusive.

### Archived

Use **Archived** to choose whether to:

- **Include archived** — the default; includes active and archived applications.
- **Exclude archived** — includes active applications only.
- **Archived only** — includes archived applications only.

Archive state is separate from application status. Archiving does not change an application's lifecycle status, so an
archived application can still be **Accepted**, **Completed**, or **Terminated**. Archiving does not create a new
acceptance event or alter the application's acceptance history.

### What do you want to count?

**What do you want to count?** determines which application activity is counted before records are placed into the
status columns in the report.

The menu includes these options:

| Option                      | Definition                                                                                                          |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Latest status in period** | Counts each application once in each reporting period, using its latest status movement in that period.             |
| **First-time accepts**      | Counts an employment application when it is accepted for the first time.                                            |
| **Acceptances or reissues** | Counts an employment application once in a reporting period when it is accepted or reissued during that period.     |
| **Reissued only**           | Counts an employment application when it is reissued after its first acceptance, but not when it is first accepted. |

#### Latest status in period

Counts each application once in each period, using its latest status during that period.

For example, if an application is accepted and then completed in September:

| Date         | Status    |
|--------------|-----------|
| 10 September | Accepted  |
| 20 September | Completed |

The September result shows:

- **Accepted**: 0
- **Completed**: 1

#### First-time accepts

Counts employment applications when they are accepted for the first time.

For example:

| Date      | Event          |
|-----------|----------------|
| August    | First accepted |
| September | Accepted again |

The application is counted in August, but not September.

#### Acceptances or reissues

Counts an employment application once in a period if it was accepted or reissued during that period.

For example:

| Date      | Event    |
|-----------|----------|
| September | Accepted |
| September | Reissued |

The application is counted once for September, not twice.

#### Reissued only

Counts an employment application once in a period when it is reissued after its first acceptance.

For example:

| Date      | Event          |
|-----------|----------------|
| August    | First accepted |
| September | Reissued       |

The application is counted in September, but not August.

The acceptance and reissue options apply to employment applications. They cannot be used to report service applications.

## Combine filters for common tasks

Filters work together, so choose a period, date range, organisation or job listing, archive option, and count method
that match the question you are asking.

### Review first-time accepted applications for one job

To review applications accepted for the first time during September:

1. Set **Period** to **Month**.
2. Set **Dates** to include September.
3. Select the job in **Job Listing**.
4. Select **Exclude archived** if you want active applications only.
5. Set **What do you want to count?** to **First-time accepts**.

This reports first-acceptance activity. It does not filter the results to every application whose current status is
**Accepted**.

### Compare current activity across jobs

To compare the current pipeline across several jobs:

1. Set **Period** to **Week** or **Month**.
2. Select the jobs in **Job Listing**.
3. Set **Archived** to **Exclude archived**.
4. Use **Latest status in period** to place each application once under its latest status for each period.

### Review historical activity

To review historical activity, including archived applications:

1. Set **Period** to **Month**.
2. Choose the required **Dates**.
3. Leave **Archived** set to **Include archived**.
4. Choose the application count method that matches your question.

For example, use **First-time accepts** to review first-acceptance activity, or **Acceptances or reissues** to include
employment applications accepted or reissued during the selected date range. Use **Day** or **Week** when you need
more detail.

### Review reissued applications

To find employment applications reissued after first acceptance:

1. Set **Period** to **Month**.
2. Choose the date range to investigate.
3. Select one or more jobs in **Job Listing**.
4. Select **Reissued only**.
5. Choose **Include archived** if the review should include archived applications.

## Understand the results

The report displays fixed status columns. Their meanings are:

| Column                      | Meaning                                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------------------|
| **Invited**                 | The business invited the applicant to apply, but the applicant has not yet started or completed the application. |
| **Cancelled (Invite)**      | The business cancelled or withdrew the invitation before the applicant accepted it.                              |
| **Declined (Invite)**       | The applicant declined the invitation.                                                                           |
| **In Progress**             | The applicant started the application, but it has not yet reached the offer stage.                               |
| **Cancelled (Application)** | The business cancelled the application while it was still being considered.                                      |
| **Declined (Application)**  | The applicant declined or withdrew from the application before an offer was accepted.                            |
| **Offered**                 | The business made an offer to the applicant.                                                                     |
| **Cancelled (Offer)**       | The business cancelled or withdrew the offer before it was accepted.                                             |
| **Declined (Offer)**        | The applicant declined the offer.                                                                                |
| **Accepted**                | The applicant accepted the business's offer.                                                                     |
| **Terminated**              | An accepted arrangement ended before it was completed.                                                           |
| **Completed**               | The accepted arrangement was successfully completed.                                                             |
| **Declined**                | The total number of applicant-initiated declines across invitations, applications, and offers.                   |
| **Cancelled**               | The total number of business-initiated cancellations across invitations, applications, and offers.               |

The selected **What do you want to count?** option determines which application records are included before they are
placed into
these columns. The report is not a list of every status transition made by every application.

Some totals are grouped summaries:

- **In Progress** includes active, on-hold, and under-consideration application states.
- **Declined** combines declined invites, applications, and offers.
- **Cancelled** combines cancelled invites, applications, and offers.

The table may also show component columns such as **Cancelled (Invite)**, **Cancelled (Application)**, **Cancelled (
Offer)**, **Declined (Invite)**, **Declined (Application)**, and **Declined (Offer)**.

### Declined versus cancelled

**Declined** and **Cancelled** both mean that the application will not continue, but they identify who ended the
process:

- **Declined** means the applicant chose not to continue.
- **Cancelled** means the business chose to stop or withdraw the process.

The stage identifies when this happened: invitation, application, or offer. The summary columns combine the
stage-specific values:

- **Declined** = declined invite + declined application + declined offer
- **Cancelled** = cancelled invite + cancelled application + cancelled offer

### Example lifecycle

A typical successful application may look like this:

1. The business sends an invitation — **Invited**.
2. The applicant starts the application — **In Progress**.
3. The business makes an offer — **Offered**.
4. The applicant accepts the offer — **Accepted**.
5. The arrangement finishes successfully — **Completed**.

Alternative outcomes include:

- The applicant declines the offer — **Declined (Offer)**.
- The business withdraws the offer — **Cancelled (Offer)**.
- The applicant withdraws while applying — **Declined (Application)**.
- The business stops considering the applicant — **Cancelled (Application)**.
- The business ends an accepted arrangement early — **Terminated**.

### How the counting method affects the columns

The selected **What do you want to count?** option determines which application records are included before they are
placed into
the status columns.

With **Latest status in period**, an application is counted once per period using its latest movement. An application
accepted and then completed in the same period appears under **Completed** only.

With **First-time accepts**, **Acceptances or reissues**, or **Reissued only**, the report is limited to accepted
employment-application history. These options measure acceptance activity, not every stage in the lifecycle.

Each row represents one selected reporting period. The first columns identify the date or period, followed by the
application counts. For weekly reports, the row displays the first day of the week and the week number.

The report shows activity within each selected period. It is not necessarily a count of unique applicants across the
entire date range, so an application may appear in more than one period if it has relevant activity in multiple periods.

If there is no activity for a metric, its value may appear as zero.

## Export Stats results

1. Select one or more rows in the results table.
2. Click **Export Insights**.
3. Download the CSV file.

The export contains the visible report columns for the rows you selected. Open the CSV in Excel, Numbers, or Google
Sheets for further analysis.

If no results are returned, try widening the date range, selecting additional job listings, or changing the **Archived**
and **What do you want to count?** filters.

## Current limitations

The Stats report cannot currently:

- Filter directly to one status, such as **Completed**.
- Select multiple statuses to report together.
- Count the same application in both **Accepted** and **Completed** during one report period.
- Show every status transition made by an application.
- Use an application status filter as a general status filter.
- Apply the acceptance and reissue options to service applications; those options apply to employment applications.
- Group results by year.

For example, if an application is accepted and then completed in the same month, Stats cannot show both values as:

```text
Accepted: 1
Completed: 1
```

With **Latest status in period**, it appears only under **Completed**. With an acceptance-based option, it appears only
under **Accepted**.

::: faq Why are archived applications included in Stats?
The default **Archived** option is **Include archived**, so Stats includes both active and archived application records.
Select **Exclude archived** when you want active records only.
:::

::: faq Does archiving change an application's status?
No. Archiving changes whether the record is included by the **Archived** filter, but it does not change a lifecycle
status such as **Accepted**, **Completed**, or **Terminated**.
:::

::: faq Does archiving create another acceptance event?
No. Archiving does not create an acceptance event or alter the application's acceptance history.
:::
