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
- Use relative links inside markdown pages, matching the local style of nearby pages.

## Code Rules

- Keep markdown-it plugin changes small and compatible with existing container syntax.
- The inline icon plugin supports `:::icon icon-name Optional label:::` and renders Material Design Icons classes.
- Vue components are Vue 3 single-file components and may use SCSS where the existing component does.
- Avoid changing generated HTML or build output to fix source issues.
