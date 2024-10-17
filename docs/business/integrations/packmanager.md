# PackManager integration overview

## PICMI-PackManager integration fields

| **Field Name**         | **Description**                              | **Validation/Constraint/Default Value**                                             | **Source**                |
|------------------------|----------------------------------------------|-------------------------------------------------------------------------------------|---------------------------|
| **First name**         | Employee's first name                        | Mandatory                                                                           | Personal Information      |
| **Last name**          | Employee's last name                         | Mandatory                                                                           | Personal Information      |
| **Min pay rate**       | Minimum pay rate for the employee            | No currency—assumed NZD, optional cents                                             | Integration Configuration |
| **Pay rate**           | Employee's wage rate                         | No currency—assumed NZD, optional cents                                             | Job                       |
| **Payroll ID**         | Unique identifier for payroll purposes       | Must have an entry if account type is provided and it is something other than Staff | Integration Configuration |
| **Employee barcode**   | Unique barcode assigned to the employee      | 15 digits with single spaces (no +)                                                 | Integration Configuration |
| **Supervisor**         | Employee's supervisor or manager             |                                                                                     | Integration Configuration |
| **Default department** | Default department assigned to the employee  |                                                                                     | Job                       |
| **Employment company** | Name of the company employing the individual |                                                                                     | Integration Configuration |

<box>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</box>
