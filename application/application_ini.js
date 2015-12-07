var config = {
	redis: []
}

config.redis[0] = {};
config.redis[0].name = '本機'
config.redis[0].host = 'localhost'
config.redis[0].port = '6379'
config.redis[0].password = ''

module.exports = config;