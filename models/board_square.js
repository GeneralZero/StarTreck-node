var mongoose = require('mongoose');

var board_squareSchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String},
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true },
	is_free:   { type: Boolean, default: true }
});

exports.init = init;

module.exports = mongoose.model('Board_Square', board_squareSchema);
