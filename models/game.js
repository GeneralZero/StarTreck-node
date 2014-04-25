var gameSchema = new mongoose.Schema({
	title:     { type: String},
	id:        { type: String},
	content:   { type: String },
	date:      { type: Date,    default: function () { return new Date;} },
	published: { type: Boolean, default: false, index: true }
});

module.exports = mongoose.model('Game', gameSchema);
