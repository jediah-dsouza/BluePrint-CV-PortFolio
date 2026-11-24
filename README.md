# Jediah Michael D'souza — Interactive 3D Portfolio

An interactive, blueprint-inspired developer portfolio built to showcase my professional profile, technical skills, experience, education, and projects through an immersive 3D experience.

Designed with **React, TypeScript, Three.js, and Vite**, this portfolio transforms a traditional CV into an interactive architectural blueprint where visitors can explore different sections through animated 3D navigation.

 **Live Portfolio:** [View Portfolio](https://jediah-dsouza.github.io/BluePrint-CV-PortFolio/)

---

## Overview

Instead of presenting information through a conventional portfolio layout, this project introduces an interactive architectural blueprint as its primary navigation interface.

The blueprint consists of interactive sections that rise into 3D blocks when hovered over or focused. Selecting a section activates a camera transition and unfolds an animated content panel containing the relevant information.

The experience combines modern frontend development, 3D rendering, responsive design, and interactive animations to create a distinctive way of presenting a developer portfolio.

## Features

- **Interactive 3D Blueprint:** An architectural blueprint rendered using Three.js and WebGL.
- **Animated Navigation:** Interactive blueprint sections with hover effects, elevation animations, and holographic labels.
- **Dynamic Content Panels:** Animated content sheets that unfold when a section is selected.
- **Camera Transitions:** Smooth camera movements, zooming, and perspective transformations.
- **Responsive Experience:** Dedicated mobile navigation, touch gestures, and viewport-aware layouts.
- **Keyboard Accessibility:** Keyboard navigation, focus support, and shortcuts for navigating between sections.
- **Interactive View Controls:** Mobile pan, zoom, joystick navigation, and reset functionality.
- **Organized Portfolio Sections:** Dedicated sections for professional information, experience, projects, education, skills, and contact details.
- **Contact Integration:** Direct email access, email-copy functionality, and professional profile links.
- **GitHub Pages Deployment:** Automated static-site deployment using GitHub Actions.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| TypeScript | Type safety and maintainable development |
| Three.js | Interactive 3D blueprint and WebGL rendering |
| Vite | Development server and production build |
| CSS3 | Responsive layouts, animations, and visual styling |
| HTML5 | Application structure |
| IBM Plex Mono | Monospaced typography |
| Space Grotesk | Interface typography |
| Git & GitHub | Version control and repository management |
| GitHub Actions | Automated deployment |
| GitHub Pages | Portfolio hosting |

## Portfolio Sections

The portfolio is organized into six interactive sections:

| Section | Description |
|---|---|
| About | Professional introduction, background, and career focus |
| Experience | Internship experience and professional development |
| Projects | Selected frontend, machine learning, and networking projects |
| Education | Academic background and professional certifications |
| Skills | Technical skills, tools, and development technologies |
| Contact | Email, GitHub, LinkedIn, and professional contact links |

## Featured Projects

Some of the projects showcased in this portfolio include:

### Frontend Development

- **[Daymark](https://github.com/jediah-dsouza/Daymark)** — A local-first productivity and work journal application built with React and TypeScript.
- **[PackagePulse](https://github.com/jediah-dsouza/PackagePulse)** — An npm package explorer for searching package metadata, inspecting releases, and comparing dependencies.
- **[SignalCV](https://github.com/jediah-dsouza/SignalCV-AI-Powered-Resume-Analyzer)** — A responsive résumé analysis interface featuring document review and job-description matching workflows.

### Machine Learning & Data Science

- **[ChurnGuard](https://github.com/jediah-dsouza/ChurnGuard)** — A customer churn analysis application featuring XGBoost risk scoring, customer analytics, and model explainability.

### Networking & Cybersecurity

- **[Secure VLAN Design for Departments](https://github.com/jediah-dsouza/Secure-VLAN-Design-for-Departments)** — A segmented enterprise network design using VLANs, VLSM, inter-VLAN routing, and access control lists.
- **[Secure Enterprise Network Design Using Cisco ASA](https://github.com/jediah-dsouza/Secure-Enterprise-Network-Design-Using-Cisco-ASA-Firewall)** — A simulated enterprise network implementing firewall policies, NAT/PAT, access controls, and network security.

*Note: Some showcased application features are demonstration-based or require additional model configuration. Refer to individual project repositories for implementation details.*

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+
- npm
- Git

### 1. Navigate to the Project Directory

```bash
cd BluePrint-CV-PortFolio
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to explore the portfolio.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Type-checks and generates the production build |
| `npm run preview` | Previews the production build locally |
| `npm run typecheck` | Runs TypeScript project checks |
| `npm run lint` | Runs ESLint code analysis |

## Project Structure

```text
BluePrint-CV-PortFolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── favicon.svg
│   └── contact_panel.svg
│
├── src/
│   ├── components/
│   │   ├── sheets/
│   │   ├── Blueprint.tsx
│   │   ├── Header.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Sheet.tsx
│   │   └── ViewControls.tsx
│   │
│   ├── data/
│   │   └── cv.ts
│   │
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── three/
│   │   ├── BlueprintScene.ts
│   │   └── textures.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── types.ts
│
├── docs/
│   └── Production build for GitHub Pages
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

##  Customization

Portfolio information is centrally managed through:

```text
src/data/cv.ts
```

This file contains the data used to populate:

- Personal profile and introduction
- Professional experience
- Project information and repository links
- Education and certifications
- Technical skills
- Contact information
- Blueprint navigation labels and metadata

**Built with creativity, code, and a passion for interactive web experiences.**
