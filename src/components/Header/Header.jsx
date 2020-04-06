import React from 'react';
import { Menu, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export function Header() {
	const { t, i18n } = useTranslation();

	function changeLanguage(lng) {
		i18n.changeLanguage(lng);
	}

	return (
		<Layout.Header className="c-header">
			<div className="c-logo"></div>
			<Menu mode="horizontal">
				<Menu.Item key="1">{t('HOME')}</Menu.Item>
				<Menu.Item key="2">{t('ABOUT ME')}</Menu.Item>
				<Menu.Item key="3">{t('CONTACT ME')}</Menu.Item>
				<Menu.SubMenu
					style={{ float: 'right' }}
					key="sub4"
					title={
						<span>
							{t('LANGUAGE')} <DownOutlined />
						</span>
					}
				>
					<Menu.Item key="5" onClick={() => changeLanguage('en')}>
						English
					</Menu.Item>
					<Menu.Item key="6" onClick={() => changeLanguage('zh')}>
						简体中文
					</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</Layout.Header>
	);
}
