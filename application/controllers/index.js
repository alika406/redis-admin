/* GET home page. */
var action = {};

action.get = function(req, res, next) {
	res.render('index');
}

module.exports = action;
