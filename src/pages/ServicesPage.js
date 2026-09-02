import React, { useEffect } from 'react';
import './ServicesPage.css';

export default function ServicesPage() {

  useEffect(() => {
    document.title = 'Services | Treun Project Management & Construction Auckland';
  }, []);

  return (
    <div className="services-page">

      <section className="services-hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/projects/WEST/WEST_05.jpg')" }}>
        <div className="services-hero-content">
          <h1>Services</h1>
          <p>Project management and construction delivery across residential, commercial, and civil sectors.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <div className="services-intro">
            <p>Treun operates across two disciplines — project management and construction — under one brand. Clients can engage us for one or both, depending on what their project needs.</p>
          </div>

          <div className="services-division">
            <div className="division-header">
              <h2>Project Management</h2>
              <p className="division-sub">Treun Limited</p>
            </div>
            <p className="division-intro">We engage early — before architects and designers are involved — to help clients understand what is actually viable before significant spend is committed. From residential subdivisions to commercial and civil projects, we manage the full lifecycle.</p>
            <div className="service-boxes">
              <div className="service-box">
                <h3>Feasibility & Options Analysis</h3>
                <p>Preliminary bulk and location modelling, site assessment, and options analysis. Establish project viability before committing to design.</p>
              </div>
              <div className="service-box">
                <h3>Project Management</h3>
                <p>Full lifecycle management from feasibility through to handover. Schedule, budget, risk, and stakeholder coordination.</p>
              </div>
              <div className="service-box">
                <h3>Design Coordination</h3>
                <p>Architect and engineer liaison, specification management, design review, and cost and schedule integration.</p>
              </div>
              <div className="service-box">
                <h3>Procurement & Tender</h3>
                <p>Contractor selection, tender management, subcontractor sourcing, and vendor management.</p>
              </div>
              <div className="service-box">
                <h3>Contract Administration</h3>
                <p>Contract negotiation, site administration, claims management, and variation control.</p>
              </div>
            </div>
          </div>

          <div className="services-divider"></div>

          <div className="services-division">
            <div className="division-header">
              <h2>Construction & Civil Works</h2>
              <p className="division-sub">Treun Works</p>
            </div>
            <p className="division-intro">From small residential builds and subdivisions through to complex civil infrastructure. We understand the owner's perspective because we've developed our own projects. Trusted trades and suppliers, contracted to scale with your project.</p>
            <div className="service-boxes">
              <div className="service-box">
                <h3>Residential Construction</h3>
                <p>House builds, townhouses, and medium-density residential developments. From owner-builder support to full delivery.</p>
              </div>
              <div className="service-box">
                <h3>Civil Works & Infrastructure</h3>
                <p>Earthworks, drainage and stormwater, retaining walls, pavements, and site preparation for complex terrain.</p>
              </div>
              <div className="service-box">
                <h3>Subdivision Development</h3>
                <p>Land development from small residential lots to complex multi-lot subdivisions. Consenting support, infrastructure delivery, and lot release.</p>
              </div>
              <div className="service-box">
                <h3>Innovative Construction Methods</h3>
                <p>Prefabricated and modular systems, SIPs construction, off-grid builds, and specialist delivery methodologies.</p>
              </div>
            </div>
          </div>

          <div className="services-cta">
            <h2>Ready to discuss your project?</h2>
            <p>Get in touch and we'll work out the best way to help.</p>
            <a href="/contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
