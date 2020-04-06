import React from 'react';
import { Row, Col, Pagination } from 'antd';
import { DocCard } from './DocCard';
import { AboutCard } from './AboutCard';

export function Container() {
	return (
		<div className="c-container">
			<Row gutter={32}>
				<Col className="gutter-row" span={16}>
					<DocCard />
					<DocCard />
					<DocCard />
					<DocCard />
					<DocCard />
				</Col>
				<Col className="gutter-row" span={8}>
					<AboutCard />
				</Col>
			</Row>
			<Pagination
				responsive
				hideOnSinglePage={true}
				defaultCurrent={1}
				defaultPageSize={5}
				total={10}
				style={{ textAlign: 'center' }}
			/>
		</div>
	);
}
