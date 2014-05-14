var mongoose = require('mongoose');


var diplomatic_nogationsSchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String},
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

module.exports = mongoose.model('Diplomatic_Nogations', diplomatic_nogationsSchema);


