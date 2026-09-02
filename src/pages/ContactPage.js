import React, { useEffect } from 'react';
import './ContactPage.css';

export default function ContactPage() {

  useEffect(() => {
    document.title = 'Contact Treun | Auckland Project Management & Construction';
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>Have a project in mind? Let's discuss how we can help.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="section-container">
          <div className="contact-grid">

            <div className="contact-info">
              <div className="contact-entity">
                <h2>Treun Project Management</h2>
                <p>Project management, design coordination, and procurement for civil infrastructure and commercial projects.</p>
                <div className="contact-details">
                  <p><strong>Phone:</strong> <a href="tel:+64276464624">+64 27 6464 624</a></p>
                  <p><strong>Email:</strong> <a href="mailto:matt@treun.co.nz?subject=Project Enquiry - Treun Project Management">matt@treun.co.nz</a></p>
                </div>
              </div>

              <div className="contact-entity">
                <h2>Treun Works</h2>
                <p>Construction and civil works delivery. Delivering Complex Projects.</p>
                <div className="contact-details">
                  <p><strong>Phone:</strong> <a href="tel:+64276464624">+64 27 6464 624</a></p>
                  <p><strong>Email:</strong> <a href="mailto:matt@treun.co.nz?subject=Project Enquiry - Treun Works">matt@treun.co.nz</a></p>
                </div>
              </div>

              <div className="contact-entity">
                <h2>Location</h2>
                <p>Algies Bay<br />Warkworth, Auckland<br />New Zealand</p>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send a Message</h2>
              <div className="form-group">
                <label>Name *</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Your phone number" />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea rows="6" placeholder="Tell us about your project"></textarea>
              </div>
              <a href="mailto:matt@treun.co.nz?subject=Treun Project Enquiry" className="submit-button">Send Message</a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
