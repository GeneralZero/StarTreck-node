var mongoose = require('mongoose');

var buildingSchema = new mongoose.Schema({
	title:     { type: String},
	type:      { type: String}, //lab, factory, 
	content:   { type: String},
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

module.exports = mongoose.model('Buliding', buildingSchema);
