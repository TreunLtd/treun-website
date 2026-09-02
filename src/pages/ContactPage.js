import React, { useEffect, useState } from 'react';
import './ContactPage.css';
 
export default function ContactPage() {
 
  useEffect(() => {
    document.title = 'Contact Treun | Auckland Project Management & Construction';
  }, []);
 
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xkjnbzke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
              <div className="contact-entity">
                <h2>Treun — Project Management & Construction</h2>
                <p>Project management, design coordination, procurement and construction for civil infrastructure and commercial projects.</p>
                <div className="contact-details">
                  <p><strong>Phone:</strong> <a href="tel:+64276464624">+64 27 6464 624</a></p>
                  <p><strong>Email:</strong> <a href="mailto:matt@treun.co.nz">matt@treun.co.nz</a></p>
                </div>
              </div>
 
              <div className="contact-entity">
                <h2>Location & Hours</h2>
                <p>Algies Bay<br />Warkworth, Auckland<br />New Zealand</p>
                <div className="contact-details">
                  <p><strong>Monday – Friday:</strong> 7:00am – 5:00pm</p>
                  <p><strong>Saturday – Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
 
            <div className="contact-form">
              <h2>Send a Message</h2>
 
              {status === 'success' ? (
                <div className="form-success">
                  <p>Message sent! We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell us about your project"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'error' && (
                    <p className="form-error">Something went wrong. Please email matt@treun.co.nz directly.</p>
                  )}
                </form>
              )}
            </div>
 
          </div>
        </div>
      </section>
    </div>
  );
}