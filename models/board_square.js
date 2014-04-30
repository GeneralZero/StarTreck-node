var mongoose = require('mongoose');

var board_squareSchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String},
	published: { type: Boolean, default: false, index: true },
	is_free:   { type: Boolean, default: true }
});

module.exports = mongoose.model('Board_Square', board_squareSchema);
