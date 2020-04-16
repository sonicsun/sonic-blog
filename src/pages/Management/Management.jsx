import React from 'react';
import { Layout, Menu } from 'antd';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { ArticleList } from './ArticleList';
import { CreateArticle } from './CreateArticle';
import { ArticleEdit } from './ArticleEdit';

export function Management() {
	const { Sider, Content } = Layout;
	let { path, url } = useRouteMatch();
	return (
		<Layout style={{ height: '100%', backgroundColor: '#fff' }}>
			<Sider>
				<Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
					<Menu.Item key="1">
						<Link to={`${url}/articleList`}>文章列表</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to={`${url}/createArticle`}>写文章</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<Content style={{ padding: '0 24px' }}>
				<Switch>
					<Route path={`${path}/articleList`}>
						<ArticleList />
					</Route>
					<Route path={`${path}/createArticle`}>
						<CreateArticle />
					</Route>
					<Route path={`${path}/articleEdit/:pageId`}>
						<ArticleEdit />
					</Route>
					<Route path={`${path}`}>
						<ArticleList />
					</Route>
				</Switch>
			</Content>
		</Layout>
	);
}
