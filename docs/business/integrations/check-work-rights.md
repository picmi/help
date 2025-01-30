# CheckWorkRights integration overview

By setting up PICMI’s integration with [CheckWorkRights](https://checkworkrights.com.au) correctly, businesses can
ensure smooth, compliant hiring processes with
minimal administrative burden for checking the right to work and monitoring visa conditions (in Australia).

## Integration configuration

| Configuration                                  | Description                                                                    | Values                                                                               |
|------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [Token](#cfg-token){#cfg-token}                | Token provided for authentication                                              | [Retrieve the API key](#retrieving-a-token) from CheckWorkRights by application user |
| [Send email](#cfg-send-email){#cfg-send-email} | Prevent issuing the initial request email—reminder emails will still be issued | Send email to start verification, Never send email automatically                     |

## PICMI-CheckWorkRights integration fields

| Field Name                                      | Description                                                                    | Validation/Constraint/Default Value | Source                    |
|-------------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------|---------------------------|
| [First name](#first-name){#first-name}          | First name of the employee                                                     | Mandatory                           | Personal Information      |
| [Last name](#last-name){#last-name}             | Last name of the employee                                                      | Mandatory                           | Personal Information      |
| [Email address](#email-address){#email-address} | Email address of the employee                                                  | Mandatory                           | Personal Information      |
| [ID](#id){#id}                                  | Unique external identifier for the employee                                    |                                     | Integration Configuration |
| [Send email](#send-email){#send-email}          | Prevent issuing the initial request email—reminder emails will still be issued | Default: off                        | Integration Configuration |

<explanation>

## How PICMI works with CheckWorkRights

**PICMI** integrates with CheckWorkRights to simplify the right to work checks as part of your hiring process. Here's
how:

## Integration options

- **Manual integration**: For businesses verifying only visa holders, CheckWorkRights integration in PICMI can be
  configured to
  require manual checks.
- **Automatic integration**: When verifying both citizens and visa holders, PICMI can automatically send accepted
  applications to CheckWorkRights for processing.

<prompt>

PICMI recommends automatic integrations when using CheckWorkRights
but [billing](#how-checkworkerrights-CheckWorkRights-works-around-billing) may affect your decision

</prompt>

## Separation of identity and hiring

PICMI recommends handling proof of identity documentation and right to work status separately from the application
process. This ensures that
hiring decisions and compliance checks remain distinct but aligned.

## Audit and compliance benefits

- Since auditing and identity verification often overlap but serve different purposes, a single, streamlined process
  through CheckWorkRights simplifies operations.
- Even for citizens, performing a one-time right to work check through CheckWorkRights provides significant compliance
  benefits for a
  minimal fee.

## Best practices for right to work management

To ensure robust compliance, best practice recommends:

- **Centralised data**: Storing all right to work information (for both citizens and visa holders) in one system for
  easy
  access and audits.
- **Consistent process**: Applying the same process to Australian citizens and visa holders, even though citizens
  typically require only a one-time check.

## Why use CheckWorkRights for all workers (including citizens)?

- **Simplifies compliance** by using one consistent process.
- **Enhances audit readiness** and reduces risk.
- The cost of adding citizens to the system is minimal, while the compliance improvement is substantial.

## How CheckWorkRights works around billing

**CheckWorkRights** offers flexible billing options based on the type of right to work checks performed.
Here’s a breakdown of how it works, simplified for easy understanding:

* **Pay-As-You-Go (one-off charge)**: you are charged a one-time fee for a single check (e.g., verifying someone's right
  to work
  during their first application).
* **Subscription (ongoing monitoring)**: for ongoing monitoring of a person's visa conditions (e.g., visa holders with
  expiry dates), a subscription fee applies until they are no longer eligible.

## How right to work checks apply to different groups

| **Worker type**     | **First-time check**     | **Ongoing monitoring**  |
|---------------------|--------------------------|-------------------------|
| Australian Citizens | One-time check only      | Not required            |
| Visa Holders        | One-time check initially | Ongoing checks required |

<prompt>

All groups must consent to run the check and store proof of documentation

</prompt>

<instructions>

## Retrieving a token

Log in to [CheckWorkRights](https://app.checkworkrights.com.au) with your credentials that access to setting up an API

1. Locate the left-hand menu, click **Admin**
2. Select **API** tab
3. Turn on **API Status**
4. Click **Generate Key**

This is the key to use in PICMI

<prompt>

Only update the key using **Refresh Key** if you are sure that what you want to do as it will cancel the previous key
from usage and must be updated in PICMI

</prompt>

</instructions>

## FAQs

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>

<faq question="What should we expect as the completion rate of Australian citizens as a percentage?" :expandAll="expandAll">

CheckWorkRights reports that for the "vast majority of our customers the completion rate account wide is virtually 100%
as completion is a requirement of employment"

</faq>

<faq question="If an applicant does not complete their CheckWorkRights submission, will their application contract be terminated in PICMI?" :expandAll="expandAll">

No, the employment agreement in PICMI is separate to right to work status in CheckWorkRights. If an applicant does not
complete their
submission, the business needs to make a decision to terminate the application contract in PICMI.

</faq>

<faq question="What happens if an employee’s does not complete their submission or fails and turns up onsite?" :expandAll="expandAll">

When an employee’s QR code is scanned and their work rights status is not green or yellow, the employee may be refused
entry to the site. However, CheckWorkRights provides only the visa status; it is up to the employer to make the final
assessment.

</faq>

<faq question="Do you charge for applicants who do not complete the process, particularly in the case of Australian citizens?" :expandAll="expandAll">

Yes. The two fees relating to work entitlement are (1) An add fee for any employee, regardless of their completion of
the process, and (2) The monitoring fee for known visa holders. The add fee is charged regardless of completion, but
because the completion rate is extremely high as it's a requirement for employment in Australia.

</faq>


<faq question="What to do with, 'The foreignkey_id is not found' error on the integration" :expandAll="expandAll">

Contact PICMI and we will get it sorted behind the scenes with CheckWorkRights.

</faq>

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>

<script setup lang="ts">import {ref} from 'vue';

const expandAll = ref(false);

const toggleExpandAll = () => {
  expandAll.value = !expandAll.value;
}
</script>

