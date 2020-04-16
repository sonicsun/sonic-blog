function errorHandler(err, req, res, next) {
	if (err) {
		let { message } = err;
		res.status(500).json({
			message: `${message || '服务器内部错误'}`,
		});
	} else {
		next();
	}
}
module.exports = errorHandler;
