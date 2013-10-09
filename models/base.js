function init (Schema, schema) {
	var Base = schema.define('Base', {
		title:     { type: String, length: 255 },
		content:   { type: Schema.Text },
		type:      { type: String, length: 255 }, //Starbase, Outpost
		date:      { type: Date,    default: function () { return new Date;} },
		timestamp: { type: Number,  default: Date.now },
		published: { type: Boolean, default: false, index: true }
	});

	// User Validate functions

	//User Functions

	return Base;
}

exports.init = init;


