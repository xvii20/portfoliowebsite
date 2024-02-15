import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ['de', 'en'];

i18next.use(initReactI18next).init({
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
  lng: 'de', // Set the default language to German
  resources: {
    en: {
      translation: {
        // about me page translations
        aboutme: 'About Me',
        contact: 'Contact',
        hellomessage: `Hello! 👋 I'm Laurence`,
        firsthalf: `I'm a passionate and dedicated web developer with a flair for
        turning ideas into reality. My journey in`,
        secondhalf: ` the world of coding is fueled by a deep love for building
        things that not only work seamlessly`,
        thirdhalf: `but also leave a lasting impression. I thrive on the
        challenges of web development.`,
        fourthhalf: `And a commitment to staying on the cutting edge of technology`,
        mediaintro: `I'm a passionate and dedicated web developer with a flair for turning ideas into reality. My journey in
        the world of coding is fueled by a deep love for building things that not only work seamlessly
        but also leave a lasting impression. I thrive on the challenges of web development.
        And a commitment to staying on the cutting edge of technology`,
        contactme: 'Contact Me',
        // portfolio page translations
        illupetsdescription:
          'Illupets is an app where you can search for adopted pets in the United States. You can choose to contact the owners of the pets for more pet info, as well as adopting a pet from them',
        skylightdescription:
          'Skylight is a web app that allows you to type in a city in the input field and then displays the 6 day weather forecast of that city.',
        // contact me page translations
        subject: 'Subject',
        message: 'Message',
        submit: 'Submit',
        // success page translations
        formsubmitted: 'Your Form has been submitted!',
        goback: 'Back to Homepage',
      },
    },
    de: {
      translation: {
        // about me page translations
        aboutme: 'Über mich',
        contact: 'Kontakt',
        hellomessage: 'Hallo! 👋 Ich bin Laurence',
        firsthalf: `Ich bin ein leidenschaftlicher und engagierter Webentwickler mit einem Talent dafür,
        Ideen in die Realität umzusetzen. Meine Reise im`,
        secondhalf: `die Welt des Codierens wird durch eine tiefe Liebe zum Bau von Dingen angetrieben, die nicht nur nahtlos funktionieren`,
        thirdhalf: `aber auch einen bleibenden Eindruck hinterlassen. Ich blühe auf bei den Herausforderungen der Webentwicklung.`,
        fourthhalf: `
        Und das Bekenntnis, immer auf dem neuesten Stand der Technologie zu bleiben`,
        mediaintro:
          'Ich bin ein leidenschaftlicher und engagierter Webentwickler mit einem Talent dafür, Ideen in die Realität umzusetzen. Meine Reise in die Welt des Programmierens wird von einer tiefen Liebe für das Erschaffen von Dingen angetrieben, die nicht nur nahtlos funktionieren, sondern auch einen bleibenden Eindruck hinterlassen. Ich gedeihe an den Herausforderungen der Webentwicklung und bin entschlossen, stets auf dem neuesten Stand der Technologie zu bleiben.',
        contactme: 'Kontaktieren',
        // portfolio page translations
        illupetsdescription:
          'Illupets ist eine App, in der Sie nach adoptierten Haustieren in den Vereinigten Staaten suchen können. Sie können wählen, die Besitzer der Haustiere für weitere Informationen zu kontaktieren.',
        skylightdescription:
          'Skylight ist eine Web-App, die es Ihnen ermöglicht, den Namen einer Stadt in das Eingabefeld einzugeben und dann die 6-Tage-Wettervorhersage für diese Stadt anzuzeigen.',
        // contact me page translations
        subject: 'Betreff',
        message: 'Nachricht',
        submit: 'Abschicken',
        // success page translations
        formsubmitted: 'Das Formular wurde erfolgreich abgeschickt!',
        goback: 'Zur Startseite',
      },
    },
  },
  lng: localStorage.getItem('lng') || 'en',
});

export default i18next;
