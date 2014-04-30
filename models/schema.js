// Define game models
var Agreement = require('./agreement');
var Base = require('./base').Base;
var Board = require('./board');
var Board_Square = require('./board_square');
var Building = require('./building');
var Diplomatic_Nogations = require('./diplomatic_nogations');
var Factory = require('./factory');
var Fleet = require('./fleet');
var Game = require('./game');
var Planet = require('./planet');
var Player = require('./player');
var Research_Proirity = require('./research_proirity');
var Ship = require('./ship');
var Unit = require('./unit');

//Set Connections
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