# Frequently Asked Questions (FAQs)

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>

## General Questions

<faq question="What is PICMI?" :expandAll="expandAll" >
  PICMI is a tool that connects people (your potential workforce) with you (the employer) through a streamlined hiring process. People can review detailed information about companies, such as culture and working conditions, to decide if they are a good fit.
</faq>

<faq question="How does the straight-through hiring process work?" :expandAll="expandAll">
  Our straight-through hiring process allows qualified people to receive a legally binding employment agreement instantly if they meet all the predefined criteria set by you, the employer.
</faq>

<faq question="What should I do if I can't log into my account?" :expandAll="expandAll">
  If you're having trouble logging in, first make sure you're using the correct email. If you've forgotten your password, click the "Forgot Password" link on the login page to reset it.
</faq>

<faq question="Who do I contact for technical support?" :expandAll="expandAll">
  For technical issues, please reach out to our support team via the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email to <a href="mailto:hello+support@picmi.com" target="_blank">hello+support@picmi.io</a>
</faq>

<faq question="How do I force refresh my view?" :expandAll="expandAll">

When there are times when you really want to ensure that everything is up-to-date, you have two options: use PICMI's *
*hard refresh**, **update old information** or the browser's **disable cache**.
See [refresh data](article/update-old-information.md)

</faq>

## Emails

<faq question="What is an email sub-alias?" :expandAll="expandAll">

A sub-alias email is a version of an email address that includes an extra part before the "@" symbol. It’s also called
an "email alias", "plus address", or "tagged email". An email with a sub-alias arrives in the **same email inbox**.

Here are some example of sub-alias email for `hone.smith@example.com`

* `hone.smith+08-2024@example.com`
* `hone.smith+jobseeker@example.com`
* `hone.smith+employer@example.com`
* `hone.smith+picmi-job@example.com`

</faq>

<faq question="What if someone has no email?" :expandAll="expandAll">

