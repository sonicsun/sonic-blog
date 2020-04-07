import i18n from 'i18next';
import Cookies from 'js-cookie';

export function changeLanguage(lng) {
	Cookies.set('language', lng);
	i18n.changeLanguage(lng);
}
