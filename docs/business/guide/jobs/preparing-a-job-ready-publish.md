# Preparing a job ready to publish

All jobs must have a valid configuration for a person to complete an application that includes, send an invite as well as receive an offer or agree on their application. Below explains why there is more than just the fields on the job to consider in most cases that is part of [previewing a listing](../../article/opportunity-preview). By checking a configuration on a job, you can identify and resolve any issues that may prevent a jobseeker from completing an application.

::: prompt
PICMI also checks the job configuration when [inviting a person](../../article/opportunity-send-invite),
[duplicating a job](../../article/opportunity-duplicate), making an offer, and completing an application. See
[Check Configuration and field validation](../../article/checking-application-configuration) for detailed fixes.
:::

:::: explanation
## Validating job configurations for applications

Job configurations can be validated at any stage to confirm that jobseekers can successfully complete an application. Each configuration follows a set of rules with increasing complexity, depending on the presence of certain elements, like contracts or integrations.

## Rules for validation

### Basic checks
1. **Application Workflow Exists:** Confirm that an application workflow has been created for the job
2. **Contract Included in Workflow:** Ensure that a contract is part of the application workflow

### Intermediate checks (for contracts with field substitutions)
For workflows with contracts that use **field substitutions**:
1. **Organisation Fields Completed:** Verify that all required organisation fields are filled out
2. **Job Fields Completed:** Check that all necessary job fields are filled in

### Advanced checks (for jobs with integrations)
If the job configuration includes **integrations**:
1. Ensure that **all integration fields** have a valid mapping. Each field should be mapped to one of the following:
   - A job field
   - An organisation field
   - Personal information from the jobseeker
   - A question from the application workflow
::::

:::: instructions
## Check that the job configuration is valid

1. Go to **Jobs**
2. Locate the **job** row :::icon checkbox-marked-outline:::
3. Click &vellip; (vertical dots) to open the menu
4. Select **Check Configuration** 
5. Confirm the **Check Configuration** status
   * :::icon check primary::: for success 
   * :::icon exclamation::: for errors&mdash;ensure they are fixed before sending invites
::::
