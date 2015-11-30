var redis = require('../models/redis.js');

var action = {};

action.get = function(req, res, next) {
	// var dataSet = {
	// 	'string': {
	// 		type: 'string',
	// 		data: [
	// 			'value'
	// 		]
	// 	},
	// 	'list': {
	// 		type: 'list',
	// 		data: [
	// 			'value1',
	// 			'value2',
	// 			'value3',
	// 			'value4',
	// 			'value5',
	// 			'value6'
	// 		]
	// 	},
	// 	'sortedSets': {
	// 		type: 'sortedSets',
	// 		data: [
	// 			{'score':'score1', 'value':'value1'},
	// 			{'score':'score2', 'value':'value2'},
	// 			{'score':'score3', 'value':'value3'},
	// 			{'score':'score4', 'value':'value4'}
	// 		]
	// 	},
	// 	'hash': {
	// 		type: 'hash',
	// 		data: [
	// 			{'fieldName':'fieldname1', 'value':'value1'},
	// 			{'fieldName':'fieldname2', 'value':'value2'},
	// 			{'fieldName':'fieldname3', 'value':'value3'},
	// 			{'fieldName':'fieldname4', 'value':'value4'},
	// 			{'fieldName':'fieldname5', 'value':'value5'},
	// 			{'fieldName':'fieldname6', 'value':'value6'}
	// 		]
	// 	}
	// };
	// res.send(dataSet.hash);

	var keyName = req.query.keyName;
	redis.type(keyName, function (error, type) {

		switch (type) {
			case 'string':
				redis.get(keyName, function (error, data) {
					res.send({type: 'string', data: [data]});	
				});
				break;
			case 'list':
				redis.lrange(keyName, 0, -1, function (error, data) {
					res.send({type: 'list', data: data});	
				});
				break;
			case 'set':
				redis.smembers(keyName, function (error, data) {
					res.send({type: 'set', data: data});	
				});
				break;
			case 'zset':
				redis.zrange(keyName, 0, -1, function (error, data) {
					var dataArray = [];
					// 出來 score, value 混在一起了…
					for (var i = 0; i <= (data.length - 2); i += 2) {
						dataArray.push({'score': data[i+1], 'value': data[i]});
					}
					res.send({type: 'zset', data: dataArray});	
				});
				break;
			case 'hash':
				redis.hgetall(keyName, function (error, data) {
					var dataArray = [];
					// 變 array
					for (var key in data) {
						dataArray.push({'fieldName': key, 'value': data[key]});
					}
					res.send({type: 'hash', data: dataArray});	
				});
				break;
			default:
				res.send({type: '', data: ''});
				break;
		}
	});
}

module.exports = action;
