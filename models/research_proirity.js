function init (Schema, schema) {
	var Research_Proirity = schema.define('Research_Proirity', {
		title:     { type: String, length: 255 },
		content:   { type: Schema.Text },
		date:      { type: Date,    default: function () { return new Date;} },
		timestamp: { type: Number,  default: Date.now },
		published: { type: Boolean, default: false, index: true }
	});

	// User Validate functions

	//User Functions

	return Research_Proirity;
}

exports.init = init;


