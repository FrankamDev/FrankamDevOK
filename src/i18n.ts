// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'fr',
  fallbackLng: 'fr',
  resources: {
    fr: {
      translation: {
        home: 'Accueil',
        blog: 'Blog',
        contact: 'Contact',
      },
    },
  },
});

export default i18n;
