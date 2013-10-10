var Schema = require('jugglingdb').Schema;
var schema = new Schema('redis', {port: 6379}); //port number depends on your configuration

// Define game models
var Agreement = require('./agreement').init(Schema, schema);

var Base = require('./base').init(Schema, schema);

var Board = require('./board').init(Schema, schema);

var Board_Square = require('./board_square').init(Schema, schema);

var Building = require('./building').init(Schema, schema);

var Diplomatic_Nogations = require('./diplomatic_nogations').init(Schema, schema);

var Factory = require('./factory').init(Schema, schema);

var Fleet = require('./fleet').init(Schema, schema);

var Game = require('./game').init(Schema, schema);

var Planet = require('./planet').init(Schema, schema);

var Player = require('./player').init(Schema, schema);

var Research_Proirity = require('./research_proirity').init(Schema, schema);

var Ship = require('./ship').init(Schema, schema);

var Unit = require('./unit').init(Schema, schema);

//Define User models
var User = require('./user').init(Schema, schema);

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

exports.schema = schema;