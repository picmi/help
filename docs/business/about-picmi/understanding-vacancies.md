# Understanding vacancies, capacity types, and invites only

Vacancies help your organisation control **how many people can be accepted for an opportunity (job, role, position)**.

They are used to answer questions such as:

- How many workers do we need?
- Should recruitment close once we reach a fixed number?
- Should recruitment stay open because we always need more people?
- Are we trying to maintain a current workforce level over time?
- Should people only be able to apply if we invite them?

In PICMI, a vacancy is attached to an opportunity which is known as a job (some call it a role, position or contract).
The vacancy settings determine whether the opportunity is open, capped, unlimited, or managed as an active workforce.

::: prompt 
**Quick summary**

- Vacancies control availability for an opportunity.
- Capacity type controls how availability is calculated.
- Maximum controls the number used in the calculation.
- Blank maximum usually means unlimited.
- Maximum of zero means closed.
- **Capped placements** count total committed or completed placements.
- **Active workforce** focuses on current active or reserved workers.
- **Unlimited** vacancies do not run out of places.
- **Is closed = true** means intake is paused, even if capacity exists.
- **Invites Only** controls who may apply, not how many may be accepted.

:::

::: explanation

# Core concepts

## What is a vacancy?

A vacancy defines the availability rules for an opportunity.

For example, if you are advertising a seasonal job and need **20 workers**, the vacancy can be configured so that no
more than 20 places are filled.

If you are running an always-open recruitment campaign, the vacancy can be configured as **unlimited**, so there is no
fixed number of places.

If you are managing ongoing seasonal work where people come and go, the vacancy can be configured as an **active
workforce**, where the goal is to maintain a target number of currently active workers rather than a fixed total number
of **placements** (ie "capped").

A vacancy can also be temporarily closed using **Is closed**, without changing the capacity settings.
:::

## Key vacancy settings

A vacancy is usually controlled by these settings:

| Setting                   | What it means                                                                                                       |
|---------------------------|---------------------------------------------------------------------------------------------------------------------|
| **Vacancy Capacity type** | The vacancy model used to calculate availability: Capped Placements, Active Workforce, Unlimited                    |
| **Maximum**               | The highest number of places available, unless the vacancy is Unlimited.                                            |
| **Is closed**             | Whether intake is currently paused. When true, the vacancy is closed even if capacity would otherwise be available. |
| **Start date**            | The first date from which the vacancy applies. (not currently available)                                            |
| **End date**              | The last date until which the vacancy applies. (not currently available)                                            |
| **Invites only**          | Whether people can apply publicly or only after being invited.                                                      |

## Capacity types

A capacity type defines **how PICMI should interpret the vacancy limit**.

The same number can mean different things depending on the capacity type.

For example:

- A maximum of **10** on a capped placement vacancy means “accept up to 10 people in total”.
- A maximum of **10** on an active workforce vacancy means “try to maintain 10 currently active workers”.
- An unlimited vacancy has no fixed maximum.
  Capacity type and maximum describe the **capacity model**.

**Is closed** is separate. It describes whether intake is currently allowed.

For example:

| Capacity type     | Maximum | Is closed | Meaning                                                                |
|-------------------|--------:|----------:|------------------------------------------------------------------------|
| Capped placements |      10 |     false | Accept until 10 places are consumed.                                   |
| Capped placements |      10 |      true | Temporarily closed even though capacity may exist.                     |
| Capped placements |       0 |     false | Open, but configured with zero capacity. This is unusual but possible. |
| Unlimited         |   blank |     false | Always open.                                                           |
| Unlimited         |   blank |      true | Unlimited model, but currently closed.                                 |
| Active workforce  |      20 |     false | Maintain 20 active workers.                                            |
| Active workforce  |      20 |      true | Workforce vacancy exists, but intake is paused.                        |

::: explanation
### Capped placements

A **capped placements** vacancy has a fixed or finite number of places.

This is the most traditional vacancy model.

Use this when you know exactly how many people you want to place.

### Common uses

Use capped placements for:

- seasonal intakes,
- harvest crews,
- fixed-size crews,
- quota-based hiring,
- one-off recruitment campaigns,
- jobs with a predetermined labour requirement.

### How capped placements are calculated

For capped placements, capacity is calculated as:

```
Remaining places = Maximum - counted applications
```

The counted applications are:

```
Offered + Accepted + Completed
```

This means a person consumes capacity once they have reached a committed stage.

### Counted states

The following states count against the vacancy:

| State         | Why it counts                                                                             |
|---------------|-------------------------------------------------------------------------------------------|
| **Offered**   | A place has been offered and should be reserved.                                          |
| **Accepted**  | The person has accepted and is expected to work.                                          |
| **Completed** | The person completed the placement, so they still count toward the total placement quota. |

### States that usually do not count

The following states do not normally consume capped placement capacity:

