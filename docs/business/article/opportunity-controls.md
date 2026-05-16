# Opportunity controls

By default, an opportunity (employment job or service proposal) can accept intake without a fixed capacity limit.  
When required, you can configure intake rules to control both:

- who can apply
- how availability is calculated

Without restrictions, anyone with a link to the opportunity can apply.  
Use **Invites only** to restrict intake to invited people and use capacity settings to manage availability.

| **Setting**    | **Description**                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------------------|
| Intake Closed  | Temporarily pauses intake regardless of available capacity.                                                         |
| Capacity Model | Defines how availability is calculated (for example, Fixed Capacity, Active Allocation, Shared Pool, or Unlimited). |
| Capacity Limit | Maximum number of counted placements, allocations, or engagements for models that use a limit.                      |
| Invites only   | Only invited people can apply for the opportunity.                                                                  |

::: prompt
View **Remaining** availability for each opportunity in Jobs under [customise columns](#view-job-intake-settings)
:::

:::: instructions

## Change Intake & Invites Only

1. Go to either:
   * **Employment** > **Jobs**
   * **Services** > **Proposals**
2. Locate the job row :::icon checkbox-marked-outline:::
3. Click :::icon dots-vertical::: (vertical dots) to open menu
4. Select **Edit**
5. Locate **Application Settings** section
6. Click **Intake & Invites Only**
7. Update the fields as required
    * Capacity Model
    * Capacity Limit
    * Intake Closed
    * Invites only
8. View the **Remaining** availability for the opportunity 
    * This will be updated automatically on save (but also can use the **Refresh** button to update) 
9. Click **Save** when you are done

Back in the list you can also [view **intake** settings](#view-intake-settings)
::::

:::: instructions

## View intake settings

The intake status is viewable per row in Jobs.

1. Go to either:
   * **Employment** > **Jobs**
   * **Services** > **Proposals**
2. Select :::icon cog-outline::: **Customise Columns**
3. Locate **Intake** section
4. Select the columns to view (also via clear or none)
    * Remaining
    * Intake
    * Invites only
5. Click **Save** when you're done
6. The columns will now show in the table for all entries
7. Locate the opportunity row :::icon checkbox-marked-outline:::

::: prompt
Remaining will show **No availability left** when the capacity limit is reached
:::
::::

:::: instructions

## View funnel settings

The count of [application status](../about-picmi/applications.md#application-status) of the opportunity funnel is
viewable per row in Jobs.

1. Go to either:
   * **Employment** > **Jobs**
   * **Services** > **Proposals**
2. Select :::icon cog-outline::: **Customise Columns**
3. Locate **Funnel** section
4. Select the columns to view (also via clear or none)
    * Invited
    * In Progress
    * Offered
    * Accepted
    * Completed
    * Terminated
    * Declined (job seeker)
    * Cancelled
5. Click **Save** when you're done
6. The columns will now show in the table for all entries
7. Locate the opportunity row :::icon checkbox-marked-outline:::

::: prompt
Remaining will show **No availability left** when the capacity limit is reached
:::
::::
