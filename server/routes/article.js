const express = require('express');
const router = express.Router();
const model = require('../model');

//保存文章
router.post('/saveArticle', (req, res) => {
	model.getNextSequenceValue('articleId').then(id => {
		const data = {
			_id: id,
			title: req.body.title,
			content: req.body.content,
		};
		model.connect(db => {
			db.collection('document').insertOne(data, (err, result) => {
				if (err) {
					console.log(err);
					throw new Error('保存接口错误');
				} else {
					res.json({
						code: 200,
						status: 1,
						message: '保存成功',
					});
				}
			});
		});
	});
});

//获取文章列表
router.get('/getList', (req, res) => {
	model.connect(db => {
		db.collection('document')
			.find({}, { projection: { content: 0 } })
			.toArray((err, result) => {
				if (err) {
					throw new Error('查询接口错误');
				} else {
					res.json({
						code: 200,
						status: 1,
						message: '查询成功',
						list: result,
					});
				}
			});
	});
});

//删除文章
router.post('/deleteArticle', (req, res) => {
	const data = {
		_id: parseInt(req.body.id),
	};
	model.connect(db => {
		db.collection('document').deleteOne(data, (err, result) => {
			if (err) {
				throw new Error('删除接口错误');
			} else {
				res.json({
					code: 200,
					status: 1,
					message: '删除成功',
				});
			}
		});
	});
});

//获取文章详情
router.get('/getArticle', (req, res) => {
	const data = {
		_id: parseInt(req.query.id),
	};
	model.connect(db => {
		db.collection('document').findOne(data, (err, result) => {
			if (err) {
				throw new Error('查询接口错误');
			} else {
				res.json({
					code: 200,
					status: 1,
					message: '查询成功',
					data: result,
				});
			}
		});
	});
});

router.post('/updateArticle', (req, res) => {
	const _id = parseInt(req.body.id);
	const title = req.body.title;
	const content = req.body.content;

	model.connect(db => {
		db.collection('document').updateOne(
			{ _id },
			{ $set: { title, content } },
			(err, result) => {
				if (err) {
					throw new Error('更新接口错误');
				} else {
					res.json({
						code: 200,
						status: 1,
						message: '更新成功',
					});
				}
			},
		);
	});
});

router.get('/getPaginationArticle', (req, res) => {
	const currentPage = parseInt(req.query.currentPage);
	const pageSize = parseInt(req.query.pageSize);
	model.connect(db => {
		db.collection('document')
			.find(
				{},
				{
					skip: (currentPage - 1) * pageSize,
					limit: pageSize,
				},
			)
			.toArray((err, result) => {
				const list = [];
				result.forEach(item => {
					const newContent = model.replaceTag(item.content);
					list.push({
						_id: item._id,
						title: item.title,
						content:
							newContent.length > 100 ? newContent.slice(0, 100) + '...' : newContent,
					});
				});
				if (err) {
					throw new Error('分页查询失败');
				} else {
					model.connect(db => {
						db.collection('document')
							.find({})
							.toArray((err, sum) => {
								if (err) {
									throw new Error('分页查询失败');
								} else {
									const total = sum.length;
									res.json({
										code: 200,
										status: 1,
										message: '查询成功',
										list,
										total,
									});
								}
							});
					});
				}
			});
		// const sum = await db.collection('document').find({}).toArray();
		// console.log(result);
		// console.log(sum.length);
	});
});

module.exports = router;
