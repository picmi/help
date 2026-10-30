# Agent Instructions

These instructions are for AI coding agents working in this repository.

## Project Shape

- This is the PICMI Help Centre, built with VitePress.
- Source content lives in `docs/`.
- VitePress configuration lives in `docs/.vitepress/`.
- Custom markdown support lives in `plugins/`.
- Vue components used by custom markdown containers live in `components/`.
- `guidelines.md` is the extended writing guide for PICMI help content.
- `docs/.vitepress/dist/` and `docs/.vitepress/cache/` are generated output. Do not edit them.
- `node_modules/` is installed dependency output. Do not edit it.

## Commands

- Install dependencies with `yarn install` if needed.
- Start local docs development with `yarn docs:dev`.
- Build the site with `yarn docs:build`.
- Preview the built site with `yarn docs:serve`.
- Use `yarn` for package operations. Do not add `package-lock.json`.

## Working Rules

- Check `git status --short` before broad edits and preserve user changes.
- Keep edits scoped to the requested content, config, component, or plugin.
- Match the surrounding file style instead of reformatting unrelated content.
- Keep prose readable and line-wrapped similarly to nearby docs.
- Use ASCII unless a name or existing page content requires non-ASCII text.
- Do not add new dependencies unless the task genuinely requires them.
- After markdown, sidebar, plugin, component, or VitePress config changes, run `yarn docs:build` when practical.

## Content Rules

- For any help article or FAQ work under `docs/`, also follow `.codex/instructions/help-content.md`.
- Before writing or substantially revising help content, read `guidelines.md` and nearby pages in the same section.
- Prefer text instructions and inline icon references over screenshots. The site intentionally avoids image-heavy UI instructions.
- If adding a new page that should be discoverable, update the appropriate sidebar file in `docs/.vitepress/`.
- Use absolute VitePress links in sidebars, such as `/business/article/search`.
- When adding a one-page explainer to `docs/business/about-picmi/picmi-at-a-glance.md`, complete the full registration:
  add the PNG under `docs/img/`, import it in the page's `<script setup>`, add a card with a unique hash id and
  descriptive alt text, add the same id and label to `components/OnePagerOutline.vue` so it appears in the right-hand
  one-page explainers navigation, add the detailed-page and email-help cross-references, and run `yarn docs:build`.
  Keep the ordering hierarchy consistent: the card order in `picmi-at-a-glance.md` is the primary visual order, the
  array order in `OnePagerOutline.vue` must match it, and only actual help pages belong in `sidebarBusiness.ts`.
  Add a new explainer at the bottom of both orders unless the user explicitly requests a different position.
- Use relative links inside markdown pages, matching the local style of nearby pages.

## Image Prompt Authoring Rules

These rules apply when creating or updating the authoring prompts under `docs/img/*.prompt`. They describe how an agent
should write the prompt; they are separate from instructions for running the prompt to generate an image.

- Treat every image prompt as a standalone generation brief. Include the subject, audience, objective, required content,
  visual structure, accuracy constraints, and expected output in the same file. Do not assume the image agent can read
  another prompt, documentation file, earlier conversation, or reference infographic.
- Inspect the sibling prompts before making changes and keep their shared visual language aligned. Repeat the essential
  shared guidance in each standalone prompt rather than referring to a shared prompt.
- For infographic prompts, use a consistent baseline: polished one-page portrait layout, white background, PICMI green
  accents, soft neutral panels, rounded cards, simple consistent icons, clear connecting arrows, generous spacing,
  accessible contrast, concise copy, and New Zealand English. Adapt the information architecture to the subject; do not
  force every infographic into the same diagram or layout.
- State the intended audience and the main takeaway explicitly. Prefer a clear reading order and content that can be
  understood quickly, while retaining enough detail to make the infographic useful as a reference.
- Keep the facts and labels grounded in the prompt or verified repository content. Do not invent product behaviour,
  UI, statuses, settings, integrations, examples, personal data, or capabilities. Use qualified wording when behaviour
  is uncertain.
- Do not instruct the image agent to rely on unspecified supplied documentation or reference images. If a reference is
  necessary, describe the relevant visual or factual requirements in the prompt itself.
- Do not include a PICMI logo, wordmark, placeholder, or logo-like mark unless the exact official PICMI logo asset is
  explicitly supplied for that generation. Never redraw, approximate, stylise, or invent the logo. If the official asset
  is not supplied, instruct the image agent to omit it entirely.
- Avoid screenshots and dense UI reproductions unless the user specifically requests them. Prefer text, simple diagrams,
  cards, arrows, and inline icon concepts that are resilient to product UI changes.
- Preserve useful subject-specific sections when normalising style. Make the smallest scoped edit needed, keep prose
  readable and line-wrapped like nearby prompts, and use `git diff --check` after editing.

## Code Rules

- Keep markdown-it plugin changes small and compatible with existing container syntax.
- The inline icon plugin supports `:::icon icon-name Optional label:::` and renders Material Design Icons classes.
- Vue components are Vue 3 single-file components and may use SCSS where the existing component does.
- Avoid changing generated HTML or build output to fix source issues.
