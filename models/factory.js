function init (Schema, schema) {
	var Factory = schema.define('Factory', {
		title:     { type: String, length: 255 },
		content:   { type: Schema.Text },
		height:    { type: Number },
		width:     { type: Number },
		date:      { type: Date,    default: function () { return new Date;} },
		timestamp: { type: Number,  default: Date.now },
		published: { type: Boolean, default: false, index: true }
	});

	// User Validate functions

	//User Functions

	return Factory;
}

exports.init = init;


