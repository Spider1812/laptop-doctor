# Repository Guidelines

## Project Structure & Module Organization
- `app/app.vue` contains the current single-page layout; extract reusable blocks into `components/` as they grow to keep `template` sections readable.
- `public/` serves static assets (icons, manifest). Reference them with `/filename.ext` so Nuxt handles caching.
- `screenshots/` and `client-screenshots/` store design references—name files `yyyy-mm-dd-short-description.png` to keep reviews ordered.
- `nuxt.config.ts` is the source of truth for Nuxt modules (Tailwind, Content, Test Utils); update it alongside any new module install.
- Persistent content lives in `.data/content/contents.sqlite`; when editing, document the migration path in your PR so reviewers can reproduce the dataset.

## Build, Test, and Development Commands
- `npm install` installs dependencies and runs the Nuxt prepare step.
- `npm run dev` starts the dev server on `http://localhost:3000` with HMR.
- `npm run test` executes the Vitest suite in CI mode; append `-- --watch` for an interactive loop.
- `npm run build` produces the production bundle; run before merging anything touching config or dependencies.
- `npm run preview` serves the built output for smoke-testing.
- `npm run generate` exports a static build—use it to validate static hosting changes before committing.

## Coding Style & Naming Conventions
- Use Vue 3 SFCs with `<script setup>` and two-space indentation; keep Tailwind utility classes grouped by layout → color → effects.
- Components follow `PascalCase.vue`; composables go under `composables/` as `useThing.ts`.
- Run `npx eslint . --ext .ts,.vue` before pushing; extend `eslint.config.mjs` instead of inlining per-file disables.

## Testing Guidelines
- Adopt `@nuxt/test-utils` with Vitest for component and route tests; create specs under `tests/` mirroring the directory being exercised (e.g. `tests/app/contact.spec.ts`).
- Prefer DOM-oriented assertions via Testing Library helpers and mock network calls; snapshot only for stable, textual output.
- Run suites with `npm run test`; for focused debugging use `npm run test -- --watch` or `-- --runInBand` when diagnosing racey behavior.

## Commit & Pull Request Guidelines
- Follow the Conventional Commit style already in the log (`type(scope): message`), e.g. `style(ui): soften hero gradient`.
- Squash WIP commits locally; each PR should read as a coherent narrative of changes.
- PRs need: summary of intent, linked issue/feedback, test or build results, and updated screenshots when UI shifts (place them in `screenshots/` and link in the description).
- Flag any content or data changes that require reimporting `.data/content/contents.sqlite` so reviewers can verify locally.
