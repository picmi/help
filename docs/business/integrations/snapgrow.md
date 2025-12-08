# SnapGrow integration overview

The SnapGrow integration allows PICMI to generate CSV files formatted for ingestion into the system.

:::prompt
Be extremely careful about importing using the **Deactivate people not in this list** option by default.
This means that anyone NOT in the current list **is deactivated** and this means everyone else already existing is
deactivated and there is no way to reactivate everyone back in one go!
:::

## Integration configuration

| Configuration                                                             | Description                                                              | Values                                                                                  |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [Payroll](#cfg-payroll){#cfg-payroll}                                     |                                                                          | Text                                                                                    |
| [Team](#cfg-team){#cfg-team}                                              |                                                                          | Text                                                                                    |
| [Convert name to simple characters](#cfg-convert-name){#cfg-convert-name} | Used to ensure bank account names are acceptable to banks on integration | Leave name as typed by the job seeker; Send name without macrons and special characters |

## PICMI–SnapGrow integration fields

| Field Name    | Description                           | Validation / Constraints                 | Source                           |
|---------------|---------------------------------------|------------------------------------------|----------------------------------|
| Payroll code  | Unique employee code used by SnapGrow | **Required for updates**; key identifier | Integration Default Settings     |
| First name    | Worker first/given name               | Required                                 | Personal Information (Jobseeker) |
| Last name     | Worker surname                        |                                          | Personal Information (Jobseeker) |
| Email address | Worker email                          |                                          | Personal Information (Jobseeker) |
| Phone         | Worker mobile phone                   |                                          | Personal Information (Jobseeker) |
| Contractor    | Employer entity name                  | Used for SnapGrow matching               | Integration Configuration        |
| Team          | Team name                             | Used for SnapGrow matching               | Integration Configuration        |

## Download Report

* see [reports](download-reports.md)

:::: explanation

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)
  ::::
