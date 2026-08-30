import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
              <h2>Contact Information</h2>
              
              <div className="info-block">
                <h3>Treun Project Management</h3>
                <p>Project management and design coordination for civil infrastructure and commercial projects.</p>
                <p className="contact-detail">Phone: +64 27 6464 624<br />Email: matt@treun.co.nz</p>
              </div>

              <div className="info-block">
                <h3>Treun Works</h3>
                <p>Construction and civil works delivery.</p>
                <p className="contact-detail">Phone: +64 27 6464 624<br />Email: matt@treun.co.nz</p>
              </div>

              <div className="info-block">
                <h3>Location</h3>
                <p>Algies Bay<br />Warkworth, Auckland<br />New Zealand</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}