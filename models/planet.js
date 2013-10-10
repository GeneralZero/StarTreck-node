function init (Schema, schema) {
	var Planet = schema.define('Planet', {
		title:      { type: String, length: 255 },
		id:         { type: String, length: 255 },
		minor_race: { type: String, length: 255 },
		content:    { type: Schema.Text },
		date:       { type: Date,    default: function () { return new Date;} },
		timestamp:  { type: Number,  default: Date.now },
		max_size:   { type: Number},
		published:  { type: Boolean, default: false, index: true },
		teraformed: { type: Boolean, default: false }
	});

	// User Validate functions

	//User Functions

	return Planet;
}

exports.init = init;


