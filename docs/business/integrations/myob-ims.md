# Integration Configuration integration overview

The Employee Import Utility from MYOB will only read information from data files provided in a CSV (
comma-separated-values) format. The format may be either in a quotation delimited format or required quotes may be
inserted during the import. PICMI generates the report files programmatically using the "Titled Columns" without double
quotes including the "Required" fields and other user fields. All data is validated prior to export to any known rules
as listed below.

<explanation>

## Special considerations: managing occupation and costing codes in PICMI exports

PICMI allows you to **export data as a CSV file**, which you can **edit after downloading**. Each export is set of applications which
can have multiple types of jobs. 

::: prompt
While each job can have a specific integration configuration, it is not possible to download all jobs
at once with different integration configurations. Therefore, when managing multiple occupation and costing codes we still recommend only having
one integration configuration and make changes immediately prior to import. 
:::

To make the process as smooth as possible, follow these steps:

### Understanding How Integration Configurations Work

1. **Default values**
    - PICMI sets **default values** in the integration configuration (e.g., occupation and costing code).
    - These values are automatically included in the CSV when exported.
    - You **can change these values after exporting the CSV**.

2. **One occupation & costing code per integration**
    - Each **integration configuration** can only have **one occupation and one costing code**.
    - If you have jobs with different occupations or costing codes, **you may need multiple integration configurations
      **.

3. **How to export the right data**
    - You **download the CSV per integration configuration**.
    - To get the correct data, **filter applications to only include those linked to the job(s) with that integration
      configuration**.

4. **Managing multiple configurations**
    - If you have **many different occupations and costing codes**, you will need:
        - **More setup** in PICMI to create the required integration configurations.
        - **Careful selection** of the correct integration configuration **before each CSV download**.

### PICMI’s recommendation to use single integration configuration where possible

To **avoid extra setup** and make downloads simpler:

- Use a **single integration configuration** where possible.
- **After downloading the CSV, manually update occupation and costing codes** as needed.
- This **reduces complexity** while still allowing you to customise the data.

Following this approach will make managing occupations and costing codes in PICMI **easier and more efficient**.

</explanation>

## Integration configuration

