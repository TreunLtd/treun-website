import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" aria-label="Treun home">
            <img
              src="/brand/treun-lockup-stone.svg"
              alt="Treun — Project Management + Construction"
              width="280"
              height="96"
            />
          </a>
          <p className="footer-tagline">Built on strength.</p>
        </div>

        <div className="footer-columns">
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/project-management">Project Management</a></li>
              <li><a href="/construction">Construction</a></li>
              <li><a href="/all-projects">Projects</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Algies Bay, Warkworth<br />Auckland, New Zealand</li>
              <li>Mon–Fri: 7:00am – 5:00pm</li>
              <li><a href="tel:+64276464624">027 6464 624</a></li>
              <li><a href="mailto:matt@treun.co.nz?subject=Treun%20Project%20Enquiry">matt@treun.co.nz</a></li>
              <li><a href="/matt-chernishov.vcf" download>Save contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/treun-project-management" target="_blank" rel="noreferrer">
                  LinkedIn — Treun Project Management
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/treun-works" target="_blank" rel="noreferrer">
                  LinkedIn — Treun Works
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="treun-line"></span>
        <p>
          &copy; {year} Treun Limited. All rights reserved.
          <span className="footer-gaelic"> Treun (t̪ʰɾʲeːn) — Scottish Gaelic for strong, brave, solid.</span>
        </p>
      </div>
    </footer>
  );
}
