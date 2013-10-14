var index = require("./index").setVarables({title: "Express"});
var chat = require("./chat").setVarables({title: "Express"});
var login = require("./login").setVarables({title: "Express"});
var register = require("./register").setVarables({title: "Express"});

//Database Schema
var schema = require('../models/schema').schema;

//Authentication Modules
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

exports.route = function(app, passport, flash){
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

	app.post('/login', function(req, res){

		passport.authenticate('local', function(err, user, info){
			if(err)
			{
				console.log(err);
			}
			else if (!user)
			{
				console.log(err);
				res.send(info);
				console.log("User not authenticated")
			}
			res.redirect('/login');
		})(req, res);
	});
	app.post('/register', function(req, res) {
		
		var user = new schema.models.User;

		user.name = req.body.name;
		user.email = req.body.email;
		user.password = req.body.password;
		
		console.log(user);
		
		user.save(function (err) {
			if (err != null) {
				console.log('Error saving user' + err);
				res.redirect('/register')
			};
		});

		res.redirect('/');
	})
};