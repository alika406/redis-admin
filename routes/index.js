var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/keys', function(req, res, next) {
	var keys = {
		'subKeyName': '', 'hasData': true, child:[
			{'subKeyName': 'aa', 'hasData': true, child:[
			]},
			{'subKeyName': 'bb', 'hasData': true, child:[
				{'subKeyName': 'aa', 'hasData': true, child:[
				]},
				{'subKeyName': 'bb', 'hasData': true, child:[
					{'subKeyName': 'aa', 'hasData': true, child:[

					]},
					{'subKeyName': 'bb', 'hasData': true, child:[

					]},
					{'subKeyName': 'cc', 'hasData': false, child:[

					]},
				]},
				{'subKeyName': 'cc', 'hasData': false, child:[

				]},	
			]},
			{'subKeyName': 'cc', 'hasData': false, child:[
				{'subKeyName': 'aa', 'hasData': true, child:[
				]},
				{'subKeyName': 'bb', 'hasData': true, child:[
				]},
				{'subKeyName': 'cc', 'hasData': false, child:[
				]},
			]},
		]
	};

	res.send(keys);
});

router.get('/data', function(req, res, next) {
	var dataSet = {
		'string': {
			type: 'string',
			data: [
				'value'
			]
		},
		'list': {
			type: 'list',
			data: [
				'value1',
				'value2',
				'value3',
				'value4',
				'value5',
				'value6'
			]
		},
		'sortedSets': {
			type: 'sortedSets',
			data: [
				{'score':'score1', 'value':'value1'},
				{'score':'score2', 'value':'value2'},
				{'score':'score3', 'value':'value3'},
				{'score':'score4', 'value':'value4'}
			]
		},
		'hash': {
			type: 'hash',
			data: [
				{'fieldName':'fieldname1', 'value':'value1'},
				{'fieldName':'fieldname2', 'value':'value2'},
				{'fieldName':'fieldname3', 'value':'value3'},
				{'fieldName':'fieldname4', 'value':'value4'},
				{'fieldName':'fieldname5', 'value':'value5'},
				{'fieldName':'fieldname6', 'value':'value6'}
			]
		}
	};
	res.send(dataSet.hash);
});

module.exports = router;
