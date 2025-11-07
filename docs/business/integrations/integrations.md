# Integrations

Integrations enable PICMI to automatically send employee records to various external systems, minimising manual data
entry and ensuring consistency across all platforms. This helps keep employee information current for payroll, tax, and
compliance purposes.

## Overview

PICMI’s core purpose is to get people from job application to a signed employment contract as quickly as possible by
only collecting and sharing the necessary information. Rather than trying to do everything, PICMI focuses on this core
function and hands off to other systems that specialise in subsequent steps.

### How PICMI Works with other systems

PICMI gathers just enough information to enable a seamless handover to systems that manage right-to-work checks,
payroll, timesheets, and scheduling. While PICMI is the source of truth for job and application-specific details at the
time of recording, downstream systems become the source of truth for ongoing management.

:::: explanation
### Examples

1. **Right-to-Work Checks**: PICMI collects key details from the jobseeker and may trigger a request to a system that
   verifies their right to work (e.g., an immigration check system). Once completed, that system holds the definitive
   status of their work eligibility.

2. **Payroll**: PICMI collects the required details for generating the contract (e.g., pay rate, start date, bank/tax
   info). After the contract is signed, PICMI sends this data to the payroll system, which becomes the source of truth
   for pay runs, tax calculations, and bank deposits.

3. **Travel Scheduling**: PICMI collects the required details necessary for the next system (e.g., for ridesharing they
   express interest in participating and agree to voluntary deductions). After the contract is signed, PICMI sends this
   data to that system, which can then manage the dynamic nature of travel.
::::

By focusing on fast hiring while allowing specialised systems to take over for post-hire processes, businesses get the
best of both worlds—speed and accuracy in hiring, plus reliable downstream management.

::: prompt
There are two main ways:

* directly via an API from [integration events](integration-events.md)
* import via CSV from [download reports](download-reports.md)
:::

:::: explanation
### How It Works

1. **Employee Data in PICMI**: When an application is agreed, the employee’s information (such as personal details or
   contract terms) is stored in PICMI. This data is then prepared for transfer by mapping it to the relevant fields in
   the external system.

2. **Automated or Manual Transfer**: PICMI can send the data directly to the external system. This transfer can be done
   manually each time or set up to occur automatically whenever an application is approved.

3. **External System Receives the Data**: The external system receives the data as employee information and updates its
   records accordingly, making it ready for payroll processing and other administrative tasks.
::::

## Available integrations

| **System**                                               | **Type**          | **API** | **CSV** | **PDF**    |
|----------------------------------------------------------|-------------------|:-------:|:-------:|------------|
| [AgriSmart](agrismart){#agrismart}                       | All in one        |         |    ✓    |            |
| [CheckWorkRights](check-work-rights){#check-work-rights} | Labour Management |    ✓    |         |            |
| [Crystal](crystal){#crystal}                             | Payroll           |         |    ✓    |            |
| [Dataphyll](dataphyll){#dataphyll}                       | Timesheets        |    ✓    |         |            |
| [EmploymentHero](employment-hero){#employment-hero}      | Payroll           |    ✓    |         |            |
| [Hectre](hectre){#hectre}                                | Labour Management |    ✓    |    ✓    |            |
| Immigration NZ{#immigration-nz}                          | Visa              |         |         | contact us |
| [iPayroll](ipayroll){#ipayroll}                          | Payroll           |    ✓    |         |            |
| [MYOB IMS](myob-ims){#myob-ims}                          | Payroll           |         |    ✓    |            |
| [PackManager](packmanager){#packmanager}                 | Labour Management |         |    ✓    |            |
| [PayHero](payhero){#payhero}                             | Payroll           |    ✓    |         |            |
| [PaySauce](paysauce){#paysauce}                          | Payroll           |    ✓    |         |            |
| [Smartly](smartly){#smartly}                             | Payroll           |         |    ✓    |            |
| [SmoothPay](smooth-pay){#smoothpay}                      | Payroll           |    ✓    |         |            |
| [Tātou](tatou){#tatou}                                   | Onsite Management |    ✓    |         |            |
| [Tickbox](tickbox){#tickbox}                             | Training          |    ✓    |         |            |
| [Xero](xero){#xero}                                      | Finance           |    ✓    |         |            |


::: prompt
**API:** stands for application programming interface and means that data is sent directly between PICMI and the other
system. This is a machine-to-machine approach through [integration events](integration-events.md)

**CSV:** stands for comma-separated values type of file and means that data is sent indirectly such that records are
downloaded to a file and then uploaded into the other system. Access these
through [download reports](download-reports.md)
:::

## Steps for Using Integrations with PICMI

All integrations follow a similar setup process and you can add multiple integrations.

::: prompt
Each only differ by configuration

**Authorisation** (how the connection is made)

**Data Sent** (type, amount, and default values of data)
:::

<p></p>

:::: explanation
### General setup process

1. **Set Up Integration for Your Organisation**:
    - Activate the specific integration in PICMI.
    - Authorise PICMI to connect to your integration account (this may involve logging in or using an API key).
    - Update any configuration values needed for the integration.
2. **Add Integration to a Job**:
    - Ensure the employee data in PICMI matches the format required by the integration. PICMI handles the data mapping
      automatically, but you can review it during setup.
3. **Confirmation**:
    - Review an example of an accepted application and verify that the data will be sent correctly.
4. **Set Up Automation** (Optional):
    - You can choose to automate data transfer using an API.
5. **Review Data Sent**:
    - Check the events in PICMI to see when and how the data was sent.
6. **Verify in the Integration**:
    - Log into the other system and confirm that the data from PICMI was received correctly.
::::

## Different Ways to Authorise PICMI to Transfer Data

Authorisation is essential for PICMI to securely and reliably connect to other systems, such as payroll or compliance
platforms, in order to transfer employee data. This authorisation ensures that PICMI has permission to access and send
data to these systems on your behalf. Without proper authorisation, data transfers cannot occur due to security
restrictions put in place by most systems to protect sensitive information, such as personal details or payroll data.

::: prompt
**Upload**: Login to the other system and manually upload data.

**API token**: Login to the other system and go to a page in the system that will generate a long code (API token) and
then copy and paste it into PICMI to authorise the connection.

**OAuth (One-click Authorisation)**: Follow a link provided by PICMI but takes you to another page, log in (if needed),
and authorise PICMI to connect automatically. In the background, PICMI gets the access key and stores it for you against
your account to authorise your connection
:::

## Troubleshooting

If you notice any discrepancies between PICMI and an an integration:

- **Check Events**: Review
  the [data transfer events](integration-events#show-events-detailed-view-result-of-attempt-to-send-data) in PICMI to
  confirm the data has been sent.
- **Data Mapping**: Ensure the employee fields in PICMI match the required fields.
