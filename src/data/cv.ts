import type { ContactLink, Credential, Education, Profile, Project, Role, SkillGroup, ZoneKey, ZoneMeta } from '../types';

/** All portfolio content lives here; the section components only render it. */
export const profile: Profile = {
  name: "Jediah Michael D'souza",
  role: 'Frontend Developer · React · TypeScript · AI/ML',
  site: 'https://jediah-dsouza.github.io/BluePrint-CV-PortFolio/',
  email: 'jediahdsouza4@gmail.com',
  location: 'Karachi, Sindh, Pakistan',
  intro: 'Computer Science graduate building thoughtful, user-focused software across frontend development, applied machine learning, and computer networks.',
  bio: 'I create responsive React and TypeScript experiences, Python-based data and machine-learning projects, and network-security simulations. Across internships and independent work, I focus on reusable components, accessible interfaces, dependable data workflows, clear documentation, and practical problem-solving. I am open to Front-End Developer, React Developer, and Software Engineer opportunities, as well as meaningful full-stack projects.',
  facts: [
    { k: 'FOCUS', v: 'Frontend · React · TypeScript' },
    { k: 'BASED IN', v: 'Karachi, Pakistan' },
    { k: 'EDUCATION', v: 'BS Computer Science · 2026' },
    { k: 'ALSO EXPLORING', v: 'Python · AI/ML · Networks' },
  ],
  linkedin: 'https://www.linkedin.com/in/jediah-dsouza',
  github: 'https://github.com/jediah-dsouza',
};

export const roles: Role[] = [
  {
    role: 'React Intern',
    company: 'Internee.pk',
    dates: 'SEP 2026 — NOV 2026',
    points: [
      'Developed structured, component-based user interfaces with React.js.',
      'Practiced reusable components, props, state management, responsive layouts, and maintainable application structure.',
      'Strengthened debugging and problem-solving through practical, task-based implementation work.',
    ],
    tags: ['React.js', 'JavaScript', 'Components', 'State management', 'Responsive UI'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Neurofive Solutions',
    dates: 'SEP 2026 — NOV 2026',
    points: [
      'Cleaned and explored real-world datasets, including Ames Housing and Telco Customer Churn; handled missing values, duplicates, outliers, and feature preprocessing.',
      'Built regression and churn-classification workflows with Linear Regression, Ridge, Logistic Regression, Random Forest, and XGBoost.',
      'Practiced stratified cross-validation, class weighting, SMOTE, threshold tuning, leakage-safe preprocessing, and error analysis.',
      'Applied K-Means and PCA for segmentation, and SHAP and permutation importance for model interpretation.',
      'Built ChurnGuard, a Streamlit application for churn risk scoring, customer analytics, explainability, and batch workflows.',
    ],
    tags: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'MLflow', 'SHAP', 'Streamlit'],
  },
];

export const education: Education[] = [
  { institution: 'Iqra University', qualification: 'Bachelor of Science · Computer Science', period: 'OCT 2022 — SEP 2026' },
  { institution: "St. Patrick's College", qualification: 'Intermediate · Computer Science', period: '2020 — 2022' },
  { institution: "St. Paul's English High School", qualification: 'Matriculation · Computer Science', period: '2010 — 2020' },
];

export const credentials: Credential[] = [
  { title: 'Claude Code in Action', kind: 'Course certificate' },
  { title: 'REACT Internship', kind: 'Internship certificate' },
  { title: 'Certificate of Participation — A Pathway for Launching AI Startups', kind: 'Participation certificate' },
  { title: 'Machine Learning Internship', kind: 'Internship certificate' },
];

