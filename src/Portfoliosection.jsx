import React from 'react';
import { motion } from 'framer-motion';
import petsy from './petsy-min.png';
import weatherimg from './weatherimg-min.png';
import luminesc from './luminesc.png';
import { Link } from 'react-router-dom';
import { useTranslation, initReactI18next } from 'react-i18next';
import {
  Stack,
  Tooltip,
  IconButton,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <Stack
          sx={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '20px',
            height: '650px',
            width: '400px',
            backgroundColor: '#222222',
            position: 'relative',
            borderRadius: '20px',
            '@media (max-width: 463px)': {
              marginRight: '10px',
              marginLeft: '10px',
            },
            '@media (max-width: 435px)': {
              height: '650px',
            },
            '@media (max-width: 393px)': {
              height: '700px',
            },
            '@media (max-width: 361px)': {
              height: '750px',
            },
            '@media (max-width: 339px)': {
              height: '800px',
            },
          }}
        >
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

          <div className="createdwithdiv">
            {' '}
            <Stack
              sx={{
                fontSize: '1.1rem',
                '@media (max-width: 363px)': {
                  fontSize: '1.1rem',
                },
                '@media (max-width: 333px)': {
                  fontSize: '1.0rem',
                },
              }}
            >
              {' '}
              #Mongodb #Express #React #Nodejs{' '}
            </Stack>
            <Stack
              sx={{
                marginTop: '10px',
                fontSize: '1.1rem',
                '@media (max-width: 363px)': {
                  fontSize: '1.1rem',
                },
                '@media (max-width: 333px)': {
                  fontSize: '1.0rem',
                },
              }}
            >
              {' '}
              #Mongoose #Firebase #Material Ui{' '}
            </Stack>
          </div>
          <Stack
            display="flex"
            direction="row"
            sx={{
              position: 'absolute',
              bottom: '20px',
              color: 'white',
              cursor: 'pointer',
            }}
            spacing={1}
          >
            {' '}
            <Link
              to="https://github.com/xvii20/Illupets-frontend"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'violet' }}
            >
              {' '}
              Frontend Code
            </Link>
            <span> / </span>
            <Stack sx={{ color: 'red' }}>
              <Link
                to="https://github.com/xvii20/Illupets-backend"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'violet',
                  textDecoration: 'none',
                  ':hover': {
                    color: 'blue',
                  },
                }}
                // className="luminescbackendlink"
              >
                {' '}
                Backend Code
              </Link>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          sx={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '20px',
            height: '650px',
            width: '400px',
            backgroundColor: '#222222',
            position: 'relative',
            borderRadius: '20px',
            '@media (max-width: 463px)': {
              marginRight: '10px',
              marginLeft: '10px',
            },
            '@media (max-width: 435px)': {
              height: '650px',
            },
            '@media (max-width: 393px)': {
              height: '700px',
            },
            '@media (max-width: 361px)': {
              height: '750px',
            },
            '@media (max-width: 339px)': {
              height: '800px',
            },
          }}
        >
          <div className="nameofapp"> Luminesc </div>
          <div className="appimgbox">
            <Link
              to="https://luminesc.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img src={luminesc} className="boximg" />{' '}
            </Link>
          </div>
          <div className="appdescription">
            <p> {t('luminescdescription')}</p>
          </div>

          <div className="createdwithdiv">
            {' '}
            <Stack
              sx={{
                fontSize: '1.1rem',
                '@media (max-width: 363px)': {
                  fontSize: '1.1rem',
                },
                '@media (max-width: 333px)': {
                  fontSize: '1.0rem',
                },
              }}
            >
              {' '}
              #PostgreSQL #Express #React #Nodejs
            </Stack>
            <Stack
              sx={{
                marginTop: '10px',
                fontSize: '1.1rem',
                '@media (max-width: 363px)': {
                  fontSize: '1.1rem',
                },
                '@media (max-width: 333px)': {
                  fontSize: '1.0rem',
                },
              }}
            >
              {' '}
              #Prisma #Firebase #Material Ui{' '}
            </Stack>
          </div>

          <Stack
            display="flex"
            direction="row"
            sx={{
              position: 'absolute',
              bottom: '20px',
              color: 'white',
              cursor: 'pointer',
            }}
            spacing={1}
          >
            {' '}
            <Link
              to="https://github.com/xvii20/luminesc-frontend"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'violet' }}
            >
              {' '}
              Frontend Code
            </Link>
            <span> / </span>
            <Stack sx={{ color: 'red' }}>
              <Link
                to="https://github.com/xvii20/luminesc-backend"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'violet',
                  textDecoration: 'none',
                  ':hover': {
                    color: 'blue',
                  },
                }}
                // className="luminescbackendlink"
              >
                {' '}
                Backend Code
              </Link>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          className="box"
          sx={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom: '20px',
            height: '600px',
            width: '400px',
            backgroundColor: '#222222',
            position: 'relative',
            borderRadius: '20px',
          }}
        >
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
          <div className="createdwithdiv">
            {' '}
            #React #Typescript #Material UI{' '}
          </div>

          <Stack
            display="flex"
            direction="row"
            sx={{
              position: 'absolute',
              bottom: '20px',
              color: 'white',
              cursor: 'pointer',
            }}
            spacing={1}
          >
            {' '}
            <Link
              to="https://github.com/xvii20/Skylight"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'violet' }}
            >
              {' '}
              Frontend Code
            </Link>
          </Stack>
        </Stack>
      </div>
    </motion.div>
  );
}