PICMI can provide access with a provisional user. see [invites](article/inviting-for-jobs.md#inviting-for-jobs)

</faq>

<faq question="I can't find emails from PICMI, what to do?">

Rarely is the email NOT delivered, but it isn't always to your inbox because we send emails from a service provider rather than from a person. See [finding emails](../email-not-found)

</faq>

## Invites

<faq question="Can I invite a jobseeker to a job if they already have an invite to a job?" :expandAll="expandAll">

If the jobseeker has already accepted the invite to a job, you cannot invite them again as they have already accepted the application.  see [application statuses](about-picmi/applications.md#application-status)

To remedy this:

* You can only invite them to a new job that they have not already accepted

<prompt>

Once a jobseeker accepts an application, that invite is no longer available for changes.

</prompt>

</faq>

<faq question="I invited a jobseeker to two jobs, but one job is now closed. What should I do next?" :expandAll="expandAll">

You need to change the status of the application from _invited_ to _cancelled_. see [application statuses](about-picmi/applications.md#application-status)

To remedy this:

* Add a [status message](article/status-message) when updating the application: "Job closed" 
* [Update](article/changing-application-status) the application status accordingly

<prompt>

Once a job is closed, it's important to clearly mark the status to prevent confusion. see [job statuses](article/job-status)

</prompt>

</faq>

<faq question="What can I do when the invite bounced as no such user?" :expandAll="expandAll">
   No email address found is usually because there is a typo in the email address. 

To remedy this:

* Try and confirm where the email address error has occurred—often it is just one character added incorrectly
* Cancel the application with a status message: "No such email"
* [Invite](article/inviting-for-jobs#send-invites) using the correct email address

<prompt>

An application cannot be moved to another email address—this is helpful to detect ongoing errors

</prompt>

</faq>

<faq question="What can I do when the invite has delivery status notification failure?" :expandAll="expandAll">

There are various errors that may be reported:

* `Requested mail action aborted, mailbox not found`
* `Unknown mail server`
* `The email account that you tried to reach does not exist`
* `Recipient not found`
* `Account or domain may not exist, they may be blacklisted`
* `The recipient's inbox is out of storage space`

To remedy this:

* Try and confirm where the email address error has occurred—these errors are usually after the '@' part of the email
* Cancel the application with a status message: "Error in email address"
* [Invite](article/inviting-for-jobs#send-invites) using the correct email address

<prompt>

An application cannot be moved to another email address—this is helpful to detect ongoing errors

</prompt>

</faq>

<faq question="What should do when the person I have invited doesn't receive an email?">

The main problem is that emails do get filtered in JUNK folders and are hard to find. Sending them again won't help the person
find their email. We don't recommend to cancel and then reissue as it does not help. See [finding emails](../email-not-found) for instructions


<prompt>

[Bounced emails are NOT delivered](#what-can-i-do-when-the-invite-has-delivery-status-notification-failure) but are notified and should be cancelled

</prompt>

</faq>


<faq question="Are there restrictions on emails that can be used when sending invites?">

PICMI puts no restrictions on the email addresses used

</faq>



<faq question="The individual emailed back after an invitation explaining, how did they get the email address?">

The person invited can email you back because the `reply-to` in the email itself is set to the email address of your organisation

</faq>


<faq question="The individual emailed back after an invitation explaining, can I hold the position? What should I do?">

Given you want to keep them, [change a status message](article/status-message#change-status-message-on-application) to their application so that you can track it.

<prompt>

You are unable to reserve a position for a specific application. If there is a restriction on positions, then if all positions are filled
add one to the maximum in [job application controls](article/job-application-controls). Alternatively, reduce the number by one until the person is ready to apply.

</prompt>

</faq>

## Applications

<faq question="How do I view and manage applications?" :expandAll="expandAll">
  Once you've posted a job, you can manage applications by navigating to the <b>People</b> page. Here, you'll be able to review peoples' applications.
</faq>

<faq question="What should I do if a person reports they can't complete an application?" :expandAll="expandAll">
   Check the <b>application status</b> in the <b>People</b> page and then determine if the person is (and confirm that they also see this):

1. not able to **apply** because of the sign in problems (see [user account](about-picmi/users.md))
2. not able to **apply** (or **proceed to accept**) because [job application controls](article/job-application-controls)
3. **in progress** and has not completed all the fields in the application (see [check job configuration](article/checking-application-configuration))
4. **in progress** and the contract page reports an error (also see [check job configuration](article/checking-application-configuration))
5. in **offered** status but is unable to proceed to accept (contact PICMI)

</faq>

<faq question="What should I do when a individual applying reports they cannot sign and only have the option to Cancel or Refresh?" :expandAll="expandAll">

This usually happens when the job has [**no vacancies**](about-picmi/applications.md#restrictions-on-actions). You can see this as a business user or as an individual applying.

* As a business user, check the [job application controls](article/job-application-controls)
* As a jobseeker, they can see positions available on the top-left of the workflow or in the list view

<prompt>

Change your vacancies by the number of people you expect

</prompt>

</faq>

<faq question="What should I do if a person reports a different status to your view?" :expandAll="expandAll">

One of the two of you do not have the latest version and to ensure you have the latest information. 

* As a business user you can follow ensuring you [have the latest information](article/update-old-information)
* The jobseeker also has similar strategies you can instruct them on

<prompt>

You should not change the status of the application to refresh your view.

</prompt>

</faq>


<faq question="What should I do if a person reports 'This contract still needs information from your application'?" :expandAll="expandAll">

One of the fields in the contract cannot be completed. The jobseeker will see a RED area where it is broken. However, as
a business fix using the steps in [checking application configuration](article/checking-application-configuration)

</faq>


<faq question="Jobseeker (or business user) reports the error 'Business cannot apply for a job', what to do?">

See [Error: Business user cannot apply for a job](article/business-user-cannot-apply-for-job.md)

</faq>

<faq question="I have a person who I terminated their contract who said they were unavailable to work, but now they are available and wish to work. Should I reissue their contract or reopen it?">

If you want to maintain the original contract then **reopen** back to accepted (and add a status message of the reason). If some details need to be updated then **reissue** back to in-progress and request the changes as part of the status message.

<prompt>

* [How to change a status](https://help.picmi.io/business/article/changing-application-status.html)
* [What changes can be made?](https://help.picmi.io/business/about-picmi/applications.html#business-actions)

</prompt>
</faq>

<faq question="I have a person who has accepted but will require changes to be made, what so I do?">

Some details need to be updated then **reissue** back to in-progress and request the changes as part of the status message. At the point of reissue the person will also receive a notification with a link back to the application.

This happens often because people don't always have all the information at hand and find ways to get to agree. They just
about always let you know and this is easily sorted later on.

<prompt>

* [How to change a status](https://help.picmi.io/business/article/changing-application-status.html)
* [What changes can be made?](https://help.picmi.io/business/about-picmi/applications.html#business-actions)

</prompt>
</faq>

<faq question="How can I change the dates of a job on an accepted application?">

This is change to the terms and the application must be reissued, the dates of the job changed in personal overrides and then re-agreed.

<explanation>

1. [Reissue the application](article/changing-application-status.md) and [add a status message](article/status-message.md) that dates have been changed and for them review (eg Please review new dates)
2. [Personalise the job conditions](article/creating-individual-employment-conditions.md) (as needed)
   * Job starts on
   * Job ends on

<prompt>

The person on the application will be notified so ensure the date changes are done immediately

</prompt>

</explanation>

</faq>
## Integrations

<faq question="How can I setup a new integration?" :expandAll="expandAll">
  PICMI currently has over a dozen integrations available. At this stage, please reach out to our support team via the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email to <a href="mailto:hello+support@picmi.com" target="_blank">hello+support@picmi.io</a>.
</faq>

<faq question="How can I update an existing record in an integration system?" :expandAll="expandAll">

PICMI does not update existing employee fields in an integration.
see [integration rules](integrations/integration-events#general-integration-rules)

</faq>

<faq question="How can I bulk upload?" :expandAll="expandAll">

### For API integrations

Bulk uploading is performing it two ways. First, at application accepted the record can be automatically sent. If this
setting is not turned on, at any point later, each application can be sent to the system and created if it doesn't
exist.
see [send data per application](integrations/integration-events.md#create-employee-manually-send-data-per-employee)

### For CSV integrations

This can be done at any time.

</faq>

### Troubleshooting

There are faults that occur in integrations (downstream systems). Remember that integrations can only occur after an
accepted application.

<faq question="I can't see a person in my integration system" :expandAll="expandAll">

In this case, there is no record in the other system, but you are expecting there to be there automatically after the
person accepted.

To diagnose this:

* Check the person has an accepted application
* Check that the person record details are have been sent and succeeded or failed on the expected integration
    * To view multiple records, customise columns and
      for [quick view](integrations/integration-events.md#show-events-quick-view) **Integrations columns** (completed,
      queued or error)
    * To view a single record at a time, look in the events in
      the [detailed view](integrations/integration-events.md#show-events-detailed-view-result-of-attempt-to-send-data)
* If there is no integration status, check
  the [integration is set up to automatically send](integrations/integration-events.md#setup-automatic-create-employee-sending-of-data-on-accepted-application)

<prompt>

On any
integration, [create employee](integrations/integration-events.md#create-employee-manually-send-data-per-employee) can
be done multiple times without causing problems.

</prompt>

**Note:** these test do not apply for incorrect/unexpected data in the downstream system

</faq>

<faq question="A person's 'ID' is wrong" :expandAll="expandAll">
  Different systems call the "ID" (identifier) different names ranging from staff id to external identifier. 

To confirm this is a problem:

* Check that the person record details are mapped incorrectly from the PICMI side

**Note:** At this stage, please reach out to our support team via
the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email
to <a href="mailto:hello+support@picmi.com" target="_blank">hello+support@picmi.io</a>.

</faq>

<faq question="A person's data is missing" :expandAll="expandAll">
  Each integration is able to match the persons record details on PICMI side to the fields in the integration. These may get out of date and need to be checked that they exist to transfer the data.

To diagnose this:

* Check that the person record details are mapped from the PICMI side

**Note:** At this stage, please reach out to our support team via
the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email
to <a href="mailto:hello+support@picmi.com" target="_blank">hello+support@picmi.io</a>.

</faq>

<faq question="What can I do when an integration event has an error?" :expandAll="expandAll">

Errors in integration events need to be analysed individually.

1. Locate that there is an **error in the event** either
   in [quick view](integrations/integration-events.md#show-events-quick-view)
   or [detailed view](integrations/integration-events.md#show-events-detailed-view-result-of-attempt-to-send-data).
2. Locate the specific error message on the integration event inside
   the [detailed view](integrations/integration-events.md#show-events-detailed-view-result-of-attempt-to-send-data)

To diagnose this:

* Does the error look like a **field error**? This could be a configuration problem
* Does the error contain anything "token", "refresh", "oauth" or "authentication"? Attempt
  a [create employee](integrations/integration-events.md#create-employee-manually-send-data-per-employee) once more to
  check that it is a **persistent error**. Please reach out to our support team
  via the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email
  to <a href="mailto:hello+support@picmi.com" target="_blank">hello+support@picmi.io</a> for support

<prompt>

On any
integration, [create employee](integrations/integration-events.md#create-employee-manually-send-data-per-employee) can
be done multiple times without causing problems.

</prompt>

</faq>

<script setup lang="ts">import {ref} from 'vue';

const expandAll = ref(false);

const toggleExpandAll = () => {
  expandAll.value = !expandAll.value;
}
</script>
