import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import SvgComponent from './githubsvg';
import LinkedinComponent from './linkedinsvg';

export default function Contact() {
  const location = useLocation();

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
      body: new URLSearchParams(formData).toString(), // turns the code into something like name=dwfw&subject=fwaaaa&email=ya%40yahoo.com&message=z2rfuwffwfuwfwh
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));

    // Reset form fields after submission (optional)
    // setFormData({
    //   name: '',
    //   subject: '',
    //   email: '',
    //   message: '',
    // });
  };

  return (
    <motion.div
      className="contactparentdiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
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

        <Link
          to="https://www.linkedin.com/in/laurence-lim-636b032aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinComponent className="linkedinicon" />
        </Link>
      </div>

      <div className="contactsectionparent">
        {' '}
        <div className="contactform">
          <h1 className="contactmeheader"> Contact Me </h1>
          <form
            onSubmit={handleSubmit}
            name="contact"
            action="/"
            method="post"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

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
              <label htmlFor="subject">Subject:</label>
            </div>

            <div className="subjectinputdiv">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                id="subject"
                required
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
                value={formData.email}
                onChange={handleChange}
                id="email"
                required
              />
            </div>
            <br />

            <div className="messagelabeldiv">
              <label htmlFor="message">Message:</label>
            </div>
            <div className="messageinputdiv">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                id="message"
                required
              />
            </div>
            <br />

            <div className="submitbuttondiv">
              {' '}
              <button type="submit">Submit</button>{' '}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
