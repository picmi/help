# Workflow questions for work status to manage right to work status checks

PICMI offers flexibility for managing right to work status and ensuring compliance with employment legislation.
Employers should
assess their needs based on the scale of operations, regulatory
requirements, and the desired level of automation.

## **Third-party system as integration** (Australia only)

- **Description**: PICMI integrates with third-party systems
  like [CheckWorkRights](../integrations/check-work-rights) to automate work eligibility checks.
- **How it works**:
    - PICMI sends data to the integrated system to verify right to work in real-time.
    - Confirmation of eligibility is returned and stored outside PICMI for compliance records.
- **Advantages**:
    - Ensures automated and accurate checks with minimal manual intervention.
    - Provides real-time updates for ongoing right to work status and visa condition monitoring.
    - Reduces administrative burden while ensuring regulatory compliance.

:::: explanation
### Question design: your work status

| **Question**                                                           | **Options** | **Instructions**                                                                                                                                                                                                                                                                                                                       |
|------------------------------------------------------------------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| I have the legal right to work in Australia                            | Agree       | As part of employment law, we must confirm that you are either an Australian citizen or a visa holder with the right to work in Australia.                                                                                                                                                                                             |
| I agree to have my right to work status confirmed with CheckWorkRights | Agree       | After this application is accepted, and prior to starting work, you are required to confirm your right to work. You will be contacted via email from CheckWorkRights. This tool requires your consent to run the check and proof of documentation, and it verifies information provided against VEVO, the official government website. |
::::

## **PICMI as storage**

- **Description**: Employers use PICMI to securely store records of work eligibility checks and associated
  documentation.
- **How it works**:
    - Employers get applicants to fill in their identification details and provide an image of the relevant document
    - Employers perform manual verification (e.g., via
      [third-party systems](storing-biometric-data#third-party-systems) or face-to-face checks) after the application
    - PICMI acts as a central repository for compliance documentation.
- **Advantages**:
    - Simplifies record-keeping and audit readiness.
    - Aligns with privacy laws by avoiding the storage of sensitive biometric data.
    - Offers a centralised system for managing all employment-related records.

:::: explanation
### Question design

| **Question**                              | **Options**                          | **Instructions**                                                                                                                   |
|-------------------------------------------|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| What is your work status?                 | List of visa options in jurisdiction | If you answer that you are on a visa above, select the tick and fill in the details. Otherwise, select the cross (not applicable). |
| If yes, enter your visa’s passport number | Open text field                      |                                                                                                                                    |
| If yes, enter your visa start date        | Date picker                          |                                                                                                                                    |
| Photo of your Passport (or ID)            | File upload                          |                                                                                                                                    |
::::
