# LearningPlaywright

A small workspace with Playwright examples, JavaScript/TypeScript notes, and practice exercises used while learning Playwright and core JS/TS concepts.

## What is this repository

- Hands-on Playwright test examples and code snippets
- Day-by-day practice files for JavaScript fundamentals
- Small tasks and demos for learning automation and testing

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Playwright (installed via npm)

## Quick setup

Install dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

Add useful npm scripts to `package.json` (example):

```json
"scripts": {
	"test": "playwright test",
	"test:headed": "playwright test --headed",
	"test:debug": "pw-test --debug",
	"codegen": "playwright codegen"
}
```

## Running tests

Run all tests:

```bash
npx playwright test
```

Run a single file or folder:

```bash
npx playwright test tests/example.spec.ts
```

Run with headed browser and trace:

```bash
npx playwright test --headed --trace on
```

## Debugging Playwright tests in VS Code

Create a `launch.json` entry for Playwright (example):

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Debug Playwright Test",
			"type": "node",
			"request": "launch",
			"program": "${workspaceFolder}/node_modules/playwright/cli.js",
			"args": ["test", "--trace", "on", "--headed"],
			"cwd": "${workspaceFolder}",
			"console": "integratedTerminal"
		}
	]
}
```

Note: adjust `args` to target specific files or flags as needed.

## Recommended VS Code extensions

- Playwright for VS Code (official)
- ESLint
- Prettier - Code formatter
- npm Intellisense

Also see the included VS Code shortcuts file for Windows: [VSCode_Shortcuts_Windows_Playwright_JS_TS.md](VSCode_Shortcuts_Windows_Playwright_JS_TS.md#L1)

## Project structure (high level)

- `Chapter01_Basics/`, `Chapter02_Identifiers_Literals/`, `Day*_/` — learning files and examples
- `githubRepo/` — repo-related code or examples
- `Task/` — small practice tasks

You can browse the folders for step-by-step examples used while learning Playwright and JS/TS.

## Contributing

This repo is for personal learning; contributions are welcome as suggestions or PRs. Keep changes simple and add explanations for new examples.

## License

Add a license file if you plan to publish this repository publicly (e.g., MIT).

---

If you want, I can:
- add a sample `package.json` with useful scripts, or
- create a `launch.json` in `.vscode/` for convenient debugging.

## Recent edits

- 2026-05-11: Updated `Day09_ArrayPractice/01_ArrayCreation` to include an `Array.from` example that generates numbers 10 through 20 using `Array.from({ length: 11 }, (_, i) => i + 10)`.
