import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Civil Infrastructure & Construction Project Management</h1>
        <p>Managing complexity. Delivering results.</p>
        <div className="hero-buttons">
          <a href="/project-management" className="btn btn-primary">
            Treun Project Management
          </a>
          <a href="/works" className="btn btn-secondary">
            Treun Works
          </a>
        </div>
      </div>
    </section>
  );
}