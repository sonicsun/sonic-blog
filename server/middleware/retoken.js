const jwt = require('jsonwebtoken');
const unlogin = require('../config/unlogin');

function retoken(req, res, next) {
	let method = req.method.toLowerCase();
	let path = req.path;
	//接口不需要登陆：直接next
	//判断method类型，并且是否包含path
	if (unlogin[method] && unlogin[method].indexOf(path) !== -1) {
		return next();
	}
	const token = req.headers.authorization;
	//没有token值，返回401
	//秘钥
	const jwtTokenSecret = 'sonicJWT';

	if (!token) {
		return res.json({
			code: 401,
			msg: 'you need login:there is no token',
		});
	}

	/**
	 * 解析token是否过期 和是否是正确的token
	 */
	jwt.verify(token, jwtTokenSecret, (err, decoded) => {
		console.log('已验证token 是正确的');
		if (err) {
			return res.json({
				code: 401,
				msg: err.msg,
			});
		} else {
			// 将携带的信息赋给req.user
			req.user = decoded;
			return next();
		}
	});
}

module.exports = retoken;
