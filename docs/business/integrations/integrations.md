# Integrations

Integration enable PICMI to automatically send employee records to various external systems, minimising manual data
entry and ensuring consistency across all platforms. This helps keep employee information current for payroll, tax, and
compliance purposes.

<box>

### How It Works

1. **Employee Data in PICMI**: When an application is agreed, the employee’s information (such as personal details or
   contract terms) is stored in PICMI. This data is then prepared for transfer by mapping it to the relevant fields in
   the external system.

2. **Automated or Manual Transfer**: PICMI can send the data directly to the external system. This transfer can be done
   manually each time or set up to occur automatically whenever an application is approved.

3. **External System Receives the Data**: The external system receives the data as employee information and updates its
   records accordingly, making it ready for payroll processing and other administrative tasks.

</box>

## Available integrations

| **System**                               | **Type**          | **API** | **CSV** | **PDF**    |
|------------------------------------------|-------------------|---------|---------|------------|
| [AgriSmart](agrismart)                   | All in one        |         | ✓       |            |
| [CheckWorkerRights](check-worker-rights) | Labour Management | ✓       |         |            |
| [Crystal](crystal)                       | Payroll           |         | ✓       |            |
| [Dataphyll](dataphyll)                   | Timesheets        | ✓       |         |            |
| [EmploymentHero](employment-hero)        | Payroll           | ✓       |         |            |
| [Hectre](hectre)                         | Labour Management | ✓       | ✓       |            |
| Immigration NZ                           | Visa              |         |         | contact us |
| [iPayroll](ipayroll)                     | Payroll           | ✓       |         |            |
| [MYOB IMS](myob-ims)                     | Payroll           |         | ✓       |            |
| [PackManager](packmanager)               | Labour Management |         | ✓       |            |
| [PayHero](payhero)                       | Payroll           | ✓       |         |            |
| [PaySauce](paysauce)                     | Payroll           |         | ✓       |            |
| [Smartly](smartly)                       | Payroll           |         | ✓       |            |
| [SmoothPay](smooth-pay)                  | Payroll           | ✓       |         |            |
| [Tātou](tatou)                           | Onsite Management | ✓       |         |            |
| [Xero](xero)                             | Finance           | ✓       |         |            |


<prompt>

**API:** stands for application programming interface and means that data is sent directly between PICMI and the other
system. This is a machine-to-machine approach

**CSV:** stands for comma-separated values type of file and means that data is sent indirectly such that records are
downloaded to a file and then uploaded into the other system. PICMI call

</prompt>

## Steps for Using Integrations with PICMI

All integrations follow a similar setup process and you can add multiple integrations.

<prompt>

Each only differ by configuration

**Authorisation** (how the connection is made)

**Data Sent** (type, amount, and default values of data)

</prompt>

<p></p>

<box>

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

</box>

## Different Ways to Authorise PICMI to Transfer Data

Authorisation is essential for PICMI to securely and reliably connect to other systems, such as payroll or compliance
platforms, in order to transfer employee data. This authorisation ensures that PICMI has permission to access and send
data to these systems on your behalf. Without proper authorisation, data transfers cannot occur due to security
restrictions put in place by most systems to protect sensitive information, such as personal details or payroll data.

<prompt>

**Upload**: Login to the other system and manually upload data.

**API token**: Login to the other system and go to a page in the system that will generate a long code (API token) and
then copy and paste it into PICMI to authorise the connection.

**OAuth (One-click Authorisation)**: Follow a link provided by PICMI but takes you to another page, log in (if needed),
and authorise PICMI to connect automatically. In the background, PICMI gets the access key and stores it for you against
your account to authorise your connection

</prompt>

## Troubleshooting

If you notice any discrepancies between PICMI and Xero:

- **Check Events**: Review
  the [data transfer events](integration-events#show-events-detailed-view-result-of-attempt-to-send-data) in PICMI to
  confirm the data has been sent.
- **Data Mapping**: Ensure the employee fields in PICMI match the required fields.
