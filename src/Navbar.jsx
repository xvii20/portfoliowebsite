import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useTranslation, initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPointLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import GermanySvgComponent from './germanycomponent';
import UsaSvgComponent from './usacomponent';
import {
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
  Divider,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

/* "menu" */
export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // dropdown menu
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleHamburgerClick() {
    if (sidebarOpen) {
      setSideBarOpen(false);
    } else if (sidebarOpen == false) {
      setSideBarOpen(true);
    }

    // setSideBarOpen(!sidebarOpen);
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    } else if (isDrawerOpen == false) {
      setIsDrawerOpen(true);
    }
  }

  let handlechangelng = function (lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  // when the user clicks the language bar
  const handleFocus = () => {
    setExpanded(true);
  };

  // when the user clicks away from language bar
  const handleBlur = () => {
    setExpanded(false);
  };

  return (
    <nav className="navbar" style={{ zIndex: '99999999999999' }}>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        PaperProps={{
          sx: {
            backgroundColor: '#11101D',
          },
        }}
      >
        <Box
          sx={{
            width: '250px',
            marginTop: '100px',
          }}
        >
          <Stack
            className="stacksidebar"
            display="flex"
            direction="row"
            justifyContent="center"
            sx={{
              paddingTop: '10px',
              paddingBottom: '10px',
              marginLeft: '5px',
              marginRight: '5px',
              color: '#fff',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#fff', // Change to the desired hover color
              },
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            <NavLink
              style={{ color: 'inherit' }}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'hamburgernavbareleactive '
                  : 'hamburgernavbarele'
              }
              to="/"
            >
              <Typography> {t('home')} </Typography>
            </NavLink>
          </Stack>

          <Stack
            className="stacksidebar"
            display="flex"
            direction="row"
            justifyContent="center"
            sx={{
              paddingTop: '10px',
              paddingBottom: '10px',
              marginLeft: '5px',
              marginRight: '5px',
              color: '#fff',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#fff', // Change to the desired hover color
              },
            }}
            onClick={() => {
              navigate('/about');
            }}
          >
            <NavLink
              style={{ color: 'inherit' }}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'hamburgernavbareleactive '
                  : 'hamburgernavbarele'
              }
              to="/about"
            >
              <Typography> {t('aboutme')} </Typography>
            </NavLink>
          </Stack>

          <Stack
            className="stacksidebar"
            display="flex"
            direction="row"
            justifyContent="center"
            sx={{
              paddingTop: '10px',
              paddingBottom: '10px',
              marginLeft: '5px',
              marginRight: '5px',
              color: '#fff',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#fff', // Change to the desired hover color
              },
            }}
            onClick={() => {
              navigate('/portfolio');
            }}
          >
            <NavLink
              style={{ color: 'inherit' }}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'hamburgernavbareleactive '
                  : 'hamburgernavbarele'
              }
              to="/portfolio"
            >
              <Typography> Portfolio </Typography>
            </NavLink>
          </Stack>

          <Stack
            className="stacksidebar"
            display="flex"
            direction="row"
            justifyContent="center"
            sx={{
              paddingTop: '10px',
              paddingBottom: '10px',
              marginLeft: '5px',
              marginRight: '5px',
              color: '#fff',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#fff', // Change to the desired hover color
              },
            }}
            onClick={() => {
              navigate('/contact');
            }}
          >
            <NavLink
              style={{ color: 'inherit' }}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'hamburgernavbareleactive '
                  : 'hamburgernavbarele'
              }
              to="/contact"
            >
              <Typography> {t('contact')} </Typography>
            </NavLink>
          </Stack>

          <Stack
            className="stacksidebar"
            display="flex"
            direction="row"
            justifyContent="center"
            sx={{
              paddingTop: '5px',
              paddingBottom: '5px',
              marginLeft: '5px',
              marginRight: '9px',
              color: '#fff',
              borderRadius: '4px',
              paddingLeft: '30px',
              '&:hover': {
                backgroundColor: '#fff', // Change to the desired hover color
              },
            }}
          >
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleClick}
              aria-controls={open ? 'resources-menu' : undefined} // This attribute specifies the ID of the element (or elements) that the current element controls. It is typically used with interactive elements such as buttons, links, or form controls to indicate which elements are controlled or affected by the current element.
              aria-haspopup="true" // aria-haspopup attribute indicates that the element has a popup or a submenu. It is used to convey to screen readers and other assistive technologies that activating the element may trigger the display of additional content. In the provided code,
              aria-expanded={open ? 'true' : undefined} // aria-expanded  attribute indicates whether the element's controlled content is expanded or collapsed. It is typically used with elements that control the visibility of other content, such as buttons or collapsible sections. In the provided code,
              endIcon={<KeyboardArrowDownIcon sx={{ marginBottom: '4px' }} />}
            >
              {' '}
              <Typography variant="body2"> {t('languages')} </Typography>
            </Button>

            <Menu
              id="resources-menu"
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{ 'aria-labelledby': 'resources-button' }}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top', // Aligns the top of the menu with the top of the anchor element
                horizontal: 'right', // Aligns the right of the menu with the right of the anchor element
              }}
              transformOrigin={{
                vertical: 'top', // Aligns the top of the menu with the top of the anchor element
                horizontal: 'left', // Aligns the left of the menu with the right of the anchor element
              }}
            >
              <MenuItem
                onClick={() => {
                  handlechangelng('en');
                }}
                sx={{
                  width: '90px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {' '}
                EN{' '}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handlechangelng('de');
                }}
                sx={{
                  width: '90px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {' '}
                DE{' '}
              </MenuItem>
            </Menu>
          </Stack>
        </Box>
      </Drawer>

      {/* below is the navbar item menu... */}
      <div className="menu">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'navbareleactive ' : 'navbarele'
          }
          to="/"
        >
          {t('home')}{' '}
        </NavLink>

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
      <div className="togglelanguagediv" >
        {/* <select
          className={`languageselect`}
          onChange={(e) => handlechangelng(e.target.value)}
          value={i18n.language}
        >
          <option value="en" style={{ color: 'red' }}>
            {' '}
            EN
          </option>
          <option value="de" className="de">
            {' '}
            DE
          </option>
        </select> */}

        <span
          onClick={(e) => handlechangelng('en')}
          style={{
            cursor: 'pointer',
            color: localStorage.getItem('lng') == 'en' ? 'pink' : '',
          }}
        >
          {' '}
          EN{' '}
        </span>
        <span style={{ marginLeft: '5px', marginRight: '5px' }}> | </span>
        <span
          onClick={(e) => handlechangelng('de')}
          style={{
            cursor: 'pointer',
            color: localStorage.getItem('lng') == 'de' ? 'pink' : '',
          }}
        >
          {' '}
          DE{' '}
        </span>

        {/* <TextField
         label="Select country"
         select
         value={i18n.language}
         onChange={(e) => handlechangelng(e.target.value)}
         fullWidth // makes the width of the TextField to your 250px width (because if the field is initially empty, the width is so small)
       >
         <MenuItem value="en"> EN </MenuItem>
         <MenuItem value="de"> DE </MenuItem>
      
       </TextField> */}
      </div>

      <button
        className={`hamburger-menu ${sidebarOpen ? 'open' : ''}`}
        onClick={handleHamburgerClick}
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
    </nav>
  );
}
//   &#x1F1E9;&#x1F1EA;  DE
//       &#x1F1FA;&#x1F1F8; EN
