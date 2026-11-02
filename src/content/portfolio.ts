/**
 * Professional content is sourced from the supplied profile and public repository READMEs.
 * Review CONTENT-SOURCES.md and confirm employment status before publication.
 */
export type Experience = { organization: string; role: string; period: string; location: string; points: readonly string[] };
export type Education = { institution: string; qualification: string; period: string };
export type SkillGroup = { category: string; items: readonly string[] };
export type Project = { name: string; category: 'Software' | 'Networking'; description: string; technologies: readonly string[]; repository: string; note?: string };
export type ContactLink = { label: string; href: string; display: string };

export const profile = {
  name: "Jediah Michael D'souza",
  role: 'Frontend developer · Computer Science graduate',
  location: 'Karachi, Sindh, Pakistan',
  intro: 'I build responsive, user-focused web applications with React, JavaScript, and TypeScript.',
  about: `I am a Computer Science Graduate, Passionate about Building Modern, Scalable, and User-Focused Software Solutions. My primary focus is Front-End Development, with hands-on experience in building Responsive Web Applications using React, JavaScript, TypeScript, and Modern Development Tools.

Through Internships and Project-Based Development, I have gained Practical Experience in developing Interactive User Interfaces, Integrating REST APIs, Managing Application State, Implementing Responsive Designs, and Writing Maintainable, Testable Code. I enjoy transforming ideas into functional Applications while focusing on usability, Performance, Accessibility, and Code Quality.

My technical interests also extend to Full-Stack Development, Computer Networking, and Cybersecurity. Working on Software Development and Network Design Projects has helped me develop a broader understanding of how Applications are built, how Systems Communicate, and how Secure, Reliable Solutions can be Designed.`,
  aboutMore: `I believe in continuous learning, Practical Problem-Solving, and improving through hands-on experience. I am always exploring new Technologies, Refining my development workflow, and building projects that challenge me to think critically and grow as an Engineer.

My current goal is to grow as a Software Developer, contribute to meaningful projects, collaborate with talented teams, and develop solutions that create real value.

I am open to opportunities in Front-End Development, React Development, and Software Engineering, as well as collaborations on innovative projects.`,
} as const;

