# VS Code Shortcuts (Windows)

Useful Visual Studio Code keyboard shortcuts for Playwright and JavaScript/TypeScript development on Windows.

---

## Quick reference
- **Command Palette:** `Ctrl+Shift+P` — run any command.
- **Open file (Quick Open):** `Ctrl+P` — jump to a file by name.
- **Open integrated terminal:** `Ctrl+` ` (backtick)` — show/hide terminal.
- **New terminal:** `Ctrl+Shift+` ` (backtick)`
- **Save file:** `Ctrl+S`  
- **Save All:** `Ctrl+K S` (chord)
- **Close editor:** `Ctrl+W`
- **Toggle sidebar:** `Ctrl+B`

## Editing
- **Format document:** `Shift+Alt+F`
- **Format selection:** `Ctrl+K Ctrl+F`
- **Quick Fix / Show Code Actions:** `Ctrl+.`
- **Rename symbol:** `F2`
- **Toggle line comment:** `Ctrl+/`
- **Toggle block comment:** `Shift+Alt+A`
- **Move line up / down:** `Alt+Up` / `Alt+Down`
- **Copy line up / down:** `Shift+Alt+Up` / `Shift+Alt+Down`
- **Duplicate selection / line:** `Shift+Alt+Down` (copies current line down)
- **Delete line:** `Ctrl+Shift+K`
- **Indent / Outdent line:** `Ctrl+]` / `Ctrl+[`

## Multi-cursor & selection
- **Add cursor (mouse):** `Alt + Click`
- **Add cursor above / below:** `Ctrl+Alt+Up` / `Ctrl+Alt+Down`
- **Select all occurrences of current selection:** `Ctrl+F2`
- **Select next occurrence:** `Ctrl+D`
- **Column (box) selection:** `Shift+Alt+Drag` or `Ctrl+Shift+Alt+Arrow`

## Navigation & Search
- **Go to Symbol (in file):** `Ctrl+Shift+O`
- **Go to Definition:** `F12`
- **Peek Definition:** `Alt+F12`
- **Go to Type Definition:** `Ctrl+F12`
- **Show References:** `Shift+F12`
- **Open Search:** `Ctrl+F`
- **Find in files:** `Ctrl+Shift+F`
- **Replace in files:** `Ctrl+Shift+H`
- **Toggle Problems panel:** `Ctrl+Shift+M`
- **Open Explorer:** `Ctrl+Shift+E`
- **Open Source Control:** `Ctrl+Shift+G`
- **Open Run & Debug:** `Ctrl+Shift+D`

## Editor groups & layout
- **Split editor:** `Ctrl+\`
- **Focus into next editor group:** `Ctrl+K Ctrl+Right` (or use `Ctrl+1/2/3` for groups)
- **Toggle Zen Mode:** `Ctrl+K Z`
- **Toggle Fullscreen:** `F11`

## Debugging (general)
- **Start/Continue:** `F5`
- **Step Over:** `F10`
- **Step Into:** `F11`
- **Step Out:** `Shift+F11`
- **Toggle Breakpoint:** `F9`
- **Open Run & Debug view:** `Ctrl+Shift+D`

## Terminal & Tasks
- **Run Task:** `Ctrl+Shift+B`
- **Run Active File in Integrated Terminal (select Node command):** use Command Palette `Ctrl+Shift+P` → `Run Active File` or configure a `launch.json`.
- **Toggle integrated terminal:** `Ctrl+` ` (backtick)`

## Git / Source Control
- **Commit (open input):** `Ctrl+Enter` (when focus in Source Control message box)
- **Stage/unstage via UI:** use Source Control view (`Ctrl+Shift+G`) — or right-click file in Explorer.
- **Open file history / timeline:** `Ctrl+Shift+G` then view file timeline (depends on extensions).

## TypeScript / JavaScript specific
- **Go to Implementation:** `Ctrl+F12`
- **Fix imports / Organize imports:** `Ctrl+.` (then choose the action) or `Shift+Alt+O` (depends on extensions)
- **Show Type Info (hover):** Hover or `Ctrl+K Ctrl+I`
- **Convert var to let/const:** `Ctrl+.` (Quick Fix)

## Playwright-specific tips (VS Code)
- Playwright actions are mostly exposed through the Command Palette: open it `Ctrl+Shift+P` and search for "Playwright".
  - Examples: `Playwright: Run Tests`, `Playwright: Debug Tests`, `Playwright: Codegen` (commands depend on the Playwright extension).
- There are no default global keys for Playwright extension commands — consider binding them in `File > Preferences > Keyboard Shortcuts` (`Ctrl+K Ctrl+S`).
- To run Playwright tests from the terminal: `npx playwright test` (open terminal with `Ctrl+` `).`
- To debug a Playwright test: create/confirm a `launch.json` configuration and use `F5`.

## Useful views & commands
- **Keyboard Shortcuts editor:** `Ctrl+K Ctrl+S` — remap keys.
- **Open Settings (UI):** `Ctrl+,`
- **Show Extensions:** `Ctrl+Shift+X`
- **Toggle Problems/Output/Debug Console/Terminal panels:** `Ctrl+Shift+M` / `Ctrl+Shift+U` / `Ctrl+Shift+Y` / `Ctrl+` `

## Custom keybinding suggestions for Playwright
- Bind the common Playwright commands you use to keys via `Ctrl+K Ctrl+S` (e.g., `Playwright: Run Tests in Current File` → `Ctrl+Alt+R`).

## Tips and best practices
- Use the Command Palette (`Ctrl+Shift+P`) whenever unsure — it exposes all commands including extension features.
- Set up a `launch.json` for Playwright to enable `F5` debugging.
- Add useful NPM scripts in `package.json` (e.g., `"test:playwright": "playwright test"`) and run them from the NPM Scripts view.
- Install the official Playwright extension for convenient UI-run/debug/codegen integration.

---

If you want, I can:
- Add default keybinding suggestions for specific Playwright commands, or
- Create a `README` snippet showing how to configure a `launch.json` for Playwright debug.

