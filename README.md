# Blueprint CV — Interactive 3D Portfolio

### Where architecture meets identity — an interactive blueprint of my professional journey.

An interactive, six-section professional portfolio designed around an architectural blueprint concept. Built with **Next.js, React, TypeScript, and CSS 3D**, the project transforms a traditional CV into an immersive digital experience.

The portfolio brings professional information together in a structured, visually engaging interface while keeping its content accessible and meaningful.

## Overview

The experience is organized into six sections:

- **About** — Professional introduction and background.
- **Experience** — Career history and professional experience.
- **Education** — Academic background and qualifications.
- **Skills** — Technical and professional capabilities.
- **Projects** — Selected work and project highlights.
- **Contact** — Contact information and ways to connect.

The interface uses CSS 3D to create its architectural presentation, with a simplified plan available when 3D is unsupported or not preferred.

## Key Features

- Architectural blueprint-inspired visual design.
- Interactive CSS 3D experience.
- Six structured professional portfolio sections.
- Responsive layouts for desktop, tablet, and mobile.
- Simplified content presentation for accessibility and compatibility.
- Semantic text content available without JavaScript.
- Centralized portfolio data for easier content maintenance.
- URL state and interactive section navigation.
- Next.js static export support.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and static export |
| React | Component-based interface |
| TypeScript | Type-safe application development |
| CSS 3D | Interactive visual presentation |
| CSS | Styling, layouts, and responsive design |
| Vitest | Automated component and content testing |
| Playwright | End-to-end browser testing |

## Getting Started

### Prerequisites

- Node.js 24
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/jediah-dsouza/BluePrint-CV-PortFolio.git
```

Navigate into the project directory:

```bash
cd BluePrint-CV-PortFolio
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Next.js in your browser.

## Validation and Build

Run the project's validation commands:

```bash
npm run typecheck
npm test
npm run build
```

The production build generates a static export in the `out/` directory.

### End-to-End Testing

The browser test suite runs against the generated static export. Build the project first, then run:

```bash
CHROMIUM_PATH=/path/to/chromium npm run test:e2e
```

Alternatively, install Playwright Chromium in your environment and configure the browser executable as needed.

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── PortfolioExperience.tsx
│   │   └── SectionContent.tsx
│   └── content/
│       └── portfolio.ts
├── tests/
├── screenshots/
│   ├── before/
│   └── phase2/
├── licenses/
├── scripts/
├── tasks/
├── ARCHITECTURE.md
├── DESIGN.md
└── package.json
```

## Implementation Notes

- `src/content/portfolio.ts` contains the centralized CV and project information.
- `src/components/PortfolioExperience.tsx` manages the interactive scene, dialogs, controls, and URL state.
- `src/components/SectionContent.tsx` provides shared section content.
- `src/app/page.tsx` provides the semantic text presentation.
- `ARCHITECTURE.md`, `DESIGN.md`, `REFERENCE-ANALYSIS.md`, `IMPLEMENTATION-REPORT.md`, `GATES.md`, and `CONTENT-SOURCES.md` document design decisions, implementation details, evidence, and content provenance.
- `screenshots/before/` and `screenshots/phase2/` contain baseline and reconstructed visual references.
- `licenses/` contains the relevant font licence notices.

## Quality Assurance and Publication Status

**Publication status: Pending final review and approval.**

The project has passed its local type-checking, automated test, and production build commands. However, the following items require review before public release:

- Verify employment dates, professional status, skills, projects, and contact information.
- Confirm the rights and permissions associated with visual references.
- Verify LinkedIn information; it has not been confirmed through automated checks.
- Test contact email delivery; it remains unverified.
- Complete real-device testing and compatibility reviews in Safari and Firefox.
- Conduct a screen-reader and accessibility review.

Historical baseline Lighthouse results are not measurements of the current rebuild.

Please refer to `IMPLEMENTATION-REPORT.md` and the supporting project documentation for the detailed implementation record and outstanding review items.

## Project Goal

The goal of Blueprint CV is to explore a more expressive way of presenting professional identity online — combining the clarity of a traditional CV with the visual language of architecture and interactive web design.

---

**Built with Next.js, React, TypeScript, and CSS 3D.**

*Where architecture meets identity.*
