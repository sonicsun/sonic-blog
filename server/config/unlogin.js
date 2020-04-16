const unlogin = {
	post: ['/ajax/login', '/ajax/article/saveArticle', '/ajax/article/updateArticle'],
	get: [
		'/ajax/article/getList',
		'/ajax/article/getArticle',
		'/ajax/article/getPaginationArticle',
	],
};
module.exports = unlogin;
