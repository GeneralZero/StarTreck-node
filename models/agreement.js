var mongoose = require('mongoose');

var agreementSchema = new mongoose.Schema({
	title:     { type: String },
	content:   { type: String },
	type:      { type: String }, //aliance, war
	party1:    { type: String },
	party2:    { type: String },
	outcome:   { type: String },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

module.exports = mongoose.model('Agreement', agreementSchema);