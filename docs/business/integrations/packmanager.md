# PackManager integration overview

## PackManager: Integration configuration

| Configuration                                                                                        | Description                                                              | Values                                                                                  |
|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [Supervisor](#cfg-packmanager-supervisor){#cfg-packmanager-supervisor}                               |                                                                          | Text (required)                                                                         |
| [Employment agreement](#cfg-packmanager-employment-agreement){#cfg-packmanager-employment-agreement} | Employment agreement items from PackManager                              | Text (optional)                                                                         |
| [Convert name to simple characters](#cfg-packmanager-convert-name){#cfg-packmanager-convert-name}    | Used to ensure bank account names are acceptable to banks on integration | Leave name as typed by the job seeker; Send name without macrons and special characters |

## PICMI-PackManager integration fields

| **Field Name**                                | **Description**                              | **Validation/Constraint/Default Value**                                             | **Source**                |
|-----------------------------------------------|----------------------------------------------|-------------------------------------------------------------------------------------|---------------------------|
| [First name](#first-name)                     | Employee's first name                        | Mandatory (special characters are optionally stripped if set in configuration)      | Personal Information      |
| [Last name](#last-name)                       | Employee's last name                         | Mandatory (special characters are optionally stripped if set in configuration)      | Personal Information      |
| [Min pay rate](#min-pay-rate)                 | Minimum pay rate for the employee            | No currency—assumed NZD, optional cents                                             | Integration Configuration |
| [Pay rate](#pay-rate)                         | Employee's wage rate                         | No currency—assumed NZD, optional cents                                             | Job                       |
| [Payroll ID](#payroll-id)                     | Unique identifier for payroll purposes       | Must have an entry if account type is provided and it is something other than Staff | Integration Configuration |
| [Employee barcode](#employee-barcode)         | Unique barcode assigned to the employee      | 15 digits with single spaces (no +)                                                 | Integration Configuration |
| [Supervisor](#supervisor)                     | Employee's supervisor or manager             |                                                                                     | Integration Configuration |
| [Default department](#default-department)     | Default department assigned to the employee  |                                                                                     | Job                       |
| [Employment company](#employment-company)     | Name of the company employing the individual |                                                                                     | Integration Configuration |
| [Employment agreement](#employment-agreement) | Name of employment agreement in PackManager  |                                                                                     | Integration Configuration |

## Download Report

* see [reports](download-reports.md)

:::: explanation

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)
  ::::
