import React from 'react';
import { Card } from 'antd';
import photo from '../../assets/img/photo.jpg';
import { useTranslation } from 'react-i18next';

export function AboutCard() {
	const { t } = useTranslation();

	return (
		<Card className="c-docCard" hoverable style={{ padding: '6px 16px' }}>
			<h3 style={{ marginBottom: '30px' }}>{t('关于我')}</h3>
			<img src={photo} alt="sonic" style={{ maxWidth: '100%' }} />
			<p style={{ fontSize: '14px', lineHeight: '24px', paddingTop: '25px' }}>
				{t(
					'Hi，我是Sonic Sun，就读于东北师范大学，计算机科学与技术专业，现在在腾讯从事前端开发',
				)}
			</p>
		</Card>
	);
}
