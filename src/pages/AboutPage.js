import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import './AboutPage.css';

const credentials = [
  'MBA — Massey University',
  'Licensed Building Practitioner (Carpentry)',
  'Certificate III in Carpentry — Australia',
  'NZ Certified Builders',
  'PI/PL Insurance',
  'Downer Felix Vendor',
];

const values = [
  { title: 'Strength', text: 'Robust thinking, sound decisions and work that stands up over time.' },
  { title: 'Accountability', text: 'Taking ownership of decisions, commitments and outcomes.' },
  { title: 'Practicality', text: 'Finding clear, workable solutions grounded in real-world experience.' },
  { title: 'Quality', text: 'Maintaining high standards in both thinking and execution.' },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Treun | Project Management + Construction';
  }, []);

  return (
    <div className="about-page">
      <PageHero
        eyebrow="Treun — About"
        title="Built on strength."
        intro="Treun (t̪ʰɾʲeːn) — Scottish Gaelic for strong, brave, solid."
      />

      <section className="about-section">
        <div className="about-container about-two-col">
          <div className="about-col">
            <span className="treun-line"></span>
            <h2>The story</h2>
            <p>Treun is a Scottish Gaelic word meaning strong. It was chosen deliberately — not as a boast, but as a commitment. Quality relationships, reliability and dependability.</p>
            <p>The name comes from Old Irish <em>trén</em>, rooted in Proto-Celtic and Proto-Indo-European origins meaning to be strong, brave or sturdy — built from stone. It is a word that has endured for thousands of years. That kind of reliability is what we aim to bring to every project we work on.</p>
            <p>Treun was founded by Matt Chernishov with a simple belief: that successful projects should be designed and built for future generations to also enjoy.</p>
          </div>
          <div className="about-col">
            <span className="treun-line"></span>
            <h2>One brand. Two capabilities.</h2>
            <p>Treun delivers across two disciplines — project management and construction — under one brand. Depending on your project, we engage as advisors, builders, or both.</p>
            <p><a href="/project-management"><strong>Project management</strong></a> covers feasibility, options analysis, design coordination, procurement and contract administration. We engage early — before architects and designers are involved — to establish what is actually viable before you commit significant spend.</p>
            <p><a href="/construction"><strong>Construction</strong></a> covers physical delivery — residential builds, civil works, subdivisions and infrastructure. From simple house builds through to complex multi-lot developments.</p>
            <p>The same values and the same standard of work apply across both.</p>
          </div>
        </div>
      </section>

      <section className="about-section about-section-dark">
        <div className="about-container">
          <p className="about-eyebrow">Director</p>
          <h2>Matt Chernishov <span className="about-postnominals">MBA, LBP</span></h2>
          <span className="treun-line treun-line--short"></span>
          <div className="matt-section">
            <div className="matt-photo-col">
              <img
                src="/images/photo_of_Matt.jpg"
                alt="Matt Chernishov, Director of Treun"
                className="matt-photo"
              />
            </div>
            <div className="matt-bio-col">
              <p>Matt brings a rare combination of on-the-tools experience and formal business education. Holding an MBA from Massey University and a Licensed Building Practitioner qualification with a carpentry specialty, he understands construction from both the business and the trade perspective.</p>
              <p>His career spans residential development, commercial builds, offsite and modular construction, and civil infrastructure. He has managed projects from small owner-builder builds through to complex multi-lot subdivisions, premanufactured housing delivered to remote locations, and commercial fitouts.</p>
              <p>Matt has worked as a project manager, design manager, operations manager, owner-developer, facilities manager, residential property manager and commercial &amp; residential property investor — giving him a full-cycle understanding of what it takes to deliver a project with future returns in mind, and what it costs when things go wrong.</p>
              <p>He is a member of NZ Certified Builders and is registered on the Downer Felix Vendor Marketplace. Treun carries full professional indemnity and public liability insurance, and operates with relevant H&amp;S systems.</p>
              <ul className="credentials-list">
                {credentials.map((c) => (
                  <li className="credential-badge" key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container about-network">
          <span className="treun-line"></span>
          <div className="about-network-body">
            <h2>Our network</h2>
            <p className="about-lead">We have teams of trades, consultants and suppliers that we use regularly — including on our own development projects — that we know we can trust. We manage and contract who we need, so we can breathe in or out to suit the scale and timeline of your project.</p>
          </div>
          <span className="treun-line"></span>
        </div>
      </section>

      <section className="about-section about-section-stone">
        <div className="about-container">
          <h2>Our values</h2>
          <span className="treun-line treun-line--short"></span>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-item" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container about-cta-inner">
          <h2>Let's talk about your project.</h2>
          <a href="/contact" className="btn btn-stone">
            Get in touch <span className="btn-arrow" aria-hidden="true">&gt;</span>
          </a>
        </div>
      </section>
    </div>
  );
}
