# Reference analysis — Ilian Futekov Blueprint CV

**Phase:** inspection and planning only; no implementation authorized by this report.
**Reference:** [Futekov3216/Ilian-Futekov-Bio](https://github.com/Futekov3216/Ilian-Futekov-Bio), default branch `master`, inspected at commit [`265f1d5f7b1834c2b10f4aff4aefab8280936727`](https://github.com/Futekov3216/Ilian-Futekov-Bio/tree/265f1d5f7b1834c2b10f4aff4aefab8280936727), cloned separately under `/tmp`.
**Inspection date:** 2026-11-02.
**Baseline:** the complete `blueprint-cv-complete.zip` supplied in the previous handoff, extracted separately for read-only comparison. The working directory `/data/blueprint-cv` contains the older refined prototype rather than that complete archive. Do not overwrite it or assume it contains the completed content; identify and restore the desired baseline only after approval.

## 1. Executive findings

- The actual reference is a fullscreen, instrument-like blueprint canvas, not a side-by-side hero and content page. Its dominant material is navy/blue with off-white linework and **orange** interaction accents. The central plan resembles a miniature browser page; hover raises distinct blocks into tall extrusions and projects cyan hologram labels.
- It uses **five** regions (About, Experience, Education, Skills, Contact); there is **no Projects region or sheet**. Your completed portfolio has six, including Projects. Match the visual language while retaining your six sections; the placement of the sixth requires a deliberate adaptation.
- Actual implementation is Three.js/WebGL despite a contradictory opening README sentence calling the 3D pure CSS. The later README, package, component and scene source agree on WebGL. Your last approved implementation uses CSS 3D. Do not switch renderers simply to copy the reference; prototype the difficult effects in CSS first, measure fidelity and usability, and request approval for any WebGL change if those tests fail.
- No repository licence or grant was located; GitHub's API reports `license: null`. Inspecting is not permission to redistribute its code, artwork or text. Fonts have independently published SIL OFL licences, subject to their own conditions. See section 6.
- Your existing semantic CV, non-3D fallback, six sections, keyboard behavior, strict reduced-motion behavior and factual content must not be lost to imitate reference weaknesses.

## 2. Evidence and limits

Inspected the reference README, `HOW-IT-WORKS.md`, package and lockfile metadata, Vite configuration, all key React components, stylesheet, camera and view hooks, WebGL scene and procedural drawing code, and the public/built asset inventory. The [source overview](https://github.com/Futekov3216/Ilian-Futekov-Bio/blob/265f1d5f7b1834c2b10f4aff4aefab8280936727/README.md) contains the documented CSS/WebGL contradiction; [package.json](https://github.com/Futekov3216/Ilian-Futekov-Bio/blob/265f1d5f7b1834c2b10f4aff4aefab8280936727/package.json) and [BlueprintScene.ts](https://github.com/Futekov3216/Ilian-Futekov-Bio/blob/265f1d5f7b1834c2b10f4aff4aefab8280936727/src/three/BlueprintScene.ts) establish the actual renderer.

Ran the committed `docs/` build from an isolated localhost-only static server. No packages were installed and no reference build or project files were changed. The preview used headless Chromium with software WebGL and blocked all non-local requests, including the reference's Google Analytics. Inspected **1440×900**, **768×1024**, **390×844** and **844×390** viewport screenshots, including focused regions and sheet states. This is the committed build, not a freshly built source checkout; perfect correspondence between build and source was not independently established. This is an emulated browser check, not real-device, Safari, Firefox or screen-reader validation. The software renderer was slow; some screenshots were captured mid-transition, so stable-state descriptions below rely on stable images and source together.

The completed portfolio was compared from its source and prior included screenshots, not by modifying or launching the older workspace project. No deploy, Git push, remote change, public preview or modification of the user's existing source was performed. SHA-256 checks of the older project's source files matched before/after.

## 3. Reference implementation overview

- **Stack:** React 19, TypeScript, Vite 8 and Three.js; no UI framework or separate animation library in the listed runtime dependencies. The Next.js/App Router site should not be migrated to Vite merely for visual similarity.
- **Structure:** `App.tsx` coordinates header, lazy-loaded scene, mobile navigation, reticle and sheet state. `src/data/cv.ts` contains profile/sections and plan coordinates. `src/three/BlueprintScene.ts` owns mesh, camera, raycasting and render loop; `src/three/textures.ts` draws the board, zone art and holograms on canvas. CSS handles page grid, controls, dialog and section content. [App](https://github.com/Futekov3216/Ilian-Futekov-Bio/blob/265f1d5f7b1834c2b10f4aff4aefab8280936727/src/App.tsx) · [data](https://github.com/Futekov3216/Ilian-Futekov-Bio/blob/265f1d5f7b1834c2b10f4aff4aefab8280936727/src/data/cv.ts) · [styles](https://github.com/Futekov3216/Ilian-Futekov-Bio/blob/265f1d5f7b1834c2b10f4aff4aefab8280936727/src/styles/global.css).
- **Loading:** lazy chunk plus spinner until canvas textures and fonts are ready; source races font readiness against a four-second timeout. Scene fades in. This is a genuine initialization state, not a scripted splash.
- **Assets:** the visual plan and holograms are generated as canvas textures; public files include favicons, an Apple icon, `hero_about_panel.svg` and `contact_panel.svg`. No source or HTML reference to those two panel SVGs was found; don't assume they are used in the rendered scene. The HTML uses the icon assets. Bundled font files appear under `docs/assets`.
- **Privacy:** `index.html` includes a Google Analytics tag. External requests were blocked in our local preview. Do not transplant the tag or its measurement ID; no analytics is authorized by this request.

## 4. Visual design specification

### Composition and hierarchy

- A near-viewport-height stage (`100dvh`; desktop minimum 640px) fills the screen. The entire backdrop is a navy architectural graph: fine 24px grid with a stronger 120px grid. The grid drifts slowly when motion is allowed.
- Top left: the owner's name in very large bold off-white type, then an orange monospace role line prefixed with `>` and ending in a blinking underscore. Top right on desktop: a tiny two-line, letter-spaced instructional legend with an orange dot. There is no conventional desktop header menu or side-by-side biography.
- A large, obliquely tilted, central miniature browser-window plan dominates the viewport. On desktop it extends across most of the width and overlaps the header's visual territory, rather than sitting inside a smaller boxed canvas. Thin pale-blue outlines, a double frame, faux browser chrome, address bar, small nav marks, fine grid and orange horizontal/vertical dimension lines contribute to the architectural drawing. Dimensions display live viewport pixel values; this was verified in source.
- Reference plan geometry uses a **900×600** internal coordinate plane, tilted approximately **50° on X and −30° on Z**. Zones: wide About upper left, narrower Experience upper right, Education and Skills across the middle, full-width Contact along the bottom. Contents look like miniature UI wireframes, not just uniform labeled tiles. No sixth zone exists in the source.
- The screenshot at 1440×900 shows the plan spanning roughly x=110–1345 and y=110–830, with the header starting near x=56, y=40. These are observations at that viewport, not universal pixel guarantees.

### Palette, type and surfaces

| Role | Reference value / treatment |
|---|---|
| Background | `#0b1a33`; additional dark navy `#0e2242`, `#10264a`, `#16325c` |
| Blueprint blue | `#1e4d8c`; line/text blues `#7fb2f0`, `#c9ddf5` |
| Light text | warm off-white `#f2efe6` |
| Primary action/active | orange `#ff7a3d`, hover light orange `#ffa572` |
| Hologram | icy cyan `#8fe6ff`, scan lines and glow |
| Display/body | Space Grotesk 400/500/700; main heading `clamp(40px,6vw,84px)`, weight 700, line-height .92, letter-spacing −.03em |
| Technical labels | IBM Plex Mono 400/500/600; uppercase, often 11–13px and widely tracked; role `clamp(16px,2vw,22px)` on desktop |

Buttons are square-cornered, outlined rectangles, typically 1–1.5px pale borders, monospace uppercase labels and a minimum 44px height; primary contact email is filled orange. Hover states turn orange. Panel surfaces are translucent deep navy with light-blue outlines; section tags are small bordered chips. Text is comfortable, left aligned, and layout-driven rather than image-led.

### Sheets and individual components

- Selecting a region leads to a darkened, blurred plan and an **overlaid centered dialog**, not a sheet inserted into document flow. The dialog has a 40px graph grid, 1.5px pale border, orange corners and scanning lines, shadow, header bar with orange dot/title and `BACK TO PLAN`, scrollable body, and footer with previous/next buttons and a `SHEET 0n OF 05` counter. At desktop it is capped at 1120×820px; small screens use an 8px outer inset and almost full viewport height.
- **About:** two-column lead/bio with outlined external-link buttons and a 2×2 fact grid; stacks as width permits. Facts are source-person-specific and must not be copied into your content.
- **Experience:** vertical bordered role cards with title, blue company, orange monospace date, bullets and dashed technology chips.
- **Education:** large bordered qualification card with orange `GRADUATED` stamp, orange degree, course chips and adjacent fact panel. Your three education records must remain distinct; never invent courses or apply a graduation stamp to an unverified qualification.
- **Skills:** grid of material-schedule cards, each with a numbered `MAT-` kicker/item count, hatched swatch, bold category, orange divider and bordered chips. Decorative bars are not proficiency metrics.
- **Contact:** large call to action, orange email button, copy-email action with temporary status, and bordered GitHub/LinkedIn/location panel. The copy behavior is implemented in source; clipboard success was not tested.
- **Projects:** no reference counterpart. An original sixth sheet must be designed to match the observed card/chip/outline vocabulary while preserving your source-backed project descriptions and caveats.

## 5. Interaction, timing and responsive behavior

### Observed and source-verified interactions

1. Hover (or keyboard focus on the associated screen-reader button) raises the relevant slab from its resting thickness and turns its edges orange; a cyan floating card with title/subtitle, scanlines and a translucent projection beam appears. Raycasting selects pointer targets in the reference.
2. Selection centers/zooms and flattens the tilted plan toward a zone. A reticle/crosshair and `FOCUS … LOUPE ×…` readout appear, followed by the sheet's center-line unfold and orange sweep. Camera travel is **1.25s**; the first sheet mounts after **520ms**. On next/previous, source schedules a **760ms** fold and **1300ms** travel before the next sheet opens. These are reference observations, not proposed accessibility requirements.
3. Sheet navigation includes Back to Plan, click-outside scrim, previous/next buttons (wrapping), Escape and left/right arrows. In the local Chromium check, keyboard focus + Enter opened About, ArrowRight selected Experience, and Escape closed. Opening moved focus to Back to Plan; after Escape the observed focus was the document body, not the opener.
4. Mobile has five bottom navigation buttons, a left vertical zoom slider (1× to 3×, step 0.1) with reset, a right joystick, and drag-to-pan/tap-to-open on the stage. A synthesized touch drag changed view/reset state; slider and reset worked in the emulated local check. Tapping Education in mobile navigation opened the correct sheet. A drag threshold separates pan from tap; source preserves a prior view when leaving a sheet.
5. An actual CSS `prefers-reduced-motion` rule collapses animations and Three.js uses zero-duration moves, suppresses idle sway and intro wave. **However, its selected camera and raised region still snap spatially to new values**, and the JavaScript sheet timers remain. That differs from your approved stricter policy: no camera movement/scaling or region lift under reduced motion, only static selection feedback.
6. Source uses a dialog role and sets `aria-modal`; local Tab testing on the reference moved from dialog controls to the document body and hidden blueprint buttons, so focus is not contained in the inspected state. JavaScript-disabled reference loaded an empty body text. No robust non-WebGL fallback is apparent in the inspected scene component. These are risks to avoid, not features to copy. The reference does not synchronize its sheet selection to the URL in inspected App/controller code; your current hash/history behavior must be preserved.

### Responsive breakpoints

- `≤1100px`: stage zoom 0.9. Desktop `≥821px` and height `≥561px`: plan lifted by stage bottom padding. At widths `≥1101px`, several height thresholds between 899 and 690px progressively reduce stage scale.
- `≤820px` **or** `≤560px` high: hide desktop hint, enable bottom navigation and zoom/joystick controls, remove stage minimum height, enable touch handling, and fit dialog to viewport with 8px inset. At 768×1024 the tablet uses this mode.
- Stage zoom steps down at `≤820`, `≤700`, `≤600`, `≤420`, and `≤380` (0.65, 0.55, 0.4, 0.35, 0.3 respectively). Header shrinks and sheet counter hides at ≤600; at ≤380 abbreviated nav labels replace full names. Landscape height ≤560 uses a compact header and horizontal nav labels; ≤400 reduces stage further.
- The 390×844 preview had a small plan centered in abundant space, side controls and a five-button bottom row. At 844×390, the header and navigation are compact. Preserve adequate touch targets and no horizontal overflow when adapting these layouts to **six** buttons; the reference's five-column sizing cannot simply be reused unchanged.

## 6. Licence and asset reuse

- No `LICENSE`, `COPYING` or notice file was found in the checked-out project, no licence grant was found in its README/source search, and the GitHub repository API returned `license: null`. A public GitHub repository is not automatically open source. GitHub states that absent a licence, default copyright rules apply; GitHub's terms permit viewing and forking under their conditions, which is not a general licence to redistribute or make derivative works. [GitHub documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).
- **Do not copy** the reference's application code, canvas artwork routines, SVGs, favicons, proprietary profile text or other original creative assets into your site without a permission or licence grant from the rights holder. Deriving a very close visual reconstruction can also raise questions beyond source-code licensing; obtain appropriate permission/legal advice where needed. This is a practical risk assessment, not legal advice.
- **Fonts are separate third-party assets:** [IBM Plex Mono licence](https://github.com/IBM/plex/blob/master/packages/plex-mono/LICENSE.txt) and [Space Grotesk licence](https://github.com/floriankarsten/space-grotesk/blob/master/OFL.txt) identify SIL Open Font License 1.1. Obtain font files from their licensed upstream distributions and follow the licence/copyright notice and reserved-name conditions; do not assume that the repository licence covers them. Existing IBM Plex Mono is already in the completed portfolio. Verify the actual font package/version and notices before distribution.
- Third-party dependencies have their **own** licences, independent of the absent project licence. No new dependency is recommended solely because the reference uses it.

## 7. Existing completed portfolio versus reference

| Area | Completed portfolio archive | Reference | Work required, subject to approval |
|---|---|---|---|
| App/layout | Next.js static export; header + split intro/boxed scene; long semantic CV below | Vite SPA; fullscreen grid, large header and central stage | Retain Next.js; create a reference-like full-viewport presentation while keeping an accessible semantic CV independently available. Decide how visitors reach the text view without compromising the desired first viewport. |
| Identity/type | Navy/cyan, Source Sans 3 + IBM Plex Mono | Navy/blue, off-white, orange, Space Grotesk + IBM Plex Mono | Change visual tokens, heading hierarchy and type sizes to the reference; retain user name and source-backed role. |
| Plan | Six flat outlined CSS 3D tiles on a boxed grid, mild translation/zoom | Five-dimensional wireframe browser layout with drawn details, thick extrusions, dimension marks | Recompose and add wireframe art, depth, height, orange edges and hologram, while retaining all six sections. A sixth Projects region is necessarily an adaptation. |
| Sheets | In-flow content panel with sticky Close and shared section renderer | Centered modal overlay, scrim, grid, scan/corners, header and prev/next footer | Recreate sheet presentation and controlled transitions; preserve shared structured data, focus, links and all text. Add proper focus containment and restoration if using a modal. |
| Content | Six populated sections, structured timeline, projects and contact; documented verification notes | Five person-specific sheets with cards, chips, facts | Restyle your own verified content only; preserve caveats, all education records, experience, projects and contact. Never copy the reference identity, history, dates, or claims. |
| Navigation | Header links, region buttons, mobile menu and simplified buttons; hash/history | Scene selection and five-button bottom bar; prev/next and keyboard arrows; no equivalent hash behavior found | Adapt six-region bottom navigation and previous/next, maintain direct links/history, keyboard access, touch sizing, fallback and navigation semantics. |
| Motion | CSS 3D; reduced motion retains fixed plan with highlight | Continuous grid, animated camera, slab rise, projected labels and unfolding | Implement observed motion in stages; retain your stricter no-spatial-movement reduced-motion behavior. Avoid indefinite/expensive animation if device or accessibility testing shows issues. |
| Resilience/SEO | Server-rendered semantic content, no-JS navigation and non-3D fallback | Empty no-JS body observed; WebGL-dependent visual scene | Preserve your accessible content and fallback; handle scene initialization failure/context loss without hiding the CV. |
| Testing | Vitest/Playwright/axe, local performance report and release gates | Lint/typecheck scripts; no test suite found in inspected project tree | Extend your existing tests; do not infer quality or production readiness from reference appearance. |

## 8. Proposed implementation plan — no work started

1. **Resolve baseline and rights.** Confirm the completed archive is the source of truth and agree how to restore it without overwriting the older working copy. Obtain any necessary permission for a closely matching reconstruction. Preserve the full centralized content and unconfirmed-status warnings. Record approved visual and behavior exceptions.
2. **Visual fidelity slice.** On a separate working branch/copy, independently recreate the full-screen graph/header and 900×600 browser-like board in the existing Next.js stack; measure screenshots at the four inspected viewports. Add a sixth Projects zone without hiding or merging any content. Gate: visual comparison with the reference, six legible regions, no horizontal overflow, semantic CV remains present.
3. **Risk-first interaction slice.** Recreate slab depth, orange active edges, cyan label/beam, camera framing and reticle in CSS 3D first; test all six, pointer/keyboard, stable layout, slow devices and strict reduced motion. Gate: demonstrate fidelity and interaction quality; if the renderer cannot meet an agreed measurable acceptance criterion, present evidence and request approval before investigating/adding WebGL/Three.js.
4. **Reference-style sheet slice.** Add independently implemented overlay chrome, grid, corner details and prev/next using the existing content renderer. Provide proper modal focus containment, initial focus, Escape/close and return focus; synchronize URL/history; ensure long contents scroll and controls remain reachable. Gate: exercise all six sheets and rapid navigation in keyboard, pointer and no-JS/fallback modes.
5. **Mobile/tablet slice.** Recreate the reference's bottom navigation and explore controls only to the extent approved. Accommodate six sections with 44px targets, test pan/tap discrimination and pointer cancellation, orientations and no-overflow. Maintain a simple, usable fallback and reduced-motion mode. Exact layout at very narrow widths is a design decision, not established by the five-zone reference.
6. **Finish and review.** Source-backed content review, link checks, automated accessibility, keyboard/history/fallback tests, typecheck, production export, performance/lighthouse, screenshot comparisons and manual Safari/Firefox/real-device/screen-reader testing. Request publication approval separately; no analytics or deployment by default.

## 9. Files likely to change in the completed baseline

- `src/app/globals.css`: reference-specific tokens, full-screen layout, scene, overlay, sheets, controls, breakpoints and reduced-motion styles.
- `src/app/layout.tsx`: add the independently licensed Space Grotesk package/import if approved; preserve metadata and no-JS behavior. `package.json` / `package-lock.json` only if the font dependency is needed; WebGL dependencies require a separate decision.
- `src/components/PortfolioExperience.tsx`: restructure the visual shell, scene/selection, sheet controls, focus and responsive navigation; consider extracting small components only where complexity warrants.
- `src/components/SectionContent.tsx`: adapt presentation structures to cards, chips and facts while retaining all actual content and semantic hierarchy; original Projects presentation must be created.
- `src/app/page.tsx`: retain independently rendered semantic sections while adapting placement/navigation; no-JS content must not depend on the scene.
- `src/content/portfolio.ts`: keep as factual authority. Change only presentation metadata or necessary verified fields, not the user's facts; preserve project notes and contact data.
- `tests/` including `tests/e2e/prototype.spec.ts`, plus `README.md`, `GATES.md` and `CONTENT-SOURCES.md`: update behavior, responsive/accessibility/fallback tests, provenance, release instructions and validation evidence. Assets, if any, should be original or independently licensed.

## 10. Open decisions and risks

1. **Which existing copy should be used as the implementation baseline?** The previous complete archive contains the six sections; the present workspace folder is the earlier prototype. Confirm before any restoration or changes.
2. **Six versus five zones:** confirm that Projects remains its own sixth region and approve the necessary visual adaptation rather than losing content. The reference offers no established Projects placement.
3. **Rendering:** preserve CSS 3D as the initial approach; if faithful extrusion, hologram, camera framing or performance fails agreed tests, separately approve or reject a WebGL experiment. A switch affects bundle size, GPU support, fallback, accessibility and existing tests.
4. **Reference reuse rights:** determine whether the author grants permission for close reconstruction and any direct reuse; without a grant, do not copy project code/assets. Independently licensed fonts are a separate matter.
5. **Accessibility and fidelity tradeoffs:** choose how a semantic text view coexists with the fullscreen reference and how six small-screen controls fit. Keep strict reduced motion, 44px targets, focus management and no overflow even where the reference differs.
6. **Content/publication:** the prior handoff flags current employment status/dates, selected skills/projects and contact preferences for owner confirmation; automated LinkedIn verification was blocked and email delivery untested. Do not deploy or expose a preview without explicit permission.
7. **Remaining inspection limitations:** screenshots and interactions are from local headless Chromium with software WebGL and external network blocked. No physical touch devices, Safari, Firefox, assistive technology, cross-browser pixel comparison, reference asset copyright chain or complete legal review were performed. No implementation or project changes were made in this phase.
