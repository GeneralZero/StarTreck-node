#!/usr/bin/env node
var express   = require('express')
	, routes  = require('./routes/routes')
	, config  = require('./config')
	, https   = require('https')
	, path    = require('path')
	, flash   = require('connect-flash')
	, io	  = require('socket.io');

var schema = require('./models/schema');

var app = express();

// Confiture App
app.configure(function(){
	app.set('port', config.https_port);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser({keepExtensions:true}));
	app.use(express.cookieParser("secretKey"));
	app.use(express.errorHandler());
	app.use(express.session({secret: 'secretKey'}));
	app.use(flash());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});


//Use declared Routes 
routes.route(app);

// Set Certificates and Key
var server = https.createServer(config.certs, app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});


//Setup socket.io Server
var socket = io.listen(server);