# Bank Account Numbers (NZ)

PICMI stores bank account numbers in the standard New Zealand format used for payroll processing. To ensure
compatibility with payroll providers and payment file formats, PICMI uses a **two-digit suffix** for bank accounts.

::: prompt
In the case of a bank account with a suffix of with three digits (for example `097`), enter the **last two digits only** (`97`).
:::

When entering bank account details in PICMI, applicants and administrators should enter the account number in the
following format:
`BB-BBBB-AAAAAAA-SS`

Where:

| Part        | Description                      |
|-------------|----------------------------------|
| **BB**      | Bank code                        |
| **BBBB**    | Branch code                      |
| **AAAAAAA** | Account number                   |
| **SS**      | Account suffix (last two digits) |

Example:

`02-0340-0008252-09`

PICMI stores and reports the bank account exactly as entered using this format.

## Why PICMI Uses Two-Digit Suffixes

Although some New Zealand bank accounts may display a **three-digit suffix**, most payroll systems and bank payment file
formats only support **two-digit suffix fields**.

PICMI integrates with multiple payroll providers. To ensure exported payroll data works reliably across all providers,
PICMI standardises on **two-digit suffixes**.

For accounts that appear with three digits (for example `097`), users should enter the **last two digits only** (`97`).

::: instructions
## Entering Your Bank Account

When entering your bank account details:

1. Use the New Zealand bank account format.
2. Enter the **last two digits of the suffix**.
3. Check the account carefully before submitting.

Example:

| Displayed Account   | Enter in PICMI     |
|---------------------|--------------------|
| 02-0340-0008252-097 | 02-0340-0008252-97 |

:::
## FAQs

<button @click="toggleExpandAll">{{ expandAll ? 'Collapse All' : 'Expand All' }}</button>


::: faq Why does PICMI only allow two-digit suffixes?
PICMI integrates with multiple payroll systems. Many payroll providers and bank payment file formats only support
two-digit suffix fields. Using a two-digit suffix ensures bank account numbers export correctly for payroll processing.
:::

::: faq My bank account shows a three-digit suffix. What should I enter?
If your bank account shows a three-digit suffix (for example `097`), enter the **last two digits only** (`97`).
:::

::: faq Has PICMI removed a digit from my bank account?
No. PICMI stores the suffix as a two-digit value. If a three-digit suffix was entered, only the last two digits are used
to match payroll provider requirements.
:::

::: faq Why does my bank statement show three digits but PICMI only shows two?
Some banks display suffixes with three digits, but many payroll systems process them using two digits. PICMI follows the
two-digit format to ensure compatibility with payroll exports and bank payment files.
:::

::: faq Will my payments still go to the correct account?
Yes. Using the final two digits of the suffix ensures the account is recorded in the format expected by payroll systems
and payment files.
:::

::: faq What happens if I enter three digits?
PICMI records the suffix in two-digit format. To avoid confusion, you should always enter the **last two digits only**.
:::

<script setup lang="ts">import {ref} from 'vue';

const expandAll = ref(false);

const toggleExpandAll = () => {
expandAll.value = !expandAll.value;
}
</script>
