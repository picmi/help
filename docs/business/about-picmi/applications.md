# Understanding applications

In PICMI, an **application** is the way a business tracks a person's status towards getting a contract. It represents
the process by which a person expresses interest in joining an organisation's workforce for a specific role. The
application typically consists of multiple stages, such as answering questions, reviewing information, watching videos,
signing declarations, and reviewing and accepting a contract. These steps are organised into pages within the workflow.
Each application is linked to a job and an organisation and may vary depending on the conditions set by the organisation
and any specific conditions for that individual.

Once all the criteria are met, an _offer_ is made. This offer needs to be agreed upon by the person. Between the offer
and
the final acceptance, there is an _agree_ stage to allow for a legally required cooling-off period.

## Application status

In PICMI, an **application status** refers to the current stage or progress of a person's application as they move
through the process of potentially securing a contract. It helps both the business and the person track where they are
in the journey, from an invitation to apply to receiving and agreeing to an offer. Common statuses might include stages
like *in progress* (while answering questions or submitting documents), *offer made* (when all criteria have been met
and an offer is extended, including the cooling-off period before acceptance), and *accepted* (when the contract is
finalised). The status changes dynamically based on the actions taken by the person and the business.

## Application actions

Statuses can be changed by **specific actions**, and these actions are dependent on the current status and who is
performing
them. For example, a business might send an offer, changing the status to *offer made*, while the jobseeker may then
agree,
progressing the status towards *accepted*.

<prompt>

Some actions result in notifications to business users or jobseekers through email or in-app which can also have
specific messages added per person

</prompt>

## Business actions

| **Status**              | **Description**                                                            | **Action**                         | **Explanation**                                                                                                                                 |
|-------------------------|----------------------------------------------------------------------------|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Invited                 | The person has been invited to apply through the application process.      | *Cancel*                           | Business can cancel the invite, moving the application to the cancelled invite status.                                                          |
| In Progress             | The person is actively working on the application.                         | *Reissue*, *Cancel*                | Business can reissue the application (to send out a notification to the person again) or cancel it, moving to the cancelled application status. |
| Offered                 | An offer has been extended to the person and is in the cooling-off period. | *Cancel*                           | Business can cancel the offer, transitioning to the cancelled offer status.                                                                     |
| Accepted                | The person has accepted the offer .                                        | *Terminate*, *Complete*, *Reissue* | Business can terminate the application, complete the process, or reissue it to the in-progress status.                                          |
| Completed               | The **contract** itself has been completed for the job.                    | *Reissue*, *Reopen*                | Business can reissue the application or reopen it to the accepted status.                                                                       |
| Terminated              | The **contract** has been terminated for the job.                          | *Reissue*, *Reopen*                | Business can reissue the application or reopen it to the accepted status.                                                                       |
| Cancelled (Invite)      | The invitation has been cancelled by the business.                         | *Reopen*                           | Business can reopen the cancelled invitation to transition back to the invited status.                                                          |
| Cancelled (Application) | The application has been cancelled by the business.                        | *Reopen*                           | Business can reopen the cancelled application to transition back to the in-progress status.                                                     |

## Jobseeker actions

| **Status**  | **Description**                                                          | **Action**         | **Explanation**                                                     |
|-------------|--------------------------------------------------------------------------|--------------------|---------------------------------------------------------------------|
| Invited     | The person has been invited to apply but hasn't done so yet.             | *Apply*, *Decline* | Can apply to progress to in progress or decline the invite.         |
| In Progress | The person is actively filling out the application.                      | *Decline*          | Actions include declining or moving to offered if criteria are met. |
| Offered     | An offer has been extended to the person after meeting all the criteria. | *Agree*, *Decline* | Can agree to accept the offer or decline it.                        |
| Accepted    | The person has agreed to the offer, now in the cooling-off period.       | *Cancel*           | Can terminate the agreement if necessary.                           |
| Declined    | The person has declined either the invitation or the offer.              | *Reopen*           | Can reopen the application or offer from declined state.            |
| Completed   | The application process is complete, and the contract has been accepted. |                    | No further actions available at this state.                         | 
| Cancelled   | The application was cancelled.                                           |                    | No further actions available at this state.                         | 

