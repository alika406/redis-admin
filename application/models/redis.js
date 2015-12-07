var application = require("../application_ini.js");
var server = application.redis;
var Promise = require("bluebird");
var redis = require("redis");

Promise.promisifyAll(redis);

var redisModel = {};

redisModel.client = null;

redisModel.selectServer = function (serverId) {
	this.client = redis.createClient(server[serverId].port, server[serverId].host);
	// redis 密碼驗証
	this.client.auth(server[serverId].password, function() {
		console.log("Connected!");
	});
}

redisModel.keys = function (patten, callback) {
	this.client.keysAsync(patten).then(callback);
}

redisModel.type = function (key, callback) {
	this.client.typeAsync(key).then(callback);
}

redisModel.get = function (key, callback) {
	this.client.getAsync(key).then(callback);
}

redisModel.lrange = function (key, start, stop, callback) {
	this.client.lrangeAsync(key, start, stop).then(callback);
}

redisModel.smembers = function (key, callback) {
	this.client.smembersAsync(key).then(callback);
}

redisModel.zrange = function (key, start, stop, callback) {
	this.client.zrangeAsync(key, start, stop, 'WITHSCORES').then(callback);
}

redisModel.hgetall = function (key, callback) {
	this.client.hgetallAsync(key).then(callback);
}

module.exports = redisModel;