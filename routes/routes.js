//Database Schema
var schema = require('../models/schema').schema;
var config  = require('../config');
var bcrypt = require('bcrypt');
var crypto = require('crypto');

//Paramaters for templates
var paramaters = {};
paramaters.socket_io_port = config.https_port;

function verifyCookie(req, res, next) {
	console.log(req.signedCookies);
	if (req.signedCookies.session){
		schema.models.User.all({where :{accessToken: req.signedCookies.session }, limit: 1}, function (err, user) {
			if (err) { return next( err , null); }
			if (user.length == 0) {
				console.log("not user");
				console.log(user);
				next(null, user);
			} else {
				user = user[0];
				//console.log(user);
				user.last_login = new Date() ;
				user.save( function (err) {
					if (err) return next(err);
					return next(null, user);
				})
			}
		});
	}
	else{
		next(null, null);
	}
}

function generateRandomToken() {
	var token = new Date().getTime() + '_';
	token += crypto.randomBytes(128).toString('hex');
	return token;
}

function generate_token (user, done) {
	var token = generateRandomToken();
	schema.models.User.all({where: {accessToken: token}, limit:1}, function (err, existingUser) {
		if (err) { return done( err ); }
		else if (existingUser.length != 0) {
			//Generate new token if token already exixts
			console.log(existingUser);
			generate_token(); 
		} else {
			user.accessToken = token;
			user.save( function (err) {
				if (err) return done(err, null);
				return done(null, user.accessToken);
			})
		}
	});
}

function get_user_by_name (name, cb) {
	schema.models.User.all({where: { name: name }, limit:1}, function (err, user) {
		console.log(user);
		if (err) { return cb(err,user); }
		else if (user == []) {
			return cb("User not authenticated", null);
		}
		else {
			return cb(null, user[0]);
		}
	});
}

function get_user_by_email(email, cb) {
	schema.models.User.find({where: { email: email }, limit:1}, function (err, user) {
		if (err) { return cb(err,user); }
		else if (user == []) {
			return cb("Username or password is incorrect", null);
		} 
		else {
			return cb(null, user[0]);
		}
	});
}

exports.route = function(app){
	app.get('/', function (req, res) {
		res.render('index', paramaters);
	});
	app.get('/chat', function (req, res) {
		res.render('chat', paramaters);
	});
	app.get('/login', function (req, res) {
		//Verify if Cookie is valid
		verifyCookie(req, res, function (err, user) {
			if (err)
			{
				paramaters.err = err;
				res.render('login', paramaters);
			}
			else if (user) {
				console.log(user);
				paramaters.user = user;
				paramaters.info = ["You are already logged in."];
				res.redirect('/');
			}
			else{
				res.render('login', paramaters);
			}
		})
	});
	app.get('/signin', function (req, res) {
		res.redirect('/login');
	});
	app.get('/register', function (req, res) {
		res.render('register', paramaters);
	});
	app.get('/signup', function (req, res) {
		res.redirect('/register');
	});

	app.get('/logout', function(req, res){
		paramaters.info = ["You have been logged out"];
		res.redirect('/');
	});
	app.get('/user', function(req, res){
		ensureAuthenticated(req, res, function (err, user) {
			if (err)
			{
				paramaters.err = [err];
				res.render('login', paramaters);
			}
			else if (user) {
				console.log(user);
				res.render('user', paramaters);
			}
			else{
				paramaters.err = "Username or password is incorrect";
				res.render('login', paramaters);
			}
		})
	});
	
	app.post('/login', function(req, res){	

		get_user_by_name(req.body.user, function (err, user) {
			//console.log(err);
			console.log(user);
			if(err != null)
			{
				//Error getting user or password
				console.log("err");
				paramaters.err = [err];
				res.render('login', paramaters);
			}
			else if (user == null)
			{
				//No error but no user
				paramaters.err = ["Wrong username or password."];
				res.render('login', paramaters);
				console.log("User " + req.body.name + " not authenticated");
			}
			else{
				console.log(req.body);
				//Compare Hashed password
				if (!bcrypt.compareSync(req.body.password, user.password))
				{
					paramaters.err = ['Wrong username or password.'];
					res.render('login', paramaters);
				}
				else {
					//If hashed password is Correct
					//Authenticated but no token
					generate_token(user, function (err, cookieid) {
						if (err) {
							console.log(err);
							paramaters.err = [err];
							res.render('login', paramaters);
						}
						else {
							console.log(cookieid);
							res.cookie('session', cookieid, { maxAge: 900000, signed: true });
							console.log(user);
							paramaters.user = user;
							res.render('user', paramaters);
						}
					}); 
				}
			}
		});
	});
	app.post('/register', function(req, res) {
		
		var user = new schema.models.User;

		user.name = req.body.name;
		user.email = req.body.email;
		user.password = req.body.password;
		
		user.save(function (err) {
			if (err != null) {
				console.log('Error saving user' + err);
				paramaters.err = [err];
				res.redirect('/register');
			};
		});
		paramaters.info =  ["You have logged in."];
		res.redirect('/');
	})
};
