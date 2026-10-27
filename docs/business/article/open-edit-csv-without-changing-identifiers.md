# How to open and edit CSV files without changing bank account numbers or phone numbers

PICMI exports CSV files for payroll and other business systems. A CSV stores values as text, but does not tell a
spreadsheet whether a value is a number, date or identifier. A spreadsheet may change values when it opens the file.

## Why this happens

For example, a PICMI export might contain:

| Field        | In the PICMI CSV  | After automatic conversion |
|--------------|-------------------|----------------------------|
| Bank account | `020340000825209` | `20340000825209`           |
| Telephone    | `0212345678`      | `212345678`                |
| Telephone    | `+64212345678`    | `212345678`                |

Download a [sample PICMI-style CSV](/assets/picmi-csv-safe-import-example.csv) to practise the import steps. It is a
demonstration file, not a payroll upload. The `human_readable_note` column explains what each row is testing.

In CSV, a field containing commas is wrapped in double quotes, and a double quote inside that field is written twice.
That escaping keeps the file machine-readable while the note remains clear to a person.

Leading zeros or a `+` can disappear. Long identifiers can be rounded or shown in scientific notation, and date-like
values can become dates. The original PICMI export may be correct; the change happens when the spreadsheet interprets
the text. Saving can make it permanent.

Changing a cell to **Text** afterwards only changes how the current value is displayed or how future entries are
treated. It cannot reliably recreate a zero, `+`, or digit that has already been removed.

## Microsoft Excel

### Recommended: turn off automatic conversions

In Excel for Microsoft 365 or Excel 2024, including the Mac versions, you can change the automatic conversion settings
before opening the CSV:

1. On Windows, select **File > Options > Data**. On Mac, open Excel’s **Preferences/Settings** and look for **Automatic
   Data Conversion**; the wording and location depend on your version.
2. Turn off the options that remove leading zeros, shorten long numbers, convert values containing `E` to scientific
   notation, and convert letter-and-number strings to dates.
3. Open the PICMI CSV and check the important columns before editing.

These controls are not available in every older Excel version. If you cannot find them, use the import method below. Do
not double-click the original file.

### Import affected columns as Text

1. Open Excel without opening the CSV, then select **Data > From Text/CSV**.
2. Select the PICMI file, for example `PICMI-payroll-export.csv`, and click **Import**.
3. In the preview, choose **Transform Data** or **Edit**.
4. Select columns such as **Bank account**, **Telephone**, **Employee number** or **Costing code**. Choose **Home >
   Transform > Data Type > Text**, then **Replace Current**.
5. Select **Close & Load** and check the worksheet against the original export.

::: prompt
When testing with the sample data, widen the **Bank account**, **Telephone** and other identifier columns so you can
see the complete values. A narrow column can hide digits even when the value is preserved.
:::

If your version uses the older Text Import Wizard, select **Text** for each affected column. It may need to be enabled
under **File > Options > Data > Show legacy data import wizards**.

::: prompt
Suggested screenshot: Excel’s **Automatic Data Conversion** settings and **From Text/CSV** preview with an identifier
column set to **Text**.
:::

## Google Sheets

1. Open Google Sheets and select **File > Import**.
2. Choose **Upload**, select the PICMI CSV, and choose **Replace spreadsheet** or **Insert new sheet**.
3. Clear **Convert text to numbers, dates, and formulas**.
4. Click **Import data**.
5. Check the **Bank account**, **Telephone**, **Employee number** and **Costing code** columns before editing.
6. When finished, select **File > Download > Comma-separated values (.csv)**. If the workbook contains more than one
   sheet, export the sheet required by the payroll system.

::: prompt
When testing with the sample data, widen the **Bank account**, **Telephone** and other identifier columns so you can
see the complete values. A narrow column can hide digits even when the value is preserved.
:::

::: prompt
Suggested screenshot: Google Sheets **Import file** with **Convert text to numbers, dates, and formulas** cleared.
:::

## Apple Numbers (macOS)

As of the latest review of this article, the Numbers approach does not reliably preserve bank account numbers,
telephone numbers or other identifiers when importing a CSV. Numbers lets you adjust separators, text qualifiers and
encoding, but it does not provide Google Sheets’ conversion checkbox or Excel’s per-column import control.

1. Open Numbers and drag the PICMI CSV into the app, or select **File > Open**.
2. Before editing the table, select it and open the **Format** sidebar. Select **Table > Adjust Import Settings**.
3. In **Delimited**, check the comma delimiter, text qualifier and text encoding, then click **Update Table**.
4. Select identifier columns, then choose **Format > Cell > Data Format > Text** before entering or replacing values.

These settings may make the table easier to read, but they do not reliably prevent Numbers from changing values during
the initial import. Formatting a column as Text after import will not restore a removed zero, plus sign or digit. Apple
also notes that import settings cannot be changed after editing.

If you need to preserve the original PICMI values, do not use Numbers to import and save the CSV. Use Excel’s controlled
import or Google Sheets with **Convert text to numbers, dates, and formulas** disabled. You can then open the completed
CSV in Numbers only as a visual check, without saving it from Numbers.

## Saving the file for payroll import

Save or export the completed file as **CSV** when required by your payroll software. Compare a sample of bank account
numbers and other identifiers with the original PICMI export.

Do not reopen the saved CSV by double-clicking it: the spreadsheet may interpret the values again. Check values during
the controlled import instead.

## What we recommend

Keep the original PICMI export unchanged. Import a copy with automatic conversion disabled, or explicitly import
identifier columns as **Text** in Excel or Google Sheets, then edit and export to CSV. This is safer than correcting
formatting afterwards. Do not use Numbers as the import-and-save step for these files.

## Troubleshooting

### A leading zero has already disappeared

Close the spreadsheet without saving and start again from the original PICMI CSV. If it is unavailable, download a fresh
PICMI export or confirm the value from your source system. Do not guess missing digits.

### I can see the value, but it appears in scientific notation

The spreadsheet may have converted and changed a long identifier. Reopen the original CSV with identifier columns
imported as Text. Formatting scientific notation as Text is not a reliable repair.

### The file has the wrong columns or characters

Check the delimiter, text qualifier and encoding during import. Do not edit until the preview matches the PICMI CSV.

See the official guides
for [Excel automatic data conversion](https://support.microsoft.com/en-us/excel/data-import-and-analysis-options-in-excel), [Excel text import](https://support.microsoft.com/en-us/excel/keeping-leading-zeros-and-large-numbers), [Google Sheets](https://support.google.com/docs/answer/56470)
and [Numbers](https://support.apple.com/guide/numbers/import-an-excel-or-text-file-tan9f3c54bdc/mac).
