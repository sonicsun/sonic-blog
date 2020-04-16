import React, { useState, useEffect } from 'react';
import { Table, message, Button } from 'antd';
import http from '../../api/http';

export function ArticleList() {
	const [tableData, setTableData] = useState([]);
	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			render: (text, record) => <a href={`/article/${record.id}`}>{text}</a>,
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<span>
					<a style={{ marginRight: 16 }} href={`/management/articleEdit/${record.id}`}>
						Edit
					</a>
					<Button type="link" onClick={() => deleteArticle(record.id)}>
						Delete
					</Button>
				</span>
			),
		},
	];

	function getTableData() {
		http.get('http://localhost:3001/ajax/article/getList')
			.then(resp => {
				const tableArr = [];
				resp.list.forEach(item => {
					tableArr.push({
						key: item._id,
						id: item._id,
						title: item.title,
					});
				});
				setTableData(tableArr);
			})
			.catch(error => {
				message.error(error);
			});
	}

	function deleteArticle(id) {
		http.post('http://localhost:3001/ajax/article/deleteArticle', {
			id,
		})
			.then(resp => {
				message.success('删除成功');
				getTableData();
			})
			.catch(error => {
				message.error(error);
			});
	}

	useEffect(() => {
		getTableData();
	}, []);

	return <Table columns={columns} dataSource={tableData} />;
}
