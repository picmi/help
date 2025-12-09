# Creating a Workflow

When hiring employees and creating service arrangements through PICMI, you'll need to set up a workflow that uses the
correct pages, items and contract. This guide walks through the key steps to create and configure a workflow.

::: prompt
Wondering about different workflows? Check out our [understanding workflows](../../about-picmi/understanding-workflows).
:::

## Prerequisites Checklist

:::icon checkbox-marked-outline::: You have a contract template ready to use<br/>
:::icon checkbox-marked-outline::: Worked out which workflow you are doing to duplicate<br/>
:::icon checkbox-marked-outline::: Planned out the steps of your workflow to change<br/>
:::icon checkbox-marked-outline::: Know which jobs/proposals will use the workflow<br/>

## Step 1: Create the contract template

Before updating your workflow, you need your contract template ready to use.

:::instructions
1. Go to **Setup** → **Contracts**
2. Click **Create Contract Template** (or [duplicate an existing template](../../article/duplicate-a-contract-template))
3. Name it clearly (e.g., "Employment Agreement Casual", "Employment Agreement Permanent")
4. Paste your contract text into the editor
5. Clean up any formatting issues from copying
6. Click **Save**
:::

::: prompt
Pasting from Word or PDF can create formatting issues. Review line breaks, spacing, and font consistency before
proceeding.
:::

See [creating a contract template](../../article/creating-a-contract-template) for detailed instructions.

## Step 2: Add field substitutions (chips) to the contract

Field substitutions dynamically pull in job, organisation, and personal details when the contract is generated.

:::instructions
1. Place your cursor where dynamic content should appear
2. Select the appropriate chip from the right-hand panel (e.g., `job.title`, `pay.rate`)
3. Repeat for all dynamic fields
4. Click **Validate** to ensure all chips are correctly configured
5. Click **Save**
:::

::: prompt
Common substitutions for contracts include: job title, start date, salary or hourly rate, organisation name, and
employee name. Hover over chips for guidance on what each displays.
:::

## Step 3: Duplicate your base workflow

Rather than creating a workflow from scratch, duplicate it and update the copy.

:::instructions
1. Go to **Setup** → **Workflows**
2. Locate the workflow you want to base your permanent workflow on
3. Click **⋮** (vertical dots) and select **Duplicate**
4. Rename the duplicated workflow (e.g., "Orchard – Permanent")
:::

::: prompt
Duplicating ensures your existing casual or fixed-term workflows remain intact and unaffected.
:::

## Step 4: Replace the contract template in the workflow

Now update the workflow to use your new permanent contract.

:::instructions
1. Open the duplicated workflow in edit mode
2. Locate the existing contract template
3. Remove the old contract
4. Add your new permanent contract template
5. Click **Save**
:::

## Step 5: Review and adjust workflow content

Workflows often need only small changes. Review each section:

:::explanation
### Check Your Fit questions

- Remove or adjust questions that are only relevant for casual or seasonal work
- Keep questions that help assess long-term role suitability

### Induction sections

- Consider removing induction-related questions (often unnecessary for permanent roles)
- Permanent employees typically complete induction after starting

### Personal information

- Ensure you're collecting only what's necessary for permanent employment
- Remove fields related to short-term availability or seasonal work

::: prompt
When unsure, ask: "Is this information essential?" If not, consider removing it to streamline the
process. Please contact us if you have any questions—your questions can affect completion rates.
:::

See [updating workflows](../../workflows/updating-workflows) for detailed editing instructions.
:::

## Step 6: Validate the workflow configuration

Before using your workflow, validate that it's correctly configured.

:::instructions
1. Either:
   2. Go to **Employment** --> **Jobs**, locate a job that uses this workflow (or add)
   2. Go to **Services** --> **Proposals**, locate a proposal that uses this workflow (or add)
2. Click **⋮** (vertical dots) on the job row
3. Select **Check Configuration**
4. Confirm validation passes :::icon check primary:::
5. Fix any errors :::icon exclamation::: before sending invites
:::

See [checking application configuration](../../article/checking-application-configuration) for more details.

**Related articles:**

- [Creating a contract template](../../article/creating-a-contract-template)
- [Updating workflows](../../workflows/updating-workflows)
- [Preparing a job ready to publish](../jobs/preparing-a-job-ready-publish)
