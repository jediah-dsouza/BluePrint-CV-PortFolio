# Complete CV implementation plan

## Scope and guardrails
Preserve the approved CSS 3D blueprint, six-region interaction, typography, mobile layout, fallback and reduced-motion behavior. No WebGL, new runtime dependencies, deployment, remote repository or fabricated claims. Use the supplied profile and repository READMEs; disclose unconfirmed current employment status and material project limitations. Do not publish until the owner confirms the content.

## Dependency-aware slices
1. **Content and About:** model factual profile, contact, experience, education, skills and six source-checked projects in one typed module; render About in the sheet and HTML-first CV; validate required content and destinations.
2. **Experience and Education:** render chronological entries and sourced dates in both surfaces; explicitly flag status verification; test one-to-one content and section navigation.
3. **Skills and Projects:** render grouped skill lists and source-backed projects with readable technical tags and safe external links; retain project caveats and verify links.
4. **Contact and integration:** render direct email and profile links, remove prototype copy, update metadata, and check no-JS and fallback parity.
5. **Quality and handoff:** full build, typecheck, unit/component, E2E and axe checks; responsive, keyboard, touch-emulation, reduced-motion and visual inspection; document non-executed device, browser and assistive-technology testing. Never deploy.

## Local milestone record
- Content foundation and About: complete; source-backed content and shared rendering tested.
- Experience and Education: complete locally; status confirmation remains a publication gate.
- Skills and Projects: complete locally; project caveats documented.
- Contact and integration: complete locally; LinkedIn and email require manual verification.
- Quality and handoff: clean npm ci, production export, typecheck, 12 unit/component tests and 50 Chromium browser tests passed. Desktop/mobile screenshot review completed. Local Lighthouse mobile-emulated scores: 99 Performance, 100 Accessibility, 100 Best Practices, 100 SEO; LCP 0.9 s and CLS 0.001. Real-device, Safari, Firefox, screen-reader, field INP and representative Core Web Vitals testing remain open before release.
