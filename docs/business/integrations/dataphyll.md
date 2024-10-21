# Dataphyll integration overview

## PICMI-Dataphyll integration fields

| **Field Name**     | **Description**                    | **Validation/Constraint/Default Value**                                             | **Source**                |
|--------------------|------------------------------------|-------------------------------------------------------------------------------------|---------------------------|
| **Employee ID**    | Unique identifier for the employee | (int) -1 if update, otherwise ID                                                    | Integration Configuration |
| **First name**     | Employee's first name              | Mandatory                                                                           | Personal Information      |
| **Last name**      | Employee's last name               | Mandatory                                                                           | Personal Information      |
| **Preferred name** | Employee's preferred name          |                                                                                     |                           |
| **Wage rate**      | Employee's wage rate               | no currency—assumed NZD, optional cents                                             | Job                       |
| **Email address**  | Employee's email address           | Must have an entry if account type is provided and it is something other than Staff | Personal Information      |
| **Phone number**   | Employee's phone number            | 15 digits with single spaces (no +)                                                 | Personal Information      |

<explanation>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
