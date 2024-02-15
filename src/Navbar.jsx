import React from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation, initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import GermanySvgComponent from './germanycomponent';
import UsaSvgComponent from './usacomponent';

/* "menu" */
export default function Navbar() {
  const { t, i18n } = useTranslation();

  let handlechangelng = function (lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  return (
    <nav className="navbar">
      <div className="menu">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'navbareleactive ' : 'navbarele'
          }
          to="/about"
        >
          {t('aboutme')}{' '}
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
          {t('contact')}
        </NavLink>
      </div>
      <div className="togglelanguagediv">
        <select
          className="languageselect"
          onChange={(e) => handlechangelng(e.target.value)}
          value={i18n.language}
        >
          <option value="en" className="en">
            {' '}
            &#x1F1FA;&#x1F1F8; EN
          </option>
          <option value="de" className="de">
            {' '}
            &#x1F1E9;&#x1F1EA; DE
          </option>
        </select>
      </div>
    </nav>
  );
}
