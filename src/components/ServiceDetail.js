import React, { useEffect } from 'react';
import CaseStudyCard from './CaseStudyCard';
import projects from '../data/projects';
import './ServiceDetail.css';

/*
  Shared layout for the Project Management and Construction pages.
  Each page passes its own content in as props.
*/
export default function ServiceDetail({
  pageTitle,
  eyebrow,
  title,
  tagline,
  intro,
  heroImage,
  services,
  projectFilter,
  otherService,
  projectsHref = '/all-projects',
}) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const relatedProjects = projects
    .filter(projectFilter)
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 4);

  return (
    <div className="service-page">
      <section
        className="service-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(46,64,78,0.9) 0%, rgba(46,64,78,0.6) 60%, rgba(46,64,78,0.45) 100%), url('${heroImage}')`,
        }}
      >
        <div className="service-hero-inner">
          <p className="service-eyebrow">{eyebrow}</p>
          <span className="treun-line"></span>
          <h1>{title}</h1>
          <span className="treun-line"></span>
          <p className="service-tagline">{tagline}</p>
        </div>
      </section>

      <section className="service-intro">
        <div className="service-container">
          <p>{intro}</p>
        </div>
      </section>

      <section className="service-list-section">
        <div className="service-container">
          <h2>What we do</h2>
          <span className="treun-line treun-line--short"></span>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="service-projects">
          <div className="service-container">
            <h2>Recent projects</h2>
            <span className="treun-line treun-line--short"></span>
            <div className="service-projects-grid">
              {relatedProjects.map((project) => (
                <CaseStudyCard key={project.id} project={project} />
              ))}
            </div>
            <a href={projectsHref} className="btn btn-outline service-all-projects">
              See all projects <span className="btn-arrow" aria-hidden="true">&gt;</span>
            </a>
          </div>
        </section>
      )}

      <section className="service-cta">
        <div className="service-container">
          <span className="treun-line"></span>
          <div className="service-cta-body">
            <div>
              <h2>Ready to discuss your project?</h2>
              <p>Get in touch and let's talk about how we can help. The coffee's on Matt.</p>
            </div>
            <div className="service-cta-buttons">
              <a href="/contact" className="btn btn-stone">
                Get in touch <span className="btn-arrow" aria-hidden="true">&gt;</span>
              </a>
              <a href={otherService.href} className="service-cta-link">
                {otherService.label} &gt;
              </a>
            </div>
          </div>
          <span className="treun-line"></span>
        </div>
      </section>
    </div>
  );
}
