var mongoose = require('mongoose');

//Connected Attributies
var planetSchema = require('./planet');
var playerSchema = require('./player');

var board_squareSchema = new mongoose.Schema({
	title:     { type: String},
	content:   { type: String},
	published: { type: Boolean, default: false, index: true },
	is_free:   { type: Boolean, default: true },
	viewable: [mongoose.Schema.ObjectId], //Players that can view this square
	planet: [planetSchema]
});

module.exports = board_squareSchema;
