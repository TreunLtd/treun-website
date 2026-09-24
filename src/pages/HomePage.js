import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import CaseStudyCard from '../components/CaseStudyCard';
import projects from '../data/projects';
import './HomePage.css';
 
export default function HomePage() {
 
  useEffect(() => {
    document.title = 'Treun | Project Management & Construction Auckland';
  }, []);
 
  const featuredProjects = projects.filter(p => p.featured);
 
  return (
    <div className="home-page">
      <HeroSection />
 
      <section className="entity-statement">
        <div className="section-container">
          <p>Treun is an Auckland-based project management and construction company delivering residential, commercial, and civil projects across Greater Auckland and Northland.</p>
        </div>
      </section>
 
      <section className="two-column-section">
        <div className="section-container">
          <div className="two-col-grid">
            <div className="column">
              <h2>Treun Project Management</h2>
              <p className="col-sub">A trusted pair of hands from start to finish.</p>
              <p>Engage us early in a project and we can help to carry out feasibility studies and undertake your options anaylsis. Our role is to establish the viability of your project and recommend next steps, before you invest time, money and energy into architects and designers. From there, we oversee the entire project from start to finish. Or just the parts you need our help with.</p>
              <ul className="service-list">
                <li>Project management</li>
                <li>Design coordination</li>
                <li>Procurement</li>
                <li>Bulk and location modelling</li>
                <li>Partner with Tier 1 contractors and developers</li>
              </ul>
              <a href="/services" className="read-more">Learn More →</a>
            </div>
            <div className="column">
              <h2>Treun Works</h2>
              <p className="col-sub">Quality construction for projects big and small.</p>
              <p>From residential subdivisions and builds to complex civil infrastructure, we're laser focused on delivering quality builds. Having developed many of our own projects, we understand the owner's perspective and can translate the construction speak, giving you clarity and confidence along the way.</p>
              <ul className="service-list">
                <li>Residential & commercial construction</li>
                <li>Civil works and infrastructure</li>
                <li>Subdivisions</li>
                <li>Innovative construction methods</li>
                <li>Partner with Tier 1 contractors and developers</li>
              </ul>
              <a href="/services#construction" className="read-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>
 
      <section className="featured-projects">
        <div className="section-container">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Here's a look at a handful of the projects we've delivered.</p>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
          <div className="view-all-projects">
            <a href="/all-projects" className="view-all-button">See All Projects →</a>
          </div>
        </div>
      </section>
 
      <section className="credentials">
        <div className="section-container">
          <h2>Credentials & Compliance</h2>
          <div className="credentials-grid">
            <div className="credential">
              <h4>H&S Systems</h4>
              <p>HazardCo accredited</p>
            </div>
            <div className="credential">
              <h4>Insurance</h4>
              <p>PI/PL coverage</p>
            </div>
            <div className="credential">
              <h4>Certifications</h4>
              <p>NZ Certified Builders</p>
            </div>
            <div className="credential">
              <h4>Registered</h4>
              <p>Downer Felix Vendor Marketplace</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 