var mongoose = require('mongoose');

//Connected Attributies
var planetSchema = require('./planet');

var board_squareSchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String},
	published: { type: Boolean, default: false, index: true },
	is_free:   { type: Boolean, default: true },
	planet: [planetSchema]
});

module.exports = mongoose.model('Board_Square', board_squareSchema);
