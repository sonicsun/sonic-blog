import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Divider, message } from 'antd';
import http from '../../api/http';

const { Title } = Typography;

export function Article() {
	let { pageId } = useParams();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

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

	useEffect(() => {
		getArticle(pageId);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="c-article">
			<Typography>
				<Title>{title}</Title>
				<Divider />
				<div
					dangerouslySetInnerHTML={{ __html: content }}
					className="c-article-content"
				></div>
			</Typography>
		</div>
	);
}
