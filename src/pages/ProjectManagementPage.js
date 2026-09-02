import React, { useEffect } from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import projects from '../data/projects';
import './ProjectManagementPage.css';

export default function ProjectManagementPage() {

  useEffect(() => {
    document.title = 'Project Management Auckland | Treun';
  }, []);

  return (
    <div className="pm-page">
      <section className="pm-hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/pm_hero_gantt.jpg')" }}>
        <div className="pm-hero-content">
          <h1>Treun Project Management</h1>
          <p>Project management, design coordination, and procurement for civil infrastructure and commercial projects.</p>
        </div>
      </section>

      <section className="pm-about">
        <div className="section-container">
          <h2>Our Approach</h2>
          <p>We are residential specialists with experience across subdivisions up to 10 lots. We engage early — before architects, before designers — with feasibility studies, options analysis, and bulk and location modelling to understand what's possible before you commit. We want to understand where you want to be in 5 or 10 years so we can help plan the most appropriate path forward. From residential subdivisions to small and medium civil projects — roads, drainage, cut and fill — we help you navigate the full process. We can't promise every project runs to schedule — but we'll always be working hard to keep things moving.</p>
        </div>
      </section>

      <section className="pm-services">
        <div className="section-container">
          <h2>Services</h2>
          <div className="services-grid">
            <div className="service-box">
              <h3>Feasibility & Options Analysis</h3>
              <p>Preliminary bulk and location modelling, site assessment, and options analysis before engaging architects or designers. Establish project viability early.</p>
            </div>
            <div className="service-box">
              <h3>Project Management</h3>
              <p>Full project management from feasibility through handover, including schedule and budget control, risk management, and stakeholder coordination.</p>
            </div>
            <div className="service-box">
              <h3>Design Coordination</h3>
              <p>Architect and engineer liaison, specification management, design review and approval, and cost/schedule integration.</p>
            </div>
            <div className="service-box">
              <h3>Procurement & Tender</h3>
              <p>Contractor selection, tender management, subcontractor sourcing, and vendor management for complex projects.</p>
            </div>
            <div className="service-box">
              <h3>Contract Administration</h3>
              <p>Contract review and negotiation, site administration, claims management, and variation management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pm-projects">
        <div className="section-container">
          <h2>Case Studies</h2>
          <p className="section-subtitle">Project management delivery across infrastructure and commercial projects.</p>
          <div className="projects-grid">
            {projects.map(project => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="pm-cta">
        <div className="section-container">
          <h2>Ready to discuss your project?</h2>
          <p>Contact us to learn how we can support your next project.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
