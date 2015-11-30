var application = require("../application_ini.js");
var redisInfo = application.redis;

var redis = require("redis"),
    client = redis.createClient(redisInfo.port, redisInfo.host);

// redis 密碼驗証
client.auth(redisInfo.password, function() {
	console.log("Connected!");
});

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

var redisModel = {};

redisModel.client = client;

redisModel.keys = function (patten, callback) {
	client.keys(patten, callback);
}

redisModel.type = function (key, callback) {
	client.type(key, callback);
}

redisModel.get = function (key, callback) {
	client.get(key, callback);
}

redisModel.lrange = function (key, start, stop, callback) {
	client.lrange(key, start, stop, callback);
}

redisModel.smembers = function (key, callback) {
	client.smembers(key, callback);
}

redisModel.zrange = function (key, start, stop, callback) {
	client.zrange(key, start, stop, 'WITHSCORES', callback);
}

redisModel.hgetall = function (key, callback) {
	client.hgetall(key, callback);
}

module.exports = redisModel;


