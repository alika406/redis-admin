var redis = require('../models/redis.js');

var action = {};

action.get = function(req, res, next) {
	// var keys = {
	// 	child:[
	// 		{'subKeyName': 'aa', 'hasData': true, child:[
	// 		]},
	// 		{'subKeyName': 'bb', 'hasData': true, child:[
	// 			{'subKeyName': 'aa', 'hasData': true, child:[
	// 			]},
	// 			{'subKeyName': 'bb', 'hasData': true, child:[
	// 				{'subKeyName': 'aa', 'hasData': true, child:[

	// 				]},
	// 				{'subKeyName': 'bb', 'hasData': true, child:[

	// 				]},
	// 				{'subKeyName': 'cc', 'hasData': false, child:[

	// 				]},
	// 			]},
	// 			{'subKeyName': 'cc', 'hasData': false, child:[

	// 			]},
	// 		]},
	// 		{'subKeyName': 'cc', 'hasData': false, child:[
	// 			{'subKeyName': 'aa', 'hasData': true, child:[
	// 			]},
	// 			{'subKeyName': 'bb', 'hasData': true, child:[
	// 			]},
	// 			{'subKeyName': 'cc', 'hasData': false, child:[
	// 			]},
	// 		]},
	// 	]
	// };
	// res.send(keys);

	var recusiveSetMap = function (keyArray, keyMap) {
		var subKey = keyArray.shift();
		var hasData = (keyArray.length === 0);

		if (typeof keyMap[subKey] === 'undefined') {
			// 沒出現過的節點先補上去
			// child 先不用 array 是因為這樣不好判斷有沒有 set
			keyMap[subKey] = {'subKeyName': subKey, 'hasData': false, 'child':{}};
		}

		if (hasData) {
			// 最後一個 key 代表是有資料的節點
			keyMap[subKey].hasData = true;
		} else {
			// 還沒到最後就繼續遞迴下去
			keyMap[subKey].child = recusiveSetMap(keyArray, keyMap[subKey].child);
		}

		return keyMap;
	};

	var recusiveChangeChildToArray = function (keyMap) {
		var childArray = [];
		var key = '';

		if (Object.keys(keyMap).length === 0) {
			// 末端
			keyMap = [];
		} else {
			// 遞迴 + 處理這層 object 結構
			for (key in keyMap) {
				keyMap[key].child = recusiveChangeChildToArray(keyMap[key].child);
				childArray.push(keyMap[key]);
			}
			keyMap = childArray;
		}

		return keyMap;
	};

	// 找 key 用 patten
	var patten = (req.query.keyPrefix === '') ? '*' : req.query.keyPrefix + ':*'

	// redis 取 key
	redis.keys(patten, function (error, data) {
		var keyMap = {};
		var keyArray = [];
		var keys = {};

		// 排序
		data.sort();
		
		// 對每一條 key 做處理
		data.map(function (key) {
			keyArray = key.split(':');
			keyMap = recusiveSetMap(keyArray, keyMap);
		});

		// 因為 jsx 不能 foreach object，所以 child 轉成 array 會比較好處理
		keys = {child: recusiveChangeChildToArray(keyMap)};

		res.send(keys);
	});
}

module.exports = action;
