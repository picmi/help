# Creating individual employment conditions

For any application, the business can provide specific terms for a person. They are called **personal overrides** to
provide individual employment conditions. Personal overrides are added over the top of any **base** field values that
are
provided.

::: prompt
Changes can be made applications right up until the person agrees—after that changes cannot be made.
:::

## Where are the personal overrides reflected?

For both the person and the business, everywhere in the context of an application these override values will be used
instead of the base values. This includes:

* job details view
* contracts (inside the substitution fields)

## Fields that can be overridden

| **Field**                                                                                         | **Description**                                                                                                                                                                        |
|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Remuneration](#cfg-remuneration){#cfg-remuneration}                                              | The pay rate itself (and not the currency eg NZ, or frequency eg hourly—these remain the same as the job itself)                                                                       |
| [Start](#cfg-start){#cfg-start}                                                                   | Date the job is expected to begin                                                                                                                                                      |
| [End](#cfg-end){#cfg-end}                                                                         | Date the job is expected to finish                                                                                                                                                     |
| [Date summary](#cfg-date-summary){#cfg-date-summary}                                              | A description of the dates or supplementary information. Examples are general start or end date conditions (such as weather or fruit conditions), or job-specific notification periods |
| [Valid through](#cfg-valid-through){#cfg-valid-through}                                           | Allow the application to close before the job starts                                                                                                                                   |
| [Location](#cfg-location){#cfg-location}                                                          | The street address of the position                                                                                                                                                     |
| [Location additional details](#cfg-location-additional-details){#cfg-location-additional-details} | Supplementary information about the location                                                                                                                                           |
| [Job description](#cfg-job-description){#cfg-job-description}                                     | Change this to rewrite the primary description—overwriting this should probably include details from the original description                                                          |
| [Organisation name](#cfg-organisation-name){#cfg-organisation-name}                               | Sometimes the contracting organisation may change                                                                                                                                      |
| [Top up to hourly rate](#cfg-topup-to-hourly-rate){#cfg-topup-to-hourly-rate}                      | Whether this person's earnings should be topped up to their hourly rate. See the [job settings](opportunity-create.md#job-settings) for the job-level default.                         |
| [Weekly minimum earnings](#cfg-weekly-min-earnings){#cfg-weekly-min-earnings}                      | The minimum weekly earnings agreed for this person. See the [job settings](opportunity-create.md#job-settings) for the job-level default.                                           |

For the [Tātou integration](../integrations/tatou.md), these personal overrides are passed to Tātou when the person's
employment details are created or updated. When a personal override and job setting exist for the same field, the
personal override takes precedence for that person. If no personal override is provided, the job setting is used; if
neither is provided, the Tātou integration setting is used as the fallback.

:::: instructions
## Change personal conditions

1. Go to **People**.
2. Locate the **application** row :::icon checkbox-marked-outline:::.
3. Click &vellip; (vertical dots) to open the menu.
4. Select **Personalise job conditions**.
5. Move through the [fields](#fields-that-can-be-overridden) and update values as needed.
4. Click **Save** when you're done.
::::
