import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import CaseStudyCard from '../components/CaseStudyCard';
import projects from '../data/projects';
import './HomePage.css';

const capabilities = [
  {
    title: 'Project Management',
    sub: 'A trusted pair of hands from start to finish.',
    text: 'Engage us early in a project and we can help to carry out feasibility studies and undertake your options analysis. Our role is to establish the viability of your project and recommend next steps, before you invest time, money and energy into architects and designers. From there, we oversee the entire project from start to finish. Or just the parts you need our help with.',
    list: [
      'Project management',
      'Design coordination',
      'Procurement',
      'Bulk and location modelling',
      'Partner with Tier 1 contractors and developers',
    ],
    href: '/project-management',
  },
  {
    title: 'Construction',
    sub: 'Quality construction for projects big and small.',
    text: "From residential subdivisions and builds to complex civil infrastructure, we're laser focused on delivering quality builds. Having developed many of our own projects, we understand the owner's perspective and can translate the construction speak, giving you clarity and confidence along the way.",
    list: [
      'Residential & commercial construction',
      'Civil works and infrastructure',
      'Subdivisions',
      'Innovative construction methods',
      'Partner with Tier 1 contractors and developers',
    ],
    href: '/construction',
  },
];

const credentials = [
  { title: 'H&S Systems', text: 'HazardCo accredited' },
  { title: 'Insurance', text: 'PI/PL coverage' },
  { title: 'Certifications', text: 'NZ Certified Builders' },
  { title: 'Registered', text: 'Downer Felix Vendor Marketplace' },
];

export default function HomePage() {
  useEffect(() => {
    document.title = 'Treun | Project Management + Construction | Auckland & Northland';
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="home-page">
      <HeroSection />

      <section className="entity-statement">
        <div className="section-container">
          <p>Treun delivers project management and construction across residential, commercial, civil and infrastructure projects.</p>
          <p>Based near Warkworth, we bring clear thinking, practical experience and reliable delivery to projects across Auckland and Northland.</p>
        </div>
      </section>

      <section className="home-capabilities">
        <div className="section-container capabilities-grid">
          {capabilities.map((c) => (
            <div className="capability" key={c.title}>
              <span className="treun-line"></span>
              <h2>{c.title}</h2>
              <p className="capability-sub">{c.sub}</p>
              <p className="capability-text">{c.text}</p>
              <ul className="capability-list">
                {c.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={c.href} className="btn btn-outline">
                Learn more <span className="btn-arrow" aria-hidden="true">&gt;</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-projects">
        <div className="section-container">
          <div className="section-heading">
            <h2>Featured projects</h2>
            <span className="treun-line treun-line--short"></span>
            <p>A handful of the projects we've delivered.</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
          <a href="/all-projects" className="btn btn-blue">
            See all projects <span className="btn-arrow" aria-hidden="true">&gt;</span>
          </a>
        </div>
      </section>

      <section className="credentials">
        <div className="section-container">
          <div className="section-heading">
            <h2>Credentials &amp; compliance</h2>
            <span className="treun-line treun-line--short"></span>
          </div>
          <div className="credentials-grid">
            {credentials.map((c) => (
              <div className="credential" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
