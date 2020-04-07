import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

const resources = {
	en: {
		translation: require('./locales/en/translation.json'),
	},
	zh: {
		translation: require('./locales/zh/translation.json'),
	},
};

const options = {
	// order and from where user language should be detected
	order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

	// keys or params to lookup language from
	lookupQuerystring: 'lng',
	lookupCookie: 'language',
	lookupLocalStorage: 'i18nextLng',
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,

	// cache user language on
	caches: ['localStorage', 'cookie'],
	excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

	// optional expire and domain for set cookie
	cookieMinutes: 10,
	cookieDomain: 'myDomain',

	// optional htmlTag with lang attribute, the default is:
	htmlTag: document.documentElement,

	// only detect languages that are in the whitelist
	checkWhitelist: true,
};

i18n.use(detector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		defaultNS: 'translation',
		useCookie: true,
		detection: options,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18n;
