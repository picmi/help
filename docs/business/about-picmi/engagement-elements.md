### Understanding the engagement elements

PICMI uses a consistent structure to manage opportunities across employment and services.

:::: explanation
```text
Organisation / Provider
         ↓
Opportunity + application overrides
         ↓
Workflow
         ↓
Agreement / Contract
```

## Organisation / Provider

The organisation managing the opportunity. This may be an employer or service provider.

## Opportunity

The engagement being offered.  
This can be a job, role, position, contract engagement or service proposal.

::: prompt
**Application overrides** allow specific adjustments for an individual participant or engagement.  
Examples include pay rate variations, service scope details, or participant-specific conditions.
:::

## Workflow

The workflow is the structured intake path for participation. It can include:

- **Questions**: collect required information and declarations
- **Information**: present important details participants need to review
- **Videos**: explain context, expectations, or environment

## Agreement / Contract

After requirements are met, PICMI issues the relevant agreement.  
Depending on opportunity type, this may be an employment agreement, a services agreement, or another participation agreement.

Agreement content is "personalised" using **field substitutions** from:

- organisation data
- opportunity data
- workflow responses
- application (personal) overrides

::: prompt
Field substitutions replace placeholders with known values.  
PICMI currently does not support conditionally removing entire agreement sections per person.
:::
::::

## FAQ

::: faq How do I apply different agreement details for specific participants?
Use opportunity-level details for standard terms, then apply personal overrides when a participant needs specific variations.

If the agreement structure itself needs to be materially different, create a separate opportunity and contract template.
:::
