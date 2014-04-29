var mongoose = require('mongoose');

var planetSchema = new mongoose.Schema({
	title:      { type: String},
	id:         { type: String},
	minor_race: { type: String},
	content:    { type: String},
	date:       { type: Date,    default: function () { return new Date;} },
	timestamp:  { type: Number,  default: Date.now },
	max_size:   { type: Number},
	published:  { type: Boolean, default: false, index: true },
	teraformed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Planet', planetSchema);


