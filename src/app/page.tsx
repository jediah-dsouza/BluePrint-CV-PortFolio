import PortfolioExperience from '@/components/PortfolioExperience';
import { profile, sections } from '@/content/portfolio';
import SectionContent from '@/components/SectionContent';

export default function Home() {
  return <>
    <PortfolioExperience>
    <section className="document" aria-labelledby="document-title">
      <div className="document-heading"><span>PROFILE / TEXT VIEW</span><h2 id="document-title">The essentials, in plain view.</h2><p>{profile.intro}</p><p>The blueprint is an enhancement. This profile remains available without it.</p></div>
      <div className="document-sections">{sections.map((section) => <section id={section.id} key={section.id}><span className="document-index">{section.index}</span><div><h3>{section.label}</h3><SectionContent id={section.id} headingLevel={4} /></div></section>)}</div>
    </section>
    </PortfolioExperience>
    <footer className="site-footer"><span>{profile.name}</span><span>BLUEPRINT / PORTFOLIO</span><a href="#main">Back to top ↑</a></footer>
  </>;
}
