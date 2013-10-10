function init (Schema, schema) {
	var Ship = schema.define('Ship', {
		title:             { type: String, length: 255 },
		content:           { type: Schema.Text },
		height:            { type: Number },
		width:             { type: Number },
		speed:             { type: Number },
		date:              { type: Date,    default: function () { return new Date;} },
		timestamp:         { type: Number,  default: Date.now },
		published:         { type: Boolean, default: false, index: true },
		clocked:           { type: Boolean, default: false },
		phasers:           { type: Number, default: 0 },
		torpedoes:         { type: Number, default: 0 },
		damage:            { type: Number, default: 0 },
		weapon_damage:     { type: Number, default: 0 },
		hull_damage:       { type: Number, default: 0 },
		sheilds_damage:    { type: Number, default: 0 },
		sheilds:           { type: Number, default: 0 },
		hull:              { type: Number, default: 0 },
	});

	// User Validate functions

	//User Functions

	return Ship;
}

exports.init = init;


