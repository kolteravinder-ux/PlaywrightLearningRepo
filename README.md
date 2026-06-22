# Playwright Learning Repository

A comprehensive learning workspace with **Playwright test automation**, **JavaScript fundamentals**, **TypeScript examples**, and **practice exercises** for mastering web testing and core programming concepts.

## 📋 Repository Overview

This project is organized into several key learning areas:

### **Playwright Automation Testing**
- [tests/](./tests/) - Main Playwright test specifications
- [agent-tests/](./agent-tests/) - Agent-based test examples
- [playwright-report/](./playwright-report/) - Test execution reports
- [test-results/](./test-results/) - Test result artifacts

### **JavaScript Learning Path** 
Structured chapter-by-chapter learning in [Javascript/](./Javascript/):
- **Chapter01-02**: Basics, Keywords, Variables, Comments
- **Chapter03-05**: Variable Hoisting, Literals, Operators
- **Chapter06-09**: Conditionals, Loops, Arrays, Functions
- **Chapter10-15**: Strings, Objects, 2D Arrays, Callbacks, Promises, Async/Await
- **Chapter16**: Object-Oriented Programming (Classes, OOP concepts)
- **Day-wise Practice**: Organized daily practice files and tasks

### **TypeScript Examples**
- [Typescript/](./Typescript/) - TypeScript code examples and utilities

### **Practice Tasks & Exercises**
- [Task/](./Task/) - Coding challenges and practical exercises
- [Class Day Wise Data/](./Class%20Day%20Wise%20Data/) - Day-wise class materials

### **Study Materials**
- [JS Notes/](./JS%20Notes/) - HTML cheatsheets and reference notes for Arrays, Functions, Strings, 2D Arrays, Callbacks, and Promises
- [VSCode Shortcuts Guide](./VSCode_Shortcuts_Windows_Playwright_JS_TS.md)

## 🚀 Prerequisites

- **Node.js** (LTS recommended)
- **npm** or **yarn**
- **Playwright** (installed via npm)
- **Git** (for version control)

## ⚙️ Quick Setup

Install dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

## 🧪 Running Playwright Tests

Run all tests:
```bash
npx playwright test
```

Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

Run a specific test file:
```bash
npx playwright test tests/example.spec.ts
```

Debug mode:
```bash
npx playwright test --debug
```

Generate test code interactively:
```bash
npx playwright codegen
```

View test report:
```bash
npx playwright show-report
```

## 📁 Project Structure

```
├── tests/                    # Playwright test files
├── agent-tests/              # Agent-based tests
├── Javascript/               # JS learning chapters (16+ chapters)
├── Typescript/               # TypeScript examples
├── Task/                     # Coding challenges
├── Class Day Wise Data/      # Day-wise materials
├── JS Notes/                 # Study materials & cheatsheets
├── playwright.config.ts      # Playwright configuration
├── package.json              # Dependencies & scripts
└── playwright-report/        # Test execution reports
```

## 📚 Learning Path

1. Start with **Javascript/Chapter01_Basics** for fundamentals
2. Progress through chapters sequentially for deeper concepts
3. Practice with **Task/** directory exercises
4. Apply knowledge to **Playwright tests** for automation
5. Reference **JS Notes/** for quick lookups

## 🔧 npm Scripts

View available scripts in `package.json`:
```bash
npm run [script-name]
```

## 🤖 Agent & Orchestrator

- [RaviPlaywrightAgent.agent.md](./RaviPlaywrightAgent.agent.md) - Custom agent configuration
- [orchestrator/](./orchestrator/) - Test orchestration utilities

## 📝 Additional Resources

- [RaviPlaywrightAgent README](./RaviPlaywrightAgent_README.md)
- [Windows VS Code Shortcuts Guide](./VSCode_Shortcuts_Windows_Playwright_JS_TS.md)

## 🎯 Purpose

This repository serves as a complete learning companion for:
- ✅ Web test automation with Playwright
- ✅ JavaScript fundamentals and advanced concepts
- ✅ TypeScript integration
- ✅ Hands-on coding practice
- ✅ Building automation testing skills

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
