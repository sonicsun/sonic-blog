import React from 'react';
import { useTranslation } from 'react-i18next';

export function Banner() {
	const { t } = useTranslation();

	return (
		<div className="c-banner">
			<h1>Sonic Sun</h1>
			<p>1998.10</p>
			<p>{t('东北师范大学 计算机科学与技术')}</p>
			<p>{t('腾讯云国际站前端开发')}</p>
			<p className="saying">"冰冻三尺，非一日之寒"</p>
		</div>
	);
}