| State           | Why it does not count                                                                        |
|-----------------|----------------------------------------------------------------------------------------------|
| **Invited**     | The person has only been invited. No place has been committed.                               |
| **In progress** | The person has started an application but has not been offered a place.                      |
| **Cancelled**   | The application, offer, or invite was cancelled.                                             |
| **Declined**    | The person declined the invite, application, or offer.                                       |
| **Terminated**  | The placement did not continue and is no longer counted as a successful committed placement. |
:::

::: explanation
### Active workforce

An **active workforce** vacancy is designed to maintain a target number of active workers over time.

Use this when the goal is not a fixed total number of placements, but a current working headcount.

This is useful for work where people may leave, finish, or become inactive, and your organisation wants to keep
recruitment open or reopen places to maintain staffing levels.

### Common uses

Use active workforce for:

- rolling crews,
- maintained crews,
- ongoing seasonal work,
- roles with regular turnover,
- continuous recruitment,
- workforce headcount management.

### How active workforce is calculated

For active workforce vacancies, the calculation should focus on people who currently occupy or reserve a workforce
position.

A typical calculation is:

```
Remaining active places = Target workforce size - current active or reserved workers
```

Usually, the current active or reserved workers are:

```
Offered + Accepted
```

### Why offered workers may count

An offered worker may not have started yet, but the place is being reserved for them. Counting offers helps prevent
over-hiring.

### Why completed workers usually do not count

A completed worker has finished. They no longer occupy an active workforce place.

This is the key difference from capped placements.
:::

::: explanation
### Unlimited vacancies

An **unlimited** vacancy has no predefined hiring or placement limit.

Use this when your organisation does not want PICMI to stop accepting people based on a maximum number.

### Common uses

Use unlimited vacancies for:

- open intake
- always-open recruitment campaigns
- high-volume labour demand
- general expression-of-interest campaigns
- ongoing candidate collection
- uncapped hiring

### How unlimited vacancies are calculated

Unlimited vacancies do not have a finite remaining number.

Instead of showing a number such as:

```
10 remaining
```

PICMI may treat the remaining capacity as:

```
Unlimited
```

or:

```
No limit
```

Technically, this is often represented as no maximum being set.
:::

## Closed vacancies

**Is closed** controls whether the vacancy is currently accepting intake.

When **Is closed** is set to **true**, the vacancy is closed even if the capacity calculation says places are available.

This is useful when:

- recruitment is temporarily paused
- the opportunity should not accept more people right now
- the organisation wants to keep the vacancy configured but stop intake
- hiring is waiting for an internal decision
- the role is visible or retained for administration, but applications or offers should not continue

Example:

```
Capacity type: Capped placements
Maximum: 10
Counted applications: 4
Is closed: true
```

Capacity calculation:

```
10 - 4 = 6 remaining
```

Even though 6 places are available, the vacancy is currently closed because **Is closed** is true.

## Maximum and zero capacity

**Maximum** is the number used in the capacity calculation.

A maximum of **zero** means the vacancy has zero configured capacity.

It does not necessarily mean the vacancy has been administratively closed.

Example:

```
Capacity type: Capped placements
Maximum: 0
Is closed: false
```

This means the vacancy is technically open, but there are no available places because the maximum is zero.

This may be unusual, but it is different from:

```
Capacity type: Capped placements
Maximum: 10
Is closed: true
```

In that case, capacity may exist, but intake is paused.

## Start and end dates

A vacancy may also have a start date and end date.

These dates describe when the vacancy applies.

| Field          | Meaning                                   |
|----------------|-------------------------------------------|
| **Start date** | The first date the vacancy applies from.  |
| **End date**   | The final date the vacancy applies until. |

### Open-ended date options

| Start date | End date | Meaning                                                 |
|------------|----------|---------------------------------------------------------|
| Blank      | Blank    | Open-ended.                                             |
| Set        | Blank    | Starts from a specific date and continues indefinitely. |
| Blank      | Set      | Available until a specific date.                        |
| Set        | Set      | Available only during that date range.                  |

## Invites only

**Invites only** controls who can apply.

When invites only is enabled, people generally cannot apply publicly unless your organisation specifically invites them.

This is separate from vacancy capacity.

Capacity controls:

```
How many people can be accepted?
```

Invites only controls:

```
Who is allowed to start or access the application?
```

### When to use invites only

Use invites only when:

- you already know who you want to invite
- the role is not open to the public
- workers are being selected from a known list
- the opportunity is part of a private recruitment process
- you are inviting previous workers back
- you are managing a controlled intake

## Choosing the right capacity type

### Use capped placements when...

Choose **capped placements** if:

- you have a fixed number of roles
- each completed placement should count toward the total
- recruitment should close once the quota is filled
- you are managing a one-off intake
- you know the total number of people required

Good fit:

```
“We need exactly 40 workers for this harvest”
```

### Use active workforce when...

Choose **active workforce** if:

