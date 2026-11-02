# Architecture — phase 2

## Scope and data
Next.js 16 App Router, React 19 and TypeScript retain the static export (`next.config.ts`). `src/content/portfolio.ts` is the single typed source of truth, byte-identical to the completed baseline. `SectionContent.tsx` supplies the interactive modal and independently rendered semantic text profile. Facts, dates, project caveats and links are unchanged.

## Presentation and navigation
`PortfolioExperience.tsx` coordinates six-region CSS 3D scene, responsive controls, simplified fallback and URL-hash state. A stable button hit area contains a visually raised decorative slab, preventing pointer movement from losing the click. A React error boundary and CSS capability check fall back to six plain controls. The separately rendered server HTML stays available even if scene initialization fails or JavaScript is disabled.

A native modal dialog provides the top-layer and background inertness; the component also traps Tab, places focus on Back to plan, restores the opener on close, and supports Escape, arrow keys, previous/next, deep links and history. Content scrolls independently of the fixed header and footer. CSS implements open/close and overview/selection transitions; no timers apply in reduced motion. A transient loading indicator is present until client initialization, and is hidden when JavaScript is disabled. Touch uses direct section buttons, a range zoom, directional pan buttons and blank-stage drag. Reduced motion fixes the scene and disables controls that would move or scale it.

## Operational constraints
No WebGL, external API, analytics, account integration or backend added. The only new runtime dependency is independently licensed `@fontsource/space-grotesk`; IBM Plex Mono was already present. `scripts/next.mjs` disables Next telemetry. Do not deploy, push or publish without separate approval. Review `GATES.md`, `CONTENT-SOURCES.md` and `IMPLEMENTATION-REPORT.md` before release.
