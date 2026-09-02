import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import projects from '../data/projects';
import './WorksPage.css';

export default function WorksPage() {
  return (
    <div className="works-page">
      <section className="works-hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/projects/POIN/POIN_01.jpg')" }}>
        <div className="works-hero-content">
          <h1>Treun Works</h1>
          <p>Delivering Complex Projects</p>
          <p className="hero-subtitle">Construction and civil works delivery for residential, commercial, and infrastructure projects.</p>
        </div>
      </section>

      <section className="works-about">
        <div className="section-container">
          <h2>Our Capability</h2>
          <p>From subdivisions to infrastructure, we manage complex projects with precision and accountability. Our hands-on experience spans residential development, commercial builds, infrastructure works, and innovative construction methodologies.</p>
        </div>
      </section>

      <section className="works-services">
        <div className="section-container">
          <h2>Services</h2>
          <div className="services-grid">
            <div className="service-box">
              <h3>Construction Delivery</h3>
              <p>Residential builds, townhouses, apartments, and high-end homes with premium finishes and architectural integrity.</p>
            </div>
            <div className="service-box">
              <h3>Civil Works</h3>
              <p>Earthworks, site preparation, drainage and stormwater, pavements, and hardstanding for complex terrain.</p>
            </div>
            <div className="service-box">
              <h3>Subdivision Development</h3>
              <p>Land development, consenting support, infrastructure design and delivery, and lot release coordination.</p>
            </div>
            <div className="service-box">
              <h3>Innovative Construction</h3>
              <p>Prefabricated and modular systems, off-site construction, and specialized delivery methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="works-projects">
        <div className="section-container">
          <h2>Delivered Projects</h2>
          <p className="section-subtitle">Recent construction and civil works delivery across residential and infrastructure sectors.</p>
          <div className="projects-grid">
            {projects.map(project => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="works-cta">
        <div className="section-container">
          <h2>Let's build something great</h2>
          <p>Contact us to discuss your next construction or civil works project.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
