# Easy Gate

**Easy Gate** is a powerful Obsidian plugin that allows you to embed websites directly into your workspace. It features a modern multi-tab interface, AI-friendly text extraction tools, and seamless navigation—turning Obsidian into a browsing power tool.

## Features

### 1. Multi-Tab Gate Switcher
*   Manage multiple websites ("Gates") simultaneously.
*   Switch between them instantly using the **Tab Bar** at the top of the view.

### 2. Quick Navigation & Creation
*   **Quick Address Bar**: Simply type a URL (e.g., `chatgpt.com`, `google.com`) and press **Enter**.
*   **Auto-Save**: The plugin automatically creates and saves a new Gate for every new URL you visit via the address bar.

### 3. AI Text Integration ("Apply")
Perfect for using AI tools (ChatGPT, Claude, Gemini) alongside your notes:
1.  Select text in the embedded browser (standard drag/select).
2.  Choose your **Insert Mode**:
    *   **Cursor**: Paste at your current cursor position in the active note.
    *   **Bottom**: Append to the end of the currently active note.
    *   **New Note**: Create a brand new note with the selected text.
3.  Click the **Apply** button (Download Icon).

### 4. Popup Management
*   Links that normally open in a new window/tab are caught and opened in a **floating modal** inside Obsidian, keeping your flow uninterrupted.

### 5. Standard Navigation
*   Use the **Back** and **Forward** arrow buttons to navigate browser history.

## Installation

1.  Download the latest release.
2.  Desposit `main.js`, `manifest.json`, and `styles.css` into `.obsidian/plugins/easy-gate/`.
3.  Enable in Community Plugins.

## Development

```bash
npm install
npm run dev
```

## Credits
Forked from `obsidian-open-gate` by `kaiiiz`. Enhanced by `reallygood83`.
