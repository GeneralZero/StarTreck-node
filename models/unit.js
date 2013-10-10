function init (Schema, schema) {
	var Unit = schema.define('Unit', {
		title:     { type: String, length: 255 },
		content:   { type: Schema.Text },
		type:      { type: String }, //Spy, Crew member
		date:      { type: Date,    default: function () { return new Date;} },
		timestamp: { type: Number,  default: Date.now },
		published: { type: Boolean, default: false, index: true }
	});

	// User Validate functions

	//User Functions

	return Unit;
}

exports.init = init;


