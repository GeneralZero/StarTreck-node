var mongoose = require('mongoose');

var research_proiritySchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String },
	timestamp: { type: Number,  default: Date.now },
});

module.exports = research_proiritySchema;