export const projects: Project[] = [
  {
    name: 'ChurnGuard', category: 'Machine Learning',
    description: 'A customer-churn analysis app combining XGBoost risk scoring, customer analytics, model explanations, and batch-analysis workflows.',
    technologies: ['Python', 'Streamlit', 'XGBoost', 'scikit-learn', 'MLflow', 'SHAP'],
    repository: 'https://github.com/jediah-dsouza/ChurnGuard',
    note: 'Development-stage portfolio app: live prediction needs the registered MLflow model; selected customer and analytics views use demo fixtures.',
  },
  {
    name: 'Daymark', category: 'Frontend · Product UI',
    description: 'A focused, local-first work journal for planning tasks and projects, tracking progress, and managing a personal workspace without an account or backend.',
    technologies: ['React', 'TypeScript', 'Vite', 'localStorage', 'Playwright'],
    repository: 'https://github.com/jediah-dsouza/Daymark',
  },
  {
    name: 'PackagePulse', category: 'Frontend · API integration',
    description: 'A developer-focused npm package explorer for searching registry metadata, inspecting releases and dependencies, comparing packages, and saving a shortlist.',
    technologies: ['React', 'TypeScript', 'Vite', 'npm Registry API'],
    repository: 'https://github.com/jediah-dsouza/PackagePulse',
  },
  {
    name: 'SignalCV', category: 'Frontend · AI product concept',
    description: 'A responsive résumé-review interface with document validation, structured review, job-description keyword comparison, and guided improvement workflows.',
    technologies: ['React', 'TypeScript', 'Vite', 'Vitest'],
    repository: 'https://github.com/jediah-dsouza/SignalCV-AI-Powered-Resume-Analyzer',
    note: 'Frontend-only internship project. Parsing, scoring, matching, and chatbot behavior are deterministic mock services, not a live AI integration.',
  },
  {
    name: 'Secure VLAN Design for Departments', category: 'Networking · Security',
    description: 'A six-department Packet Tracer network with VLAN segmentation, VLSM addressing, Layer 3 inter-VLAN routing, and role-based extended ACLs.',
    technologies: ['Cisco Packet Tracer', 'VLAN', 'VLSM', 'Layer 3 switching', 'ACLs'],
    repository: 'https://github.com/jediah-dsouza/Secure-VLAN-Design-for-Departments',
  },
  {
    name: 'Secure Enterprise Network — Cisco ASA', category: 'Networking · Security',
    description: 'A simulated enterprise topology using ASA firewall policy, access controls, NAT/PAT, DNS, segmentation, and controlled web-server access.',
    technologies: ['Cisco ASA 5505', 'Packet Tracer', 'ACLs', 'NAT/PAT', 'DNS'],
    repository: 'https://github.com/jediah-dsouza/Secure-Enterprise-Network-Design-Using-Cisco-ASA-Firewall',
  },
];

export const skillGroups: SkillGroup[] = [
  { name: 'Frontend development', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'HTML', 'CSS', 'Tailwind CSS', 'REST APIs', 'State management', 'Responsive UI'] },
  { name: 'Python, data & ML', items: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Streamlit', 'MLflow', 'SHAP', 'EDA', 'Classification', 'Regression', 'SMOTE', 'PCA'] },
  { name: 'Networks & security', items: ['Cisco Packet Tracer', 'Cisco ASA', 'VLAN design', 'VLSM', 'Inter-VLAN routing', 'Network segmentation', 'Access control lists', 'NAT/PAT', 'DNS'] },
  { name: 'Tools & engineering practices', items: ['Git & GitHub', 'Claude Code', 'Prompt engineering', 'Developer tools', 'Playwright', 'Vitest', 'Debugging', 'Accessibility', 'Reusable components', 'Maintainable code'] },
];

export const contactLinks: ContactLink[] = [
  { k: 'GITHUB', v: '/jediah-dsouza', href: profile.github },
  { k: 'LINKEDIN', v: '/in/jediah-dsouza', href: profile.linkedin },
];

/** Zones on the 900 × 600 blueprint plane, in navigation order. */
export const zones: ZoneMeta[] = [
  {
    key: 'about', title: 'About', short: 'ABOUT', abbr: 'ABOUT', label: 'ABOUT',
    tipTitle: 'About', tipSub: 'Profile · focus · location',
    rect: { x: 60, y: 132, w: 480, h: 176 }, height: 'c', introDelay: 0.2,
  },
  {
    key: 'experience', title: 'Experience', short: 'EXPERIENCE', abbr: 'EXP.', label: 'EXPERIENCE',
    tipTitle: 'Experience', tipSub: '3 internships · 2026',
    rect: { x: 556, y: 132, w: 284, h: 176 }, height: 'a', introDelay: 0.4,
  },
  {
    key: 'projects', title: 'Projects', short: 'PROJECTS', abbr: 'PROJ.', label: 'PROJECTS',
    tipTitle: 'Projects', tipSub: '8 selected builds',
    rect: { x: 60, y: 324, w: 382, h: 120 }, height: 'b', introDelay: 0.6,
  },
  {
    key: 'education', title: 'Education', short: 'EDUCATION', abbr: 'EDU.', label: 'EDUCATION',
    tipTitle: 'Education', tipSub: '3 schools · 4 credentials',
    rect: { x: 458, y: 324, w: 382, h: 120 }, height: 'c', introDelay: 0.8,
  },
  {
    key: 'skills', title: 'Skills', short: 'SKILLS', abbr: 'SKILLS', label: 'SKILLS',
    tipTitle: 'Skills', tipSub: 'Frontend · AI/ML · networks',
    rect: { x: 60, y: 460, w: 382, h: 84 }, height: 'b', introDelay: 1.0,
  },
  {
    key: 'contact', title: 'Contact', short: 'CONTACT', abbr: 'CONTACT', label: 'CONTACT',
    tipTitle: 'Contact', tipSub: 'Email · GitHub · LinkedIn',
    rect: { x: 458, y: 460, w: 382, h: 84 }, height: 'a', introDelay: 1.2,
  },
];

export const zoneByKey = Object.fromEntries(zones.map((z) => [z.key, z])) as Record<ZoneKey, ZoneMeta>;
