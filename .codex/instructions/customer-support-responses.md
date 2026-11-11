# Customer Support Response Instructions

Use these instructions when reviewing PICMI Help Centre content to draft an email or other response to a customer who
has a question or problem. The goal is a ready-to-send response that answers the customer's issue clearly, accurately,
and with the least effort needed from them.

## Understand the Issue

- Identify the customer's actual question, what they are trying to do, and what is preventing them. Do not just
  restate their wording.
- Use the information provided in the request, including screenshots or observed account details, as evidence. Make
  clear which facts are confirmed and which are an interpretation.
- When investigating a specific record, identify it using the evidence available and explain briefly how you matched
  it. Do not imply that you checked something you did not check.
- Check the relevant Help Centre pages and repository content for product behaviour or terminology that is not
  established by the customer's message. Do not invent features, settings, statuses, paths, or outcomes.
- Search for a directly relevant FAQ as well as task or conceptual articles. FAQs may describe the customer's problem
  in different words; include the closest FAQ when it answers or helps diagnose the issue, even if it is not an exact
  wording match.
- If evidence is incomplete, qualify the conclusion and give the customer a practical next step. Ask a question only
  when the answer is needed to move forward.

## Write the Response

- Address the customer by name when one is provided. Use a natural, professional, warm tone without sounding overly
  formal or apologetic.
- Lead with the answer or the main finding. Then explain the evidence or reason, followed by the action the customer
  should take.
- Keep the response concise and specific to the customer's situation. Include enough context to make the conclusion
  understandable, but omit investigation steps that do not help the customer.
- Use plain language and the product's established terms. Explain any necessary product term briefly.
- Give clear, actionable instructions. Name the relevant area, item, setting, or next step only when it is verified.
- Avoid blame, speculation presented as fact, internal jargon, filler, and promises about what will happen next unless
  they are supported by the available information.
- Preserve useful details such as the relevant job, application, or account when they help the customer identify the
  issue. Do not introduce unnecessary personal or sensitive information.

## Format and References

- Use a greeting and short paragraphs for email-style responses. Use bullets only when there are multiple steps or
  distinct points that are easier to scan as a list.
- Usually end with the requested next step or a brief offer to help if the customer still has trouble. Do not add a
  generic sign-off unless requested or appropriate to the channel.
- Include a short **References** section at the end only when verified Help Centre articles materially help the
  customer. Keep the list focused on pages relevant to the answer.
- Include the relevant FAQ first when one exists, followed by useful how-to or conceptual guidance. Keep other useful
  references, such as a task article explaining how to search for an applicant, when they support the advice in the
  response; do not drop them just because a FAQ is also included.
- Follow the verification and production URL rules below for every Help Centre link.

## Help Centre References

- Only include a Help Centre link when you can verify the exact target page in this repository. Never guess a URL, page
  slug, route, or application link.
- Find the relevant Markdown page under `docs/` and confirm that it exists and supports the guidance in the response.
  Build its production URL from its path relative to `docs/`, remove `.md`, and prefix it with
  `https://help.picmi.io/`. For example, `docs/business/article/invoices.md` maps to
  `https://help.picmi.io/business/article/invoices`.
- Link to the most specific relevant page and use a descriptive link label. If no relevant page can be verified, omit
  the reference link rather than inventing one.
