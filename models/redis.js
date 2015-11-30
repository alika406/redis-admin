var redis = require("redis"),
    client = redis.createClient('6379', 'localhost');

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

var redisModel = {};

redisModel.client = client;

redisModel.keys = function (patten, callback) {
	client.keys(patten, callback);
}

redisModel.type = function (key, callback) {
	client.keys(key, callback);
}

redisModel.get = function (key, callback) {
	client.keys(key, callback);
}

redisModel.lrange = function (key, start, stop, callback) {
	client.keys(key, start, stop, callback);
}

redisModel.zrange = function (key, start, stop, callback) {
	client.keys(key, start, stop, 'WITHSCORES', callback);
}

redisModel.hgetall = function (key, callback) {
	client.keys(key, callback);
}

module.exports = redisModel;


