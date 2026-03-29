# Tax File Number (TFN) & Exemptions (in Xero)

## Overview

When setting up an employee's tax details for Xero Payroll AU, you must provide **either**:

- A valid **Tax File Number (TFN)**  
  **OR**
- A **TFN Exemption**

These two fields are **mutually exclusive** — you cannot provide both.

> Xero validation rule:  
> *"Either a tax file number must be entered or an exemption specified (not both)"*

## How this appears in Xero

In Xero, users are presented with two fields:

- **Tax File Number (TFN)** (free text)
- **TFN Exemption** (dropdown)

Only one should be populated at a time.

## How this is captured in PICMI

Instead of exposing raw TFN exemption types directly, PICMI captures this through guided questions:

- **Do you have a TFN?**
    - Yes → enter TFN
    - Not yet → "Awaiting TFN"
    - No → select reason:
        - Under 18
        - Pension / allowance recipient

This simplifies the experience for most users.

### Templated question wordings

| Option                                                                             | Description                                                                                 |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Yes, I have a TFN                                                                  | The employee has a valid Tax File Number and will provide it. This includes known constants |
| Not yet, as I have an application/enquiry in progress                              | The employee has applied for a TFN or is waiting on it (maps to "Awaiting TFN")             |
| No, I am claiming exemption as I am under 18 and I do not earn enough to pay tax   | The employee is under 18 and below the income threshold (maps to "Under 18" exemption)      |
| No, I am claiming exemption as I am a recipient of a pension, benefit or allowance | The employee receives a pension/benefit (maps to "Pensioner" exemption)                     |

### Advanced usage (optional)

Users who already understand Xero's [TFN constants](#special-tfn-constants-advanced) can still input them directly. The
system will correctly interpret and map them.

## TFN Exemption Types

The following exemption types are supported:

| Exemption          | Meaning                                         |
|--------------------|-------------------------------------------------|
| **Awaiting TFN**   | Employee has applied for a TFN                  |
| **Under 18**       | Employee is under 18 and below income threshold |
| **Pensioner**      | Employee receives a pension/benefit             |
| **TFN not quoted** | Employee has not provided a TFN                 |

::: explanation
## Internal Handling & Mapping Logic

PICMI ensures that whatever the user provides (answers or raw TFN values), the correct combination is sent to Xero.

### Key Rules

1. **If an exemption is selected**
    - TFN is cleared
    - Exemption is sent to Xero

2. **If a special TFN value is entered**
    - It is converted into the corresponding exemption

3. **If "TFN not quoted"**
    - A workaround is used due to a Xero API limitation (see below) to send the constant instead of the exemption
:::

## Special TFN Constants (Advanced)

Xero supports **special TFN placeholder values** for exemptions.

| Scenario            | TFN Value   |
|---------------------|-------------|
| No TFN provided     | `000000000` |
| Awaiting TFN        | `11111111`  |
| Under 18            | `33333333`  |
| Pension / allowance | `44444444`  |

> These are **undocumented Xero API behaviours**, but required for correct processing.

::: explanation

## Important Edge Cases & Workarounds

### 1. "TFN Not Quoted" Limitation

Due to a Xero API defect:

- You **cannot** set:
    - Tax Scale Type = default (REGULAR)
    - AND TFN Exemption = NOT QUOTED

**Workaround applied by PICMI:**

- The system sets:
    - TFN = `000000000`
    - Does **not** send the exemption field

### 2. Serialization / Data Consistency

To ensure consistent results:

- If both TFN and exemption are provided → system resolves conflict
- If a known constant TFN is detected → system converts it to the correct exemption
- If exemption is selected → TFN is always cleared

## Summary

- Only **one** of TFN or exemption should be provided
- PICMI abstracts complexity via user-friendly questions
- Advanced users can still input raw TFN constants
- The system automatically:
    - Normalises inputs
    - Handles Xero API quirks
    - Ensures valid payloads
:::

## Practical Examples

| User Input              | Result Sent to Xero   |
|-------------------------|-----------------------|
| TFN = `123456789`       | TFN used              |
| "Awaiting TFN" selected | Exemption = PENDING   |
| TFN = `11111111`        | TFN used              |
| "Pensioner"             | Exemption = PENSIONER |
| "Under 18"              | Exemption = UNDER18   |
