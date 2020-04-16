const express = require('express');
const router = express.Router();
const model = require('../model');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/', function (req, res) {
	const data = {
		userName: req.body.userName,
		passWord: req.body.passWord,
	};
	model.connect(db => {
		db.collection('user')
			.find(data)
			.toArray((err, user) => {
				if (err) {
					throw new Error('登录接口错误');
				} else {
					if (user.length > 0) {
						//生成秘钥
						const jwtTokenSecret = 'sonicJWT';
						//生成token
						const userToken = { ...data, loginAt: +new Date() };
						//签发token 指定过期时间2h
						const token = jwt.sign(userToken, jwtTokenSecret, { expiresIn: '2h' });
						res.json({
							code: 200,
							status: 1,
							message: '登录成功',
							data: token,
						});
					} else {
						res.json({ code: 200, status: 0, message: '用户名或密码错误' });
					}
				}
			});
	});
});

module.exports = router;
