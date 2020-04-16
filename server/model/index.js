const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'sonic_blog';

// 数据库连接方法
function connect(callback) {
	MongoClient.connect(url, (err, client) => {
		if (err) {
			console.log('数据库连接错误', err);
		} else {
			const db = client.db(dbName);
			callback && callback(db);
			client.close();
		}
	});
}

async function getNextSequenceValue(sequenceName, callback) {
	let sequenceDocument;
	try {
		const client = await MongoClient.connect(url);
		const db = client.db(dbName);
		const result = await db
			.collection('counters')
			.findOneAndUpdate({ _id: sequenceName }, { $inc: { sequence_value: 1 } });
		sequenceDocument = result.value.sequence_value;
		client.close();
	} catch (err) {
		console.log(err);
	}
	return sequenceDocument;
}

function replaceTag(str) {
	let reg = /<\/?.+?\/?>/g;
	return str.replace(reg, '');
}
module.exports = { connect, getNextSequenceValue, replaceTag };
