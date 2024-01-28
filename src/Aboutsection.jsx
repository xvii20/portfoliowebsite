import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import SvgComponent from './githubsvg';
import LinkedinComponent from './linkedinsvg';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AboutSection() {
  // let [hasPageLoaded, setHasPageLoaded] = useState(false);
  let navigate = useNavigate();

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

      {/* Your main content goes here */}
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
            <div className="hello"> Hello! 👋 I'm Laurence </div>
            <div className="introtext">
              {' '}
              <div className="longspandiv">
                <span className="longspan">
                  {' '}
                  I'm a passionate and dedicated web developer with a flair for
                  turning ideas into reality. My journey in{' '}
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
                  And a commitment to staying on the cutting edge of technology
                </span>
              </div>
              <div className="contactmebuttondiv">
                {' '}
                <button
                  onClick={function () {
                    navigate('/contact');
                  }}
                >
                  {' '}
                  Contact me{' '}
                </button>{' '}
              </div>
            </div>
          </div>

          {/* MEDIA QUERY intro. this div will only appear when the width is atleast 1014px */}
          <div className="mediaintrowrapper">
            <div className="hello"> Hello! 👋 I'm Laurence </div>
            <div className="mediaintro">
              I'm a passionate and dedicated web developer with a flair for
              turning ideas into reality. My journey in the world of coding is
              fueled by a deep love for building things that not only work
              seamlessly but also leave a lasting impression. I thrive on the
              challenges of web development. And a commitment to staying on the
              cutting edge of technology
            </div>

            <div className="contactmebuttondiv">
              {' '}
              <button
                onClick={function () {
                  navigate('/contact');
                }}
              >
                {' '}
                Contact me{' '}
              </button>{' '}
            </div>
          </div>
        </div>

        {/* <div className="aboutdivtwo"> section two</div> */}
      </div>
    </motion.div>
  );
}
