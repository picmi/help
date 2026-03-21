# Integrations Page

The **Integrations** page in PICMI allows your organisation to connect with external systems like payroll providers and
reporting tools—see [here](integrations.md#how-it-works) for more details. This page explains how to view, configure, and manage these integrations. Actual integration are
listed [here](integrations.md) and general steps are explained [here](integrations.md#steps-for-using-integrations-with-picmi).

## Connecting PICMI to Other Systems
Sharing data with other systems is an important part of how PICMI works. To do this, each integration connects through a job on the applications you are wanting to share data from.

Before PICMI can send data to another system, you need to turn on the sync setting for that integration in the job. Once it’s on, PICMI also checks that your application workflow collects all the information needed for a successful export.

:::prompt
PICMI won’t let you send out **invites** until this setup is complete and confirmed as correct — this helps ensure everything runs smoothly when data is shared later.
:::

::: explanation
## Understanding Integrations in PICMI

Integrations let PICMI share information automatically with other systems — such as payroll, HR, or recruitment tools — so you don’t have to re-enter the same data manually.

Some systems require login details or API credentials so PICMI can connect securely. You’ll enter these when setting up the integration for the first time.

Each integration has three main parts:

### Defaults
The Defaults section defines core settings specific to this integration. These values are required for the integration to work correctly.

In some cases, different jobs might need different default settings — for example, you might have one integration for casual jobs and another for permanent jobs if they use different data or identifiers.

Common examples include:
* Integration name – an optional name to help you identify the integration.
* External Identifier Generator – controls how PICMI creates unique record IDs when sharing data.
* Turn off Application Validation – allows you to disable PICMI’s automatic data checks before syncing.
* Disabled – stops the integration from running when turned on.

### Configuration
The Configuration section contains the detailed options that control how PICMI connects and communicates with the external system.

Each integration has a different set of configuration fields, depending on what the connected system needs. PICMI has carefully designed these settings to match the specific requirements of each integration — you’ll only see the options that are relevant.

Some configuration values may:
* Define the type of account or access level to use (e.g. “Staff”, “Contractor”, or “None”).
* Control what data or records to include (e.g. “Sectors” or “Job categories”).
* Specify how records are updated or deactivated in the external system.

In many cases, some values are fetched directly from the external system itself, but this only happens once your credentials are entered and verified. For example, once your API key or login token is saved, PICMI can retrieve a list of valid departments, teams, or job types from that system for you to select.

### Mappings

Mappings tell PICMI how to send your application data to another system. They connect the answers collected in your workflow to the correct fields in the integration. Mappings are saved as part of the integration setup and are specific to each integration. This means each provider (like Xero or EmploymentHero) will have its own set of fields and requirements.

You can think of mappings as a link between two sides:
- **Source**: the data in PICMI (e.g. answers to questions or job fields)
- **Target**: the matching field in the external system (e.g. “First Name” or “Email Address”)

Both sides must match correctly for data to sync successfully.

::::instructions
#### How Mappings Are Set Up

There are two ways mappings can be created:

##### 1. Automatic (recommended)
- PICMI creates a default set of mappings for you.
- It uses built-in rules to match your workflow questions and job fields to the correct integration fields.
- In most cases, these defaults will work without any changes.

##### 2. Manual
- You can create or adjust mappings yourself.
- This lets you choose exactly which PICMI field connects to which integration field.
- Useful if you have custom questions or need more control.

#### How PICMI Matches Fields

When using automatic mappings, PICMI uses internal rules (defined per integration) to decide:
- Whether to match a **question answer** or a **job field**
- Which fields are most likely to correspond (e.g. “Given Name” → “First Name”)

These rules are designed to minimise setup and ensure common fields are matched correctly.

::: prompt
#### Important Warning: Duplicate Questions

If you have multiple questions with very similar wording, PICMI may:
- Match the wrong question, or
- Fail to match correctly

To avoid this:
- Remove duplicate or very similar questions in your question library
- Then reset or review your mappings

This helps ensure the correct data is always sent to the integration.
:::

## Overview

The Integrations list displays all available integrations, their type, and when they were last modified. You can use
this area to enable, disable, or adjust settings for each provider.

::: prompt
Each integration is either API-based (automated between PICMI and the other system) or Report-based (manual CSV data import where you download from PICMI as a file and provide that to the other system (often via email to support and sometimes as an upload).
:::

::: instructions

## View and Customise the Integrations List

1. Go to **Setup > Integrations**.
2. You’ll see a table listing all integration providers configured for your organisation.
3. Use the column headers to sort by **Name**, **Type**, or **Last Modified**.
4. Click :::icon cog-outline::: **Customise Columns** to show or hide optional columns like:
    - **Disabled**
    - **Jobs**
5. Click **Save** to apply your column preferences.

:::

::: instructions

## Edit an Integration

Each integration has its own settings accessible via the **Edit Drawer**.

1. From the **Integrations** page, click on a provider (e.g. **Xero Payroll AU**).
2. This opens the drawer with the following sections:
    - **Default Settings**: General toggle settings.
    - **Configuration**: API credentials or connection options.
    - **Mappings**: Link your internal data to fields in the provider’s system.
    - **Sync Settings**: Link your integration to jobs to sync data.
3. At the bottom, use **Test** to verify the connection is active.
4. Click **Done** to close the drawer when finished.
   :::

## Test the Connection

You can test the integration before syncing data.

::: instructions

1. Open the integration from the list.
2. Scroll to the **Test Connection Now** section.
3. Click **Test** to validate if the API or data sync endpoint is working.
   :::

::: prompt
**Note:** If the test fails, check API keys, account permissions, or network access.
:::

## Connect / Authorise

Some integrations require OAuth authentication in order to access data. If enabled, a **Connect** or **Authorise** panel will appear at the bottom of the integration drawer.

::: prompt
This section only appears for integrations that support OAuth (e.g. Xero, iPayroll, EmploymentHero).
:::

::: instructions

1. Locate the **Connect** section.
2. Click the **Authorise** button to begin the OAuth flow.
2. You’ll be redirected to the provider's website to log in and authorise access.
3. Once approved, you’ll automatically be redirected back to PICMI.
4. If authorisation is successful, you can click **Test** to validate the connection.
5. If the process fails:
   - An error message will appear in the UI.
   - The previously authorised credentials will remain active and unchanged.

:::

::: prompt
There is a :::icon content-copy Copy to Clipboard::: if you wish to look at the url
:::

## Field Mappings

Mappings define how PICMI’s internal data (questions, personal fields, or system identifiers) align with fields in the
external platform.

### View Existing Mappings

::: instructions

1. Click on an integration and go to the **Mappings** section.
2. Review the two-column list:
    - **From**: PICMI fields (e.g. `Given Name`, `Date of Birth`)
    - **To**: Destination fields in the provider’s system (e.g. `First names`, `Birthdate`)
3. Tags (`PERSONAL`, `QUESTION`, or `INTEGRATION`) indicate the field source.
   :::

### Add a New Mapping

::: instructions

1. Click **Add Mapping** at the top of the **Mappings** screen.
2. Select a **Source Field** (e.g. “Your visa type”).
3. Select a **Target Field** from the provider’s schema (e.g. “Visa Class”).
4. Confirm your choices using the mapping dropdowns.
5. Click **Save** to add the mapping to the list.
   :::

::: prompt
Be sure to map critical identifiers (name, email, ID) to ensure successful syncs.
:::


## Sync Settings

Sync settings define which jobs will sync data to the external system. You can also change Sync Setting on a job itself.

:::prompt
Linking a job to an integration is important to ensure data is correctly captured so that it can be sent to other systems. Without this
step, uploads can unnecessarily fail.
:::

::: instructions
### Add or Edit Sync Settings

1. From the **Integrations** page, click on a provider (e.g. **Crystal**, **EmploymentHero**).
2. In the integration drawer, go to the **Sync Settings** section.
3. Click **Add Sync Setting** to connect a job to this integration.
4. In the **Add Sync Setting** panel:
   - Select one or more **Employment Jobs** you want to sync (e.g. "General Farm Hand", "Harvest Hand").
   - **For API integrations only**: Choose the sync mode:
     - **Automatic Sync**: PICMI will automatically send accepted applications to the external system as soon as they're accepted.
     - **Manual Update**: You control when data is sent, allowing you to review and manually trigger the sync for each application.
5. Click **Save** to confirm your changes.
:::

::: prompt
**Report integrations** (CSV-based) do not have Manual/Automatic options—data is always exported on demand when you download the report.
:::

::: instructions
### View Active Sync Settings

1. Open the integration and go to **Sync Settings**.
2. The table displays:
   - **JOB**: The name of the connected employment job
   - **STATUS**: Current job status (e.g. `STARTED`, `OPEN`, `CLOSED`)
   - **ACTION**: Delete icon to remove the sync setting
3. Use **Rows per page** to adjust how many settings are shown.
4. Use the pagination controls to navigate through multiple settings.
:::

::: instructions
### Remove a Sync Setting

1. Locate the job in the **Sync Settings** table.
2. Click the :::icon delete-outline::: **Delete** icon in the **ACTION** column.
3. Confirm the removal when prompted.
4. Click **Save** to apply the changes.

:::

::: prompt
Once a sync setting is added and saved, PICMI will allow download reports from that job to the external system according to the integration's configuration.
:::


## Tips for Integration Management

:::: explanation

- **API Integrations** sync automatically and are ideal for real-time data flow.
- **Report Integrations** work best when importing structured data like timesheets via CSV.
- Use **Test Connection** before performing your first sync.
- Revisit **Mappings** when adding new onboarding fields or changing workflows.
- Add multiple jobs to **Sync Setting**.

::::
