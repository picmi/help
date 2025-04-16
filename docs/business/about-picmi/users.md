# Understanding users

In PICMI, a **user** refers to someone who can sign in to the system, with their email address used as their unique
identifier for their account.

::: prompt
PICMI only allows **one user account at a time** to be logged in a single browser profile
:::

## User types by access method

| **User Type** | **Description**                                         | **Password** | **Passwordless** | **Provisional** |
|---------------|---------------------------------------------------------|:------------:|:----------------:|:---------------:|
| Business      | Someone working for your business                       |      ✓       |        ✓         |        ✗        |
| Jobseeker     | A person looking to join, or has joined, your workforce |      ✓       |        ✓         |        ✓        |

<explanation>

### Sign in access types

Users can sign in to PICMI in different ways:

- **Password** Requires an email address and a password specific to PICMI. This password is only known to them.
- **Passwordless** Requires an email address. A one-time code is sent to their email inbox, and they must be logged in
  to their email to retrieve the code. This code is then entered into PICMI to sign in.
- **Provisional** This is convenient access that expires based on a relative time. A
  key and a code are provided to the person by the business. These details are known to the business but must be
  entered by the other person to access PICMI and can be provided
  by [link, QR code or by details](../article/provisional-user.md#type-of-access) as required.

</explanation>

## Important to know limitation

PICMI is designed so that a person is either a **business user** or a **jobseeker user**, and the same email address
cannot be used for both. However, there are two practical workarounds if someone needs to be both types of users:

1. **Sub-alias Email Address** – a slight modification to the email address (e.g., john+jobseeker@example.com) can allow
   the person to have separate accounts, while emails still go to the same inbox
   see [What is an email sub-alias?](../faqs#emails)
2. **Provisional User** – create a limited account for the jobseeker users (note: business users must use an email
   address that messages can be delivered to and accessed)

::: prompt
In the future, a single email will be available for both with the ability to switch between them
:::

<explanation>

## When you might need both users at the same time

- A **business user** needs to issue contracts to themselves.
- A **jobseeker** has joined the business and now needs access as a **business user**.
- A **business user** wants to experience the **jobseeker** process.
- You need to **test** a jobseeker workflow.

::: prompt
Ways to Test the System

- To **apply for a job** use the **preview mode** to see the workflow as a jobseeker and create a **provisional user**
  to simulate the experience.
- To **see email invitations** use the **preview option** for invites.
- To **check the validity of an application**u use the **Check Configuration** diagnostics in PICMI.
:::

</explanation>

### FAQs

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>

<faq question="Can a business user also apply for jobs using the same email address?" :expandAll="expandAll">

No, but they can use a sub-alias email address, and the emails will still come to the same inbox.

</faq>


<faq question="What’s the difference between a user with an email and one with provisional access?" :expandAll="expandAll">

A provisional user is temporary and only valid for one application. They receive both a key and a code from the
business, unlike regular users who sign in with an email and password or email and code.

</faq>

<faq question="Can I turn someone with an email login into a provisional user?" :expandAll="expandAll">

Yes, if someone forgets their email password, using a provisional user allows them to continue using PICMI for a single
application.

</faq>


<faq question="Can I switch a provisional user to an email-based login?" :expandAll="expandAll">

Yes, and we encourage all users to eventually use their own email for full access and communication across multiple
applications.


</faq>

<script setup lang="ts">import {ref} from 'vue';

const expandAll = ref(false);

const toggleExpandAll = () => {
  expandAll.value = !expandAll.value;
}
</script>
