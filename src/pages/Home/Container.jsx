import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, message } from 'antd';
import { DocCard } from './DocCard';
import { AboutCard } from './AboutCard';
import http from '../../api/http';

export function Container() {
	const [currentPage, setCurrentPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [cardList, setCardList] = useState([]);
	const pageSize = 5;

	function getDocCard(page) {
		http.get('http://localhost:3001/ajax/article/getPaginationArticle', {
			params: {
				currentPage: page,
				pageSize,
			},
		})
			.then(resp => {
				setTotal(resp.total);
				setCardList(resp.list);
			})
			.catch(function (error) {
				message.error(error);
			});
	}

	function handleChange(page) {
		setCurrentPage(page);
		getDocCard(page);
	}

	useEffect(() => {
		getDocCard(currentPage);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="c-container">
			<Row gutter={32}>
				<Col className="gutter-row" span={16}>
					{cardList.map((item, index) => (
						<DocCard
							title={item.title}
							content={item.content}
							key={index}
							id={item._id}
						/>
					))}
				</Col>
				<Col className="gutter-row" span={8}>
					<AboutCard />
				</Col>
			</Row>
			<Pagination
				responsive
				hideOnSinglePage={true}
				current={currentPage}
				onChange={handleChange}
				defaultPageSize={pageSize}
				total={total}
				style={{ textAlign: 'center' }}
			/>
		</div>
	);
}
