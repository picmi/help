# Tātou integration overview

## PICMI-Tātou integration fields

| **Field Name**       | **Description**                                               | **Validation/Constraint/Default Value** | **Source**                |
|----------------------|---------------------------------------------------------------|-----------------------------------------|---------------------------|
| **ID**               | Unique identifier (IRD number) for tax purposes.              |                                         | Integration Configuration |
| **First names**      | Given name(s) of the individual.                              |                                         | Personal Information      |
| **Surname**          | Family name of the individual.                                |                                         | Personal Information      |
| **Email**            | Email address of the individual.                              |                                         | Personal Information      |
| **Birthdate**        | Date of birth of the individual.                              |                                         | Personal Information      |
| **Nationality**      | Nationality of the individual.                                |                                         | Personal Information      |
| **Next hourly rate** | The remuneration rate for the individual.                     |                                         | Job                       |
| **Effective from**   | Start date for the next hourly rate to take effect.           | Plus one day                            | Job                       |
| **Job title**        | Title of the individual’s position.                           |                                         | Job                       |
| **Start date**       | Start date of employment or contract.                         |                                         | Job                       |
| **Recruitment type** | Type of recruitment for the individual.                       | Default (NZ Employee)                   | Integration Configuration |
| **Contract type**    | Type of contract under which the individual is employed.      |                                         | Integration Configuration |
| **Primary role**     | Primary role of the individual in the organisation.           |                                         | Integration Configuration |
| **Status**           | Employment status of the individual (e.g., active, inactive). | Inactive                                | Integration Configuration |

<explanation>

### General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
