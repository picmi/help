# Employer KiwiSaver Subsidy Rates (Effective 1 April 2026)

From **1 April 2026**, changes to KiwiSaver rules affect how employer contributions (subsidies) are determined and
applied. This guide explains how your selected subsidy rate interacts with employee contribution rates and system
behaviour.

::: prompt
As at 1 April 2026, PICMI automatically upgraded all KiwiSaver rate questions and all Integration configurations.
:::

## Key Principles

### 1. Default Employer Contribution: **3.5%**

- The standard employer contribution rate is now **3.5%**
- This applies in most situations automatically

### 2. Optional Reduced Rate: **3% (By Agreement Only)**

- A **3% employer rate is no longer the default**
- It is only allowed if:
    - The **employee is contributing 3%**, AND
    - The **business has explicitly selected 3%** in configuration

If either condition is not met, the system will **default back to 3.5%**

### 3. No Contribution: **0%**

- If no employer contribution applies, the rate is **0%**
- This overrides all other logic

::: explanation

## Integrations Affected

| Name                                                                        | Type |
|-----------------------------------------------------------------------------|------|
| [iPayroll](../integrations/ipayroll)                                        | API  |
| [Xero PayrollNZ](../integrations/xero#payroll-nz-integration-configuration) | API  |
| [Agrismart](../integrations/agrismart)                                      | CSV  |
| [Crystal](../integrations/crystal)                                          | CSV  |
| [Keylink](../integrations/keylink)                                          | CSV  |
| [PaySauce](../integrations/paysauce)                                        | CSV  |
| [Smartly](../integrations/smartly)                                          | CSV  |

## Question

**Please indicate your KiwiSaver contribution rate, or alternative option**

| **Original**                                       | **Upgrade at 1 April 2026**                                  |
|----------------------------------------------------|--------------------------------------------------------------|
| Not an NZ resident or citizen                      | Not an NZ resident or citizen                                |      
| 3%                                                 | 3% (temporary reduction, IRD exemption certificate required) |
|                                                    | 3.5%                                                         |
| 4%                                                 | 4%                                                           |      
| 6%                                                 | 6%                                                           |      
| 8%                                                 | 8%                                                           |      
| 10%                                                | 10%                                                          |      
| Not enrolled—under 18 or over 65                   | Not enrolled—under 18 or over 65                             |      
| Not enrolled—wish to opt-out                       | Not enrolled—wish to opt-out                                 |      
| Not enrolled—employed less than 28 continuous days | Not enrolled—employed less than 28 continuous days           |      
| On KiwiSaver saving suspension                     | On KiwiSaver saving suspension                               |      

::: prompt
People who have previously answered with 3% are required to make a new selection. Other options are not affected.
:::

## How the System Resolves the Final Rate

The system determines the effective employer subsidy using:

- The **employee’s KiwiSaver rate** (from integration mappings)
- The **employer’s configured subsidy rate** (from the integration configuration)

### Resolution Rules

| Employee Rate                      | Employer Config                      | Result   |
|------------------------------------|--------------------------------------|----------|
| `0%`                               | Any                                  | **0%**   |
| `3.0%`                             | **3% selected**                      | **3%**   |
| `3.0%`                             | **3.5% selected (or anything else)** | **3.5%** |
| `> 3.0%` (e.g. 3.5%, 4%, 6%, etc.) | Any                                  | **3.5%** |

## Why This Matters

These rules ensure compliance with:

- **Post-2026 KiwiSaver legislation**
- The requirement that **3% is only used when explicitly agreed**
- The expectation that **3.5% is the standard contribution**

::: explanation

## Common Scenarios

### Scenario 1: Employee at 3%, business allows 3%

→ Employer contributes **3%**

### Scenario 2: Employee at 3%, business does NOT allow 3%

→ Employer contributes **3.5%** (automatic uplift)

### Scenario 3: Employee at 4%

→ Employer contributes **3.5%** (always capped to standard)

### Scenario 4: No KiwiSaver

→ Employer contributes **0%**
:::
