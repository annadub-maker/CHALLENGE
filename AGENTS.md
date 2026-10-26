
# AGENTS.md

## Project

Website for Creative Code Kortrijk (CCK), a new creative coding club in Kortrijk, Belgium.
It is for people interested in creative coding who want to discover the club: its workshops,
the foundations it teaches, its team and its news.

## Stack & constraints

- Astro, static site
- Content in Astro content collections: `workshops`, `foundations`, `team`, `news`
- Collection schemas are defined in `src/content.config.ts`; a missing frontmatter field fails the build
- No CSS framework; styling is already provided in the starter
- Deployed to GitHub Pages via a GitHub Actions workflow on every push to `main`
- Three developers, each with their own clone and agent, working on feature branches (GitHub Flow)