- you want to maintain a live workforce level
- workers may leave or complete and need replacement
- recruitment may need to reopen
- completed workers should not permanently consume capacity
- the target is active headcount rather than total placements

Good fit:

```
“We need to keep around 25 people working at any given time”
```

### Use unlimited when...

Choose **unlimited** if:

- there is no fixed cap
- you want an always-open opportunity
- you are gathering candidates for future needs
- you do not want PICMI to stop intake based on a number

Good fit:

```
“We are always interested in new applicants”
```

## Examples

### Example 1: harvest crew with a fixed quota

Your organisation needs 60 workers for a harvest period.

Recommended setup:

```
Capacity type: Capped placements
Maximum: 60
Start date: Harvest start date
End date: Harvest end date
Invites only: Optional
```

Why:

- you know the total number required,
- once 60 places are committed or completed, recruitment should stop,
- completed placements still count toward the seasonal quota.

### Example 2: capped placement with no one offered yet

```
Maximum: 10
Offered: 0
Accepted: 0
Completed: 0
```

Calculation:

```
text
10 - (0 + 0 + 0) = 10 remaining
```

The vacancy can still accept people.

### Example 3: capped placement with some committed places

```
Maximum: 10
Offered: 2
Accepted: 3
Completed: 1
```

Calculation:

```
10 - (2 + 3 + 1) = 4 remaining
```

The vacancy can still accept 4 more people.

### Example 4: capped placement is full

```
text
Maximum: 10
Offered: 4
Accepted: 4
Completed: 2
```

Calculation:

```
10 - (4 + 4 + 2) = 0 remaining
```

The vacancy is full.

### Example 5: completed workers still count for capped placements

```
Maximum: 5
Completed: 5
```

Calculation:

```
5 - 5 = 0 remaining
```

For capped placements, completed workers still count because this model is about the **total number of placements**, not
the number of currently active workers.

If you want completed workers to make room for replacements, use **active workforce** instead.

### Example 6: ongoing packhouse workers

Your organisation wants to maintain 35 workers at a packhouse.

Recommended setup:

```
Capacity type: Active workforce
Maximum: 35
Start date: Optional
End date: Optional
Invites only: No
```

Why:

- people may leave or finish,
- you want capacity to reopen,
- the goal is current headcount, not total people ever placed.

### Example 7: active workforce target is not full

```
Target workforce size: 10
Offered: 2
Accepted: 5
Completed: 3
```

Active workforce calculation:

```
10 - (2 + 5) = 3 remaining
```

The 3 completed workers do not reduce current capacity because they have finished.

### Example 8: active workforce is full

```
Target workforce size: 10
Offered: 3
Accepted: 7
Completed: 8
```

Calculation:

```
10 - (3 + 7) = 0 remaining
```

Even though 8 people have completed previously, the current active or reserved workforce is already at 10.

### Example 9: active workforce capacity reopens when a worker finishes

Before completion:

```
Target workforce size: 1
Accepted: 1
Completed: 0
```

Calculation:

```
1 - 1 = 0 remaining
```

The vacancy is full.

After the worker completes:

```
Target workforce size: 1
Accepted: 0
Completed: 1
```

Calculation:

```
1 - 0 = 1 remaining
```

The vacancy can accept another worker.

### Example 12: unlimited private expression of interest

You want to collect interest from invited people only, with no fixed number.

```
Capacity type: Unlimited
Maximum: blank
Invites only: Yes
```

Only invited people can respond, but there is no fixed maximum.

### Example 13: returning workers only

Your organisation wants to invite previous workers back.

Recommended setup:

```
Capacity type: Capped placements or Active workforce
Maximum: Number required
Invites only: Yes
```

Why:

- applications are restricted to invited people,
- you can still control the number of accepted workers.

### Example 14: active workforce from known workers

You want to maintain 15 active workers, but only invite people from an existing worker list.

```
Capacity type: Active workforce
Maximum: 15
Invites only: Yes
```

The vacancy is managed as an active workforce, and access is limited to invited people.

### Example 15: temporarily stop recruitment

Your organisation wants to stop accepting people for now.

Recommended setup:

```
Maximum: 0
```

Why:

- no places are available,
- the opportunity can remain configured,
- recruitment can be reopened later by increasing the maximum.

### Example 16: seasonal vacancy with dates (not yet available)

```
Capacity type: Capped placements
Maximum: 30
Start date: 1 June
End date: 31 August
```

This describes a vacancy for 30 placements during a specific seasonal window.

### Example 17: future vacancy (not yet available)

```
Maximum: 20
Start date: 1 October
End date: blank
```

This describes a vacancy that starts from 1 October.

### Example 18: expired vacancy (not yet available)

```
Maximum: 20
Start date: 1 January
End date: 31 March
```

After 31 March, the vacancy period has ended.

# FAQs

- [FAQs](../faqs.md#vacancies-capacity-types-and-invites-only)
