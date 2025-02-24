# Tickbox integration overview

By setting up PICMI’s integration with Tickbox correctly, businesses can ensure smooth, compliant hiring processes with
minimal administrative burden for a job inductions.

<prompt>

Each job application in PICMI can be matched to a job type in Tickbox.

</prompt>

## Integration configuration

| Configuration                             | Description                                  |
|-------------------------------------------|----------------------------------------------|
| [Token](#cfg-first-name){#cfg-first-name} | Token provided by Tickbox for authentication |
| [Tenant](#cfg-last-name){#lcfg-ast-name}  | The  name (ie subdomain) of your instance    |
| [Job](#cfg-job){#cfg-job}                 | Chosen from setup jobs in Tickbox            |

## PICMI-Tickbox integration fields

| Field Name                                      | Description                                                          | Validation/Constraint/Default Value                           | Source                    |
|-------------------------------------------------|----------------------------------------------------------------------|---------------------------------------------------------------|---------------------------|
| [First name](#first-name){#first-name}          | First names of the employee                                          | Mandatory (if no email)—will not work with unicode characters | Personal Information      |
| [Last name](#last-name){#last-name}             | Last name of the employee                                            | Mandatory (if no email)—will not work with unicode characters | Personal Information      |
| [Email address](#email-address){#email-address} | Email address of the employee (invitation is send out automatically) |                                                               | Personal Information      |
| [Phone](#phone){#phone}                         | Only receives NZ domestic mobile phones (sent as a national number)  |                                                               | Personal Information      |
| [Job](#job){#job}                               | Chosen from setup jobs in Tickbox                                    | Default: none                                                 | Integration Configuration |

<explanation>

## How PICMI works with Tickbox

**PICMI** integrates with Tickbox to simplify the training of employees as part of your onboarding process. Here's how:

## Integration options

- **Manual integration**: For businesses that don't require everyone to be onboarded (such as a trial group), Tickbox
  integration in PICMI can be configured to require manual notifications.
- **Automatic integration**: PICMI can automatically send on accepted applications for Tickbox to start the process of
  contacting workers.

<prompt>

PICMI recommends automatic integrations when using Tickbox

</prompt>

## Separation of identity and hiring

PICMI recommends onboarding/training separately from the application process of hiring. This ensures that hiring
decisions and compliance remain distinct but aligned.

## Audit and compliance benefits

- Since auditing compliance and onboarding often overlap but serve different purposes, a single, streamlined process
  through Tickbox simplifies operations.

## Best practices for onboard training

To ensure robust compliance, best practice recommends:

- **Centralised data**: Storing all training tracking information in one system for easy access and audits.
- **Consistent process**: Applying the same process to all staff to ensure consistency.

## Why use Tickbox for all workers (including citizens)?

- **Simplifies compliance** by using one consistent process.
- **Enhances audit readiness** and reduces risk.

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
