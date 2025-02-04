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

Each application at its particular status has **status message**. A status message in PICMI provides additional
information about the current stage of an application, helping both the business and the person applying to understand
its progress. It keeps the business informed with extra details and can be included in **notifications** sent to
individuals, ensuring clear communication about what is happening and what to expect next in the application
process. [Learn more about status messages](../article/status-message)

<prompt>

An application in PICMI has a **status** that shows its current stage. The status can be changed with an **action**, and
each status can include a **status message** with more details. When the status changes, some updates also trigger *
*notifications** to keep everyone informed. See below for restrictions on some actions for jobseeker restrictions.

</prompt>

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
| Completed               | The **contract** itself has been completed for the job.                    | *Reissue*, *Reopen*                | Business can reissue the application back to accepted or reopen it to the accepted status.                                                      |
| Terminated              | The **contract** has been terminated for the job.                          | *Reissue*, *Reopen*                | Business can reissue the application back to accepted or reopen it to the in-progress status.                                                   |
| Cancelled (Invite)      | The invitation has been cancelled by the business.                         | *Reopen*                           | Business can reopen the cancelled invitation to transition back to the invited status.                                                          |
| Cancelled (Application) | The application has been cancelled by the business.                        | *Reopen*                           | Business can reopen the cancelled application to transition back to the in-progress status.                                                     |
| Declined                | The jobseeker has declined application (from invitation or offer)          |                                    | Business cannot perform any actions—only the jobseeker can reopen the application                                                               |

## Jobseeker actions

| **Status**  | **Description**                                                             | **Action**         | **Explanation**                                                     | **Restrictions**          |
|-------------|-----------------------------------------------------------------------------|--------------------|---------------------------------------------------------------------|---------------------------|
| Invited     | The person has been invited to apply but hasn't started the process so yet. | *Apply*, *Decline* | Can apply to progress to in progress or decline the invite.         | Invites only/No vacancies |
| In Progress | The person is actively filling out the application.                         | *Decline*          | Actions include declining or moving to offered if criteria are met. |                           |
| Offered     | An offer has been extended to the person after meeting all the criteria.    | *Agree*, *Decline* | Can agree to accept the offer or decline it.                        | No vacancies              |
| Accepted    | The person has agreed to the offer, now in the cooling-off period.          | *Cancel*           | Can terminate the agreement if necessary.                           |                           |
| Declined    | The person has declined either the invitation or the offer.                 | *Reopen*           | Can reopen the application or offer from declined state.            |                           |
| Completed   | The application process is marked as complete by the business.              |                    | No further actions available at this state by the jobseeker         |                           | 
| Cancelled   | The application was cancelled (by the business)                             |                    | No further actions available at this state by the jobseeker.        |                           | 

## Restrictions on actions

Some jobseeker actions are restricted based on **Job settings**. Without restrictions, anyone with a link to a job can *
*apply**. See [job application controls](../article/job-application-controls)

| **Setting**  | **Description**                                                                                                                                                                                                                                                                          |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Invites only | Individuals can only **apply** for a job that is linked to a person who has been invited through the PICMI system                                                                                                                                                                        |
| Vacancies    | The maximum number of people who have an **accepted** application for a job. When the number has been reached applications can no longer be **offered**. The calcuation is that offered, accepted and completed all count towards the total vacancies. Cancelled and terminated are not. |
