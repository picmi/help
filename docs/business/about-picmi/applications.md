# Understanding applications

In PICMI, an **application** tracks [participants'](understanding-users.md) progress through opportunity intake and
engagement. It represents
how a
participant expresses interest in an opportunity and completes required steps before placement or participation.
Applications
can support employment, services, and other engagement models that require the end goal of a contract.

An application typically includes multiple stages such as answering questions, reviewing information, watching videos,
signing declarations, and reviewing/accepting agreement terms. These steps are organised into workflow pages. Each
application is linked to an opportunity and an organisation, and may vary depending on organisation settings and
individual conditions.

Once all the criteria are met, an _offer_ is made. This offer needs to be agreed upon by the participant. Between the
offer
and
the final acceptance, there is an _agree_ stage to allow for a legally required cooling-off period.

Each application at its particular status has **status message**. A status message in PICMI provides additional
information about the current stage of an application, helping both the business and the participant applying to
understand
its progress. It keeps the business informed with extra details and can be included in **notifications** sent to
individuals, ensuring clear communication about what is happening and what to expect next in the application
process. [Learn more about status messages](../article/status-message)

::: prompt
An application in PICMI has a **status** that shows its current stage. The status can be changed with an **action**, and
each status can include a **status message** with more details. When the status changes, some updates also trigger *
*notifications** to keep everyone informed. See below for restrictions on some actions for participant restrictions.
:::

## Application status

In PICMI, an **application status** refers to the current stage or progress of a participant's application as they move
through the process of potentially securing a contract. It helps both the business and the participant track where they
are
in the journey, from an invitation to apply to receiving and agreeing to an offer. Common statuses might include stages
like *in progress* (while answering questions or submitting documents), *offer made* (when all criteria have been met
and an offer is extended, including the cooling-off period before acceptance), and *accepted* (when the contract is
finalised). The status changes dynamically based on the actions taken by the participant and the business.

## Application actions

Statuses can be changed by **specific actions**, and these actions are dependent on the current status and who is
performing
them. For example, a business might send an offer, changing the status to *offer made*, while the participant may then
agree,
progressing the status towards *accepted*.

::: prompt
Some actions result in notifications to business users or participants through email or in-app which can also have
specific messages added per participant
:::

## Business actions

| **Status**              | **Description**                                                                                          | **Action**                         | **Explanation**                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Invited                 | The participant has been invited but has not yet started the application process.                        | *Cancel*                           | Business can cancel the invite, moving the application to the cancelled invite status.                                                               |
| In Progress             | The participant has started the application and has not yet reached an outcome.                          | *Reissue*, *Cancel*                | Business can reissue the application (to send out a notification to the participant again) or cancel it, moving to the cancelled application status. |
| Offered                 | The participant has met the criteria and received an offer that has not yet been accepted or declined.   | *Cancel*                           | Business can cancel the offer, transitioning to the cancelled offer status.                                                                          |
| Accepted                | The participant has accepted the offer and the engagement is active but not yet complete.                | *Terminate*, *Complete*, *Reissue* | Business can terminate the application, complete the process, or reissue it to the in-progress status.                                               |
| Completed               | The participant fulfilled the engagement and all required obligations successfully.                      | *Reissue*, *Reopen*                | Business can reissue the application back to accepted or reopen it to the accepted status.                                                           |
| Terminated              | The engagement ended unsuccessfully before completion and required obligations were not fully fulfilled. | *Reissue*, *Reopen*                | Business can reissue the application back to accepted or reopen it to the in-progress status.                                                        |
| Cancelled (Invite)      | The invitation was withdrawn before the participant entered the application process.                     | *Reopen*                           | Business can reopen the cancelled invitation to transition back to the invited status.                                                               |
| Cancelled (Application) | The application was withdrawn while in progress and before reaching an outcome.                          | *Reopen*                           | Business can reopen the cancelled application to transition back to the in-progress status.                                                          |
| Declined                | The participant chose not to continue with or accept the opportunity.                                    |                                    | Business cannot perform any actions—only the participant can reopen the application                                                                  |

## Participant actions

| **Status**  | **Description**                                                                                        | **Action**         | **Explanation**                                                     | **Restrictions**                    |
|-------------|--------------------------------------------------------------------------------------------------------|--------------------|---------------------------------------------------------------------|-------------------------------------|
| Invited     | The participant has been invited but has not yet started the application process.                      | *Apply*, *Decline* | Can apply to progress to in progress or decline the invite.         | Invites only/No intake availability |
| In Progress | The participant has started the application and has not yet reached an outcome.                        | *Decline*          | Actions include declining or moving to offered if criteria are met. |                                     |
| Offered     | The participant has met the criteria and received an offer that has not yet been accepted or declined. | *Agree*, *Decline* | Can agree to accept the offer or decline it.                        | No intake availability              |
| Accepted    | The participant has accepted the offer and the engagement is active but not yet complete.              | *Cancel*           | Can terminate the agreement if necessary.                           |                                     |
| Declined    | The participant chose not to continue with or accept the opportunity.                                  | *Reopen*           | Can reopen the application or offer from declined state.            |                                     |
| Completed   | The participant fulfilled the engagement and all required obligations successfully.                    |                    | No further actions available at this state by the participant       |                                     | 
| Cancelled   | The application or invite was cancelled before the engagement reached a final outcome.                 |                    | No further actions available at this state by the participant.      |                                     | 

## Restrictions on actions

Some participant actions are restricted based on **opportunity intake settings**. Without restrictions, anyone with a
link
to an opportunity can apply. See [opportunity controls](../article/opportunity-controls).

| **Setting**                     | **Description**                                                                                                                                                                                                     |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Invites only                    | Individuals can only apply when they have been invited through PICMI.                                                                                                                                               |
| Capacity Model + Capacity Limit | Availability is calculated by the intake configuration. In common Fixed Capacity scenarios, offered, accepted, and completed applications count toward the configured limit, while cancelled and terminated do not. |
| Intake Closed                   | Intake is paused regardless of available capacity.                                                                                                                                                                  |
