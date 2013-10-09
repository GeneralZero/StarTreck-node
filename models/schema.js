var Schema = require('jugglingdb').Schema;
var schema = new Schema('redis', {port: 6379}); //port number depends on your configuration
// define models

var User = require('./user').init(Schema, schema);

var Agreement = require('./agreement').init(Schema, schema);

var Base = require('./base').init(Schema, schema);

var Board = require('./board').init(Schema, schema);

var Board_Square = require('./board_square').init(Schema, schema);

var Building = require('./building').init(Schema, schema);

var Diplomatic_Nogations = require('./diplomatic_nogations').init(Schema, schema);

var Factory = require('./factory').init(Schema, schema);

var Fleet = schema.define('Fleet', {
	title:     { type: String, length: 255 },
	content:   { type: Schema.Text },
	height:    { type: Number },
	width:     { type: Number },
	speed:     { type: Number },
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

var Game = schema.define('Game', {
	title:     { type: String, length: 255 },
	id:        { type: String, length: 255 },
	content:   { type: Schema.Text },
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

var Planet = schema.define('Planet', {
	title:      { type: String, length: 255 },
	id:         { type: String, length: 255 },
	minor_race: { type: String, length: 255 },
	content:    { type: Schema.Text },
	date:       { type: Date,    default: function () { return new Date;} },
	timestamp:  { type: Number,  default: Date.now },
	max_size:   { type: Number},
	published:  { type: Boolean, default: false, index: true },
	teraformed: { type: Boolean, default: false }
});

var Player = require('./player').init(Schema, schema);

var Research_Proirity = schema.define('Research_Proirity', {
	title:     { type: String, length: 255 },
	content:   { type: Schema.Text },
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

var Ship = schema.define('Ship', {
	title:             { type: String, length: 255 },
	content:           { type: Schema.Text },
	height:            { type: Number },
	width:             { type: Number },
	speed:             { type: Number },
	date:              { type: Date,    default: function () { return new Date;} },
	timestamp:         { type: Number,  default: Date.now },
	published:         { type: Boolean, default: false, index: true },
	clocked:           { type: Boolean, default: false },
	phasers:           { type: Number, default: 0 },
	torpedoes:         { type: Number, default: 0 },
	damage:            { type: Number, default: 0 },
	weapon_damage:     { type: Number, default: 0 },
	hull_damage:       { type: Number, default: 0 },
	sheilds_damage:    { type: Number, default: 0 },
	sheilds:           { type: Number, default: 0 },
	hull:              { type: Number, default: 0 },
});

var Unit = schema.define('Unit', {
	title:     { type: String, length: 255 },
	content:   { type: Schema.Text },
	type:      { type: String }, //Spy, Crew member
	date:      { type: Date,    default: function () { return new Date;} },
	timestamp: { type: Number,  default: Date.now },
	published: { type: Boolean, default: false, index: true }
});

//Fourghen Keys
User.hasMany(Game);
User.hasMany(Player);

Player.hasMany(Agreement);
Player.hasMany(Base);
Player.hasMany(Diplomatic_Nogations);
Player.hasMany(Fleet);

Player.belongsTo(Game);

Fleet.hasMany(Ship);

Planet.hasMany(Building);
Planet.hasMany(Factory);
Planet.hasMany(Unit);

Planet.belongsTo(Board_Square);

Board.belongsTo(Game);
Board_Square.belongsTo(Board);

//Validations




exports.schema = schema;