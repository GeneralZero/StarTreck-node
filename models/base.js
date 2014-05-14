var mongoose = require('mongoose');

var baseSchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String},
	type:      { type: String}, //Starbase, Outpost
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

module.exports = mongoose.model('Base', baseSchema);

