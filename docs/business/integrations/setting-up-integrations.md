# Integrations Page

The **Integrations** page in PICMI allows your organisation to connect with external systems like payroll providers and
reporting tools. This page explains how to view, configure, and manage these integrations. Actual integration are
listed [here](integrations.md)

## Overview

The Integrations list displays all available integrations, their type, and when they were last modified. You can use
this area to enable, disable, or adjust settings for each provider.

::: prompt
Each integration is either API-based (automated) or Report-based (manual CSV data import).
:::

::: instructions

## View and Customise the Integrations List

1. Go to **Configuration > Integrations**.
2. You’ll see a table listing all integration providers configured for your organisation.
3. Use the column headers to sort by **Name**, **Type**, or **Last Modified**.
4. Click :::icon cog-outline::: **Customise Columns** to show or hide optional columns like:
    - **Disabled**
    - **Sync Settings**
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
There is a ::: icon content-copy Copy to Clipboard::: if you wish to look at the url
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

## Tips for Integration Management

:::: explanation

- **API Integrations** sync automatically and are ideal for real-time data flow.
- **Report Integrations** work best when importing structured data like timesheets via CSV.
- Use **Test Connection** before performing your first sync.
- Revisit **Mappings** when adding new onboarding fields or changing workflows.

::::
