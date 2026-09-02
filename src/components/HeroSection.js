import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/projects/WILL/WILL_01.jpg')" }}>
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