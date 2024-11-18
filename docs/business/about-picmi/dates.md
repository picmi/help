# Understanding dates

All dates are stored in **UTC (Coordinated Universal Time)** format but are typically shown in your local time. This approach is used because time is relative to your location—your time zone reflects where you are or the region where an action needs to take place.

## Quick breakdown

In UTC, the date and time are shown in this format: `YYYY-MM-DDTHH:MM:SSZ`

| **Part**       | **Meaning**                                       | **Example**  | **Explanation**                   |
|----------------|---------------------------------------------------|--------------|-----------------------------------|
| **YYYY-MM-DD** | The date (year, month, and day)                   | `2024-11-19` | Represents 19th November 2024.    |
| **T**          | A separator between the date and time             | `T`          | Separates the date from the time. |
| **HH:MM:SS**   | The time in hours, minutes, and seconds (24-hour) | `12:00:00`   | Means 12:00 PM (midday) in UTC.   |
| **Z**          | Indicates it’s in UTC (no time zone offset)       | `Z`          | Confirms the time is in UTC.      |

## Conversion of UTC to local time

When exporting or displaying timestamps, converting UTC to the local time zones, such as Australia and New
Zealand, ensures users see dates and times correctly adjusted to their regions, considering the significant time zone
differences and daylight saving practices in these countries.

<explanation>

## How it works

1. **Source format (UTC)**:  
   All timestamps are stored in **Coordinated Universal Time (UTC)**, a global standard. For example:
    - `2024-11-19T12:00:00.000Z` (12:00 PM UTC).

2. **Browser detection**:  
   The browser determines the local time zone based on the user’s location:
    - Australia (Sydney): **AEDT (UTC+11)**.
    - New Zealand (Wellington): **NZDT (UTC+13)**.

3. **Conversion process**:  
   The UTC timestamp is adjusted based on the detected time zone. The browser adds the appropriate offset to the UTC
   time:
    - Sydney: UTC+11 → `19/11/2024, 11:00 PM`.
    - Wellington: UTC+13 → `20/11/2024, 01:00 AM`.

4. **Display in export or UI**:  
   The application displays the adjusted time in the user’s local time zone, ensuring relevance and accuracy.

</explanation>

### Example scenario

A meeting scheduled in UTC (`2024-11-19T12:00:00.000Z`) would appear as follows:

- **Sydney, Australia (AEDT)**:  
  Local time is `11:00 PM` on **19th November 2024**.
- **Wellington, New Zealand (NZDT)**:  
  Local time is `01:00 AM` on **20th November 2024**.

Despite being close geographically, the time differs due to New Zealand being 2 hours ahead of Sydney during daylight
saving.

## Benefits of using UTC conversion

1. **Clarity for regional users**:  
   Time is adjusted to their local zone, avoiding misinterpretation.

2. **Daylight saving adjustments**:  
   New Zealand and parts of Australia (e.g., Sydney) observe daylight saving, but UTC remains unchanged, ensuring
   accurate conversion.

3. **Simplifies scheduling and reporting**:  
   For cross-border tasks between Australia and New Zealand, users can confidently rely on local time presentations
   without manual conversions.

## Visual example

| **UTC Time**         | **Sydney Time (AEDT)** | **Wellington Time (NZDT)** |
|----------------------|------------------------|----------------------------|
| 2024-11-19T12:00:00Z | 19/11/2024, 11:00 PM   | 20/11/2024, 01:00 AM       |
| 2024-11-19T08:00:00Z | 19/11/2024, 07:00 PM   | 19/11/2024, 09:00 PM       |


