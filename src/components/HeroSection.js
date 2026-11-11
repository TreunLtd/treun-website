import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(46,64,78,0.85) 0%, rgba(46,64,78,0.55) 55%, rgba(46,64,78,0.35) 100%), url('/images/projects/WILL/WILL_01.jpg')",
      }}
    >
      <div className="hero-inner">
        <div className="hero-block">
          <span className="treun-line"></span>
          <h1>
            Built on
            <br />
            strength.
          </h1>
          <span className="treun-line"></span>

          <div className="hero-buttons">
            <a href="/project-management" className="btn btn-stone">
              Project Management <span className="btn-arrow" aria-hidden="true">&gt;</span>
            </a>
            <a href="/construction" className="btn btn-stone">
              Construction <span className="btn-arrow" aria-hidden="true">&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