export const contact: readonly ContactLink[] = [
  { label: 'Email', href: 'mailto:jediahdsouza4@gmail.com', display: 'jediahdsouza4@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/jediah-dsouza', display: 'github.com/jediah-dsouza' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jediah-dsouza', display: 'linkedin.com/in/jediah-dsouza' },
];

export const experience: readonly Experience[] = [
  { organization: 'Neurofive Solutions', role: 'Machine Learning Intern', period: 'September 2026 – Present', location: 'Karachi, Pakistan', points: [
    'Cleaned and explored datasets, treating missing values, duplicates and outliers before modelling.',
    'Built regression and customer-churn classification pipelines using Linear Regression, Ridge, Logistic Regression, Random Forest and XGBoost.',
    'Explored stratified cross-validation, class weighting, SMOTE, hyperparameter tuning and leakage-safe preprocessing.',
    'Applied K-Means, PCA, SHAP and permutation importance to segmentation and model interpretation.',
    'Developed ChurnGuard, a Streamlit-based churn prediction and customer analytics application.',
  ] },
  { organization: 'Internee.pk', role: 'React Intern', period: 'September 2026 – November 2026', location: 'Karachi, Pakistan', points: [
    'Built structured, component-based interfaces using React and reusable components.',
    'Practiced props, state management and responsive, user-friendly interface design.',
    'Strengthened debugging, problem-solving and maintainable code practices through task-based work.',
  ] },
];

export const employmentNote = 'Dates and current status are based on the supplied profile and need confirmation before publication.';

export const education: readonly Education[] = [
  { institution: 'Iqra University', qualification: 'Bachelor of Science in Computer Science', period: 'October 2022 – September 2026' },
  { institution: "St. Patrick's College", qualification: 'Intermediate, Computer Science', period: '2020 – 2022' },
  { institution: "St. Paul's English High School", qualification: 'Matriculation, Computer Science', period: '2009 – 2020' },
];

export const skills: readonly SkillGroup[] = [
  { category: 'Frontend development', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Responsive interfaces', 'State management', 'REST API integration'] },
  { category: 'Programming & data', items: ['Python', 'Data cleaning', 'Exploratory data analysis', 'Classification', 'Regression', 'Predictive modelling'] },
  { category: 'Machine learning tools', items: ['scikit-learn', 'XGBoost', 'SHAP', 'Pandas', 'NumPy', 'Streamlit', 'MLflow'] },
  { category: 'Networking & security', items: ['Computer networks', 'VLAN design', 'Inter-VLAN routing', 'Cisco Packet Tracer', 'Cisco ASA', 'Network segmentation', 'Access control lists'] },
  { category: 'Development practices', items: ['Git & GitHub', 'Debugging', 'Accessibility', 'Testing', 'Maintainable code'] },
];

export const projects: readonly Project[] = [
  { name: 'Daymark', category: 'Software', description: 'A local-first work journal for organizing tasks and projects, with responsive interfaces and browser-based persistence.', technologies: ['React', 'TypeScript', 'Vite', 'localStorage'], repository: 'https://github.com/jediah-dsouza/Daymark' },
  { name: 'PackagePulse', category: 'Software', description: 'A developer-focused npm package explorer for searching, inspecting and comparing public registry metadata, with browser-local saved packages.', technologies: ['React', 'TypeScript', 'Vite', 'npm Registry API'], repository: 'https://github.com/jediah-dsouza/PackagePulse' },
  { name: 'SignalCV', category: 'Software', description: 'A responsive résumé-review frontend with upload validation, analysis and job-description keyword comparison workflows.', technologies: ['React', 'TypeScript', 'Vite'], repository: 'https://github.com/jediah-dsouza/SignalCV-AI-Powered-Resume-Analyzer', note: 'Frontend-only project: parsing, analysis, matching and chatbot responses use deterministic mock services, not a live AI provider.' },
  { name: 'ChurnGuard', category: 'Software', description: 'A customer-churn analysis application combining prediction, risk scoring, model explainability and customer analytics.', technologies: ['Python', 'Streamlit', 'XGBoost', 'MLflow'], repository: 'https://github.com/jediah-dsouza/ChurnGuard', note: 'Live prediction requires access to the registered MLflow model; selected workflows use demo fixtures.' },
  { name: 'Secure VLAN Design for Departments', category: 'Networking', description: 'A simulated departmental network with VLAN segmentation, inter-VLAN routing and access controls for communication between roles.', technologies: ['Cisco Packet Tracer', 'VLAN', 'ACL'], repository: 'https://github.com/jediah-dsouza/Secure-VLAN-Design-for-Departments' },
  { name: 'Secure Enterprise Network Design', category: 'Networking', description: 'A simulated enterprise network using firewall policies, access control lists, NAT/PAT and network segmentation.', technologies: ['Cisco ASA', 'Cisco Packet Tracer', 'ACL'], repository: 'https://github.com/jediah-dsouza/Secure-Enterprise-Network-Design-Using-Cisco-ASA-Firewall' },
];

export const sections = [
  { id: 'about', label: 'About', index: '01' }, { id: 'experience', label: 'Experience', index: '02' },
  { id: 'education', label: 'Education', index: '03' }, { id: 'skills', label: 'Skills', index: '04' },
  { id: 'projects', label: 'Projects', index: '05' }, { id: 'contact', label: 'Contact', index: '06' },
] as const;

export type SectionId = (typeof sections)[number]['id'];

export function isSectionId(value: string): value is SectionId { return sections.some(section => section.id === value); }

export function isSafeExternalUrl(value: string): boolean {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password; } catch { return false; }
}

export function isSafeContactHref(value: string): boolean {
  return value.startsWith('mailto:') ? /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : isSafeExternalUrl(value);
}

export function validatePortfolio(): string[] {
  const issues: string[] = [];
  if (!profile.name || !profile.about || !experience.length || !education.length || !skills.length || !projects.length || !contact.length) issues.push('A required portfolio section is empty.');
  for (const item of experience) if (!item.organization || !item.role || !item.period || !item.location || !item.points.length) issues.push(`Invalid experience: ${item.organization}`);
  for (const item of education) if (!item.institution || !item.qualification || !item.period) issues.push(`Invalid education: ${item.institution}`);
  for (const item of skills) if (!item.category || !item.items.length) issues.push(`Invalid skill group: ${item.category}`);
  for (const item of projects) if (!item.name || !item.description || !item.technologies.length || !isSafeExternalUrl(item.repository)) issues.push(`Invalid project: ${item.name}`);
  for (const item of contact) if (!item.label || !item.display || !isSafeContactHref(item.href)) issues.push(`Invalid contact link: ${item.label}`);
  return issues;
}