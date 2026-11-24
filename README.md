# Jediah Michael D'souza — Interactive Portfolio

A personal portfolio built from an interactive blueprint-CV template. It presents Jediah's profile, internships, eight selected projects, education, certificates, technical skills, and contact links.

Built with React, TypeScript, Vite, and Three.js. The 3D blueprint is the navigation surface; each zone opens a readable, keyboard-accessible content sheet. The included `docs/` folder is the production static build target for GitHub Pages.

## Sections

- **About** — introduction, professional focus, location, GitHub, and LinkedIn.
- **Experience** — Python programming, React, and machine-learning internships.
- **Projects** — eight linked projects across frontend, data/ML, and networking.
- **Education & Credentials** — three education entries and four certificates/participation items.
- **Skills** — frontend engineering, Python/ML, networks/security, and developer tools.
- **Contact** — email, GitHub, LinkedIn, current portfolio, and Instagram.

## Run locally

Requires Node.js 20.19+ (or 22.12+).

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Useful scripts:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

`npm run build` type-checks the project and writes the static site to `docs/`.

## Update portfolio content

Edit `src/data/cv.ts`. It is the single source for the profile, experience, project cards, education, credentials, skills, links, and blueprint zone labels. Components render that data. Project notes intentionally disclose when a feature is fixture-backed or still depends on local model configuration.

## Deploy

The Vite config uses a relative asset base so the site works at a GitHub Pages project URL. The repository includes a GitHub Actions Pages workflow. To publish, push the project to a GitHub repository and select **Settings → Pages → GitHub Actions**. Confirm the repository name/URL and review the contact links before publication.

## Source and review notes

`CONTENT-SOURCES.md` records the supplied résumé/profile source, public profile and project repositories, and discrepancies that should be checked before publishing. The separate uploaded file named `Portfolio` was zero bytes, so it did not contain usable information.
