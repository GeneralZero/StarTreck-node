var config = {};
config.redis = {};

fs          = require('fs');
config.https_port = process.env.PORT || 3000;
config.socket_port =  3001;
config.redis.host = 'localhost';
config.redis.port = 6379;
config.certs     = { key: fs.readFileSync('./ssl/node.key'),
					   cert: fs.readFileSync('./ssl/node.crt')
					 };

module.exports = config;
