# AGENTS.md

## Purpose
- Operating guide for coding agents in this workspace.
- Captures current commands, style conventions, and verification rules from checked-in files.
- Follow this before edits so changes match existing patterns.

## Scope
- Root app: `/mnt/e/homrpage3`
- Nested app: `/mnt/e/homrpage3/project`

## Repository Topology

### Root app (`/mnt/e/homrpage3`)
- Stack: Vite + React + Tailwind (`@tailwindcss/vite`).
- App code: `src/`
- Entries: `src/main.jsx`, `src/App.jsx`, `src/index.css`
- Layout/sections: `src/components/layout/`, `src/components/sections/`
- Config: `package.json`, `vite.config.js`, `tailwind.config.js`

### Nested app (`/mnt/e/homrpage3/project`)
- Separate Vite + React app (mostly starter template).
- App code: `project/src/`
- Entries: `project/src/main.jsx`, `project/src/App.jsx`
- Config: `project/package.json`, `project/vite.config.js`, `project/eslint.config.js`

## Package Manager and Runtime
- Use `npm` (both apps include `package-lock.json`).
- Run commands in the target app directory, or use `npm --prefix project ...` from root.
- No pinned Node version found (`.nvmrc`/`engines` absent).

## Build / Lint / Test Commands

### Root app commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

### Nested app commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

### Run nested app from root
- `npm --prefix project run dev`
- `npm --prefix project run build`
- `npm --prefix project run lint`

## Test Status and Single-Test Guidance
- No `test` script exists in `package.json` or `project/package.json`.
- No `*.test.*` or `*.spec.*` files exist under `src/` or `project/src/`.
- Single-test execution is not currently available in this repository.

### If test tooling is added later (reference only)
- Vitest single file: `npx vitest run src/path/to/file.test.jsx`
- Vitest by name: `npx vitest run src/path/to/file.test.jsx -t "test name"`
- Jest single file: `npx jest src/path/to/file.test.jsx`
- Jest by name: `npx jest src/path/to/file.test.jsx -t "test name"`
- Use these only after the runner is installed/configured.

## Tooling and Config Notes
- Root app imports Tailwind in `src/index.css` via `@import "tailwindcss"`.
- Root app has a `lint` script but no checked-in ESLint config file.
- Nested app uses ESLint flat config in `project/eslint.config.js`.
- No CI workflows in `.github/workflows/`; no `Makefile`/`justfile`.

## Code Style Guidelines

### Language and modules
- Use JavaScript + JSX with ESM imports/exports.
- Keep component filenames in PascalCase.

### Imports
- Preferred order:
  1. React / hooks
  2. Third-party packages
  3. Local components/assets/utils
  4. Local CSS
- Root app commonly imports `React` explicitly; preserve local file style.

### Component patterns
- Functional components only.
- Root app mostly uses `const Component = () => { ... };`.
- `function Component()` also exists (for example `src/App.jsx`); do not refactor only for style.
- Keep sections in `src/components/sections/` and shared layout in `src/components/layout/`.

### Formatting
- Match surrounding file style; avoid mass reformatting.
- Root app trend: 4-space indentation, semicolons common, single quotes common.
- Nested app trend: 2-space indentation, semicolonless style, single quotes.

### Naming
- Components/files: PascalCase.
- Variables/functions: camelCase.
- Booleans: `is*` / `has*` prefixes.
- Event handlers: `handle*` naming (`handleSubmit`, `handleChange`).
- Local collections: descriptive nouns (`navLinks`, `problems`, `content`).

### State, effects, and rendering
- Use `useState` for local UI state.
- Use `useEffect` cleanup for listeners/subscriptions (see `Navbar.jsx`).
- Keep simple mapping/render logic near JSX callsites.
- Keep animation config inline only when small/readable.

### Styling
- Root app is utility-first with Tailwind classes in JSX.
- Reuse design tokens from `src/index.css` (`--color-*`, `--font-*`, `--animate-*`).
- Prefer semantic token usage (`primary`, `text-secondary`, `brand-surface`) over ad-hoc colors.
- Prefer class-based styling over inline style objects.
- Preserve responsive breakpoints (`sm:`, `md:`, `lg:`).

### Content and localization
- Root app UI copy is mostly Korean-language.
- Preserve language consistency in nearby sections.
- Keep branding consistent (`LOKANA`, on-premise messaging).

### Error handling
- Frontend async logic is limited currently.
- When adding async behavior, handle expected failures explicitly.
- Provide user-visible fallback where appropriate.
- Avoid empty catch blocks and broad suppression patterns.

### Types and contracts
- No TypeScript enforcement in active source directories.
- For complex JS object shapes, keep names explicit and add lightweight runtime guards when useful.
- Introduce TypeScript only with explicit scope and coordinated config updates.

## Linting Expectations
- Nested app uses ESLint recommended + React Hooks + React Refresh.
- Nested app custom rule: `no-unused-vars` error except names matching `^[A-Z_]`.
- Root app has no committed ESLint config; avoid lint-style churn unrelated to the request.

## Cursor / Copilot Rules
- No `.cursor/rules/` directory found.
- No `.cursorrules` file found.
- No `.github/copilot-instructions.md` file found.
- If added later, update this guide and treat them as higher-priority instructions.

## Agent Execution Checklist

### Before edits
- Confirm target app (root vs `project/`).
- Read nearby files and match local conventions.
- Keep changes focused and minimal.

### After edits
- Run relevant build/lint commands for touched app(s).
- If no tests exist, state that explicitly.
- Do not claim test coverage that was not executed.

## Sources Used
- `package.json`, `project/package.json`
- `vite.config.js`, `project/vite.config.js`, `tailwind.config.js`, `project/eslint.config.js`
- `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/components/layout/Navbar.jsx`, `src/components/sections/*.jsx`
- `project/src/main.jsx`, `project/src/App.jsx`
