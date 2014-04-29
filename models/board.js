var mongoose = require('mongoose');

var boardSchema = new mongoose.Schema({
	title:     { type: String },
	content:   { type: String },
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});


module.exports = mongoose.model('Board', boardSchema);