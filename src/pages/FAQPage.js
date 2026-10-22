import React, { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import './FAQPage.css';
import faqs from '../data/faqs';


function FAQItem({ id, q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? 'faq-item open' : 'faq-item'}>
      <h3 className="faq-question-heading">
        <button
          className="faq-question"
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen(!open)}
        >
          <span>{q}</span>
          <span className="faq-icon" aria-hidden="true"></span>
        </button>
      </h3>
      <div id={`${id}-answer`} className="faq-answer" hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  useEffect(() => {
    document.title = 'FAQs | Treun | Project Management + Construction';
  }, []);

  return (
    <div className="faq-page">
      <PageHero
        eyebrow="Treun — FAQs"
        title="Frequently asked questions"
        intro="Common questions about working with Treun."
      />

      <section className="faq-content">
        <div className="faq-container">
          {faqs.map((section, i) => (
            <div key={section.category} className="faq-section">
              <h2>{section.category}</h2>
              <span className="treun-line treun-line--short"></span>
              <div className="faq-list">
                {section.questions.map((item, j) => (
                  <FAQItem key={item.q} id={`faq-${i}-${j}`} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <div className="faq-container faq-cta-inner">
          <div>
            <h2>Still have questions?</h2>
            <p>Get in touch and we'll be happy to help.</p>
          </div>
          <a href="/contact" className="btn btn-stone">
            Contact us <span className="btn-arrow" aria-hidden="true">&gt;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
