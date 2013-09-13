#!/usr/bin/env node
var express = require('express')
  , routes  = require('./routes/')
  , config  = require('./configure/config')
  , https   = require('https')
  , path    = require('path')
  , io	    = require('socket.io');

var app = express();

// all environments
app.set('port', config.https_port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/chat', routes.chat);

var server = https.createServer(config.certs, app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

io = io.listen(server);

io.sockets.on('connection', function (client) {

	var redis1 = require("redis").createClient();
	var redis2 = require("redis").createClient();
	var redis3 = require("redis").createClient();

	redis1.subscribe("emrchat");

    redis1.on("message", function(channel, message) {
        client.send(message);
    });

    client.on('message', function(msg) {
		console.log(msg);
		if(msg.type == "chat"){
			redis2.publish("emrchat",msg.message);	
		}
		else if(msg.type == "setUsername"){
			redis2.publish("emrchat", "A New User is connected : " + msg.user);
			redis3.sadd("onlineUsers",msg.user);
		}
    });

    client.on('disconnect', function() {
        redis1.quit();
        redis2.publish("emrchat","User is disconnected : " + client.id);
    });
});
