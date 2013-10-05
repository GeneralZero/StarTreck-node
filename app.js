#!/usr/bin/env node
var express = require('express')
	, routes  = require('./routes/routes')
	, config  = require('./config')
	, https   = require('https')
	, path    = require('path')
	, io	    = require('socket.io');

var schema = require('./models/schema');

var app = express();

// all environments
app.configure(function(){
	app.set('port', config.https_port);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

// development only
//if ('development' == app.get('env')) {
app.use(express.errorHandler());
//}
routes.route(app);

var server = https.createServer(config.certs, app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

var socket = io.listen(server);