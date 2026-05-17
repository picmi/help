# Understanding intake, capacity models, and invites only

PICMI is an opportunity intake and engagement platform used for employment, services, placements, and participation
management. An opportunity can be a job, position, role, contract, service, placement, programme intake, or workforce
allocation.

Each opportunity can include an **intake configuration** that controls how applications, placements, and service
engagements are managed.

::: prompt
**Quick summary**

- Intake controls whether new participation is currently allowed.
- Capacity model controls how availability is calculated.
- Capacity limit sets the maximum (when a model uses a maximum).
- Intake closed pauses/stops intake regardless of available capacity.
- Intake window defines when intake starts and ends.
- Invites only controls who can apply, not how capacity is calculated.

:::

## Core concepts

### Intake configuration

An **intake configuration** defines how applications, placements, or service engagements are managed for an opportunity.

### Capacity model

A [capacity model](#capacity-models) defines how PICMI calculates and manages availability. PICMI supports these models:

- Fixed Capacity
- Active Allocation
- Unlimited

### Capacity limit

A capacity limit defines the maximum number of active placements, allocations, or engagements permitted.

### Intake closed

Intake Closed temporarily prevents new intake, even when capacity is available.

### Intake window

An intake window defines the period during which applications or intake are permitted:

- Intake Start Date
- Intake End Date

## Key intake settings

| Setting               | What it means                                                                                 |
|-----------------------|-----------------------------------------------------------------------------------------------|
| **Capacity Model**    | How availability is calculated: Fixed Capacity, Active Allocation, Shared Pool, or Unlimited. |
| **Capacity Limit**    | The maximum count used by the selected model (if applicable).                                 |
| **Intake Closed**     | Whether intake is currently paused.                                                           |
| **Intake Start Date** | Date intake begins (when enabled).                                                            |
| **Intake End Date**   | Date intake ends (when enabled).                                                              |
| **Invites only**      | Whether intake is public or restricted to invited people.                                     |

::: explanation
## Capacity models

### Fixed Capacity

Use **Fixed Capacity** when you have a defined total intake limit.

Typical usage:

- seasonal hiring rounds
- fixed-number placements
- capped programme intake
- limited service slots

Typical calculation:

```text
Remaining availability = Capacity limit - counted engagements
```

Counted engagements are usually:

```text
Offered + Accepted + Completed
```

### Active Allocation

Use **Active Allocation** when you want to maintain a current active level over time.

Typical usage:

- ongoing workforce coverage
- rotating crews
- rolling placement programmes
- active service caseload targets

Typical calculation:

```text
Remaining availability = Capacity limit - currently active or reserved engagements
```

Reserved engagements often include offers to prevent over-allocation.

### Unlimited

Use **Unlimited** when no capacity limit applies.

Typical usage:

- expression of interest intake
- always-open recruitment
- open service registration
- uncapped programme participation

### Shared Pool (not yet supported)

Use **Shared Pool** when multiple opportunities draw from the same capacity or resource pool.

Typical usage:

- multiple programmes sharing one allocation cap
- region-based or site-based shared resources
- pooled workforce assignments across linked opportunities

Availability is calculated at the pool level, then applied to participating opportunities.
:::

## Intake closed vs capacity limit of zero

These settings are related but not the same.

- **Intake Closed = true** means intake is paused administratively.
- **Capacity Limit = 0** means intake has zero configured capacity.

Both can stop new intake, but for different reasons.

## Intake window behaviour

Intake windows apply date-based control to intake:

- before **Intake Start Date**, intake is not yet open
- between start and end dates, intake can operate normally
- after **Intake End Date**, intake period has ended

## Practical examples

### Example 1: seasonal job intake

```text
Capacity Model: Fixed Capacity
Capacity Limit: 30
Intake Closed: false
Invites only: false
```

Outcome: intake remains open until 30 counted placements are reached.

### Example 2: ongoing placement allocation

```text
Capacity Model: Active Allocation
Capacity Limit: 15
Intake Closed: false
Invites only: true
```

Outcome: invited participants can enter intake, and availability reopens as active allocations reduce.

### Example 3: temporary intake pause

```text
Capacity Model: Unlimited
Intake Closed: true
```

Outcome: intake is paused even though no capacity limit exists.

### Example 4: seasonal job intake stopping at a future date

```text
Capacity Model: Unlimited
Intake Closed: false
Intake End Date: (future date)
Invites only: false
```
Outcome: job/position/role stops taking applications at a known date.

### Example 5: seasonal job intake starting at a future date

```text
Intake Closed: false
Intake Start Date: (future date)
Invites only: false
```

Outcome: job/position/role is advertised but is not yet open for applications.

## Related

- [FAQs](../faqs.md#intake-capacity-models-and-invites-only)
- [Job application controls](../article/opportunity-controls.md)
- [Understanding applications](applications.md)
