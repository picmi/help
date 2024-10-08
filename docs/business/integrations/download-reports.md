# Download reports

These instructions refer to all integrations in which [data is sent via CSV](integrations.md#available-integrations).

PICMI provides CSV files via **Reports**.

When data is shared with other systems via CSV, this is generally still called an "integration". Each time data is downloaded this is called an "integration
event". Inside each event are data is "record" made up of "fields" which are the values that are shared. Each field will
have different data and there are rules around that data that may mean it succeeds or fails.

### General integration rules

PICMI is a system of record making it the source of the original data, but it does not attempt to maintain data over
time and keep the two systems synchronised.

* Only accepted applications can have data shared
* CSV reports can be generated at any time
* PICMI records this download
* Any upload is unable to be recorded by PICMI
* PICMI does not and cannot know about the state of records in the other system (compared with
  an [API integration](integration-events.md#general-integration-rules))

**Note:** reissued applications will need to return to **accepted** before downloading


<div class="ui-instructions">

## Download reports

1. Go to **People** page
2. In the search filter, it is best to select status **Accepted** and limit to the Jobs
3. Select <span class="mdi mdi-checkbox-marked-outline"></span> **application** rows 
4. Click <span class="mdi mdi-cloud-download-outline"></span> **Download report**
5. In pane, locate the **integration by name**
6. Click **Submit**
7. When Passed record is displayed:
   * Click <span class="mdi mdi-download"></span> Download to file; or
   * Click <span class="mdi mdi-content-copy"></span> Copy to clipboard

</div>

## Upload reports (bulk import)

Each integration has their own process for uploading employees. Use the downloaded file to continue.
