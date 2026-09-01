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
            <a 
              href="/project-management" 
              className={pathname === '/project-management' ? 'nav-link active' : 'nav-link'}
            >
              Project Management
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="/works" 
              className={pathname === '/works' ? 'nav-link active' : 'nav-link'}
            >
              Treun Works
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="/contact" 
              className={pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}