import React, { useState } from 'react';
import './Navigation.css';

export default function Navigation() {
  const pathname = window.location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" onClick={closeMenu}>TREUN</a>
        </div>

        <button
          className={menuOpen ? 'nav-toggle open' : 'nav-toggle'}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/services" onClick={closeMenu} className={pathname === '/services' ? 'nav-link active' : 'nav-link'}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/all-projects" onClick={closeMenu} className={pathname === '/all-projects' ? 'nav-link active' : 'nav-link'}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" onClick={closeMenu} className={pathname === '/about' ? 'nav-link active' : 'nav-link'}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/faq" onClick={closeMenu} className={pathname === '/faq' ? 'nav-link active' : 'nav-link'}>
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" onClick={closeMenu} className={pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}