import React, { useState } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [active, setActive] = useState('home');

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" onClick={() => setActive('home')}>TREUN</a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a 
              href="/project-management" 
              className={active === 'pm' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActive('pm')}
            >
              Project Management
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="/works" 
              className={active === 'works' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActive('works')}
            >
              Treun Works
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="/contact" 
              className={active === 'contact' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActive('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}