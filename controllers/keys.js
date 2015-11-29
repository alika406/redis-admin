var action = {};

action.get = function(req, res, next) {
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
}

module.exports = action;
