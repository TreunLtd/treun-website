import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/projects/WILL/WILL_01.jpg')" }}>
      <div className="hero-content">
        <h1>Project Management and Construction</h1>
        <p>Residential, commercial, and civil projects across Auckland and Northland.</p>
        <div className="hero-buttons">
          <a href="/services" className="btn btn-primary">
            Our Services
          </a>
          <a href="/all-projects" className="btn btn-secondary">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
