import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Treun Project Management</h4>
          <p>Project management, design coordination, and procurement for civil infrastructure and commercial projects.</p>
        </div>
        
        <div className="footer-section">
          <h4>Treun Works</h4>
          <p>Construction and civil works delivery. Delivering Complex Projects.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Algies Bay, Warkworth<br />Auckland, New Zealand</p>
          <p>Phone: +64 27 6464 624<br />Email: <a href="mailto:matt@treun.co.nz?subject=Treun Project Enquiry">matt@treun.co.nz</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Treun Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}