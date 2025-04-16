# Frequently Asked Questions (FAQs)

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>

## General Questions

<faq question="What is PICMI?" :expandAll="expandAll" >
  PICMI is a platform that allows you to apply for jobs. You can review detailed information about companies, such as culture and working conditions, to decide if they are a good fit. PICMI issues and stores the answers you provide and employment agreements.
</faq>

<faq question="How does the hiring process work?" :expandAll="expandAll">
  Our straight-through hiring process allows you to receive a legally binding employment agreement instantly if you meet all the predefined criteria set by the employer.
</faq>

<faq question="I have accepted but am I really hired? What should I do next?" :expandAll="expandAll">
  Yes, your job position is confirmed and you are hired. Your employer will be in contact with you about next steps by email or phone.
</faq>

<faq question="How do I get access to my employment agreement (contract) and job details?" :expandAll="expandAll">

All the details from the application process are available to you are any time. You need remember the **email address** you used and have access to your email inbox to receive codes to sign in. Once signed in, the information is available—you'll see your list of applications.

Use [this link](https://jobs.picmi.io/#/signin) to continue.

::: prompt
If you use the same browser as last time, you will remain signed in until you sign out
:::
</faq>

## Application 

<faq question="I have been asked to provide better photos, what to do?" :expandAll="expandAll">

You may need to take [clearer photos](article/adding-a-photo.md#guidelines-for-taking-photos-of-photo-ids-with-your-phone) or [just crop them differently](article/adding-a-photo.md#crop-your-photo).

</faq>

## Platform Usage

<faq question="How do I sign up for PICMI?" :expandAll="expandAll">
  You don't really sign up for PICMI. Instead, employers will send you an invite that has you already registered for that job. The are cases where you may need to sign up, you see it on the page with the job descriptions. Just click on the "Sign Up", provide the necessary details, and follow the instructions.
</faq>

<faq question="Can I apply to multiple jobs at the same time?" :expandAll="expandAll">
  Yes, you can apply to as many jobs as you want. Each job includes detailed information about the employer and position to help you decide which opportunities to pursue. But if you already have contract with one employer, ensure that jobs aren't overlapping or in conflict with each other.
</faq>

<faq question="My link has expired but I have already started/completed an application, what do I do?">

You can still **sign in passwordless** with the same email address. [Sign in](https://jobs.picmi.io/#/signin) and you will taken to your list of applications.

::: prompt
If you use the same browser as last time, you will still be signed in when you go to [PICMI](https://jobs.picmi.io)
:::

</faq>

<faq question="My link has expired and I have never used it, what do I do?">

You can **sign in passwordless** with the same email address. [Sign in](https://jobs.picmi.io/#/signin) to see your list of applications.

</faq>

## Troubleshooting

<faq question="What should I do if I can't sign in to my account?" :expandAll="expandAll">
  If you're having trouble signing in, first make sure you're using the correct email. We recommend that you use passwordless to sign in and this will send a code to your email address that you can use to sign in
</faq>

<faq question="What should I do if I can't sign in to my account?" :expandAll="expandAll">
  If you're having trouble signing in, first make sure you're using the correct email. We recommend that you use passwordless to sign in and this will send a code to your email address that you can use to sign in
</faq>

<faq question="I can't find emails from PICMI, what to do?">

Rarely is the email NOT delivered, but it isn't always to your inbox because we send emails from a service provider rather than from a person. See [finding emails](../email-not-found)

</faq>


<faq question="I get the error 'Business cannot apply for a job', what to do?">

See [Error: Business user cannot apply for a job](article/business-user-cannot-apply-for-job.md)

</faq>

<script setup lang="ts">
import { ref } from 'vue';

const expandAll = ref(false);

const toggleExpandAll = () => {
  expandAll.value = !expandAll.value;
}
</script>
