//Database Schema
var schema = require('../models/schema').schema;

//Paramaters for templates
var paramaters = {};

function ensureAuthenticated(req, res, next) {
	console.log(req.signedCookies);
	schema.models.User.findOne({ accessToken: req.signedCookies.session }, function (err, user) {
		if (err) { return next( err , null); }
		if (!user) {
			console.log(user);
			next(null, user);
		} else {
			console.log(user);
			user.last_login = new Date() ;
			user.save( function (err) {
				if (err) return next(err);
				return next(null, user);
			})
		}
	});
}

function generateRandomToken() {
	var token = new Date().getTime() + '_';
	require('crypto').randomBytes(48, function(ex, buf) {
		token += buf.toString('hex');
	});
	return token;
}

function generate_token (user, done) {
	var token = generateRandomToken();
	schema.models.User.find({ accessToken: token }, function (err, existingUser) {
		if (err) { return done( err ); }
		if (existingUser) {
			console.log(existingUser);
			generate_token(); // Run the function again - the token has to be unique!
		} else {
			user.accessToken = token;
			user.save( function (err) {
				if (err) return done(err);
				return done(null, user.accessToken);
			})
		}
	});
}

function get_user_by_name (name, cb) {
	schema.models.User.findOne({ name: name }, function (err, user) {
		if (err) { return cb(err,user); }
		else if (!user) {
			return cb("User not authenticated", user);
		} 
		else {
			return cb(null, user);
		}
	});
}

function get_user_by_email(email, cb) {
	schema.models.User.findOne({ email: email }, function (err, user) {
		if (err) { return cb(err,user); }
		else if (!user) {
			return cb("User not authenticated", user);
		} 
		else {
			return cb(null, user);
		}
	});
}

exports.route = function(app, flash){
	app.get('/', res.render('index', paramaters) );
	app.get('/chat', res.render('chat', paramaters));
	app.get('/login', function (req, res) {
		ensureAuthenticated(req, res, function (err, user) {
			if (user) {
				paramaters.user = user;
				res.render('index', paramaters);
			}
			else{
				res.render('login', paramaters);
			}
		})
	});
	app.get('/signin', res.redirect('/login'));
	app.get('/register', res.render('register', paramaters) );
	app.get('/signup', res.redirect('/register'));

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	app.post('/login', function(req, res)
{		console.log(req.headers);
		get_user_by_name(req.body.name, function (err, user) {
			if(err)
			{
				console.log(err);
				paramaters.err = err;
			}
			else if (!user)
			{
				console.log(err);
				paramaters.err = err;
				paramaters.info = info;
				console.log("User not authenticated")
			}
			else{
				generate_token(user, function (err, cookieid) {
					console.log(cookieid);
					res.cookie('session', cookieid, { maxAge: 900000, signed: true });
					if (paramaters.err) {
					res.render('login', paramaters);
					}
					else {
						res.render('user', paramaters);
					}
				});

				paramaters.user = user;
			}
		});
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
