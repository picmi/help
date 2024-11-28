# CheckWorkerRights integration overview

By setting up PICMI’s integration with [CheckWorkerRights](https://checkworkrights.com.au) correctly, businesses can ensure smooth, compliant hiring processes with
minimal administrative burden for checking worker rights (in Australia).

## PICMI-CheckWorkerRights integration fields

| Field Name                                      | Description                                                                    | Validation/Constraint/Default Value | Source                    |
|-------------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------|---------------------------|
| [First name](#first-name){#first-name}          | First name of the employee                                                     | Mandatory                           | Personal Information      |
| [Last name](#last-name){#last-name}             | Last name of the employee                                                      | Mandatory                           | Personal Information      |
| [Email address](#email-address){#email-address} | Email address of the employee                                                  | Mandatory                           | Personal Information      |
| [ID](#id){#id}                                  | Unique external identifier for the employee                                    |                                     | Integration Configuration |
| [Send email](#send-email){#send-email}          | Prevent issuing the initial request email—reminder emails will still be issued | Default: off                        | Integration Configuration |

<explanation>

## How PICMI works with CheckWorkerRights

**PICMI** integrates with CheckWorkerRights to simplify work eligibility checks as part of your hiring process. Here's how:

## Integration options

- **Manual integration**: For businesses verifying only visa holders, CheckWorkerRights integration in PICMI can be configured to
  require manual checks.
- **Automatic integration**: When verifying both citizens and visa holders, PICMI can automatically send accepted
  applications to CheckWorkerRights for processing.

<prompt>

PICMI recommends automatic integrations when using CheckWorkerRights but [billing](#how-checkworkerrights-CheckWorkerRights-works-around-billing) may affect your decision

</prompt>

## Separation of identity and hiring

PICMI recommends handling proof of identity and work status separately from the application process. This ensures that
hiring decisions and compliance checks remain distinct but aligned.

## Audit and compliance benefits

- Since auditing and identity verification often overlap but serve different purposes, a single, streamlined process
  through CheckWorkerRights simplifies operations.
- Even for citizens, performing a one-time eligibility check through CheckWorkerRights provides significant compliance benefits for a
  minimal fee.

## Best practices for work eligibility management

To ensure robust compliance, best practice recommends:

- **Centralised data**: Storing all eligibility information (for both citizens and visa holders) in one system for easy
  access and audits.
- **Consistent process**: Applying the same process to Australian citizens and visa holders, even though citizens
  typically require only a one-time check.


## Why use CheckWorkerRights for all workers (including citizens)?

- **Simplifies compliance** by using one consistent process.
- **Enhances audit readiness** and reduces risk.
- The cost of adding citizens to the system is minimal, while the compliance improvement is substantial.

## How CheckWorkerRights works around billing

**CheckWorkerRights** offers flexible billing options based on the type of work eligibility checks performed.
Here’s a breakdown of how it works, simplified for easy understanding:

* **Pay-As-You-Go (one-off charge)**: you are charged a one-time fee for a single check (e.g., verifying someone's work
  eligibility during their first application).
* **Subscription (ongoing monitoring)**: for ongoing monitoring of a person's work eligibility (e.g., visa holders with
  expiry dates), a subscription fee applies until they are no longer eligible.

## How it applies to different groups

| **Worker type**     | **First-time check**     | **Ongoing monitoring**  |
|---------------------|--------------------------|-------------------------|
| Australian Citizens | One-time check only      | Not required            |
| Visa Holders        | One-time check initially | Ongoing checks required |


### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
