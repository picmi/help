# Export application details

Exporting in PICMI allows users to extract application data into a customisable CSV file. This feature enables
businesses to work with application data in other tools, like Google Sheets, MacOS Numbers, or Excel. This flexibility
ensures your exported data meets the specific requirements of your business or system integration.

## What is export?

The export function lets you dynamically extract data from applications, fully customising what is included. You can
select:

- **Personal answers**: Personal/profile responses to any questions in the application workflow
- **Summary details**:  Job-related information
- **Contract substitutions**: Job or organisational details used in contracts
- **Worker information**: Profile information about the worker

<explanation>

## Key concepts

### Columns

[Columns](#working-with-columns) represent the data fields in your export. You can add, remove, reorder, or rename
columns to suit your needs.

### Value & format

Values refer to the data within columns, which can be transformed or masked:

- **Transformers**: Pre-made settings that adjust the [data format](#formatting-transformers)
- **Masks**: [Custom rules](#understanding-masks) applied to the data to meet specific needs

Note: there is a [default date format](#date-options) that can be changed which is an example of a mask

### View

A [view](#managing-views) is a saved configuration of columns, values, and formats. You can save views to reuse them or
create new ones for
different purposes.

</explanation>

## Specific features

1. **Data extraction**: Export in CSV format
2. **Download or copy**: Save as a file or copy to the clipboard for use in other applications
3. **Customisable fields**: Add, remove, reorder, or rename columns
4. **Ad hoc views**: Quickly configure exports as needed
5. **Repeatable views**: Save your setup for future use
6. **Data transformation**: Apply formatting or masks to fit specific requirements

<prompt>

Ready-to-use reports for specific systems are found under [Reports](../integrations/download-reports) (which
are [CSV integrations)](../integrations/integrations.md#available-integrations)

</prompt>

<explanation>

## Working with columns

- **Add a column**: Include a new field in the export.
- **Remove a column**: Exclude a field from the export.
- **Find specific column by name**: Enter a part name to limit the number of fields shown.
- **Show columns of type**: Choose a column by type (e.g., Summary, Worker, Personal, Contract).
- **Add all columns**: Include all available fields based on the currently shown columns.
- **Remove all columns**: Exclude all fields based on the currently shown columns.
- **Reorder a column**: Change the order in which fields appear.
- **Rename a column**: Change the name of a field in the export to match your needs.

## Working with values

- **Change value format**: Apply a pre-defined format to the data.
- **Add a mask**: Customise how data is displayed by applying a mask.
- **Set default date format (mask)**: Customise how all dates are displayed by applying a mask.

## Managing views

- **Save a view**: Store your configuration for future use.
- **Choose an existing view**: Select a saved configuration.
- **Delete a view**: Remove a saved configuration you no longer need.

</explanation>

## Set default date format

### Set as default date format for all dates

**Set as default date format**  allows you to specify a single format that is automatically applied to all date fields
in the export. This ensures consistency across the exported data and eliminates the need to individually format each
date field. This feature is especially useful when working with large datasets where multiple date fields are present,
saving time and ensuring consistent output.

#### How it works:

1. **Default application**: Once a default date format is set, every date in the export will automatically use this
   format unless a specific mask is applied to override it.
2. **Global consistency**: This ensures all date fields are aligned with a preferred format, making the data easier to
   read and compatible with downstream systems.

<prompt>

[Dates](../about-picmi/dates.md) will be transformed to **local time of the browser** (
see [conversion of UTC to local time](../about-picmi/dates.md#conversion-of-utc-to-local-time))

</prompt>

### Date options

Below is a table illustrating how different date format masks that are applied to the example date
`1982-05-25T00:00:00.000Z`:

| Example date    | Format mask option | Explanation                                                        |
|-----------------|--------------------|--------------------------------------------------------------------|
| **25/05/1982**  | `dd/MM/yyyy`       | Day with leading zero / Month with leading zero / Full year        |
| **25/May/1982** | `dd/LLL/yyyy`      | Day with leading zero / Abbreviated month name / Full year         |
| **25-05-1982**  | `dd-MM-yyyy`       | Day with leading zero - Month with leading zero - Full year        |
| **25-May-1982** | `dd-LLL-yyyy`      | Day with leading zero - Abbreviated month name - Full year         |
| **1982/May/25** | `yyyy/LLL/dd`      | Full year / Abbreviated month name / Day with leading zero         |
| **1982/05/25**  | `yyyy/MM/dd`       | Full year / Month with leading zero / Day with leading zero        |
| **1982-May-25** | `yyyy-LLL-dd`      | Full year - Abbreviated month name - Day with leading zero         |
| **1982-05-25**  | `yyyy-MM-dd`       | Full year - Month with leading zero - Day with leading zero        |
| **250582**      | `ddMM/yy`          | Day with leading zero and month without separator / Two-digit year |
| **2582**        | `dM/yy`            | Day and month without leading zeros / Two-digit year               |
| **25051982**    | `ddMM/yyyy`        | Day with leading zero and month without separator / Full year      |
| **251982**      | `dM/yyyy`          | Day and month without leading zeros / Full year                    |

## Formatting transformers

You can apply various formatting types to your data:

| Format type             | Description                                                                |
|-------------------------|----------------------------------------------------------------------------|
| **Unformatted (raw)**   |                                                                            |
| **Number**              | Formats numbers according to standard conventions                          |
| **Date**                | Converts dates into different readable formats                             |
| **Rich text**           | Displays text with formatting applied                                      |
| **Bank account**        | Formats data to match New Zealand bank account standards                   |
| **Tax number**          | Formats data to match New Zealand tax number standards                     |
| **Signature**           | Formats a signature field if applicable                                    |
| **List value**          | Extracts the final value from a list (eg, `//enum/answer/yes` gives `yes`) |
| **External identifier** | Displays the code value and generator type                                 |

## Understanding masks

Masks in PICMI allow you to transform data by applying custom rules or templates. They provide a way to reformat values
to meet specific requirements, ensuring the exported data is tailored for your business or downstream systems.

A mask modifies the raw data into a new format without changing the original value. Here are three examples to
demonstrate how masks work:

<explanation>

### Date mask

A date mask changes how dates are displayed. For instance, consider a raw date `1982-05-25T00:00:00.000Z`. Applying the
mask `dd/MM/yyyy` would reformat the date to:

- **Raw value**: `1982-05-25T00:00:00.000Z`
- **Mask**: `dd/MM/yyyy`
- **Transformed value**: `25/05/1982`

This is useful for aligning dates with regional preferences or specific formatting standards required by external
systems.

### Template mask

This mask combines multiple pieces of data into a structured format. For example, an **External Identifier** is actually
a series of values with the following structure:

```json5
{
  value: "A23X5",
  generator: "Five Alphanumeric",
  createdAt: "2024-11-19T12:34:56.000Z",
}
```

Using the mask `${value} (${generator})`, the output would be:

- **Raw value**: `{ value: "A23X5", generator: "Five Alphanumeric", createdAt: "2024-11-19T12:34:56.000Z" }`
- **Mask**: `${value} (${generator})`
- **Transformed value**: `A23X5 (Five Alphanumeric)`

This method allows for combining fields into a readable, concise output suitable for reporting or integration. Note:
there is no conditional logic in the templates.

</explanation>

