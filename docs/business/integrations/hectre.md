# Hectre integration overview

## API Hectre: Integration configuration

| Configuration                                             | Description        | Values          |
|-----------------------------------------------------------|--------------------|-----------------|
| [Orchard](#cfg-hectre-orchard-id){#cfg-hectre-orchard-id} | Id for the orchard | Text (optional) |

## API PICMI-Hectre integration fields

| **Field Name**                                  | **Description**                    | **Validation/Constraint/Default Value**   | **Source**           |
|-------------------------------------------------|------------------------------------|-------------------------------------------|----------------------|
| [First name](#first-name){#first-name}          | Employee's given name              | Mandatory                                 | Personal Information |
| [Last name](#last-name){#last-name}             | Employee's surname                 | Mandatory                                 | Personal Information |
| [Employee ID](#employee-id){#employee-id}       | Unique identifier for the employee | Mandatory Derived from MD5 hash of email  | Personal Information |
| [Date of birth](#date-of-birth){#date-of-birth} | Employee's date of birth           | yyyy-MM-dd                                | Job                  |
| [Phone number](#phone-number){#phone-number}    | Employee's phone number            | 15 digits with single spaces, no '+' sign | Personal Information |

## CSV Hectre: Integration configuration

| Configuration                                                                  | Description                                                                                                                  | Values                        |
|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| [Account Type](#cfg-hectre-account-type){#cfg-hectre-account-type}             |                                                                                                                              | Hectre account types          |
| [Dashboard Access](#cfg-hectre-dashboard-access){#cfg-hectre-dashboard-access} |                                                                                                                              | Hectre dashboard access types |
| [Deactivate](#cfg-hectre-deactivate){#cfg-hectre-deactivate}                   |                                                                                                                              | Hectre deactivate types       |
| [Sectors](#cfg-hectre-sectors){#cfg-hectre-sectors}                            | If included, sector names must match those listed in Hectre. For multiple sectors, separate by the pipe character: "Cherries | Pears".                       | Text (optional, pipe-delimited list)  |
| [Contractors](#cfg-hectre-contractors){#cfg-hectre-contractors}                | If included, must match one of the Contractors stored in the Hectre system.                                                  | Text (optional, single value) |

## CSV PICMI-Hectre integration fields

| **Field Name**                                           | **Description**                                   | **Validation/Constraint/Default Value**                                                                                                                                                                | **Source**                |
|----------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| [First name](#first-name){#first-name}                   | Employee's given name                             | Mandatory                                                                                                                                                                                              | Personal Information      |
| [Last name](#last-name){#last-name}                      | Employee's family name                            | Mandatory                                                                                                                                                                                              | Personal Information      |
| [Employee ID](#employee-id){#employee-id}                | Unique identifier for the employee                |                                                                                                                                                                                                        | Integration Configuration |
| [Date of birth](#date-of-birth){#date-of-birth}          | Employee's birthdate                              | yyyy-MM-dd                                                                                                                                                                                             | Job                       |
| [Account type](#account-type){#account-type}             | Type of employee account                          | Staff, Full-Time Staff, Supervisor, Manager, Owner                                                                                                                                                     | Integration Configuration |
| [Wage rate](#wage-rate){#wage-rate}                      | Remuneration or pay rate                          | Format: \d*[\\d{1,2}] (no currency—assumed NZD, optional cents)                                                                                                                                        | Job                       |
| [Contractors](#contractors){#contractors}                | Contractor information                            | Must match one of the contractors stored in the Integration Configuration system                                                                                                                       | Integration Configuration |
| [Email address](#email-address){#email-address}          | Employee's email address                          |                                                                                                                                                                                                        | Personal Information      |
| [Phone number](#phone-number){#phone-number}             | Employee's phone number                           | 15 digits with single spaces, no '+' sign                                                                                                                                                              | Personal Information      |
| [Dashboard access](#dashboard-access){#dashboard-access} | Level of access the employee has to the dashboard | None, Regular, Power, Full Default: None                                                                                                                                                               | Integration Configuration |
| [Sectors](#sectors){#sectors}                            | Employee's sectors of operation                   | Must match those listed in your Hectre account. If there are multiple sectors for a staff member, then the Sectors must be separated by the character '' &#124; ". For example, "Cherries&#124;Pears". | Integration Configuration |
| [Deactivate](#deactivate){#deactivate}                   | Deactivation status of the employee               | TRUE, FALSE Default: FALSE                                                                                                                                                                             | Integration Configuration |
| [Government ID](#govt){#govt}                            | Government Identifier                             | Empty                                                                                                                                                                                                  | Integration Configuration |

## Download Report

* see [reports](download-reports.md)

:::: explanation

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)
  ::::
