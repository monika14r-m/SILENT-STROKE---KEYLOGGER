# SILENT-STROKE

> A cybersecurity monitoring dashboard simulating red team / blue team keylogger operations — built for security research, education, and UI/UX demonstration purposes.

## Overview

SILENT-STROKE is a fully interactive, frontend-only security dashboard that simulates a keylogger monitoring environment. It is designed to demonstrate how real-world endpoint monitoring tools operate — including keystroke logging, screenshot capture, session tracking, and threat intelligence workflows.

This project is a **UI simulation only**. No actual keylogging, data capture, or network communication takes place.

| Module | Description |
|---|---|
| Dashboard | Live stats — keystrokes, screenshots, security events, active sessions |
| Keystroke Logs | Real-time log viewer with process and window context |
| Screenshot Gallery | Timestamped session screenshots from monitored windows |
| Reports & Export | Generate and download activity reports (PDF / CSV) |
| Settings | Configure capture intervals, encryption, stealth mode, data retention |

## Screenshots

| Dashboard | Logs |
|---|---|
| ![Dashboard](docs/dashboard.png) | ![Logs](docs/logs.png) |

| Screenshots | Settings |
|---|---|
| ![Gallery](docs/screenshots.png) | ![Settings](docs/settings.png) |

## Tech Stack

- **React** + **TypeScript**
- **Vite** — build tooling and dev server
- **Tailwind CSS** — utility-first styling
- **Figma** — original design source

## Getting Started

**Requires Node.js 18+**

```bash
git clone https://github.com/monika14r-m/SILENT-STROKE---KEYLOGGER.git
cd SILENT-STROKE---KEYLOGGER
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build & Deploy

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

The project is deployed via GitHub Pages. Live demo: [monika14r-m.github.io/SILENT-STROKE---KEYLOGGER](https://monika14r-m.github.io/SILENT-STROKE---KEYLOGGER/)

## Project Structure

```
SILENT-STROKE---KEYLOGGER/
├── src/
│   ├── components/         # Dashboard, Logs, Screenshots, Reports, Settings
│   ├── pages/              # Route-level page components
│   └── main.tsx            # App entry point
├── docs/                   # Documentation assets
├── dist/                   # Production build output
├── index.html
├── vite.config.ts
└── package.json
```

## Disclaimer

This project is intended strictly for **educational and portfolio purposes**. It simulates the interface of a security monitoring tool — no real data is captured, stored, or transmitted. Keylogging software used outside of authorized, consensual environments is illegal. Always obtain explicit permission before monitoring any system.

## License

MIT License. See [LICENSE](LICENSE) for details.
