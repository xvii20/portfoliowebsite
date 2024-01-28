import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import petsy from './petsy.png';
import weatherimg from './weatherimg.png';

export default function Portfoliosection() {
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
          <div className="nameofapp"> Petsy </div>
          <div className="appimgbox">
            <img src={petsy} className="boximg" />
          </div>
          <div className="appdescription">
            <p>
              {' '}
              Petsy is an app where you can search for adopted pets in the
              United States. You can choose to contact the owners of the pets
              for more pet info, as well as adopting a pet from them{' '}
            </p>
          </div>
          <div className="createdwithdiv"> #React </div>
        </div>

        <div className="box">
          <div className="nameofapp"> Weather App </div>
          <div className="appimgbox">
            <img src={weatherimg} className="boximg" />
          </div>
          <div className="appdescription">
            <p>
              Web app that allows you to type in a city in the input field and
              then displays the 5 day weather forecast of that city.
            </p>
          </div>
          <div className="createdwithdiv"> #React #Typescript </div>
        </div>
      </div>
    </motion.div>
  );
}
