var mongoose = require('mongoose');

//Connected Attributies
var buildingSchema = require('./building');
var factorySchema = require('./factory');
var unitSchema = require('./unit');

var planetSchema = new mongoose.Schema({
	title:      { type: String},
	id:         { type: String},
	minor_race: { type: String},
	content:    { type: String},
	date:       { type: Date,    default: function () { return new Date;} },
	timestamp:  { type: Number,  default: Date.now },
	max_size:   { type: Number},
	published:  { type: Boolean, default: false, index: true },
	teraformed: { type: Boolean, default: false },
	buildings: [buildingSchema],
	factory: [factorySchema],
	units: [unitSchema]
});

module.exports = planetSchema;


