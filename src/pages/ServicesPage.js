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
 
          <div className="services-division">
            <div className="division-header">
              <h2>Project Management</h2>
              <p className="division-tagline">A trusted pair of hands from start to finish.</p>
            </div>
            <p className="division-intro">Engage us early in a project and we'll carry out feasibility studies and help assess your options. Our role is to establish the viability of a project and recommend next steps, before you invest time, money and energy into architects and designers. From there, we can oversee the entire project from start to finish or just the parts you need.</p>
            <div className="service-boxes">
              <div className="service-box">
                <h3>Feasibility & Options Analysis</h3>
                <p>This is the first piece of the puzzle, where we establish whether the vision you have in your head is feasible. We'll assess the site, run preliminary bulk and location modelling and assess your options. Doing this before engaging architects or designers can save significant time and money.</p>
              </div>
              <div className="service-box">
                <h3>Project Management</h3>
                <p>From the initial conversation to handing over the keys, our team take ownership of delivering your project. This includes scheduling contractors, controlling the budget, managing the risk, coordinating with stakeholders and communicating openly with you throughout the project.</p>
              </div>
              <div className="service-box">
                <h3>Design Coordination</h3>
                <p>We'll work closely with architects and engineers to make sure everyone's aligned on the project requirements. We'll hold them accountable to excellence and be part of the review and approval process, all while keeping a close eye on costs and timelines throughout these initial stages.</p>
              </div>
              <div className="service-box">
                <h3>Procurement & Tender</h3>
                <p>We'll work with you to find the right contractors and suppliers for the job, then manage the ongoing relationship. This includes taking care of the initial quoting process, appointing the right team, negotiating costs and timings and keeping everyone on track and in the know.</p>
              </div>
              <div className="service-box">
                <h3>Contract Administration</h3>
                <p>Administration can suck up hours of your week. Our team take care of it all. From reviewing and negotiating contracts to managing day-to-day requirements on site to handling any claims or changes to the project, we'll resolve them as we go and communicate openly throughout.</p>
              </div>
            </div>
          </div>
 
          <div className="services-divider"></div>
 
          <div className="services-division">
            <div className="division-header">
              <h2>Construction & Civil Works</h2>
              <p className="division-tagline">Quality construction for projects big and small.</p>
            </div>
            <p className="division-intro">From residential subdivisions and builds to complex civil infrastructure, we're laser focused on delivering quality builds. Having developed many of our own projects, we understand the owner's perspective and can translate the construction speak, giving you clarity and confidence along the way.</p>
            <div className="service-boxes">
              <div className="service-box">
                <h3>Residential Construction</h3>
                <p>This is our bread and butter. With extra butter. From small house builds and residential subdivisions to medium-density developments, we can jump in at whatever capacity you need. Whether that's full delivery or a bit of support for an owner-builder, we've got your back.</p>
              </div>
              <div className="service-box">
                <h3>Civil Works & Infrastructure</h3>
                <p>We obsess over the things no one sees. Earthworks. Drainage and stormwater. Making sure there's strong, stable surfaces for building on. Bringing solutions for complex terrain. Whatever it is, we'll make sure your site is prepared for the project you've got in mind.</p>
              </div>
              <div className="service-box">
                <h3>Subdivision Development</h3>
                <p>From smaller residential sites, to large, complex subdivisions, to coordinating the release of new sections, if there's land to be developed, we can help. And because the consent process isn't high on anyone's favourite-things-to-do list, we'll take care of that too.</p>
              </div>
              <div className="service-box">
                <h3>Innovative Construction Methods</h3>
                <p>Our team are clued up on the latest construction methods, resulting in a faster and more cost effective construction process. From prefabricated and modular building systems to specialised delivery methods to the use of pre-made insulated panels, our finger is on the pulse.</p>
              </div>
            </div>
          </div>
 
          <div className="services-cta">
            <h2>Ready to discuss your project?</h2>
            <p>Get in touch and let's chat about how we can help. The coffee's on Matt.</p>
            <a href="/contact" className="cta-button">Get in Touch</a>
          </div>
 
        </div>
      </section>
    </div>
  );
}
 