import React from 'react';
import { Menu, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../util';

export function Header() {
	const { t } = useTranslation();

	return (
		<Layout.Header className="c-header">
			<div className="c-logo"></div>
			<Menu mode="horizontal">
				<Menu.Item key="1" onClick={() => (window.location.href = '/')}>
					{t('主页')}
				</Menu.Item>
				<Menu.Item key="2">{t('关于我')}</Menu.Item>
				<Menu.Item key="3">{t('联系我')}</Menu.Item>
				<Menu.SubMenu
					style={{ float: 'right' }}
					key="sub4"
					title={
						<span>
							{t('语言')} <DownOutlined />
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
