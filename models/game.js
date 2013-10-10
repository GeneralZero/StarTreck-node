function init (Schema, schema) {
	var Game = schema.define('Game', {
		title:     { type: String, length: 255 },
		id:        { type: String, length: 255 },
		content:   { type: Schema.Text },
		date:      { type: Date,    default: function () { return new Date;} },
		timestamp: { type: Number,  default: Date.now },
		published: { type: Boolean, default: false, index: true }
	});

	// User Validate functions

	//User Functions

	return Game;
}

exports.init = init;


