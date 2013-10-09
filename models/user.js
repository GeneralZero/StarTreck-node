var crypto = require('crypto');
var bcrypt = require('bcrypt');

function init (Schema, schema) {
	var User = schema.define('User', {
		name:          { type: String, length: 255 },
		email:         { type: String, length: 255 },
		bio:           { type: Schema.Text },
		salt:          { type: String }, 
		password:      { type: String }, 
		last_accessed: { type: Date,    default: Date.now },
		joinedOn:      { type: Date,  default: Date.now },
	});

	// User Validate functions
	User.validatesUniquenessOf('email', {message: 'email is not unique'});
	User.validatesPresenceOf('name', 'email');
	User.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});


	//User Functions
	User.beforeSave =  function(next, data) {
		var user = this;

		if(!user.isModified('password')) return next();

		bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
			if(err) return next(err);

			bcrypt.hash(user.password, salt, function(err, hash) {
				if(err) return next(err);
				user.password = hash;
				next();
			});
		});
	};

	return User;
}

exports.init = init;