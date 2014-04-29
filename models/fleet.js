var mongoose = require('mongoose');

var fleetSchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String },
	height:    { type: Number },
	width:     { type: Number },
	speed:     { type: Number },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

module.exports = mongoose.model('Fleet', fleetSchema);

