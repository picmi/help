# Checking an application configuration

There is checking around an application to ensure that contracts can be issued and that data can be sent to any required integrations. The goal is that when the application is complete, there is no extra work to remedy errors by anyone.

All application configurations must be valid for a person to receive an offer on their application. Above completing the
fields with the correct information which can be checked when [previewing a listing](previewing-a-job).

A valid application configuration must have all **fields completed** that are going to be substituted in 
* a contract
* all integrations configured on the job

<prompt>

Integration validations can be turned off to get around this (not recommended)

</prompt>

<div class="ui-instructions">

## Check that the job is valid

1. Go to **People**
2. Locate the **person** row <span class="mdi mdi-checkbox-marked-outline"></span>
3. Click &vellip; (vertical dots) to open the menu
4. Select **Check Job Configuration**
5. Confirm the **Check Configuration** status
    * <span class="mdi mdi-check primary"></span> for success
    * <span class="mdi mdi-exclamation"></span> for errors
6. Locate any errors in the **Passed** column

</div>

## Description of table
| Column            | Description                                                                                                                                                                             |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Title**         | Name of the field where data is coming from                                                                                                                                             |
| **Passed**        | <span class="mdi mdi-check-circle"></span> or Not found                                                                                                                                                 |
| **Group**         | The part of the system the field belongs to (eg name of integration, person or organisation, contract                                                                                   |
| **Source**        | This is the place that is required the field for substitution: Integration, Contract                                                                                                    |
| **Current Value** | The value as best as can be determined that will be provided—some values cannot be determined in this view and is left empty, other time values are shown where the data will come from |
| **Description**   | Additional information the system has                                                                                                                                                   |

<prompt>

The listing will also be validated
an [inviting a person](inviting-for-jobs), [duplicating a job](duplicate-a-job) and when all fields are complete prior
to an offer and when a person agrees.   

</prompt>
