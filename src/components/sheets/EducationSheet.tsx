import { credentials, education } from '../../data/cv';
import { s } from '../../lib/camera';

export function EducationSheet() {
  return (
    <div className="education-content">
      <section aria-labelledby="education-heading">
        <div className="kicker section-kicker" id="education-heading">ACADEMIC BACKGROUND</div>
        <div className="education-list">
          {education.map((item, i) => (
            <article key={item.institution} className="bp-card panel education-card" style={{ animationDelay: s(1.1 + i * 0.12) }}>
              <div className="edu-meta">{item.period}</div>
              <h3 className="education-title">{item.institution}</h3>
              <div className="edu-degree">{item.qualification}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="credentials-section" aria-labelledby="credentials-heading">
        <div className="kicker section-kicker" id="credentials-heading">CERTIFICATES & PARTICIPATION</div>
        <ul className="credential-list">
          {credentials.map((credential, i) => (
            <li key={credential.title} className="credential-item" style={{ animationDelay: s(1.35 + i * 0.1) }}>
              <span className="credential-mark" aria-hidden="true">+</span>
              <div>
                <strong>{credential.title}</strong>
                <span className="credential-kind">{credential.kind}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
