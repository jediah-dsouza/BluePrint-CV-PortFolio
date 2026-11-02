# Phase 2 acceptance ledger

Dependency order: A baseline → B visual scene → C interactions/dialog → D shared content → E touch/responsive → F browser and documentation review. Evidence is same-session local verification, not independent certification. “Met” below is the local implementation check, not publication approval.

| ID | Acceptance / check | State | Evidence |
|---|---|---|---|
| G1 | Isolated complete baseline and recoverable backup; compare archive/content hashes. | met | Archive and backup both `6eb0a97f17e3fbb0489828679c3a6a1e975d8e7fd0fdb6f35ca9ce5a6c59e36d`; content matches baseline `feedf7a0352e3bebf9453b48bd4d99019bc2fdb1a7ef22f6f7d8efddb1a71ac6`. |
| G2 | Six-region CSS 3D composition with requested palette/type; inspect reference and four screenshot sizes. | met | Screenshot review and framing refinement recorded in `IMPLEMENTATION-REPORT.md`; visual acceptance by owner remains G12. |
| G3 | Six sheets, keyboard, focus containment/restoration, history/deep links; local Playwright. | met | Browser tests cover six sections, Tab wrap, Escape, previous/next, arrow keys, deep links and history, including opener restoration on browser back. |
| G4 | Preserve CV and projects; semantic/no-JS and CSS capability fallback. | met | Byte-identical data source, shared content renderer, no-JS and fallback tests. Initial intro statement is included in text view. |
| G5 | Six mobile controls ≥44px, zoom/pan/tap, no overflow. | met | Browser tests at 320, 390, 768, 844, 1440, 1920 widths; touch emulation and CDP drag. Physical-device testing remains G11. |
| G6 | Reduced motion: no camera move/scale, lift or animation on interaction. | met | Chromium reduced-motion computed-transform and animation tests; touch movement controls disabled. |
| G7 | Unit/component, e2e, axe, typecheck, static export. | met | See `TEST-RESULTS.md`; automated axe is not a conformance determination. |
| G8 | Documentation, before/after images and known differences. | met | Requested files, report and matching desktop/mobile baseline/final screenshots included, plus tablet/landscape and overlay views. |
| G9 | No deployment, remote changes, analytics, unlicensed source/assets, or renderer change. | met | Local CSS/Next.js work; no publication or push. Rights review for close visual reconstruction remains G10. |
| G10 | Confirm facts, contact, reference-related rights and release permission. | unmet | Owner to verify dates/status, education, projects, skills, contact, reference rights and explicit publication permission. |
| G11 | Physical touch devices, Safari, Firefox, screen reader and fresh performance audit. | unmet | Owner/reviewer to test on representative devices; no physical-device, screen-reader or cross-browser claim made. |
| G12 | Owner accepts visual fidelity and identified CSS differences. | unmet | Review screenshots and local build; decide whether the approximation meets the brief. Any renderer change requires separate approval. |
