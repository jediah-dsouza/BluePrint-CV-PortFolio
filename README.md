# Blueprint CV / Portfolio

A six-section professional portfolio rebuilt in the approved architectural-blueprint language using Next.js static export and CSS 3D. The text profile and all source-backed content remain available without JavaScript; a simplified plan is available if 3D is unsupported or unwanted. **Not approved for publication.**

## Run

Node 24 and npm are required. From this folder:

```sh
npm ci
npm run dev
```

Use the local URL printed by Next.js. To validate the static export:

```sh
npm run typecheck
npm test
npm run build
CHROMIUM_PATH=/path/to/chromium npm run test:e2e
```

The browser suite serves `out/` on localhost; build first. Alternatively install Playwright Chromium in your own environment. Development and build disable Next telemetry. No deployment or remote repository has been configured.

## Review

- `src/content/portfolio.ts`: complete centralized CV and project data. Its hash matches the completed baseline; confirm facts before changing or publishing.
- `src/components/PortfolioExperience.tsx`: scene, dialog, controls and URL state.
- `src/components/SectionContent.tsx` and `src/app/page.tsx`: shared content and semantic text view.
- `DESIGN.md`, `ARCHITECTURE.md`, `REFERENCE-ANALYSIS.md`, `IMPLEMENTATION-REPORT.md`, `GATES.md` and `CONTENT-SOURCES.md`: decisions, evidence, gaps and provenance.
- `screenshots/before/` and `screenshots/phase2/`: baseline and local reconstructed views. `licenses/`: font licence notices.

Before any release, verify employment dates and status, skills, projects, contact details and reference-related rights. LinkedIn was not verified by automated checks; mail delivery is untested. Real-device, Safari, Firefox and screen-reader review remain necessary. Prior baseline Lighthouse output is historical and does not measure this rebuild. Review the implementation report and request separate publication approval.
