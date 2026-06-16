# PICMI Help Content Instructions

These instructions apply to markdown content under `docs/`.

## Before Writing

- Read `guidelines.md` before creating or materially rewriting Help Centre pages.
- Inspect nearby pages in the same section to match terminology, level of detail, and link style.
- Search existing content before adding a new page so you do not duplicate an existing article.
- Decide the audience first: `business` pages are for organisations using PICMI; `jobseeker` pages are for people applying through PICMI.

## Where Content Belongs

- `docs/business/about-picmi/`: conceptual explanations and product model pages.
- `docs/business/article/`: task pages, operational how-to articles, and reference articles.
- `docs/business/guide/`: longer workflows or process guidance.
- `docs/business/workflows/`: workflow builder, reusable content, questions, documents, and validation.
- `docs/business/integrations/`: integration setup and integration-specific reference.
- `docs/jobseeker/article/`: jobseeker tasks, explanations, and troubleshooting.
- `docs/business/faqs.md` and `docs/jobseeker/faqs.md`: FAQ groups.
- Shared or generic pages can live directly under `docs/` when they are not audience-specific.

## Page Structure

- Use exactly one `#` H1 per page.
- Use `##` for major sections and `###` for subsections.
- Start with a short plain-language introduction when context is needed.
- Prefer concrete user actions over abstract product descriptions in task articles.
- Use tables for field lists, statuses, settings, and comparisons when scanning matters.
- Keep FAQ answers standalone. Do not assume the reader has visited another page first.

## PICMI Markdown Components

- Use `::: instructions` for step-by-step procedures.
- Use `::: explanation` for business or product concepts that need extra context.
- Use `::: prompt` for short supporting notes, warnings, or reminders.
- Use `::: faq Question text?` for FAQ entries.
- When a container includes another container, use four colons on the outer container:

```markdown
:::: instructions

## Example task

1. Go to **People**.
2. Click :::icon dots-vertical::: to open the menu.

::: prompt
This note supports the task.
:::
::::
```

- Avoid relying on the shortened nested syntax that omits the outer closing marker.

## Icons and UI Terms

- Use inline icons with `:::icon icon-name:::` or `:::icon icon-name Label:::`.
- Prefer icons already listed in `guidelines.md` or already used in nearby pages.
- The icon label is escaped as plain text by the plugin. Put markdown formatting outside the icon syntax when emphasis is needed.
- Bold visible UI labels, buttons, menus, tabs, and field names, for example **Save** or **People**.
- For row actions, use the established pattern: locate the row, click the vertical dots menu, then select the action.
- Prefer PICMI terms already used by nearby pages, such as opportunity, application, participant, organisation, workflow, proposal, and jobseeker.

## Instructions Style

- External help pages should normally use detailed steps, not compressed internal shorthand.
- Start procedures from a recognisable top-level area such as **People**, **Employment** > **Jobs**, **Services** > **Proposals**, or **Setup**.
- Use numbered steps for ordered actions.
- Use bullets under a step for options, fields, or explanations.
- Keep prompt blocks short, usually one to three sentences.
- Do not add screenshots unless specifically requested.

## Navigation

- New business pages that should appear in the sidebar must be added to `docs/.vitepress/sidebarBusiness.ts`.
- New jobseeker pages that should appear in the sidebar must be added to `docs/.vitepress/sidebarJobseeker.ts`.
- Only update `docs/.vitepress/nav.ts` for top-level audience or site navigation changes.
- Sidebar links should omit `.md` and start with `/`, for example `/business/workflows/questions`.

## Validation

- Run `yarn docs:build` after content, sidebar, component, plugin, or VitePress config changes when practical.
- If the build fails because of pre-existing unrelated content, report the failure and the relevant lines.
- Do not edit `docs/.vitepress/dist/` to fix build output. Fix the source markdown, component, plugin, or config instead.