| Configuration                                                                | Description                                        | Values                                          |
|------------------------------------------------------------------------------|----------------------------------------------------|-------------------------------------------------|
| [Occupation](#cfg-occupation){#cfg-occupation}                               | Employee's occupation                              | Free text should correspond to MYOB IMS         |
| [Costing Code](#cfg-costing-code){#cfg-costing-code}                         | Cost allocation code                               | Free text should correspond to MYOB IMS         |
| [Pay Point](#cfg-pay-point){#cfg-pay-point}                                  | Pay point assigned to employee                     | Free text should correspond to MYOB IMS         |
| [Bank Reference](#cfg-bank-reference){#cfg-bank-reference}                   | Reference for bank transactions                    | Free text                                       |
| [Bank Particulars](#cfg-bank-particulars){#cfg-bank-particulars}             | Additional bank transaction details                | Free text                                       |
| [Print Payslip](#cfg-print-payslip){#cfg-print-payslip}                      | Whether to print payslip                           | True / False                                    |
| [Email Payslip](#cfg-email-payslip){#cfg-email-payslip}                      | Whether to email payslip                           | True / False                                    |
| [Employer Subsidy Contribution Tax Rate](#cfg-subsidy-tax){#cfg-subsidy-tax} | ESCT tax rate on employer subsidy contribution     | 10.5%, 17.5%, 30%, 33%, 39%                     |
| [Employer Subsidy Rate](#cfg-subsidy-rate){#cfg-subsidy-rate}                | Rate of employer subsidy contribution              | Percentage number (e.g., 3)                     |
| [KiwiSaver GL Account](#cfg-kiwisaver-gl){#cfg-kiwisaver-gl}                 | General Ledger account for KiwiSaver contributions | Free text                                       |
| [Hours Worked Per Day](#cfg-hours-day){#cfg-hours-day}                       | Standard hours worked per day                      | Numeric up to one decimal place (e.g., 8, 2.5)  |
| [Hours Worked Per Period](#cfg-hours-period){#cfg-hours-period}              | Total hours worked in a pay period                 | Numeric up to one decimal place (e.g., 7.5, 40) |

## PICMI-Integration Configuration integration fields

| **Field Name**                                                                                  | **Description**                                    | **Validation/Constraint/Default Value**                                                    | **Source**                |
|-------------------------------------------------------------------------------------------------|----------------------------------------------------|--------------------------------------------------------------------------------------------|---------------------------|
| [Employee number](#employee-number){#employee-number}                                           | Unique identifier for the employee                 |                                                                                            | Integration Configuration |
| [First names](#first-names){#first-names}                                                       | Employee's given names                             |                                                                                            | Personal Information      |
| [Surname](#surname){#surname}                                                                   | Employee's family name                             |                                                                                            | Personal Information      |
| [Birth date](#birth-date){#birth-date}                                                          | Employee's birthdate                               | Format: dd/MM/yyyy                                                                         | Personal Information      |
| [Gender](#gender){#gender}                                                                      | Employee's gender                                  | M, F, A. Default: A. Mandatory                                                             | Personal Information      |
| [Address line 1](#address-line-1){#address-line-1}                                              | Employee's postal address (Street)                 | 1. No address → Empty 2. Not supplied → No address supplied 3. Full address without commas | Personal Information      |
| [Address line 2](#address-line-2){#address-line-2}                                              | Employee's postal address (Region)                 |                                                                                            | Personal Information      |
| [Address line 3](#address-line-3){#address-line-3}                                              | Employee's postal address (Locality)               |                                                                                            | Personal Information      |
| [Address line 4](#address-line-4){#address-line-4}                                              | Employee's postal address (Postal Code)            |                                                                                            | Personal Information      |
| [Home phone](#home-phone){#home-phone}                                                          | Employee's home phone number                       | 13 characters only                                                                         | Personal Information      |
| [Occupation](#occupation){#occupation}                                                          | Employee's occupation                              | Mandatory                                                                                  | Integration Configuration |
| [Pay point](#pay-point){#pay-point}                                                             | Designated pay point for the employee              | Mandatory                                                                                  | Integration Configuration |
| [Costing code](#costing-code){#costing-code}                                                    | Employee's costing code                            | Mandatory                                                                                  | Integration Configuration |
| [Apprentice](#apprentice){#apprentice}                                                          | Apprentice status                                  | Y, N, T, F. Default: N. Mandatory                                                          |                           |
| [Start date](#start-date){#start-date}                                                          | Employee's start date                              | Format: dd/MM/yyyy. Mandatory                                                              | Job                       |
| [Employee type](#employee-type){#employee-type}                                                 | Type of employment                                 | S, W. Default: W. Mandatory                                                                |                           |
| [Pay frequency](#pay-frequency){#pay-frequency}                                                 | Frequency of pay                                   | W, F, H, Q, M. Default: W. Mandatory                                                       |                           |
| [Salary](#salary){#salary}                                                                      | Employee's salary                                  | [Blank], Money. Default: [Blank]. Mandatory                                                |                           |
| [Hourly pay rate 1](#hourly-pay-rate-1){#hourly-pay-rate-1}                                     | Employee's primary hourly pay rate                 |                                                                                            | Job                       |
| [Tax code](#tax-code){#tax-code}                                                                | Employee's tax code                                |                                                                                            | Questions                 |
| [IRD number](#ird-number){#ird-number}                                                          | Employee's tax identification number               | Format: 000-000-000 (digits only). Mandatory                                               | Questions                 |
| [Payment method](#payment-method){#payment-method}                                              | Method of payment                                  | B, Q, C. Default: B. Mandatory                                                             | Integration Configuration |
| [Bank account](#bank-account){#bank-account}                                                    | Employee's bank account number                     | Format: 00-0000-0000000-00 (digits only)                                                   | Questions                 |
| [Bank reference](#bank-reference){#bank-reference}                                              | Reference used for bank transactions               |                                                                                            | Integration Configuration |
| [Bank particulars](#bank-particulars){#bank-particulars}                                        | Particulars for bank transactions                  |                                                                                            | Integration Configuration |
| [Hours worked per day](#hours-worked-per-day){#hours-worked-per-day}                            | Hours worked by the employee per day               | Default: 8. Mandatory                                                                      |                           |
| [Hours worked per period](#hours-worked-per-period){#hours-worked-per-period}                   | Hours worked by the employee per pay period        | Default: 5. Mandatory                                                                      |                           |
| [Annual leave type](#annual-leave-type){#annual-leave-type}                                     | Type of annual leave                               | F, P, C. Default: C. Mandatory                                                             |                           |
| [Annual leave units](#annual-leave-units){#annual-leave-units}                                  | Units for annual leave                             | D, H. Default: H. Mandatory                                                                |                           |
| [Email address](#email-address){#email-address}                                                 | Employee's email address                           |                                                                                            |                           |
| [Email payslip](#email-payslip){#email-payslip}                                                 | Whether the employee receives payslip via email    | Y, N, T, F. Default: Y. Mandatory                                                          | Integration Configuration |
| [Print payslip](#print-payslip){#print-payslip}                                                 | Whether the payslip is printed                     | Y, N, T, F                                                                                 | Integration Configuration |
| [GSCM](#gscm){#gscm}                                                                            | GSCM flag                                          | Y, N, T, F. Default: N. Mandatory                                                          |                           |
| [Use average daily pay](#use-average-daily-pay){#use-average-daily-pay}                         | Use of average daily pay method                    | Y, N, T, F. Default: Y. Mandatory                                                          |                           |
| [Time in lieu units](#time-in-lieu-units){#time-in-lieu-units}                                  | Units for time in lieu                             | D, H. Default: D. Mandatory                                                                |                           |
| [KiwiSaver entry status](#kiwisaver-entry-status){#kiwisaver-entry-status}                      | Employee's KiwiSaver entry status                  | N, A, O, E. Mandatory (Default to N if Working Holiday Visa is detected                    | Questions                 |
| [KiwiSaver opt in date](#kiwisaver-opt-in-date){#kiwisaver-opt-in-date}                         | Date the employee opted into KiwiSaver             |                                                                                            | Questions                 |
| [KiwiSaver employee active](#kiwisaver-employee-active){#kiwisaver-employee-active}             | Whether the employee is actively contributing      |                                                                                            | Questions                 |
| [KiwiSaver employee percentage](#kiwisaver-employee-percentage){#kiwisaver-employee-percentage} | Employee's KiwiSaver contribution percentage       |                                                                                            | Integration Configuration |
| [KiwiSaver ESCT tax rate code](#kiwisaver-esct-tax-rate-code){#kiwisaver-esct-tax-rate-code}    | KiwiSaver employee's ESCT tax rate code            |                                                                                            | Integration Configuration |
| [KiwiSaver contrib GL account](#kiwisaver-contrib-gl-account){#kiwisaver-contrib-gl-account}    | General ledger account for KiwiSaver contributions |                                                                                            | Integration Configuration |
| [KiwiSaver opt out](#kiwisaver-opt-out){#kiwisaver-opt-out}                                     | Whether the employee opted out of KiwiSaver        |                                                                                            | Questions                 |
| [KiwiSaver opt out date](#kiwisaver-opt-out-date){#kiwisaver-opt-out-date}                      | Date the employee opted out of KiwiSaver           |                                                                                            | Questions                 |
| [Sick leave units](#sick-leave-units){#sick-leave-units}                                        | Units for sick leave                               | D, H. Default: D                                                                           |                           |
| [SL full entitlement](#sl-full-entitlement){#sl-full-entitlement}                               | Full sick leave entitlement                        | Default: 10                                                                                |                           |
| [SL next entitlement](#sl-next-entitlement){#sl-next-entitlement}                               | Next sick leave entitlement                        | Default: 10                                                                                |                           |
| [SL maximum](#sl-maximum){#sl-maximum}                                                          | Maximum sick leave entitlement                     | Default: 20                                                                                |                           |
| [FVL recording method](#fvl-recording-method){#fvl-recording-method}                            | Method for recording FVL                           | D, H. Default: D                                                                           |                           |
| [FVL full entitlement](#fvl-full-entitlement){#fvl-full-entitlement}                            | Full FVL entitlement                               | Default: 10                                                                                |                           |
| [FVL next entitlement](#fvl-next-entitlement){#fvl-next-entitlement}                            | Next FVL entitlement                               | Default: 10                                                                                |                           |
| [End](#end){#end}                                                                               | End flag or status                                 | Default: E. Mandatory                                                                      |                           |

## Download Report

* see [reports](download-reports.md)

<explanation>

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

</explanation>
