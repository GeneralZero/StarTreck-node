var crypto = require('crypto');
var bcrypt = require('bcrypt');

var SALT_WORK_FACTOR = 16;

function init (Schema, schema) {
	var User = schema.define('User', {
		name:          { type: String, length: 255 , index: true},
		email:         { type: String, length: 255 , index: true},
		bio:           { type: Schema.Text },
		salt:          { type: String }, 
		accessToken:   { type: String, index: true }, 
		password:      { type: String }, 
		last_login:    { type: Date,  default: Date.now },
		joinedOn:      { type: Date,  default: Date.now },
	});

	// User Validate functions
	User.validatesUniquenessOf('email', {message: 'This Email has already been registered'});
	User.validatesUniquenessOf('name', {message: 'This Username has already been registered'});
	User.validatesPresenceOf('name', 'email', 'password');


	//User Functions
	User.beforeSave =  function(next, data) {
		var user = this;
		bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
			if(err) return next(err);

			user.salt = salt;

			bcrypt.hash(user.password, salt, function(err, hash) {
				if(err) return next(err);
				user.password = hash;
				next();
			});
		});
	};
	
	User.prototype.validPassword = function(password)
	{
		return bcrypt.compareSync(password, this.password);
	};

	return User;
}

exports.init = init;