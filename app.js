#!/usr/bin/env node
var express = require('express')
	, routes  = require('./routes/routes')
	, config  = require('./config')
	, https   = require('https')
	, path    = require('path')
	, io	    = require('socket.io');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var schema = require('./models/schema');
var schema = require('./models/user');

var app = express();

// all environments
app.configure(function(){
	app.set('port', config.https_port);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.errorHandler());
	app.use(express.methodOverride());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

passport.use(new LocalStrategy(
	function(username, password, done) {
		User.findOne({ email: email }, function (err, user) {
			if (err) { return done(err); }
			if (!user) {
				return done(null, false, { message: 'Incorrect username.' });
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		});
	}
));

routes.route(app);

var server = https.createServer(config.certs, app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

var socket = io.listen(server);