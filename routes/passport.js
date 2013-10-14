//Database Schema
var schema = require('../models/schema').schema;

//Authentication Modules
var LocalStrategy = require('passport-local').Strategy;


function init (passport) {
	passport.use(new LocalStrategy({
	    usernameField: 'user',
	    passwordField: 'pass'},
	    function(username, password, done){
		schema.models.User.findOne({where: {name: username}}, function(err, user){
			if(err)
			{
				return done(err); 
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username.' });
			}
			if (!user.validPassword(password))
			{
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		});
	}));


	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		schema.models.User.find(id, function(err, user){
			done(err, user);
		});
	});

	return passport
}

exports.init = init;