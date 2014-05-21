var mongoose = require('mongoose');

var factorySchema = new mongoose.Schema({
	title:     { type: String },
	content:   { type: String },
	height:    { type: Number },
	width:     { type: Number },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

module.exports = factorySchema;


