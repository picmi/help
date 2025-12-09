# Understanding Workflows

A **workflow** in PICMI is the structured series of steps that a person follows to complete an application for either
employment or service agreements. Workflows guide applicants through all necessary information collection, declarations,
and documentation before presenting them with a contract.

## What is a workflow?

Workflows are the backbone of PICMI's application process. They ensure that:

- All required information is collected consistently
- Applicants understand the role, organisation, and expectations
- Compliance requirements are met before contracts are issued
- The process is fair, legal, and inclusive for everyone

::: prompt
Workflows sit between the job/proposal and the contract in PICMI's structure: **Organisation → Job/Proposal → Workflow →
Contract**
:::

## Workflow structure: Pages and items

Every workflow is organised into **pages**, and each page contains **items** that applicants interact with or review.

:::prompt
PICMI has industry-standard workflows that have been tested and approved by the PICMI team ready for you to use. They
are built to be flexible and easy to adapt to your organisation's needs. PICMI finds most organisation may adjust 3-5
items to suit their needs.
:::

### Pages

Pages group related content together to make the application process manageable and logical. Common page names include:

- Check Your Fit
- Personal Information
- Health & Safety
- Right to Work
- Certifications
- Agreement

### Items

Each page contains **items** that serve different purposes:

| Item Type           | Purpose                                                                         |
|---------------------|---------------------------------------------------------------------------------|
| **Questions**       | Collect information from applicants (text, dates, files, choices, declarations) |
| **Information**     | Display known fields or details the applicant needs to review                   |
| **Section Heading** | Break up content with titles and explanatory text                               |
| **Section Image**   | Show visual content like photos or diagrams                                     |
| **Section Video**   | Embed video content to explain roles or environments                            |
| **Section Data**    | Present structured data or tables                                               |

::: prompt
Items appear in the order you configure them within each page. Thoughtful ordering improves completion rates.
:::

## Employment workflows vs Service workflows

PICMI supports two main types of workflows, each designed for different relationship types:

### Employment workflows

Employment workflows are used when hiring **employees** under an employment agreement. These workflows typically
collect:

- Personal information and contact details
- Right to work verification
- Tax and KiwiSaver information
- Bank account details
- Health and safety acknowledgments
- Role-specific declarations

Employment workflows may differ based on **employment type**:

#### Casual employment

- Often includes availability questions
- May collect information about seasonal work patterns
- Typically asks about flexibility and shift preferences
- Holiday pay arrangements (pay-as-you-go vs accrual)

#### Fixed-term employment

- Includes specific start and end dates
- May require reason for fixed-term arrangement
- Often collects project-specific information
- End-of-contract provisions

#### Permanent employment

- Streamlined compared to casual workflows
- Less focus on induction (completed after starting)
- Reduced Check Your Fit sections
- Focus on long-term role suitability
- Salary rather than hourly rate information

::: prompt
**Key difference:** Permanent workflows typically require **less** information than casual or fixed-term workflows
because they assume long-term commitment and post-start induction.
:::

### Service workflows

Service workflows are used when engaging **contractors** or **service providers** under service agreements rather than
employment contracts. These workflows:

- Focus on business-to-business relationships
- Collect company and certification information
- Verify compliance documents (insurance, health & safety systems)
- May include subcontractor details
- Define service scope and deliverables

Service workflows may differ based on **contractor type**:

#### Service provider (contractor)

- Business details and registration
- Insurance and liability coverage
- Health and safety management systems
- Certification compliance (e.g., GAP, SiteWise, GRASP)
- Service rates and payment terms
- Worksite information and requirements

#### Subcontractor

- Similar to contractor workflows
- Additional accountability tracking
- Connection to primary contractor
- Host business needs visibility of all workers on-site

::: prompt
Service agreements are fundamentally different from employment agreements—they establish business-to-business
relationships rather than employer-employee relationships.
:::

## Common elements across all workflows

Regardless of type, all workflows share certain elements:

### Contract templates

Every workflow includes a **contract template** that:

- Uses field substitutions (chips) to dynamically insert data
- Pulls information from organisation details, job details, workflow answers, and personal overrides
- Cannot conditionally include/exclude entire sections (only substitute specific values)

### Reusable questions

Questions created in PICMI can be:

- Used across multiple workflows
- Updated once and applied everywhere
- Filtered by type, hidden status, or integration mapping

### Personal overrides

Allow specific adjustments for individual circumstances:

- Variations in pay rates
- Modified job descriptions
- Special conditions or arrangements

## Workflow examples

### Employment workflow: Orchard – Casual

1. **Contact Information** (personal details, phone, email)
2. **Right to Work** (visa status, work rights verification)
3. **Check Your Fit** (availability, experience, physical requirements)
4. **Health & Safety** (site safety rules, PPE requirements)
5. **Induction** (site-specific training materials)
6. **Tax & Pay** (IRD number, KiwiSaver, bank account)
7. **Contract** (casual employment agreement)

### Employment workflow: Office – Permanent

1. **Contact Information**
2. **Right to Work**
3. **Background** (qualifications, references)
4. **Tax & Pay**
5. **Contract** (permanent employment agreement)

*Note: Shorter than casual workflow—no induction questions, simplified Check Your Fit*

### Service workflow: Kiwifruit Services Agreement

1. **Contact Information** (grower and contractor details)
2. **Profile & Services** (orchard details, services required)
3. **Worksite** (site information, documents, maps)
4. **Subcontractors** (list of any subcontractors)
5. **Certifications** (CAV, GAP, SiteWise, GRASP compliance)
6. **Pay Rates** (service charges and worker pay rates)
7. **GRASP** (social practice standards)
8. **GLOBALG.A.P.** (food safety and sustainability)
9. **Contract** (services agreement)

## Workflow reuse and duplication

Workflows are designed to be reusable:

- One workflow can be used across multiple jobs
- Duplicate workflows when you need variations (e.g., different contracts for the same role)
- Changes to shared questions affect all workflows using them

::: prompt
When making significant changes, **duplicate** the workflow first rather than editing a live one to avoid disrupting
active applications.
:::

## Best practices

1. **Keep workflows concise**: Only ask for information you truly need
2. **Group related items**: Place similar questions on the same page
3. **Use clear section headings**: Help applicants understand what's required
4. **Test the applicant experience**: Complete the workflow yourself to identify friction points
5. **Remove unnecessary content**: Especially when creating permanent workflows from casual templates
6. **Link external files properly**: Use permanent links (Google Drive version control recommended)

## Related articles

- [Updating workflows](../workflows/updating-workflows)
- [Adding questions](../workflows/questions)
- [Creating a contract template](../article/creating-a-contract-template)
- [Understanding the hiring elements](hiring-elements)
- [Kiwifruit Services Agreement Workflow](../guide/services/kiwifruit-template)
