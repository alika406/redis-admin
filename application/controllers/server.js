var application = require("../application_ini.js");
var server = application.redis;

var action = {};

action.get = function(req, res, next) {
	var serverList = [];
	server.map(function(server, serverId) {
		var serverName = server.name + "(" + server.host + ")";
		serverList.push({serverId: serverId, displayName: serverName});
	});
	res.send(serverList);
};

module.exports = action;
