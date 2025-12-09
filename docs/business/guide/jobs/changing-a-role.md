# Changing a person’s role/job in PICMI (and issuing a new contract)

When someone in your organisation changes roles, it’s important to ensure their employment details—particularly the
contract—accurately reflect their new responsibilities, pay, and working conditions.

In PICMI, this typically means setting up a **new job** for their new role and inviting them to apply to it. Below, we
explain how to decide what needs to change (job, workflow, or contract), and provide step-by-step instructions for
managing the transition.

:::: explanation
A job in PICMI is a “bucket” that helps track all people against that job. Here are some distinct characteristics:

- A job is usually a single role
- A job has a title, pay, responsibilities, and description
- One or many people can each have applications for a job
- A workflow is used for an application
- Each workflow has a contract template
- Each person's application can have personal conditions associated with it for that job
- When the application is agreed a employment agreement contract is created complete with the general and personal
  conditions
::::

## When do I need a new job, workflow, or contract?

### Create a new job when

- The person’s **role is changing** (new responsibilities, title, pay, or work conditions)
- A new or updated **contract** is required
- You want to track the new role separately (ie the applications against it)

### Consider a new workflow if

- The onboarding process changes (e.g. different questions, videos, documents)
- You want to gather new information for this specific role

::: prompt
If you require the same workflow but different contracts, the workflow must currently be duplicated to cater for the two
contracts.
:::

### A new contract will be created when

You invite the person to a new job (ie a new application)

### A contract will be updated when

You reissue the application on an existing job

### When don't I need a new job, workflow, or contract?

When you can use **personal overrides** for one-off changes (e.g. a custom pay rate for one person) without creating a
new job.

### What happens if I don't create a new job for the role?

Most importantly, the original contract is not tracked as a contract and they are seen as having only one contract. This
could be a problem for compliance audits.

## How to handle a role change

Handling a role change requires a bit of planning as per the decisions above, completing the setup for the new job before inviting the person

:::: instructions
### 1. Complete the person’s current job application

Before inviting the person to their new role:

1. Open their current application
2. Use the **Complete** action
3. Add an **internal status message** (e.g. “Moved to new role: Assistant Supervisor”)

Completing the current job ensures clean transitions and accurate records.
::::

:::: instructions
### 2. Create a new job

It is often best to use existing jobs by duplicating and making changes

1. Create a **New Job**
2. Fill in job details:
    - Title
    - Pay rate
    - Job responsibilities
    - Conditions
3. Choose an existing **workflow** or create a new one
4. Review or update the **contract template** as needed

You can apply **personal overrides** later for individual contract customisation.
::::

:::: instructions
### 3. Invite the person to the new job

1. Go to the newly created job
2. Click **Invite**
3. Find the person’s name or email
4. Add an optional message
5. Send the invite

The person will receive a link to start the application process.
::::

:::: instructions
### 4. The person completes the application

Completing another application is quicker than the first because most information will be already completed as it is
brought forward from previous application answers

1. The person follows the steps in the new workflow
2. Reviews and accepts their **new contract**

The transition is now complete and fully tracked.
::::

## FAQs

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>

::: faq Can I edit their old contract instead of creating a new job?
No. If the role has changed, you must create a new job. PICMI contracts are job-specific and triggered by new
applications.
:::

::: faq Do I need a new workflow?
Only if the onboarding process changes. If the steps are the same (e.g. same questions, videos, documents), you can
reuse the existing workflow.
:::

::: faq What if someone has multiple roles?
You can invite them to multiple jobs. Each job is tracked separately with its own contract and application process.
:::

::: faq Do I have to complete the old job first?
Yes. It’s best to complete the current job application and include a status message explaining why. This ensures clean
recordkeeping.
:::

::: faq What if only their pay or conditions change?
If the role stays the same, use a personal override. This avoids creating a new job and still updates the contract for
that person.
:::

::: faq How does the contract get personalised?
PICMI contracts use field substitutions, pulling details from:

- The organisation
- The job
- The workflow (e.g. answers to questions)
- Personal overrides

PICMI does not currently support conditionally including or removing full sections in contracts—only substitutions.
:::

::: faq Still not sure what to do?
If you're not sure whether to create a new job or use a personal override, contact PICMI Support. We’ll help guide you
based on your situation.
:::


<script setup lang="ts">import {ref} from 'vue';

const expandAll = ref(false);

const toggleExpandAll = () => {
expandAll.value = !expandAll.value;
}
</script>
