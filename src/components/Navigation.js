import React from 'react';
import './Navigation.css';

export default function Navigation() {
  const pathname = window.location.pathname;

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">TREUN</a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/services" className={pathname === '/services' ? 'nav-link active' : 'nav-link'}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/all-projects" className={pathname === '/all-projects' ? 'nav-link active' : 'nav-link'}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className={pathname === '/about' ? 'nav-link active' : 'nav-link'}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/faq" className={pathname === '/faq' ? 'nav-link active' : 'nav-link'}>
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className={pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
