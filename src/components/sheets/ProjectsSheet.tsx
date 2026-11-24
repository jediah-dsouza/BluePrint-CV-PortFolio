import { projects } from '../../data/cv';
import { s } from '../../lib/camera';

export function ProjectsSheet() {
  return (
    <div className="projects">
      {projects.map((project, i) => (
        <article key={project.name} className="bp-card panel project-card" style={{ animationDelay: s(1.1 + i * 0.12) }}>
          <div className="kicker project-category">{project.category}</div>
          <h3 className="role-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
          {project.note && <p className="project-note">{project.note}</p>}
          <div className="chips project-chips">
            {project.technologies.map((technology) => <span key={technology} className="chip dashed">{technology}</span>)}
          </div>
          <a className="bp-btn ghost-link project-link" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>
            VIEW REPOSITORY ↗
          </a>
        </article>
      ))}
    </div>
  );
}
