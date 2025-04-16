### Understanding the hiring elements

The hiring elements make the application process in PICMI that is designed to be simple and structured, guiding people through details from the organisation and the job through the workflow to the contract. Personal overrides provide flexibility to accommodate unique circumstances, ensuring that the application process is legal, fair and inclusive for everyone.


:::: explanation
```
Organisation
    ↓
   Job  + personal overrides
    ↓
  Workflow
    ↓
Contract (with field substitutions)
```

## Organisation
This is the business that is issuing employment agreements. 

## Job
Within each organisation, there are specific roles or positions available. Each job has its own set of requirements, responsibilities, and details that a person needs to consider when applying.

::: prompt
**Personal overrides** allow specific adjustments to be made in the application for individual employment agreements. They are special considerations that can be applied to a person's application based on their unique circumstances. These might include variations in pay rates, job description and conditions.
:::

## Workflow
The workflow consists of various steps that the person goes through to apply for the job. This typically includes:

- **Questions**: The person may need to answer questions to provide personal information, make declarations and confirm their understanding
- **Information**: The person may be presented with details about the organisation, the job, and what is expected.
- **Videos**: There may be video content to help the person understand the role and environment better.

## Contract
Once the person has successfully navigated through the workflow and met all the requirements, they will be presented with a contract. This document outlines the terms of employment, including responsibilities, salary, and other important details. The contract also allows for **dynamically added details** (called field substitutions which refers to content somewhere else) from the organisation, job, workflow answers as well as personal overrides.

::: prompt
A contract can only be personalised using field substitutions, which replace placeholders with specific details (e.g., job title, pay rate) from the organisation, job, workflow answers, or personal overrides.

Currently, entire sections of the contract cannot be conditionally included or excluded. For example, if a specific clause is only relevant to leader roles, it cannot be removed for non-leader roles—it must remain in the contract but can be adjusted using field substitutions.
:::
::::

## FAQs

::: faq How can I update a specific section of the contract, such as the remuneration section, for a particular job role (e.g., team leaders) while ensuring the change applies globally to all contracts for that role?
In PICMI, contracts are personalised using **field substitutions**, which means you can modify specific details like remuneration by updating the **job details** or **personal overrides**. However, contracts do not currently support conditionally including or excluding entire sections based on job roles.

For this scenario—updating the remuneration section specifically for team leader roles:

1. **Update the job details:** Adjust the remuneration field within the team leader job so that the correct pay information is substituted in the contract.
2. **Use personal overrides:** If specific team leaders have unique remuneration terms, you can apply personal overrides to adjust their contract details. 

If you need **structurally different contracts** for different roles (e.g., a separate remuneration section for leaders vs. general workers), you would need to **create a separate job** for team leaders with its own contract template.
:::
