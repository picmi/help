# External Identifiers in PICMI Integrations

## Overview
Integrations require a shared identifier to correlate data between PICMI and external systems. PICMI generates this identifier while ensuring compatibility with the most restrictive format among the integrated systems.

## Generator types
- **None** (no external identifier required)
- **Alphanumeric (5-digit)** – Required by Smartly and used as the default for Tātou and Dataphyll.
- **Numeric (7-digit)** – Potential use for integrations like Crystall and Dataphyll.

<prompt>

**Example scenario**

If a customer requires an employee to have the same external ID in both Smartly and Tātou, the most restrictive format must be used. Smartly allows only a 5-character alphanumeric ID, while Tātou has a more flexible format. Therefore, both systems will use the ID "AB56S," and no other employee will receive the same value from PICMI. These identifiers are assumed to be unique within each customer's integrations rather than globally unique across all PICMI users.

</prompt>

<explanation>

## General design
- Each integration can have a unique identifier algorithm or type assigned to it.
- Each identifier type follows a predefined format (e.g., 5-character alphanumeric).
- Identifier algorithms can be assigned to specific integration combinations.
- All integration combinations are predefined and programmed into the system.
- An identifier algorithm is mapped as part of the integration setup.
- Only one identifier can be assigned per integration at a time.
- An identifier can be shared across multiple integrations.
- Identifiers are scoped at the organisation level.
- An identifier value is generated based on its algorithm and is scoped to a user, making it accessible through an application.
- Identifiers can be re-generated, with the latest value always being used.
- A history of previous identifier values is maintained.
- Identifiers are assumed to be unique across integrations for each PICMI user.
- Workforce users (ie jobseekers) have external identifiers available to be seen by them

</explanation>

## General setup and usage
1. The integration is configured with an external identifier type (e.g., 5-digit alphanumeric for Smartly, Tātou, and Dataphyll).
2. A new source mapping field called **External Identifier** is created.
3. Each integration mapping includes a rule to map the source **External Identifier** to the target field (e.g., Employee ID).

## Supported Integrations
- Tātou
- Smartly
- Dataphyll
- Xero
- PackManager
- PayHero
- Agrismart
- CheckWorkRights

## When and how external identifier are generated and retrieved

- The external ID is retrieved from the database or generated if it does not exist.
- The identifier is determined based on:
    - The user
    - The application's organisation ID
    - The integration's external ID key

## Access to external identifiers

1. A business user can view jobseeker external IDs:
    - By organisation
    - For a specific user within their access level
    - Across all users within an integration
    - Export functionality available for reporting
2. A jobseeker can view their own external IDs across all linked systems.


