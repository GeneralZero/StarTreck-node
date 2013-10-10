var index = require("./index").setVarables({title: "Express"});
var chat = require("./chat").setVarables({title: "Express"});
var login = require("./login").setVarables({title: "Express"});
var passport = require('passport');

exports.route = function(app){
	app.get('/', index);
	app.get('/chat', chat);
	app.get('/login', login);

    app.post('/login', passport.authenticate('local'),
		function(req, res) {
			// If this function gets called, authentication was successful.
			// `req.user` contains the authenticated user.
			res.redirect('/users/' + req.user.username);
		});
};