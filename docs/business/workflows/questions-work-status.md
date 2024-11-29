# Workflow questions for work status to manage work status checks

PICMI offers flexibility for managing work status and ensuring compliance with employment regulations. Employers should
assess their needs based on the scale of operations, regulatory
requirements, and the desired level of automation.

## **Third-party system as integration** (Australia only)

- **Description**: PICMI integrates with third-party systems
  like [CheckWorkerRights](../integrations/check-worker-rights.md) to automate work eligibility checks.
- **How it works**:
    - PICMI sends data to the integrated system to verify work eligibility in real-time.
    - Confirmation of eligibility is returned and stored outside PICMI for compliance records.
- **Advantages**:
    - Ensures automated and accurate checks with minimal manual intervention.
    - Provides real-time updates for ongoing work status monitoring.
    - Reduces administrative burden while ensuring regulatory compliance.

<explanation>

### Question design

| **Question**                                                    | **Options** | **Section heading** | **Instructions**                                                                                                                                                                                                                                                            |
|-----------------------------------------------------------------|-------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| I have the legal right to work in Australia                     | Agree       | Your Work Status    | As part of employment law, we must confirm that you are either an Australian citizen or a visa holder with the right to work in Australia.                                                                                                                                  |
| I agree to have my work status confirmed with CheckWorkerRights | Agree       |                     | After this application is accepted, and prior to starting work, you are required to confirm your status. You will be contacted via email from CheckWorkerRights. This tool requires your proof of documentation and verifies against VEVO, the official government website. |

</explanation>

## **PICMI as storage**

- **Description**: Employers use PICMI to securely store records of work eligibility checks and associated
  documentation.
- **How it works**:
    - Employers get applicants to fill in their identification details and provide an image of the document
    - Employers perform manual verification (e.g., via
      t[hird-party systems](storing-biometric-data#third-party-systems) or face-to-face checks) after the application
    - PICMI acts as a central repository for compliance documentation.
- **Advantages**:
    - Simplifies record-keeping and audit readiness.
    - Aligns with privacy laws by avoiding the storage of sensitive biometric data.
    - Offers a centralised system for managing all employment-related records.

<explanation>

### Question design

| **Question**                              | **Options**                          | **Section heading** | **Instructions**                                                                                                                   |
|-------------------------------------------|--------------------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------|
| What is your work status?                 | List of visa options in jurisdiction | Working Right Visa  | If you answer that you are on a visa above, select the tick and fill in the details. Otherwise, select the cross (not applicable). |
| If yes, enter your visa’s passport number | Open text field                      |                     |                                                                                                                                    |
| If yes, enter your visa start date        | Date picker                          |                     |                                                                                                                                    |
| Photo of your Passport (or ID )           | File upload                          |                     |                                                                                                                                    | 

</explanation>
