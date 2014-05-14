var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

//Connected Attributies
var boardSchema = require('./board');
var playerSchema = require('./player');

var gameSchema = new mongoose.Schema({
	title:     { type: String },
	id:        { type: String },
	content:   { type: String },
	date:      { type: Date,    default: function () { return new Date;} },
	published: { type: Boolean, default: false, index: true },
	players: [playerSchema],
	board: [boardSchema]
});

module.exports = mongoose.model('Game', gameSchema);
