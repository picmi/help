# CheckWorkRights integration overview

By setting up PICMI’s integration with [CheckWorkRights](https://checkworkrights.com.au) correctly, businesses can ensure smooth, compliant hiring processes with
minimal administrative burden for checking the right to work and monitoring visa conditions (in Australia).

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

**PICMI** integrates with CheckWorkRights to simplify the right to work  checks as part of your hiring process. Here's how:

## Integration options

- **Manual integration**: For businesses verifying only visa holders, CheckWorkRights integration in PICMI can be configured to
  require manual checks.
- **Automatic integration**: When verifying both citizens and visa holders, PICMI can automatically send accepted
  applications to CheckWorkRights for processing.

<prompt>

PICMI recommends automatic integrations when using CheckWorkRights but [billing](#how-checkworkerrights-CheckWorkRights-works-around-billing) may affect your decision

</prompt>

## Separation of identity and hiring

PICMI recommends handling proof of identity documentation and right to work status separately from the application process. This ensures that
hiring decisions and compliance checks remain distinct but aligned.

## Audit and compliance benefits

- Since auditing and identity verification often overlap but serve different purposes, a single, streamlined process
  through CheckWorkRights simplifies operations.
- Even for citizens, performing a one-time right to work check through CheckWorkRights provides significant compliance benefits for a
  minimal fee.

## Best practices for right to work management

To ensure robust compliance, best practice recommends:

- **Centralised data**: Storing all right to work information (for both citizens and visa holders) in one system for easy
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

* **Pay-As-You-Go (one-off charge)**: you are charged a one-time fee for a single check (e.g., verifying someone's right to work
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

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
