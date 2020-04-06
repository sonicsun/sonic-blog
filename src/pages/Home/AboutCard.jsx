import React from 'react';
import { Card } from 'antd';
import photo from '../../assets/img/photo.jpg';
import { useTranslation } from 'react-i18next';

export function AboutCard() {
	const { t } = useTranslation();

	return (
		<Card className="c-docCard" hoverable style={{ padding: '6px 16px' }}>
			<h3 style={{ marginBottom: '30px' }}>{t('ABOUT ME')}</h3>
			<img src={photo} alt="sonic" style={{ maxWidth: '100%' }} />
			<p style={{ fontSize: '14px', lineHeight: '24px', paddingTop: '25px' }}>
				{t(
					"Hi, I'm Sonic Sun. Studied in computer science and technology at Northeast Normal University. Currently internship at Tencent Cloud, as a Front-end Engineer.",
				)}
			</p>
		</Card>
	);
}
