import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en/translation.json';
import translationDe from './locales/de/translation.json';
import translationPl from './locales/pl/translation.json';
import translationUa from './locales/ua/translation.json';

const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEn },
        de: { translation: translationDe },
        pl: { translation: translationPl },
        ua: { translation: translationUa },
    },
    lng: savedLanguage,
    fallbackLng: 'ua',
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;