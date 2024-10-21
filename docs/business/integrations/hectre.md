# Hectre integration overview

## PICMI-Hectre integration fields

### API

| **Field Name**    | **Description**                    | **Validation/Constraint/Default Value**   | **Source**           |
|-------------------|------------------------------------|-------------------------------------------|----------------------|
| **First name**    | Employee's given name              | Mandatory                                 | Personal Information |
| **Last name**     | Employee's surname                 | Mandatory                                 | Personal Information |
| **Employee ID**   | Unique identifier for the employee | Mandatory Derived from MD5 hash of email  | Personal Information |
| **Date of birth** | Employee's date of birth           | yyyy-MM-dd                                | Job                  |
| **Phone number**  | Employee's phone number            | 15 digits with single spaces, no '+' sign | Personal Information |

### CSV

| **Field Name**       | **Description**                                   | **Validation/Constraint/Default Value**                                          | **Source**                |
|----------------------|---------------------------------------------------|----------------------------------------------------------------------------------|---------------------------|
| **First name**       | Employee's given name                             | Mandatory                                                                        | Personal Information      |
| **Last name**        | Employee's family name                            | Mandatory                                                                        | Personal Information      |
| **Employee ID**      | Unique identifier for the employee                |                                                                                  | Integration Configuration |
| **Date of birth**    | Employee's birthdate                              | yyyy-MM-dd                                                                       | Job                       |
| **Account type**     | Type of employee account                          | Staff, Full-Time Staff, Supervisor, Manager, Owner                               | Integration Configuration |
| **Wage rate**        | Remuneration or pay rate                          | Format: \d*[\\d{1,2}] (no currency—assumed NZD, optional cents)                  | Job                       |
| **Contractors**      | Contractor information                            | Must match one of the contractors stored in the Integration Configuration system | Integration Configuration |
| **Email address**    | Employee's email address                          |                                                                                  | Personal Information      |
| **Phone number**     | Employee's phone number                           | 15 digits with single spaces, no '+' sign                                        | Personal Information      |
| **Dashboard access** | Level of access the employee has to the dashboard | None, Regular, Power, Full Default: None                                         | Integration Configuration |
| **Sectors**          | Employee's sectors of operation                   | Pipe delimited Zero to many allowed                                              | Integration Configuration |
| **Deactivate**       | Deactivation status of the employee               | TRUE, FALSE Default: FALSE                                                       | Integration Configuration |

<explanation>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
