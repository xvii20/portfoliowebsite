import React from 'react';
import { NavLink } from 'react-router-dom';

/* "menu" */
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="menu">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'navbareleactive ' : 'navbarele'
          }
          to="/about"
        >
          About Me
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'navbareleactive ' : 'navbarele'
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'navbareleactive' : 'navbarele'
          }
          to="/contact"
        >
          Contact{' '}
        </NavLink>
      </div>
    </nav>
  );
}
