function init (Schema, schema) {
	var Building = schema.define('Building', {
		title:     { type: String, length: 255 },
		type:      { type: String, length: 255 }, //lab, factory, 
		content:   { type: Schema.Text },
		date:      { type: Date,    default: function () { return new Date;} },
		timestamp: { type: Number,  default: Date.now },
		published: { type: Boolean, default: false, index: true }
	});

	// User Validate functions

	//User Functions

	return Building;
}

exports.init = init;


