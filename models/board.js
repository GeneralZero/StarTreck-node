var mongoose = require('mongoose');

//Connected Attributies
var board_squareSchema = require('./board_square');

var boardSchema = new mongoose.Schema({
	title:     { type: String },
	content:   { type: String },
	width:     { type: Number, default: 20 },
	height:    { type: Number, default: 20 },
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true },
	board_squares: [board_squareSchema]
});


module.exports = boardSchema;