var unitSchema = = new mongoose.Schema({
	title:     { type: String, length: 255 },
	content:   { type: String },
	type:      { type: String }, //Spy, Crew member
});



module.exports = mongoose.model('Unit', unitSchema);