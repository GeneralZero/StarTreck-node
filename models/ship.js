var mongoose = require('mongoose');

var shipSchema = new mongoose.Schema({
	title:             { type: String },
	content:           { type: String },
	height:            { type: Number },
	width:             { type: Number },
	speed:             { type: Number },
	date:              { type: Date,    default: function () { return new Date;} },
	timestamp:         { type: Number,  default: Date.now },
	published:         { type: Boolean, default: false },
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

module.exports = mongoose.model('Ship', shipSchema);


