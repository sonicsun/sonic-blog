import React, { useState } from 'react';
import { Tabs, Input, Button, message } from 'antd';
import http from '../../api/http';

export function CreateArticle() {
	const { TabPane } = Tabs;
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');

	function handleSubmit() {
		http.post('http://localhost:3001/ajax/article/saveArticle', {
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
