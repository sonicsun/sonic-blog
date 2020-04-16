import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import http from '../../api/http';

export function Login() {
	const [status, setStatus] = useState('');
	const onFinish = values => {
		setStatus('validating');
		http.post('http://localhost:3001/ajax/login', values)
			.then(resp => {
				console.log(resp);
				if (resp.status) {
					localStorage.setItem('token', resp.data);
					message.success('登录成功');
					window.location.href = '/management';
				} else {
					setStatus('error');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<Card className="loginCard">
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<Form.Item
					name="userName"
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}
					validateStatus={status}
				>
					<Input
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="Username"
						autoComplete="off"
					/>
				</Form.Item>
				<Form.Item
					name="passWord"
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}
					validateStatus={status}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
						autoComplete="off"
						allowClear
					/>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
}
