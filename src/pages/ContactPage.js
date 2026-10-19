import React, { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import './ContactPage.css';

const emptyForm = { name: '', email: '', phone: '', service: '', message: '' };

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Treun | Project Management + Construction';
  }, []);

  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xkjnbzke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData(emptyForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <PageHero
        eyebrow="Treun — Contact"
        title="Get in touch"
        intro="Have a project in mind? Let's discuss how we can help."
      />

      <section className="contact-content">
        <div className="contact-container contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <span className="treun-line"></span>
              <h2>Talk to Matt</h2>
              <p>Project management and construction across Auckland and Northland.</p>
              <dl className="contact-details">
                <div>
                  <dt>Phone</dt>
                  <dd><a href="tel:+64276464624">027 6464 624</a></dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd><a href="mailto:matt@treun.co.nz?subject=Treun%20Project%20Enquiry">matt@treun.co.nz</a></dd>
                </div>
              </dl>
              <a href="/matt-chernishov.vcf" className="contact-save" download>
                Save contact <span aria-hidden="true">&gt;</span>
              </a>
            </div>

            <div className="contact-block">
              <span className="treun-line"></span>
              <h2>Location &amp; hours</h2>
              <p>Algies Bay<br />Warkworth, Auckland<br />New Zealand</p>
              <dl className="contact-details">
                <div>
                  <dt>Monday – Friday</dt>
                  <dd>7:00am – 5:00pm</dd>
                </div>
                <div>
                  <dt>Saturday – Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send a message</h2>

            {status === 'success' ? (
              <div className="form-success" role="status">
                <p>Message sent. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">What can we help with?</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select one</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Construction">Construction</option>
                    <option value="Both">Both</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us about your project"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-blue submit-button" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                  {status !== 'sending' && <span className="btn-arrow" aria-hidden="true">&gt;</span>}
                </button>
                {status === 'error' && (
                  <p className="form-error" role="alert">
                    Something went wrong. Please email <a href="mailto:matt@treun.co.nz">matt@treun.co.nz</a> directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
