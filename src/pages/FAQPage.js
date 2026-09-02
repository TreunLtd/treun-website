import React, { useEffect, useState } from 'react';
import './FAQPage.css';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What areas do you service?',
        a: 'We are based in Algies Bay, Warkworth and primarily service Greater Auckland and Northland. We have delivered projects across Auckland including the North Shore, West Auckland, Central Auckland, East Auckland, and Waiheke Island, as well as regional projects in Kapiti Coast and Australia.'
      },
      {
        q: 'What is the difference between Treun Project Management and Treun Works?',
        a: 'Treun Project Management handles the advisory and management side — feasibility studies, options analysis, design coordination, procurement, and contract administration. Treun Works handles physical delivery — construction, civil works, and subdivision development. Clients can engage one or both depending on their needs.'
      },
      {
        q: 'Do you work with owner-builders?',
        a: 'Yes. We regularly work alongside owner-builders who want professional support for part or all of their project. We can manage as much or as little as you need — from a one-off feasibility study through to full project delivery.'
      },
      {
        q: 'What qualifications does the team hold?',
        a: 'Director Matt Chernishov holds an MBA from Massey University and is a Licensed Building Practitioner (carpentry specialty). Treun is a member of NZ Certified Builders, is registered on the Downer Felix Vendor Marketplace, holds professional indemnity and public liability insurance, and operates HazardCo H&S systems.'
      },
      {
        q: 'How do I get started?',
        a: 'Get in touch via the contact page or email matt@treun.co.nz. We\'ll arrange a conversation to understand your project and advise on the best way we can help.'
      }
    ]
  },
  {
    category: 'Treun Project Management',
    questions: [
      {
        q: 'How does the feasibility process work?',
        a: 'We engage early — before architects or designers are involved — to assess whether your project is viable. This includes preliminary bulk and location modelling, site assessment, and options analysis. The goal is to understand what is possible and what it will cost before you commit significant spend to design.'
      },
      {
        q: 'Do you provide fixed price contracts?',
        a: 'No. We work on a weekly invoicing basis with no fixed contract, which gives clients flexibility to adjust scope as the project develops. This means you can scale our involvement up or down as needed without being locked in.'
      }
    ]
  },
  {
    category: 'Treun Works',
    questions: [
      {
        q: 'Do you handle small residential builds?',
        a: 'Yes. We work across all scales — from small single house builds and 2-lot subdivisions through to complex multi-lot developments and civil infrastructure. Every project receives the same level of care and accountability regardless of size.'
      },
      {
        q: 'What types of civil works do you undertake?',
        a: 'Our civil works capability includes earthworks and bulk excavation, drainage and stormwater, retaining walls, foundations, roading and pavement, site preparation, and subdivision infrastructure. We have experience on challenging sites including contaminated land, soft ground, steep terrain, and remediated sites.'
      }
    ]
  }
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  );
}

export default function FAQPage() {

  useEffect(() => {
    document.title = 'FAQs | Treun Project Management & Construction Auckland';
  }, []);

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Common questions about Treun Project Management and Treun Works.</p>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          {faqs.map((section, i) => (
            <div key={i} className="faq-section">
              <h2>{section.category}</h2>
              {section.questions.map((item, j) => (
                <FAQItem key={j} q={item.q} a={item.a} />
              ))}
            </div>
          ))}

          <div className="faq-cta">
            <h3>Still have questions?</h3>
            <p>Get in touch and we'll be happy to help.</p>
            <a href="/contact" className="faq-button">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
