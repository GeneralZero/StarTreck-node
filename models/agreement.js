var mongoose = require('mongoose');

var agreementSchema = new mongoose.Schema({
	title:     { type: String, length: 255 },
	content:   { type: Schema.Text },
	type:      { type: String }, //aliance, war
	party1:    { type: String },
	party2:    { type: String },
	outcome:   { type: String },
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

module.exports = mongoose.model('Agreement', agreementSchema);