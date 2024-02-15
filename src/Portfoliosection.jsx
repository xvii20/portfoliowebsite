import React from 'react';
import { motion } from 'framer-motion';
import petsy from './petsy-min.png';
import weatherimg from './weatherimg-min.png';
import { Link } from 'react-router-dom';
import { useTranslation, initReactI18next } from 'react-i18next';

export default function Portfoliosection() {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      className="portfolioparentdiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="boxparent">
        <div className="box">
          <div className="nameofapp"> Illupets </div>
          <div className="appimgbox">
            <Link
              to="https://illupets.netlify.app/" // replace with the actual netlify link of the Illupets project...
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img src={petsy} className="boximg" />{' '}
            </Link>
          </div>
          <div className="appdescription">
            <p> {t('illupetsdescription')}</p>
          </div>
          <div className="createdwithdiv"> #React </div>
        </div>

        <div className="box">
          <div className="nameofapp"> Skylight </div>
          <div className="appimgbox">
            <Link
              to="https://skyxlight127.netlify.app/" // replace with the actual netlify link of the Skylight project...
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img src={weatherimg} className="boximg" />
            </Link>
          </div>
          <div className="appdescription">
            <p>{t('skylightdescription')}</p>
          </div>
          <div className="createdwithdiv"> #React #Typescript </div>
        </div>
      </div>
    </motion.div>
  );
}
