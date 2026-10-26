# AGENTS.md

## Project
- Website for Creative Code Kortrijk (CCK), a new creative coding club in Kortrijk, Belgium.
- Audience: people interested in creative coding who want to discover the club,
  its workshops, its values and its team.
- Built by a team of 3 students (Web 3 "Git Party"), each with their own agent,
  working in one GitHub repository with GitHub Flow (feature branches + pull requests).

## Stack & constraints
- Astro v7 with TypeScript.
- Content is Markdown in Astro content collections, in `src/content/`:
  - `workshops`, `foundations`, `team` (each has an `img/` folder)
  - `news` (planned, not defined yet)
- Collection schemas are in `src/content.config.ts`. A missing frontmatter field
  makes the build fail.
- Each collection has a list component and a card component in `src/components/`
  (e.g. `Workshops.astro` + `WorkshopCard.astro`).
- Each collection gets a detail page with the entry `id` as a dynamic route
  parameter. Starter files are in `resources/<collection>/detailpage`.
- Pages: `src/pages/` (`index.astro`, `news.astro`, `about.md`; a `/code` page is planned).
- Layouts: `src/layouts/Base.astro` and `src/layouts/Markdown.astro`.
- The starter code contains placeholders like `##WHAT-SHOULD-BE-HERE##` that must be
  replaced with real content or logic.
- No CSS framework. Plain CSS in `src/styles/` (`reset.css`, `global.css`, `markdown.css`).
- Local dev: `npm install`, then `npm run dev` (http://localhost:4321).
- Deployment: GitHub Pages via a GitHub Actions workflow, triggered on changes to `main`.