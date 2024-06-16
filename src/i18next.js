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
        // separateaboutsection translations
        skills: 'Developer Skills',
        aboutmeseparate: `Hi! I am originally from America, and am currently located in Piscataway
        New Jersey. I have also been coding for 2 years now, and enjoy
        designing websites and making apps. I like learning new things
        everyday and believe self-improvement is important`,

        // sidebar translation
        home: 'Home',
        // about me page translations
        languages: 'Languages',
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
          'Illupets is a full-stack app where users can search for adopted pets in the United States. Users can also choose to contact the owners of the pets for more pet info, and favorite the pets that they like',
        skylightdescription:
          'Skylight is a web app that allows users to type in a city in the input field and then displays the 6 day weather forecast of that city.',

        luminescdescription:
          'Luminesc is a full-stack app that users can create an account and are able to track their expenses.',

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
        // aboutmeseparate translations
        skills: 'Fähigkeiten',
        aboutmeseparate:
          'Hallo! Ich komme ursprünglich aus Amerika und befinde mich derzeit in Piscataway, New Jersey. Seit 2 Jahren programmiere ich auch und habe Freude daran, Websites zu gestalten und Apps zu entwickeln. Ich lerne gerne jeden Tag neue Dinge und glaube, dass Selbstverbesserung wichtig ist.',

        // sidebar translation
        home: 'Startseite',
        // about me page translations
        languages: 'Sprachen',
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
        contactme: 'Kontakt Aufnehmen',
        // portfolio page translations
        illupetsdescription:
          'Illupets ist eine Full-Stack-App, mit der Sie nach adoptierten Haustieren in den Vereinigten Staaten suchen können. Sie können wählen, die Besitzer der Haustiere für weitere Informationen zu den Haustieren zu kontaktieren und die Haustiere, die Ihnen gefallen, als Favoriten zu markieren',
        skylightdescription:
          'Skylight ist eine Web-App, die es Ihnen ermöglicht, den Namen einer Stadt in das Eingabefeld einzugeben und dann die 6-Tage-Wettervorhersage für diese Stadt anzuzeigen.',

        luminescdescription:
          'Luminesc ist eine Full-Stack-App, mit der Benutzer ein Konto erstellen und ihre Ausgaben verfolgen können.',
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
