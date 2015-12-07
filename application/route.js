// controller 
var index = require('./controllers/index');
var server = require('./controllers/server');
var keys = require('./controllers/keys');
var data = require('./controllers/data');

var router = {};

router.run = function (app) {
	// path
	app.get('/', index.get);
	app.get('/server', server.get);
	app.get('/keys', keys.get);
	app.get('/data', data.get);
}

module.exports = router;