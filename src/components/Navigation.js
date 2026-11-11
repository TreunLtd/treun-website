import React, { useState, useEffect } from 'react';
import './Navigation.css';

const links = [
  { href: '/project-management', label: 'Project Management' },
  { href: '/construction', label: 'Construction' },
  { href: '/all-projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = window.location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className="navigation" aria-label="Main">
      <div className="nav-container">
        <a href="/" className="nav-logo" onClick={closeMenu} aria-label="Treun home">
          <img src="/brand/treun-logo-stone.svg" alt="Treun" width="140" height="27" />
        </a>

        <button
          className={menuOpen ? 'nav-toggle open' : 'nav-toggle'}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="main-menu" className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
          {links.map((link) => (
            <li className="nav-item" key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={pathname === link.href ? 'nav-link active' : 'nav-link'}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && <div className="nav-backdrop" onClick={closeMenu} aria-hidden="true"></div>}
    </nav>
  );
}
