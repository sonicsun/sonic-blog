import React, { useState } from 'react';
import { Tabs, Input, Button, message } from 'antd';
import http from '../../api/http';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function ArticleEdit() {
	const { pageId } = useParams();
	const { TabPane } = Tabs;
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');

	function getArticle(pageId) {
		http.get('http://localhost:3001/ajax/article/getArticle', {
			params: {
				id: pageId,
			},
		})
			.then(resp => {
				setTitle(resp.data.title);
				setContent(resp.data.content);
			})
			.catch(function (error) {
				message.error(error);
			});
	}

	function handleSubmit() {
		http.post('http://localhost:3001/ajax/article/updateArticle', {
			id: pageId,
			title,
			content,
		})
			.then(resp => {
				message.success('发布成功');
			})
			.catch(function (error) {
				message.error(error);
			});
	}

	useEffect(() => {
		getArticle(pageId);
		// eslint-disable-next-line
	}, []);

	return (
		<Tabs
			tabBarExtraContent={
				<Button type="primary" onClick={handleSubmit}>
					发布
				</Button>
			}
		>
			<TabPane tab="Write" key="1">
				<Input
					placeholder="Please enter a title"
					style={{ marginBottom: '30px' }}
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<Input.TextArea
					value={content}
					onChange={e => setContent(e.target.value)}
					style={{ minHeight: 300 }}
				/>
			</TabPane>
			<TabPane tab="Preview" key="2">
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</TabPane>
		</Tabs>
	);
}
