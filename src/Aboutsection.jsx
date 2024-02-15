import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import SvgComponent from './githubsvg';
import LinkedinComponent from './linkedinsvg';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from 'react-i18next';

export default function AboutSection() {
  // let [hasPageLoaded, setHasPageLoaded] = useState(false);
  let navigate = useNavigate();

  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   setHasPageLoaded(true);
  // }, []);

  return (
    <motion.div
      className="aboutsectionparent"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.2 }}
    >
      <div className="icondiv">
        <Link
          to="https://github.com/xvii20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgComponent className="githubicon" />
        </Link>

        <Link
          to="https://www.linkedin.com/in/laurence-lim-636b032aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinComponent className="linkedinicon" />
        </Link>
      </div>

      <div className="introdiv">
        <div className="aboutdiv">
          {/* <div className="icons">
            <Link
              to="https://github.com/xvii20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinComponent className="linkedinicon" />
            </Link>

            <Link
              to="https://github.com/xvii20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgComponent className="githubicon" />
            </Link>
          </div> */}

          <div className="introwrapper">
            {localStorage.getItem('lng') === 'en' ||
            localStorage.getItem('lng') === null ? (
              <>
                <div className="hello"> {t('hellomessage')} </div>
                <div className="introtext">
                  {' '}
                  <div className="longspandiv">
                    <span className="longspan">
                      {' '}
                      I'm a passionate and dedicated web developer with a flair
                      for turning ideas into reality. My journey in{' '}
                    </span>
                  </div>
                  <div className="mediumspandiv">
                    <span className="mediumspan">
                      {' '}
                      the world of coding is fueled by a deep love for building
                      things that not only work seamlessly{' '}
                    </span>{' '}
                  </div>{' '}
                  <div className="shortspandiv">
                    <span className="shortspan">
                      but also leave a lasting impression. I thrive on the
                      challenges of web development.
                    </span>
                  </div>
                  <div className="ultrashortdiv">
                    <span className="ultrashortspan">
                      And a commitment to staying on the cutting edge of
                      technology
                    </span>
                  </div>
                  <div className="contactmebuttondiv">
                    {' '}
                    <button
                      onClick={function () {
                        navigate('/contact');
                      }}
                    >
                      {t('contactme')}
                    </button>{' '}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="hellode"> {t('hellomessage')} </div>
                <div className="introtext">
                  {' '}
                  <div className="longspandivde">
                    <span className="longspande">
                      {' '}
                      Ich bin ein leidenschaftlicher und engagierter
                      Webentwickler mit einem Talent dafür, Ideen in die
                      <span className="xlongspan">
                        {' '}
                        Realität umzusetzen. Meine Reise im die Welt des
                        Codierens wird durch eine tiefe{' '}
                      </span>
                    </span>
                  </div>
                  <div className="mediumspandivde">
                    <span className="mediumspande">
                      {' '}
                      <span className="xlongspantwo">
                        {' '}
                        Liebe zum Bau von Dingen angetrieben, die nicht nur
                        nahtlos funktionieren aber
                      </span>
                    </span>{' '}
                  </div>{' '}
                  <div className="shortspandivde">
                    <span className="shortspande">
                      <span className="xlongspanthree">
                        {' '}
                        <span className="xlongspanfour">
                          {' '}
                          auch einen bleibenden Eindruck hinterlassen.
                        </span>
                      </span>
                      {/* <span className="xlongspanfive">
                        {' '}
                        Ich blühe
                          auf bei den Herausforderungen der Webentwicklung. Und das
                        Bekenntnis,
                      </span> */}
                    </span>
                  </div>
                  <div className="ultrashortdivde">
                    <span className="ultrashortspande">
                      {/* <span className="xlongspansix">
                        {' '}
                        immer auf dem neuesten Stand der Technologie zu bleiben{' '}
                      </span> */}
                    </span>
                  </div>
                  <div className="contactmebuttondiv">
                    {' '}
                    <button
                      onClick={function () {
                        navigate('/contact');
                      }}
                    >
                      {t('contactme')}
                    </button>{' '}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* MEDIA QUERY intro. this div will only appear when the width is atleast 1014px */}
          <div className="mediaintrowrapper">
            <div className="hello"> {t('hellomessage')} </div>
            <div className="mediaintro">{t('mediaintro')}</div>

            <div className="contactmebuttondiv">
              {' '}
              <button
                onClick={function () {
                  navigate('/contact');
                }}
              >
                {t('contactme')}
              </button>{' '}
            </div>
          </div>
        </div>

        {/* <div className="aboutdivtwo"> section two</div> */}
      </div>
    </motion.div>
  );
}
