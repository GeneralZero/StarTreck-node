var mongoose = require('mongoose');

//Connected Attributies
var board_squareSchema = require('./board_square');

var boardSchema = new mongoose.Schema({
	title:     { type: String },
	content:   { type: String },
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true },
	board_squares: [board_squareSchema]
});


module.exports = mongoose.model('Board', boardSchema);