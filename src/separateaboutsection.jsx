import React from 'react';
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
  List,
  ListItem,
  ListItemText, // allows u to put text in the list item
  ListItemIcon,
  Avatar,
  ListItemAvatar, // allows u to put an avatar in the list item
  ListItemButton, // allows the list item to be clickable
  Divider,
} from '@mui/material';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Link, useNavigate } from 'react-router-dom';

export default function SeparateAboutSection() {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Stack sx={{ color: 'white' }}>
        <Stack alignItems="center" marginTop="100px">
          {' '}
          <Typography
            variant="h4"
            sx={{
              '@media (max-width: 621px)': {
                fontSize: '1.8rem',
              },
            }}
          >
            {' '}
            {t('aboutme')}{' '}
          </Typography>{' '}
        </Stack>

        <Stack alignItems="center" sx={{ marginTop: '20px' }}>
          <Stack
            alignItems="center"
            sx={{
              // outline: '2px solid purple',
              width: '550px',
              '@media (max-width: 621px)': {
                width: '90vw',
              },
            }}
          >
            {' '}
            <Typography
              variant="h6"
              sx={{
                '@media (max-width: 621px)': {
                  fontSize: '1rem',
                },
              }}
            >
              {' '}
              {/* Hi! I am originally from America, and am currently living in Germany
            since 2018. I have also been coding for 2 years now, and enjoy
            designing websites and making apps. I like learning new things
            everyday and believe self-improvement is important. */}
              {t('aboutmeseparate')}{' '}
            </Typography>{' '}
          </Stack>
        </Stack>

        <Stack alignItems="center">
          {' '}
          <Typography
            variant="h4"
            sx={{
              marginTop: '40px',
              '@media (max-width: 621px)': {
                fontSize: '1.8rem',
              },
            }}
          >
            {' '}
            {/* Developer Skills{' '} */}
            {t('skills')}{' '}
          </Typography>{' '}
        </Stack>
        <Stack alignItems="center" sx={{ marginTop: '10px' }}>
          {' '}
          <Stack direction="row" spacing={5}>
            <Stack
              sx={{
                '@media (max-width: 621px)': {
                  fontSize: '1rem',
                },
              }}
            >
              <ul className="skilllist">
                <li>Git</li>
                <li> Javascript</li>
                <li>Reactjs</li>
                <li>Typescript</li>
                <li>Angular</li>

                {/* Add more skills as needed */}
                <Stack
                  sx={{
                    display: 'none',
                    '@media (max-width: 621px)': {
                      display: 'block',
                    },
                  }}
                >
                  <li>Sequelize</li>
                  <li>Jest</li>
                  <li>Prisma</li>
                  <li>Graphql</li>
                </Stack>
              </ul>
            </Stack>

            <Stack>
              <ul className="skilllist">
                <li>Mongodb</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
                <li>Mongoose</li>
                <li>Nodejs</li>

                {/* Add more skills as needed */}
                <Stack
                  sx={{
                    display: 'none',
                    '@media (max-width: 621px)': {
                      display: 'block',
                    },
                  }}
                >
                  <li>Koa</li>
                  <li>Socket.io</li>
                  <li>Nextjs</li>
                </Stack>
              </ul>
            </Stack>
            <Stack
              sx={{
                '@media (max-width: 621px)': {
                  display: 'none',
                },
                '@media (max-height: 689px)': {
                  paddingBottom: '20px',
                },
              }}
            >
              <ul className="skilllist">
                <li>Sequelize</li>
                <li>Jest</li>
                <li>Prisma</li>
                <li>Graphql</li>
                <li>Koa</li>
                <li>Socket.io</li>
                <li>Nextjs</li>
                {/* Add more skills as needed */}
              </ul>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
}
