import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

export function Home() {
	const { t, i18n } = useTranslation('home');
	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
	};
	return (
		<div>
			<h1>{t('home')}</h1>
			<Button onClick={() => changeLanguage('zh')}>中文</Button>
			<Button onClick={() => changeLanguage('en')}>英文</Button>
		</div>
	);
}
