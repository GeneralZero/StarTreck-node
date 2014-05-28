var mongoose = require('mongoose');

//Connected Attributies
var shipSchema = require('./ship');

var fleetSchema = new mongoose.Schema({
	title:     { type: String },
	content:   { type: String },
	speed:     { type: Number },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true },
	ships: [shipSchema]
});

module.exports = fleetSchema;

