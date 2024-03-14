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
import {
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Button,
  MenuItem,
  Drawer,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutSection() {
  // let [hasPageLoaded, setHasPageLoaded] = useState(false);
  let navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: '120px',
          marginBottom: '20px',
        }}
      >
        {/* <Link
          to="https://github.com/xvii20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgComponent className="githubicon" />
        </Link> */}

        <IconButton
          arial-label="github"
          onClick={() => {
            window.location.href = 'https://github.com/xvii20';
          }}
        >
          <GitHubIcon sx={{ color: 'white', fontSize: '2.3rem' }} />
        </IconButton>

        <IconButton
          aria-label="linkedin"
          onClick={() => {
            window.location.href =
              'https://www.linkedin.com/in/laurence-lim-636b032aa/';
          }}
          sx={{ fontSize: '7rem' }}
        >
          <LinkedInIcon
            sx={{ color: 'white', fontSize: '2.5rem', paddingTop: '3px' }}
          />
        </IconButton>

        {/* <Link
          to="https://www.linkedin.com/in/laurence-lim-636b032aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinComponent className="linkedinicon" />
        </Link> */}
      </Stack>

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
                <Stack sx={{ marginBottom: '20px' }}>
                  {' '}
                  <Typography
                    variant="h4"
                    sx={{
                      '@media (max-width: 381px)': {
                        fontSize: '30px', // Width when screen size is less than or equal to 500px
                      },
                    }}
                  >
                    {' '}
                    {t('hellomessage')}{' '}
                  </Typography>
                </Stack>
                <div className="introtext">
                  {' '}
                  <Stack>
                    <Typography variant="h5" sx={{ marginLeft: '14px' }}>
                      {' '}
                      Full-Stack Developer{' '}
                    </Typography>
                  </Stack>
                  {/* <div className="longspandiv">
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
                  </div> */}
                  <Stack
                    className="contactmebuttondiv"
                    justifyContent="center"
                    direction="row"
                    sx={{ height: '45px', marginTop: '30px' }}
                  >
                    {' '}
                    <Button
                      onClick={function () {
                        navigate('/contact');
                      }}
                      color="secondary"
                      variant="contained"
                      sx={{
                        height: '50px',
                        width: '200px',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        marginRight: '-10px',
                        // paddingTop: '10px',
                        padding: '10px',
                        borderRadius: '40px',
                        // backgroundColor: '#CCCCCC',
                        // color: 'black',
                        // '&:hover': {
                        //   backgroundColor: 'darkgray', // Change to the desired hover color
                        // },
                      }}
                    >
                      <Typography> {t('contactme')} </Typography>
                    </Button>{' '}
                  </Stack>
                </div>
              </>
            ) : (
              <>
                <Stack sx={{ marginBottom: '20px' }}>
                  {' '}
                  <Typography
                    variant="h4"
                    sx={{
                      '@media (max-width: 381px)': {
                        fontSize: '30px', // Width when screen size is less than or equal to 500px
                      },
                    }}
                  >
                    {' '}
                    {t('hellomessage')}{' '}
                  </Typography>
                </Stack>
                <div className="introtext">
                  <Stack>
                    <Typography variant="h5" sx={{ marginLeft: '14px' }}>
                      {' '}
                      Full-Stack Entwickler{' '}
                    </Typography>
                  </Stack>
                  {/* {' '}
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
                    
                    </span>
                  </div>
                  <div className="ultrashortdivde">
                    <span className="ultrashortspande">
                 
                    </span>
                  </div> */}
                  <Stack
                    className="contactmebuttondiv"
                    justifyContent="center"
                    direction="row"
                    sx={{ height: '45px', marginTop: '30px' }}
                  >
                    {' '}
                    <Button
                      onClick={function () {
                        navigate('/contact');
                      }}
                      color="secondary"
                      variant="contained"
                      sx={{
                        height: '50px',
                        width: '250px',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        marginRight: '-10px',
                        // paddingTop: '10px',
                        padding: '10px',
                        borderRadius: '40px',
                        // backgroundColor: '#CCCCCC',
                        // color: 'black',
                        // '&:hover': {
                        //   backgroundColor: 'darkgray', // Change to the desired hover color
                        // },
                      }}
                    >
                      <Typography> {t('contactme')} </Typography>
                    </Button>{' '}
                  </Stack>
                </div>
              </>
            )}
          </div>

          {/* MEDIA QUERY intro. this div will only appear when the width is atleast 1014px */}
          {/* <div className="mediaintrowrapper">
            <div className="hello"> {t('hellomessage')} </div>
            <div className="mediaintro">{t('mediaintro')}</div>

            <div className="contactmebuttondiv">
              {' '}
              <Button
                onClick={function () {
                  navigate('/contact');
                }}
                color="secondary"
                variant="contained"
                sx={{
                  height: '50px',
                  width: '220px',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  marginRight: '20px',
                  paddingTop: '10px',
                  // backgroundColor: '#CCCCCC',
                  // color: 'black',
                  '&:hover': {
                    backgroundColor: 'darkgray', // Change to the desired hover color
                  },
                }}
              >
                <Typography> {t('contactme')} </Typography>
              </Button>{' '}
            </div>
          </div> */}
        </div>

        {/* <div className="aboutdivtwo"> section two</div> */}
      </div>
    </motion.div>
  );
}
