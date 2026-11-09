# Preparing a job to publish or invite

Before you publish a job or invite someone to apply, check that its application setup is complete. The job listing is
only one part of the application: the workflow, contract, organisation details, and any enabled integrations must also
work together. A job can look ready because its title and description are filled in, while a required field elsewhere
is still missing.

Use **Check Configuration** as a readiness check. It confirms that PICMI can use the job's workflow, create its contract,
and send data to enabled integrations. This check matters because those parts depend on one another: a missing value or
mapping in the workflow, organisation, contract, job, or integration can interrupt an application even when the job
listing itself looks complete.

This is the same preparation principle shown in [PICMI at a glance](../../about-picmi/picmi-at-a-glance.md#upcoming-season):
prepare the connected pieces (people, workflows, contracts, jobs, and integrations) before hiring begins. This guide
explains when and why to check a job; the article on [Check Configuration and field validation](../../article/checking-application-configuration.md)
explains how to run it, read the results, and fix failures.

::: prompt
If a configuration error appears when you try to [send an invite](../../article/opportunity-send-invite), the job still
has a setup issue to resolve. Run **Check Configuration** and follow the result to the field that needs attention. The
[field validation article](../../article/checking-application-configuration.md) walks through the results and common fixes.
:::

<br/>

::: prompt
Checking configuration does not check the wording or appearance of the job listing. Use [Previewing an opportunity](../../article/opportunity-preview.md)
to review what a person can access, and workflow **Preview** mode to review the application steps.
:::

## When to check

Check after setting up or changing a job's workflow, contract, or integrations, and before publishing or inviting people.
PICMI also runs the check automatically when you send an invite, duplicate a job, make an offer, or complete an
application. Running it beforehand gives you a chance to resolve setup issues before they interrupt one of those steps.

For the steps and troubleshooting, go to [Check Configuration and field validation](../../article/checking-application-configuration.md).
