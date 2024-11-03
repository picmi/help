# Frequently Asked Questions (FAQs)

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>

## General Questions

<faq question="What is PICMI?" :expandAll="expandAll" >
  PICMI is a platform that allows you to apply for jobs. You can review detailed information about companies, such as culture and working conditions, to decide if they are a good fit. PICMI issues and stores the answers you provide and employment agreements.
</faq>

<faq question="How does the hiring process work?" :expandAll="expandAll">
  Our straight-through hiring process allows you to receive a legally binding employment agreement instantly if you meet all the predefined criteria set by the employer.
</faq>

## Platform Usage

<faq question="How do I sign up for PICMI?" :expandAll="expandAll">
  You don't really sign up for PICMI. Instead, employers will send you an invite that has you already registered for that job. The are cases where you may need to sign up, you see it on the page with the job descriptions. Just click on the "Sign Up", provide the necessary details, and follow the instructions.
</faq>

<faq question="Can I apply to multiple jobs at the same time?" :expandAll="expandAll">
  Yes, you can apply to as many jobs as you want. Each job includes detailed information about the employer and position to help you decide which opportunities to pursue. But if you already have contract with one employer, ensure that jobs aren't overlapping or in conflict with each other.
</faq>

## Troubleshooting

<faq question="What should I do if I can't log into my account?" :expandAll="expandAll">
  If you're having trouble logging in, first make sure you're using the correct email. We recommend that you use passwordless to login and this will send a code to your email address that you can use to login
</faq>

<faq question="What should I do if I can't log into my account?" :expandAll="expandAll">
  If you're having trouble logging in, first make sure you're using the correct email. We recommend that you use passwordless to login and this will send a code to your email address that you can use to login
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
