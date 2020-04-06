import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: require('.locales/en/translation.json'),
	},
	zh: {
		translation: require('.locales/zh/translation.json'),
	},
};

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	defaultNS: 'translation',

	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
});

export default i18n;
