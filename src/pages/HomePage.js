import React from 'react';
import HeroSection from '../components/HeroSection';
import CaseStudyCard from '../components/CaseStudyCard';
import projects from '../data/projects';
import './HomePage.css';

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="home-page">
      <HeroSection />
      
      <section className="two-column-section">
        <div className="column left-column">
          <h2>Treun Project Management</h2>
          <p>Project management, design coordination, and procurement for civil infrastructure and commercial projects.</p>
          <p>We engage early with feasibility studies and preliminary options analysis—including bulk and location modelling—before you commit to designers or architects. Our role is to establish viability and guide the path forward.</p>
          <p>We partner with Tier 1 contractors, developers, and government agencies to deliver complex projects on time and within budget.</p>
          <a href="/project-management" className="read-more">Learn More →</a>
        </div>

        <div className="column right-column">
          <h2>Treun Works</h2>
          <p>Construction and civil works delivery. Delivering Complex Projects.</p>
          <p>From small residential subdivisions and house builds for owner-clients to complex civil infrastructure. We specialize in understanding the owner's perspective and delivering quality outcomes, whether you're managing your own project or need full delivery.</p>
          <a href="/works" className="read-more">Learn More →</a>
        </div>
      </section>

      <section className="featured-projects">
        <div className="section-container">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Recent delivery across infrastructure and residential development.</p>
          
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