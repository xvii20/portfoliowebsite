import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import SvgComponent from './githubsvg';
import LinkedinComponent from './linkedinsvg';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
export default function Contact() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    console.log(new URLSearchParams(formData).toString());

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(), // turns the code into something like name=sara&subject=hello&email=ya%40yahoo.com&message=hi
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  };

  return (
    <motion.div
      className="contactparentdiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="icondivincontactpage">
        <Link
          to="https://github.com/xvii20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgComponent className="githubicon" />
        </Link>

        {/* <Link
          to="https://www.linkedin.com/in/laurence-lim-636b032aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinComponent className="linkedinicon" />
        </Link> */}
      </div>

      <div className="contactsectionparent">
        {' '}
        <div className="contactform">
          <h1 className="contactmeheader"> {t('contactme')} </h1>
          <form
            // data-netlify="true"
            // data-netlify-honeypot="bot-field"
            name="contactform"
            method="POST"
            // onSubmit={handleSubmit}
            // onSubmit="submit"
            action="/success" // this is used to redirect to the url of your choice after submitting the form to a url. if you dont want to redirect remove this
          >
            <input type="hidden" name="form-name" value="contactForm" />

            <div className="namelabeldiv">
              <label htmlFor="name">Name:</label>
            </div>
            <div className="nameinputdiv">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="name"
                required
              />
            </div>
            <br />

            <div className="subjectlabeldiv">
              <label htmlFor="subject">{t('subject')}</label>
            </div>

            <div className="subjectinputdiv">
              <input
                type="text"
                name="subject"
                // value={formData.subject}
                // onChange={handleChange}
                // id="subject"
                // required
              />
            </div>
            <br />

            <div className="emaillabeldiv">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="emailinputdiv">
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                // id="email"
                // required
              />
            </div>
            <br />

            <div className="messagelabeldiv">
              <label htmlFor="message">{t('message')}</label>
            </div>
            <div className="messageinputdiv">
              <textarea
                name="message"
                // value={formData.message}
                // onChange={handleChange}
                // id="message"
                // required
              />
            </div>
            <br />

            <div className="submitbuttondiv">
              {' '}
              {/* <button type="submit">{t('submit')}</button>{' '} */}
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                // sx={{
                //   // backgroundColor: '',
                //   '&:hover': {
                //     backgroundColor: 'rgb(106, 27, 154)', // Darker background color on hover
                //   },
                //   borderRadius: '4px',
                // }}
              >
                {t('submit')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
