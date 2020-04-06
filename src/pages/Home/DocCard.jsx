import React, { useState } from 'react';
import { Card } from 'antd';
import { LikeOutlined, ShareAltOutlined, CommentOutlined, LikeFilled } from '@ant-design/icons';

export function DocCard() {
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
		>
			<Card.Meta
				title={<h2>axios的两次请求 options与get/post</h2>}
				description="在页面交互过程中，发现axios一定几率会发送两次请求，一次是自己设置的请求方式，还有一次是options。  关于这个问题，在各个网站寻求原因，得出以下结论：  跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。另外，规范要求，对那些可能对服务器数据产生副..."
			/>
		</Card>
	);
}
