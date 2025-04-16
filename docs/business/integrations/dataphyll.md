# Dataphyll integration overview

For Dataphyll customers who want to use the integration with PICMI, please note to see employees created through the
integration, users must be working in the Dataphyll Business App.

::: prompt
**Important:** Businesses using the Worker App will not benefit from this integration. Here’s why:

* No registration link will be sent to workers for their Worker App.
* Any registration created by a worker in the Worker App will not be connected to employees created via the PICMI
  integration.
:::

## PICMI-Dataphyll integration fields

| **Field Name**                                     | **Description**                    | **Validation/Constraint/Default Value**                                             | **Source**                |
|----------------------------------------------------|------------------------------------|-------------------------------------------------------------------------------------|---------------------------|
| [Employee ID](#employee-id){#employee-id}          | Unique identifier for the employee | (int) -1 if update, otherwise ID                                                    | Integration Configuration |
| [First name](#first-name){#first-name}             | Employee's first name              | Mandatory                                                                           | Personal Information      |
| [Last name](#last-name){#last-name}                | Employee's last name               | Mandatory                                                                           | Personal Information      |
| [Preferred name](#preferred-name){#preferred-name} | Employee's preferred name          |                                                                                     |                           |
| [Wage rate](#wage-rate){#wage-rate}                | Employee's wage rate               | no currency—assumed NZD, optional cents                                             | Job                       |
| [Email address](#email-address){#email-address}    | Employee's email address           | Must have an entry if account type is provided and it is something other than Staff | Personal Information      |
| [Phone number](#phone-number){#phone-number}       | Employee's phone number            | 15 digits with single spaces (no +)                                                 | Personal Information      |

<explanation>

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
