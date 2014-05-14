var mongoose = require('mongoose');

//Connected Attributies
var shipSchema = require('./ship');

var fleetSchema = new mongoose.Schema({
	title:     { type: String },
	content:   { type: String },
	height:    { type: Number },
	width:     { type: Number },
	speed:     { type: Number },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true },
	ships: [shipSchema]
});

module.exports = mongoose.model('Fleet', fleetSchema);

