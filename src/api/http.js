import axios from 'axios';

const http = axios.create({});
// http request 拦截器
// 每次请求都为http头增加Authorization字段，其内容为Token
http.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.authorization = token;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

// http response 拦截器
http.interceptors.response.use(
	response => {
		let data = response.data;
		//返回状态值是200 即返回数据
		if (data.code === 200) {
			return data;
		}
		//返回状态值401即跳转到登录页面
		if (data.code === 401) {
			window.location.href = '/login';
		}
		return Promise.reject(data);
	},
	error => {
		return Promise.reject(error);
	},
);

export default http;
