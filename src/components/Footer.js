import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Treun</h4>
          <p>Project management and construction. Delivering residential, commercial, and civil projects across Auckland and Northland.</p>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <p><a href="/services">Project Management</a></p>
          <p><a href="/services">Construction & Civil Works</a></p>
          <p><a href="/all-projects">Projects</a></p>
          <p><a href="/faq">FAQs</a></p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Algies Bay, Warkworth<br />Auckland, New Zealand</p>
          <p>Mon–Fri: 7:00am – 5:00pm</p>
          <p>Phone: <a href="tel:+64276464624">+64 27 6464 624</a></p>
          <p>Email: <a href="mailto:matt@treun.co.nz?subject=Treun Project Enquiry">matt@treun.co.nz</a></p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <p><a href="https://linkedin.com/company/treun-project-management" target="_blank" rel="noreferrer">LinkedIn — Treun</a></p>     
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Treun Limited. All rights reserved. &nbsp;|&nbsp; <em>Treun (t̪ʰɾʲeːn) — Scottish Gaelic for strong | brave | solid.</em></p>
      </div>
    </footer>
  );
}
