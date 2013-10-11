var index = require("./index").setVarables({title: "Express"});
var chat = require("./chat").setVarables({title: "Express"});
var login = require("./login").setVarables({title: "Express"});
var register = require("./register").setVarables({title: "Express"});

//Database Schema
var schema = require('../models/schema');

//Authentication Modules
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

// Configure authentication
passport.use(new LocalStrategy(
	function(email, password, done) {
		schema.models.User.findOne({ email: email }, function (err, user) {

			if (err) { 
				return done(err); 
			}
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

exports.route = function(app, flash){
	app.use(passport.initialize());
	app.use(passport.session());
	app.get('/', index);
	app.get('/chat', chat);
	app.get('/login', login);
	app.get('/signin', login);
	app.get('/register', register);
	app.get('/signup', register);

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	app.post('/login', passport.authenticate('local'),
		function(req, res) {
			console.log(user);
			// If this function gets called, authentication was successful.
			// `req.user` contains the authenticated user.
			res.redirect('/users/' + req.user.username);
		});

	app.post('/register', function(req, res) {

		if(req.body.name)
		
		var user = new schema.schema.models.User;

		user.name = req.body.name;
		user.email = req.body.email;
		user.password = req.body.password;
		
		console.log(user);
		
		user.save(function (err) {
			console.log('Error saving user' + err);
			res.redirect('/register')
		});

		res.redirect('/');
	})
};