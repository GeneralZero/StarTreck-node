var mongoose = require('mongoose');

var research_proiritySchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String },
	timestamp: { type: Number,  default: Date.now },
});

module.exports = mongoose.model('Research Proirity', research_proiritySchema);


