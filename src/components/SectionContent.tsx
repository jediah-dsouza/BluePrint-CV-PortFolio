import { contact, education, employmentNote, experience, isSafeContactHref, isSafeExternalUrl, profile, projects, skills, type SectionId } from '@/content/portfolio';

/** Shared content renderer keeps the static CV and interactive sheet in sync. */
export default function SectionContent({ id, headingLevel = 3 }: { id: SectionId; headingLevel?: 3 | 4 }) {
  const Heading = headingLevel === 3 ? 'h3' : 'h4';
  const ProjectHeading = headingLevel === 3 ? 'h4' : 'h5';
  if (id === 'about') return <div className="content-flow">
    <p>{profile.about}</p>
    <p>{profile.aboutMore}</p>
    <div className="content-links">{contact.filter(link => link.label !== 'Email' && isSafeExternalUrl(link.href)).map(link => <a key={link.label} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>
  </div>;
  if (id === 'experience') return <div className="content-flow">
    <p className="content-note">{employmentNote}</p>
    <div className="entry-list">{experience.map(entry => <article className="content-entry" key={entry.organization}>
      <Heading>{entry.role}</Heading><p className="entry-meta">{entry.organization} · {entry.location}</p><p className="entry-date">{entry.period}</p>
      <ul>{entry.points.map(point => <li key={point}>{point}</li>)}</ul>
    </article>)}</div>
  </div>;
  if (id === 'education') return <div className="entry-list">{education.map(entry => <article className="content-entry" key={entry.institution}>
    <Heading>{entry.institution}</Heading><p>{entry.qualification}</p><p className="entry-date">{entry.period}</p>
  </article>)}</div>;
  if (id === 'skills') return <div className="entry-list">{skills.map(group => <div className="content-entry" key={group.category}>
    <Heading>{group.category}</Heading><ul className="skill-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
  </div>)}</div>;
  if (id === 'projects') return <div className="project-groups">{(['Software', 'Networking'] as const).map(category => <div className="project-group" key={category}>
    <Heading>{category} projects</Heading>
    {projects.filter(project => project.category === category).map(project => <article className="content-entry project-entry" key={project.name}>
      <ProjectHeading>{project.name}</ProjectHeading><p>{project.description}</p>
      <p className="project-tech">{project.technologies.join(' · ')}</p>
      {project.note && <p className="project-note">{project.note}</p>}
      {isSafeExternalUrl(project.repository) ? <a className="project-link" href={project.repository}>View {project.name} repository <span aria-hidden="true">↗</span></a> : <p>Repository link unavailable.</p>}
    </article>)}
  </div>)}</div>;
  if (id === 'contact') return <div className="content-flow">
    <p>For frontend, React or software engineering opportunities and collaborations, get in touch.</p>
    <p className="contact-location">{profile.location}</p>
    <dl className="contact-list">{contact.map(link => <div key={link.label}>
      <dt>{link.label}</dt><dd>{isSafeContactHref(link.href) ? <a href={link.href}>{link.display}</a> : 'Contact link unavailable.'}</dd>
    </div>)}</dl>
  </div>;
  return null;
}
