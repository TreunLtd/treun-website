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
              <h2>Project Management</h2>
              <p>Feasibility studies, options analysis, design coordination, procurement, and contract administration. We engage early — before architects and designers — to establish what is actually viable before you commit significant spend.</p>
              <a href="/services" className="read-more">Learn More →</a>
            </div>
            <div className="column">
              <h2>Construction & Civil Works</h2>
              <p>From small residential builds and subdivisions through to complex civil infrastructure. We understand the owner's perspective because we've developed our own projects. Trusted trades and suppliers, contracted to fit your project.</p>
              <a href="/services" className="read-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="section-container">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Recent delivery across residential, commercial, and infrastructure sectors.</p>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
          <div className="view-all-projects">
            <a href="/all-projects" className="view-all-button">View All Projects →</a>
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
