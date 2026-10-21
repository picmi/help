# API integration authentication and planning

Use this page if your organisation is connecting its own provider account to PICMI. It shows how you authorise each
API integration, where your credential comes from, and whether you need to plan anything before setting it up.

This is a cross-integration reference. The [integration overview](integrations.md) explains the different integration
types, while each integration page contains its configuration fields, data mappings, and integration-specific steps.
These instructions are for the customer using PICMI, not for a software provider building a public integration for
multiple customers.

## How to use this table

The timing column describes whether you can get the credential immediately yourself, whether you need an in-application
prerequisite, or whether you must make an out-of-process request. **Confirm first** means the current Help Centre does
not document the customer retrieval process well enough to confirm the timing.

| Integration                             | Authentication method                            | What you do in your provider account                                                                                                                                                                    | Timing and planning                                                                                              | Integration guide                                                                                                      |
|-----------------------------------------|--------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [CheckWorkRights](check-work-rights.md) | API key                                          | A user with API setup access signs in to CheckWorkRights, opens **Admin > API**, enables API status, and generates a key.                                                                               | Immediate in the application—requires API setup access.                                                          | [CheckWorkRights guide](check-work-rights.md#retrieving-a-token)                                                       |
| [Dataphyll](dataphyll.md)               | Authorisation token                              | Obtain the authorisation token for your own Dataphyll account. The current Help Centre does not document the retrieval steps.                                                                           | Confirm first—the customer retrieval process and whether it is immediate are not documented.                     | [Dataphyll guide](dataphyll.md)                                                                                        |
| [EmploymentHero](employment-hero.md)    | OAuth or API key                                 | Use OAuth, or copy the API key from **My Account > Account Details** in EmploymentHero.                                                                                                                 | Immediate in the application—requires provider sign-in or API-key access.                                        | [EmploymentHero guide](employment-hero.md#authorisation)                                                               |
| [Hectre](hectre.md)                     | API connection; credential method not documented | The current Help Centre documents an Orchard setting but does not describe how you authorise your own Hectre account.                                                                                   | Confirm first—check the connection prerequisites before setup.                                                   | [Hectre guide](hectre.md#api-hectre-integration-configuration)                                                         |
| [iPayroll](ipayroll.md)                 | OAuth token                                      | Create a separate iPayroll user in your organisation with the **API User** role, then use the PICMI-provided URL to authorise and issue your token.                                                     | In-application setup—creating the API user is a prerequisite; token updates require PICMI support.               | [iPayroll guide](ipayroll.md#retrieving-a-token)                                                                       |
| [PayHero](payhero.md)                   | Customer-owned PayHero API credentials           | PayHero documents private integrations for Universe-plan customers. Email `api@flexitime.works` with the private integration application, then use the credentials PayHero issues for your own company. | Out-of-process request—email `api@flexitime.works`; PayHero says to allow up to 10 working days.                 | [PayHero guide](payhero.md#customer-api-credentials)                                                                   |
| [PaySauce](paysauce.md)                 | API connection; credential method not documented | The current Help Centre lists PaySauce as an API integration but does not document how you authorise your own account.                                                                                  | Confirm first—the customer setup process and whether it is immediate are not documented.                         | [PaySauce guide](paysauce.md)                                                                                          |
| [SmoothPay](smooth-pay.md)              | API key                                          | Obtain the API key for your own SmoothPay account. The current Help Centre does not document where to retrieve it.                                                                                      | Confirm first—the key retrieval process and whether it is immediate are not documented.                          | [SmoothPay guide](smooth-pay.md)                                                                                       |
| [Tātou](tatou.md)                       | RESTful API token                                | Create a token immediately in your own **Tātou Office > Integrations > RESTful API** and copy it when it is generated. If API access is not enabled, contact `sales@tatou.app` first.                   | Immediate in the application once API access is enabled; the token cannot be retrieved later if it is not saved. | [Tātou guide](tatou.md#cfg-tatou-token) · [Tātou token instructions](https://support.tatou.app/kb/how-to-use-api-keys) |
| [Tickbox](tickbox.md)                   | API token                                        | Obtain the API token for your own Tickbox account. The current Help Centre does not document the retrieval steps.                                                                                       | Confirm first—the customer retrieval process and whether it is immediate are not documented.                     | [Tickbox guide](tickbox.md#integration-configuration)                                                                  |
| [Xero](xero.md)                         | OAuth                                            | Sign in to Xero and PICMI, then authorise the connection from PICMI.                                                                                                                                    | Immediate in the application—requires provider sign-in and authorisation.                                        | [Xero guide](xero.md#authorisation)                                                                                    |

## Planning checklist

Before configuring an integration marked **Out-of-process request**, **In-application setup**, or **Confirm first**:

1. Confirm that your provider account and plan include API access.
2. Confirm which user or role in your organisation can create or authorise the credential.
3. Check whether the credential is shown again after it is generated, or must be saved immediately.
4. Check whether the request stays inside the provider application or must be sent by email.
5. Allow time for an out-of-process request before you plan the PICMI connection.

::: prompt
Use a credential belonging to your own provider account. Do not use another organisation's token, a staff member's
personal credential, or a partner credential intended for a different integration model.
:::

## Source and maintenance notes

The integration-specific Help Centre pages are the source of truth for customer setup in PICMI. External provider
references are included where they clarify customer credential ownership or retrieval:

- [PayHero API integration and access process](https://support.payhero.co.nz/en/articles/12015635-payhero-api-integration)
- [Tātou API access token instructions](https://support.tatou.app/kb/how-to-use-api-keys)

Review this page when an API integration is added, its authorisation flow changes, or a provider changes its access
requirements.
