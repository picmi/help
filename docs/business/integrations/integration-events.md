# Check integration status of person record

When data is shared with other systems, this is generally called an "integration". Each integration has an "integration
provider"—these are the payroll, HRIS and on-site systems. Each time data is shared this is called an "integration
event". Inside each event are data is "record" made up of "fields" which are the values that are shared. Each field will
have different data and there are rules around that data that may mean it succeeds or fails.

### General integration rules

* only accepted applications can be integrated
* only send data (which means make a new record) in the integration if no record exists
* do not update existing records

<div class="ui-instructions">

## Show integration providers that are already setup

1. Go to **Jobs** page
2. Locate the **job** row <span class="mdi mdi-checkbox-marked-outline"></span>
3. Click &vellip; (vertical dots) to open the menu
4. Select **Edit**
5. In the Edit pane, **Integrations** section, select **Sync Settings**
6. Locate the **Integration Providers** list and confirm you provider is in the list

To add an integration, please reach out to our support team via
the <a href="https://www.picmi.io/contact-us" target="_blank">Contact Us</a> or send an email
to <a href="mailto:hello+support@picmi.com" target="_blank">hello+support@picmi.io</a>.

</div>

<div class="ui-instructions">

## Show fields to be sent

1. Go to **People** page
2. Locate the **application** row <span class="mdi mdi-checkbox-marked-outline"></span>
3. Click &vellip; (vertical dots) to open the menu
4. Select **Integrations**
5. Choose which integration to show fields
    * Select **integration name**
    * Select **Employee (show)**
    * Click **Submit**
6. In the **Events** section, locate the person record by **date** and **Show** and **integration name**
7. Locate the **field by name** and check its **value**

</div>


<div class="ui-instructions">

## Show events (result of attempt to send data)

1. Go to **People** page
2. Locate the **application** row <span class="mdi mdi-checkbox-marked-outline"></span>
3. Click &vellip; (vertical dots) to open the menu
4. Select **Integrations**
5. In the **Events** section, locate the person record by
    * **Date**
    * **Create**
    * **Integration name**
6. Locate the event phase and confirm status (see [below](#phase-and-status-of-an-integration-event))

</div>

### Phase and status of an integration event

| Phase       | Description                                                                  | Status | Notes                                           |
|-------------|------------------------------------------------------------------------------|--------|-------------------------------------------------|
| Queued      | the sharing request has been sent off for processing                         |        |                                                 |
| In progress | the sharing request is currently talking with the other system               |        |                                                 |
| Complete    | the sharing request has no more work to do (and may have a status as next)   | 201    | successfully created                            |
|             |                                                                              | 204    | employee already exists. No changes made.       |
| Error       | the sharing request has errored (and will have a status and message as next) | 400    | failed with error that should be seen beside it |

**Note:** CSV integrations will only show a limited set phases because the data is directly downloaded to the user

<div class="ui-instructions">

## Create employee manually (send data per employee)

1. Go to **People** page
2. Locate the **application** row <span class="mdi mdi-checkbox-marked-outline"></span>
3. Click &vellip; (vertical dots) to open the menu
4. Select **Integrations**
5. Choose which integration to show fields
   * Select **integration name**
   * Select **Employee (create)**
   * Click **Submit**
6. In the **Events** section, locate the person record by **date** and **Create** and **integration name**
7. Locate the **field by name** and check its **value**
8. Locate the event phase and confirm status (see [above](#phase-and-status-of-an-integration-event))

</div>

<div class="ui-instructions">

## Setup automatic create employee (sending of data on accepted application)

1. Go to **Jobs** page
2. Locate the **job** row <span class="mdi mdi-checkbox-marked-outline"></span>
3. Click &vellip; (vertical dots) to open the menu
4. Select **Edit**
5. In the Edit pane, **Integrations** section, select **Sync Settings**
6. In **settings** section, confirm integration provider does not already have settings by using the search filter
   * Select **Active** filter
   * Select **Integration provider** filter
   * Select **Apply** on each to change setting shown
7. Click the **Add/Change Setting**
8. In **Add new setting** section
   * Select On
   * Select Integration Provider
   * Click **Change Setting** when you're done

</div>

## FAQs

See [integration troubleshooting](../faqs.md#integrations).

