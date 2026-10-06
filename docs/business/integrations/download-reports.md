# Download reports

These instructions refer to all integrations in which [data is sent via CSV](integrations.md#available-integrations).

PICMI provides CSV files via **Reports**. There is also [export applications details](../article/export) to create your
own ad hoc extracts.

When data is shared with other systems via CSV, this is generally still called an "integration". Each time data is
downloaded this is called an "integration
event". Inside each event are data is "record" made up of "fields" which are the values that are shared. Each field will
have different data and there are rules around that data that may mean it succeeds or fails.

:::: explanation

### General integration rules

PICMI is a system of record making it the source of the original data, but it does not attempt to maintain data over
time and keep the two systems synchronised.

* Only **accepted** applications are included in CSV report downloads. Completed and terminated applications are not
  included automatically.
* CSV reports can be generated at any time
* PICMI records this download
* Any upload is unable to be recorded by PICMI
* PICMI does not and cannot know about the state of records in the other system (compared with
  an [API integration](integration-events.md#general-integration-rules))

::: prompt
Reissued applications will need to return to **accepted** before downloading. If a completed or terminated application
still needs to be included, use the [CSV export workaround](#export-a-completed-or-terminated-application).
:::
::::

:::: instructions

## Export a completed or terminated application

1. [Reopen the application](../about-picmi/applications.md#business-actions).
2. Return the application to **Accepted**, if needed.
3. Download the CSV report.
4. Confirm that the report was created successfully.
5. Change the application back to **Completed** or **Terminated**, as appropriate.

Reopening is an internal status change. It does not invalidate the existing agreement or require the participant to sign
again. Use **Reissue** only when the participant needs to review or accept changed information or agreement terms.

::::

:::: instructions

## Download reports

1. Go to **People**
2. In the search filter, it is best to select status **Accepted** and limit to the Jobs
3. Select :::icon checkbox-marked-outline::: **application** rows
4. Click :::icon cloud-download-outline::: **Download report**
5. In pane, locate the **integration by name**
6. Click **Submit**
7. When Passed record is displayed:
    * Click :::icon download::: Download to file; or
    * Click :::icon content-copy::: Copy to clipboard

::::

## Upload reports (bulk import)

Each integration has its own process for uploading employees. Use the downloaded file to continue.

## FAQs

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>

::: faq I have uploaded a file, but the dates are wrong. What next?

Did you open the file in another application/programme, save it and then upload it? Look at the questions below to
understand that you the dates have been changed. If you still have problems, contact us.
:::

::: faq Why do my dates look wrong when I open a CSV?
When you open a CSV file from PICMI in programs like Excel, Google Sheets, or Apple Numbers, those programs often **try
to guess the date format automatically**. Unfortunately, they don’t all guess the same way—and it is most likely that they will be different
from where you are uploading the file too.

For example, a date like `01/02/2025` might be shown as **1 February 2025** in one program, but as **January 2, 2025**
in another. This doesn’t mean the data is wrong — it just means the program is showing it differently.
:::

::: faq Are the dates correct in the file I downloaded?
Yes. When you download a **raw CSV from PICMI**, the date values are stored in the correct format for that report. PICMI
ensures the dates are **accurate and consistent**, exactly as described in the documentation for each report type.

If you open the file in a text editor (like Notepad or TextEdit), you’ll see the dates as they were saved — they haven’t
changed.
:::

::: faq Why does the format change in Excel or Google Sheets?
Excel, Google Sheets, and other programs each use **different rules and regional settings** for dates. For example:

- Excel might use the U.S. format `MM/DD/YYYY`
- Google Sheets might use your computer’s local format, such as `DD/MM/YYYY`

When you open the CSV, the program guesses which one to use — and sometimes it guesses wrong.
:::

::: faq How can I open my CSV without changing the dates?
To keep your dates and other formatted values correct:

1. **Don’t double-click** the CSV file to open it.
2. Instead, **import** it into your spreadsheet program. During import, tell the program that the date columns are
   “text” or specify the correct format (for example `YYYY-MM-DD` or `DD/MM/YYYY`).
3. If the report includes bank account numbers, set the bank account column to “text” during import so leading zeroes
   are not removed.
4. Or, open the file in a **text editor** to check the original values.

This way, your dates and bank account numbers will display exactly as PICMI provided them.
:::

::: faq Why is the leading zero missing from a bank account in my CSV?
Spreadsheet programs often treat bank account numbers as ordinary numbers when a CSV is opened or edited. If that
happens, a value such as `02-0340-0008252-09` or `020340000825209` may be changed or displayed without the first zero.

Download the report again and compare the raw PICMI CSV with the spreadsheet file. If the raw CSV is correct, import
the file into your spreadsheet program and set the bank account column as text before editing or saving it.
:::

::: faq What’s the safest format for sharing data?
PICMI uses the **known date format** in its CSV files for each integration/report. Ideally share or re-upload the **raw CSV file** to make sure dates stay
accurate. If you have made changes, you must be careful not to change the date format.

:::: prompt
Note that you can also export your data from the spreadsheet file as CSV, and then upload that.
::::


:::: explanation

## General troubleshooting

- [General integration troubleshooting](integrations#troubleshooting)
- [Integration FAQs](../faqs#integrations)

::::

<script setup lang="ts">import {ref} from 'vue';

const expandAll = ref(false);

const toggleExpandAll = () => {
  expandAll.value = !expandAll.value;
}
</script>
