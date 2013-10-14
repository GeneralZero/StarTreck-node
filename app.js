#!/usr/bin/env node
var express   = require('express')
	, routes  = require('./routes/routes')
	, config  = require('./config')
	, https   = require('https')
	, path    = require('path')
	, io	  = require('socket.io')
	, passport= require('passport')
	, flash   = require('connect-flash');


var schema = require('./models/schema');

var app = express();

var passport = require('./routes/passport').init(passport);

// Confiture App
app.configure(function(){
	app.set('port', config.https_port);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser({keepExtensions:true}));
	app.use(express.cookieParser('secret'));
    app.use(express.session({secret: 'secret'}));
	app.use(flash());
	app.use(express.errorHandler());
	app.use(express.methodOverride());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

//Use declared Routes 
routes.route(app, passport, flash);

// Set Certificates and Key
var server = https.createServer(config.certs, app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

//Setup socket.io Server
var socket = io.listen(server);