# Blueprint design — phase 2

This is a reference-led Experience surface for Jediah's own CV. The approved brief, not the earlier cyan split-layout proposal, governs this revision. Retain all source-backed content and its caveats; the scene is a navigation enhancement, not a replacement for the semantic CV.

## Visual system
- Full viewport `#0b1a33` drafting field, 24px fine and 120px major grid. Deep surfaces `#0e2242`, `#10264a`, `#16325c`; blueprint `#1e4d8c`; linework `#7fb2f0`/`#c9ddf5`; off-white `#f2efe6`; action orange `#ff7a3d`, hover `#ffa572`; cyan hologram `#8fe6ff`.
- Self-hosted Space Grotesk headings and IBM Plex Mono technical copy, with SIL OFL notices in `licenses/`.
- Large name and orange role above an independently authored 900 × 600 browser-like plan. CSS perspective starts at 50° X / −30° Z. Six distinct miniature interface panels: About and Experience at top, Education and Skills in the middle, Projects and Contact at the foot. The reference has five; the bottom split is an intentional original adaptation.
- Panels rise on hover/focus with orange edges; a cyan projected label appears. The stable interactive target does not move with its visual surface. Dialog overlays carry a 40px grid, pale outline, orange corner marks, fixed header/footer and a scrollable body.
- At ≤820px or ≤560px tall, six 44px-minimum section controls and zoom/pan controls appear; narrow portrait uses two rows rather than compressing labels. Full text profile remains below the stage.
- Reduced motion fixes the board and slabs in place; no cursor blink, movement, scale or animated transition; highlighting remains. Manual simplified mode and automatic CSS capability fallback offer plain controls; no-JS users get section links and the complete text CV.

## Deliberate differences
CSS scene approximates the WebGL reference's perspective and extrusion rather than replicating its camera, raycasting, texture rendering, volumetric projections or exact transition timing. The board is an original six-panel composition; the view uses two-row navigation at narrow sizes and accessible directional pan controls instead of a graphical joystick. Sheet content follows the supplied CV rather than the reference's personal facts; there is no fabricated fact grid or graduation stamp. The board's dimension annotations are fixed design-scale labels rather than live viewport measurements. Grid is static. A brief loading indicator is shown only until client initialization; there is no artificial texture-loading delay. The CSS surface may display differently on other rendering engines; see implementation report.
