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
  For technical issues, please reach out to our support team via the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email to <a href="mailto:help@picmi.com" target="_blank">help@picmi.io</a>
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

Rarely is the email NOT delivered, but it isn't always to your inbox because we send emails from a service provider
rather than from a person. See [finding emails](../email-not-found)

<prompt>

[Provisional users](article/provisional-user.md) do not receive emails!

</prompt>

</faq>

## Invites

<faq question="Can I invite a jobseeker to a job if they already have an invite to a job?" :expandAll="expandAll">

If the jobseeker has already accepted the invite to a job, you cannot invite them again as they have already accepted
the application. see [application statuses](about-picmi/applications.md#application-status)

To remedy this:

* You can only invite them to a new job that they have not already accepted

<prompt>

Once a jobseeker accepts an application, that invite is no longer available for changes.

</prompt>

</faq>

<faq question="I invited a jobseeker to two jobs, but one job is now closed. What should I do next?" :expandAll="expandAll">

You need to change the status of the application from _invited_ to _cancelled_.
see [application statuses](about-picmi/applications.md#application-status)

To remedy this:

* Add a [status message](article/status-message) when updating the application: "Job closed"
* [Update](article/changing-application-status) the application status accordingly

<prompt>

Once a job is closed, it's important to clearly mark the status to prevent confusion.
see [job statuses](article/job-status)

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

The main problem is that emails do get filtered in JUNK folders and are hard to find. Sending them again won't help the
person
find their email. We don't recommend to cancel and then reissue as it does not help.
See [finding emails](../email-not-found) for instructions


<prompt>

[Bounced emails are NOT delivered](#what-can-i-do-when-the-invite-has-delivery-status-notification-failure) but are
notified and should be cancelled

</prompt>

</faq>


<faq question="Are there restrictions on emails that can be used when sending invites?">

PICMI puts no restrictions on the email addresses used

</faq>



<faq question="The individual emailed back after an invitation explaining, how did they get the email address?">

The person invited can email you back because the `reply-to` in the email itself is set to the email address of your
organisation

</faq>


<faq question="The individual emailed back after an invitation explaining, can I hold the position? What should I do?">

Given you want to keep them, [change a status message](article/status-message#change-status-message-on-application) to
their application so that you can track it.

<prompt>

You are unable to reserve a position for a specific application. If there is a restriction on positions, then if all
positions are filled
add one to the maximum in [job application controls](article/job-application-controls). Alternatively, reduce the number
by one until the person is ready to apply.

</prompt>

</faq>

## Applications

<faq question="How do I view and manage applications?" :expandAll="expandAll">
  Once you've posted a job, you can manage applications by navigating to the <b>People</b> page. Here, you'll be able to review peoples' applications.
</faq>

<faq question="I can't find an application that I'm sure exists, what happened?" :expandAll="expandAll">

It is likely that the [search filter](article/search.md) has the wrong status included. Change
your [search criteria in People](article/searching-for-people.md)

</faq>

<faq question="What should I do if a person reports they can't complete an application?" :expandAll="expandAll">
   Check the <b>application status</b> in the <b>People</b> page and then determine if the person is (and confirm that they also see this):

1. not able to **apply** because of the sign in problems (see [user account](about-picmi/users.md))
2. not able to **apply** (or **proceed to accept**) because [job application controls](article/job-application-controls)
3. **in progress** and has not completed all the fields in the application (
   see [check job configuration](article/checking-application-configuration))
4. **in progress** and the contract page reports an error (also
   see [check job configuration](article/checking-application-configuration))
5. in **offered** status but is unable to proceed to accept (contact PICMI)

</faq>

<faq question="What should I do when a individual applying reports they cannot sign and only have the option to Cancel or Refresh?" :expandAll="expandAll">

This usually happens when the job has [**no vacancies**](about-picmi/applications.md#restrictions-on-actions). You can
see this as a business user or as an individual applying.

* As a business user, check the [job application controls](article/job-application-controls)
* As a jobseeker, they can see positions available on the top-left of the workflow or in the list view

<prompt>

Change your vacancies by the number of people you expect

</prompt>

</faq>

<faq question="There are 'No Vacancies', what should I do?" :expandAll="expandAll">

This usually happens when the job has '[**No positions left**](about-picmi/applications.md#restrictions-on-actions)'.
You can see this as a business user in **Jobs** in the [**Remaining
**](article/job-application-controls.md#view-job-bucket-settings) column

If you want to increase the number of positions in the job bucket, increase
the [Maximum number of people](article/job-application-controls.md#application-controls) setting in the job

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

If you want to maintain the original contract then **reopen** back to accepted (and add a status message of the reason).
If some details need to be updated then **reissue** back to in-progress and request the changes as part of the status
message.

<prompt>

* [How to change a status](https://help.picmi.io/business/article/changing-application-status.html)
* [What changes can be made?](https://help.picmi.io/business/about-picmi/applications.html#business-actions)

</prompt>
</faq>

<faq question="I have a person who has accepted but will require changes to be made, what do I do?">

Some details need to be updated then **reissue** back to in-progress and request the changes as part of the status
message. At the point of reissue the person will also receive a notification with a link back to the application.

This happens often because people don't always have all the information at hand and find ways to get to agree. They just
about always let you know and this is easily sorted later on.

<prompt>

* [How to change a status](https://help.picmi.io/business/article/changing-application-status.html)
* [What changes can be made?](https://help.picmi.io/business/about-picmi/applications.html#business-actions)

</prompt>
</faq>

<faq question="How can I change the dates of a job on an accepted application?">

This is change to the terms and the application must be reissued, the dates of the job changed in personal overrides and
then re-agreed.

<explanation>
### Steps

1. [Reissue the application](article/changing-application-status.md)
   and [add a status message](article/status-message.md) that dates have been changed and for them review (eg Please
   review new dates)
2. [Personalise the job conditions](article/creating-individual-employment-conditions.md) (as needed)
    * Job starts on
    * Job ends on

<prompt>

The person on the application will be notified so ensure the date changes are done immediately

</prompt>

</explanation>

</faq>

<faq question="I want to send out an application and am still negotiating pay rates (e.g., salary), what to do?">

PICMI allows sending invites for the person to start the application, but the person should not agree to the application
until you both agree on the terms. Once you've both agreed on the rate, and if it differs from the rate specified for
the job, add the new rate into the personal overrides. The person can then proceed to accept.

Why start the application? The application provides more understanding to the person including the terms in the
contract. Some people want to see the contract as much as negotiating their rates.

<explanation>

### Steps

1. Set up the job and invite the person.
2. The person can fill in the application but should not agree.
3. Complete your negotiations with the person.
4. Add personal overrides to the application for individual employment conditions.
5. Let the person know to review the updated rates on the job, then proceed to agree.

<prompt>

If they agree, follow the same process after a reissue.

</prompt>

</explanation>

</faq>

<faq question="The photos need to be improved, what to do?">

It happens that photo aren't good enough and/or poorly cropped. There
is [information here for jobseekers](../jobseeker/article/adding-a-photo.md#adding-a-new-photo) that they need to follow
after you reissue the application for them to make updates to their photos.

<explanation>

### Steps

1. Find the [application](article/job-application-controls.md)
2. **Reissue** with [status message](article/status-message.md#add-new-status-message):
   <br> Use this message and add more if needed (copy and paste)

```
Please improve your photos. For further information use the help where photos are added or visit: https://help.picmi.io/jobseeker/article/adding-a-photo.html
``` 

3. Wait for the person to update and accept application

<prompt>

There is no charge for this process [see billing](about-picmi/billing.md)

</prompt>

</explanation>

</faq>

<faq question="How can I change the date format when exporting application details?">

Change the [default date format](article/export.md#set-as-default-date-format-for-all-dates) to apply to all dates

</faq>


<faq question="I have reissued and no email was received?">

Check that they person is not a [provisional user](article/provisional-user.md), otherwise look in [email not found](../email-not-found.md)

</faq>

## Notifications

<faq question="Why am I receiving multiple notifications saying there are no vacancies?"  :expandAll="expandAll">

PICMI is designed to notify you immediately when a vacancy check is performed, ensuring that you’re kept up-to-date in real time. However, if multiple checks are performed in quick succession—such as when retries are made—you might receive multiple notifications in a short period.

### Why doesn’t PICMI bundle these notifications?
We prioritise immediate updates to ensure you have the most accurate information as soon as possible. While bundling notifications could reduce duplicates, it introduces a delay, and many customers value the immediacy of real-time updates.

Additionally, determining the best bundling period is challenging because preferences vary. Some users may prefer updates every 10 minutes, while others might prefer hourly or daily summaries. Since we can only set a single time period for all customers, we’ve opted to keep notifications immediate to suit the majority.

### Does this issue affect everyone?
No, most users don’t experience multiple notifications because retries are usually less frequent. This tends to happen only in a few cases where repeated vacancy checks occur in quick succession.

### What can be done to improve this?
We’re always open to feedback and considering improvements. If you feel bundling notifications would be helpful, let us know what time period would work best for you:

* 10 minutes for quick updates.
* 1 hour for moderate consolidation.
* End of day for a single summary.

Your input can help us refine our approach and better meet your needs.

If you have further questions or suggestions, please reach out to our support team via the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email to <a href="mailto:help@picmi.com" target="_blank">help@picmi.io</a>.

</faq>

## Integrations

<faq question="How can I setup a new integration?" :expandAll="expandAll">
  PICMI currently has over a dozen integrations available. At this stage, please reach out to our support team via the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email to <a href="mailto:help@picmi.com" target="_blank">help@picmi.io</a>.
</faq>

<faq question="How can I update an existing record in an integration system?" :expandAll="expandAll">

PICMI does not update existing employee fields in an integration.
see [integration rules](integrations/integration-events#general-integration-rules)

</faq>


<faq question="How can I create a record if the person is already Completed?" :expandAll="expandAll">

You will need to do this in three steps on each person record:

1. [Reopen](about-picmi/applications.md#business-actions)
2. [Create Employee](integrations/integration-events.md#create-employee-manually-send-data-per-employee)
3. [Complete](about-picmi/applications.md#business-actions)

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

<faq question="How can I download for a CSV import into another system?">

Accepted records can be download as a [report](integrations/download-reports.md) from the [CSV integrations](integrations/integrations#available-integrations) type

</faq>

<faq question="How can I download data from an API integration?">

Use [export details](article/export.md) to create your own CSV set of records

</faq>

## Billing

<faq question="What should I do if I mistakenly send an application to the wrong person and they accept it?" :expandAll="expandAll">

You will need to cancel the application and talk to us.
See [handling mistaken application invitations](about-picmi/billing.md#handling-mistaken-application-invitations)

</faq>

<faq question="What should I do if I mistakenly send an application to the wrong person, am I charged?" :expandAll="expandAll">

Yes, if you do nothing. But you can contact us through [billing support](about-picmi/billing.md#billing-support) and we
can ensure you get a credit for the application.
See [resolving mistaken applications](about-picmi/billing.md#resolving-mistaken-applications)

</faq>

<faq question="I don't think I should be charged, what should I do?" :expandAll="expandAll">

First [check our guidelines](about-picmi/billing.md#per-contract-fee) that you have a different situation and then
contact us through [billing support](about-picmi/billing.md#billing-support)

</faq>

## PDFs

<faq question="Where are the PDFs in PICMI?" :expandAll="expandAll">

PICMI expects you to use the browser function to create any PDFs. See [below](#how-do-i-create-a-pdf-using-the-browser-print-function).

</faq>

<faq question="Where are the PDFs in PICMI?" :expandAll="expandAll">

PICMI expects you to use the browser function to create any PDFs. See [below](#how-do-i-create-a-pdf-using-the-browser-print-function).

</faq>

<faq question="How do I create a PDF using the browser print function?" :expandAll="expandAll">

To create a PDF using your web browser’s built-in print function:
1. Open the webpage or document you want to save as a PDF.
2. Press **Ctrl + P** (Windows/Linux) or **Cmd + P** (Mac) to open the print dialog.
3. In the **Destination** or **Printer** dropdown, select **Save as PDF**.
4. Adjust print settings if needed (e.g., layout, margins, headers/footers).
5. Click **Save**, choose a location, and give your file a name.

</faq>

<faq question="Which browsers support printing to PDF?" :expandAll="expandAll">

Most modern browsers support this feature, including:
- **Google Chrome**
- **Microsoft Edge**
- **Mozilla Firefox** (requires an extension or virtual PDF printer)
- **Apple Safari**

</faq>

<faq question="Why don’t I see the ‘Save as PDF’ option?" :expandAll="expandAll">

If the option isn’t visible:
- Ensure you have the latest version of your browser.
- In Windows, you may need to install **Microsoft Print to PDF** (available in Settings > Devices > Printers & scanners).
- On Mac, select **PDF > Save as PDF** from the print dialog.  

</faq>

<faq question="How can I remove headers and footers from the PDF?" :expandAll="expandAll">

Most browsers include an option to disable headers and footers:
- In the print dialog, look for **More settings** or **Options**.
- Uncheck **Headers and footers** before saving.  
  
</faq>

<faq question="How do I adjust page size, margins, or orientation?" :expandAll="expandAll">

Under **More settings**, you can:
- Change **Paper size** (e.g., A4, Letter).
- Adjust **Margins** (Default, None, Minimum, Custom).
- Choose **Portrait** or **Landscape** orientation.  

</faq>

<faq question="Can I print only selected pages?" :expandAll="expandAll">

Yes! Before saving, look for the **Pages** option in the print dialog:
- Select **All** to print the entire document.
- Choose **Custom** to specify a page range (e.g., 1-3, 5, 7-9).  

</faq>

<faq question="Can I include background images and colours in the PDF?" :expandAll="expandAll">

Yes! In most browsers, under **More settings**, enable **Background graphics** to include them.  

</faq>

<faq question="My PDF is missing content or formatting looks different. What can I do?" :expandAll="expandAll">

- Try a different browser (Chrome tends to handle complex layouts better).
- Print the page in **Landscape** mode if elements are cut off.
- Enable **Background graphics** if images or colours are missing.
- If interactive elements (like dropdowns) don’t appear, take a **screenshot** instead.  

</faq>

<faq question="Can I password-protect the PDF?" :expandAll="expandAll">

The browser print function doesn’t offer password protection, but you can:
- Use **Adobe Acrobat** or another PDF editor to set a password.
- Upload the PDF to an online PDF security tool and apply encryption.  

</faq>

<faq question="How do I merge multiple PDFs after saving?" :expandAll="expandAll">

You can combine PDFs using:
- **Adobe Acrobat** (paid feature).
- **Online tools** like Smallpdf or ILovePDF.
- **Mac Preview** (open PDFs > File > Export as PDF).  

</faq>


## Troubleshooting

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
to <a href="mailto:help@picmi.com" target="_blank">help@picmi.io</a>.

</faq>

<faq question="A person's data is missing" :expandAll="expandAll">
  Each integration is able to match the persons record details on PICMI side to the fields in the integration. These may get out of date and need to be checked that they exist to transfer the data.

To diagnose this:

* Check that the person record details are mapped from the PICMI side

**Note:** At this stage, please reach out to our support team via
the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email
to <a href="mailto:help@picmi.com" target="_blank">help@picmi.io</a>.

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
  to <a href="mailto:help@picmi.com" target="_blank">help@picmi.io</a> for support

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
