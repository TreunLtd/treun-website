import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Treun</h1>
          <p>Treun (tree-un) — Scottish Gaelic for strong.</p>
        </div>
      </section>

      {/* TREUN STORY */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-two-col">
            <div className="about-col">
              <h2>The Story</h2>
              <p>Treun is a Scottish Gaelic word meaning strong. It was chosen deliberately — not as a boast, but as a commitment. Strong design. Strong build. Strong management. Strong returns.</p>
              <p>The name comes from Old Irish <em>trén</em>, rooted in Proto-Celtic and Proto-Indo-European origins meaning to be stiff, rigid, strong, brave, or sturdy. It is a word that has endured for thousands of years. That kind of longevity is what we aim to bring to every project we work on.</p>
              <p>Treun was founded by Matt Chernishov with a simple belief: that good buildings require good thinking at every stage, from the first feasibility sketch through to the final nail.</p>
            </div>
            <div className="about-col">
              <h2>Two Disciplines</h2>
              <p>Treun operates as two distinct but complementary entities under one roof.</p>
              <p><strong>Treun Project Management</strong> handles the thinking side — feasibility, options analysis, design coordination, procurement, and contract administration. We engage early, before architects and designers are involved, to help clients understand what is actually viable before significant spend is committed.</p>
              <p><strong>Treun Works</strong> handles the building side — construction and civil works delivery across residential, commercial, and infrastructure projects. From simple house builds to complex multi-lot subdivisions and civil infrastructure.</p>
              <p>Clients can use one or both. The same values and the same standard of work apply across both.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MATT'S BIO */}
      <section className="about-section about-section-dark">
        <div className="about-container">
          <h2>Matt Chernishov — Director</h2>
          <div className="about-two-col">
            <div className="about-col">
              <p>Matt brings a rare combination of on-the-tools experience and formal business education. Holding an MBA from Massey University and a Licensed Building Practitioner qualification with a carpentry specialty, he understands construction from both the business and the trade perspective.</p>
              <p>His career spans residential development, commercial builds, offsite and modular construction, and civil infrastructure. He has managed projects from small owner-builder builds through to complex multi-lot subdivisions, premanufactured housing delivered to remote islands, and commercial fitouts in Australia.</p>
            </div>
            <div className="about-col">
              <p>Matt has worked as a project manager, design manager, operations manager, and owner-developer — giving him a full-cycle understanding of what it takes to deliver a project well, and what it costs when things go wrong.</p>
              <p>He is a member of NZ Certified Builders and is registered on the Downer Felix Vendor Marketplace. Treun carries full professional indemnity and public liability insurance, and operates with HazardCo H&S systems.</p>
              <div className="credentials-list">
                <div className="credential-badge">MBA — Massey University</div>
                <div className="credential-badge">Licensed Building Practitioner (Carpentry)</div>
                <div className="credential-badge">NZ Certified Builders</div>
                <div className="credential-badge">HazardCo H&S Accredited</div>
                <div className="credential-badge">PI/PL Insurance</div>
                <div className="credential-badge">Downer Felix Vendor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED NETWORK */}
      <section className="about-section">
        <div className="about-container about-center">
          <h2>Our Network</h2>
          <p className="about-lead">We have teams of trades, consultants and suppliers that we use regularly — including on our own development projects — that we know we can trust. We contract everyone, so we can scale up or down depending on the size and timeline of your project.</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-section about-section-grey">
        <div className="about-container">
          <h2>What We Believe In</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>Longevity</h4>
              <p>We build things that last. Decisions made with a long time horizon in mind.</p>
            </div>
            <div className="value-item">
              <h4>Beauty</h4>
              <p>Aesthetics matter. Good buildings look good and function well.</p>
            </div>
            <div className="value-item">
              <h4>Function</h4>
              <p>Form follows function. Every design decision should serve a purpose.</p>
            </div>
            <div className="value-item">
              <h4>Broad Thinking</h4>
              <p>We look at the full picture — investment, equity, design, delivery.</p>
            </div>
            <div className="value-item">
              <h4>Flexibility</h4>
              <p>We manage as much or as little as you need. No fixed contracts, no rigid thinking.</p>
            </div>
            <div className="value-item">
              <h4>Excellence</h4>
              <p>We hold ourselves to a high standard on every project, regardless of size.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
