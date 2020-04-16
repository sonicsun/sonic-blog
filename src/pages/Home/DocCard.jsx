import React, { useState } from 'react';
import { Card } from 'antd';
import { LikeOutlined, ShareAltOutlined, CommentOutlined, LikeFilled } from '@ant-design/icons';

export function DocCard({ title, content, id }) {
	const [liked, setLiked] = useState(false);
	return (
		<Card
			className="c-docCard"
			hoverable
			cover={
				<img
					alt="example"
					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				/>
			}
			actions={[
				liked ? (
					<LikeFilled key="like" onClick={() => setLiked(false)} />
				) : (
					<LikeOutlined key="like" onClick={() => setLiked(true)} />
				),
				<CommentOutlined key="comment" />,
				<ShareAltOutlined key="share" />,
			]}
			onClick={() => (window.location.href = `/article/${id}`)}
		>
			<Card.Meta title={title} description={content} />
		</Card>
	);
}
