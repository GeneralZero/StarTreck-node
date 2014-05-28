//Game Database Dependencies

var mongoose = require('mongoose');

var Game = mongoose.model('Game', require('./models/game'));
var Player = mongoose.model('Player', require('./models/player'));
var Board = mongoose.model('Board', require('./models/board'));
var Board_Square = mongoose.model('Board Square', require('./models/board_square'));
var User = require('./models/User');


function loadRequestedData (socket, user, game) { 
	var users_board = [];
	
	for(var i=0; i< game.board.board_squares.length; i++){
		for(var j=0 i< game.board.board_squares[i].viewable.length; j++){
			if(game.board.board_squares[i].viewable[j] == user._id){
				users_board.push(game.board.board_squares[i]);
				break;
			}
		}
	}

	//GetData on visable squares
	
	socket.emit('board data', {board_data: users_board});
}

function generateNewBoard(socket, game){
	var new_board = new Board();
	
	
	//Generate Planets
	
	//Generate Wormholes
	
	//Generate
	
	//Generate
}

function endOfTurn(socket, user, data){
	//Check for Valid Turn

	//Add Data to database

	//Signal Next Turn
	var nextuser = {};
	socket.broadcast.emit('end turn', {
		turn_end: user,
		turn_begin: nextuser
	});
}

var gameID = 1;


exports.init = function(io, sessionSockets, db){
	sessionSockets.on('connection', function (err, socket, session) {
		if(err){

		}
		else if(session){
			//Send Session to User 
			//socket.emit('session', session.passport);

			//Get user from database
			console.log(session.passport.user);
			User.findById(session.passport.user, function (err, user) {
				console.log("User: " + user);

				//Get current Game by ID
				if(user.games.length == 0){
					var current_game = new Game();
					var current_player = new Player();

					//current_game.save();
					//current_player.save();

					user.games.push({id:current_game.id, game: current_game, player: current_player});

					user.save();
				}
				else{
					for (var i = 0; i < user.games.length; i++) {
						if(user.games[i].id == gameID){
							Game.findByID(user.games[i].id, function(err, data){
								var current_game = data;
							});
							var current_player = user.games[i].player;
							break;
						}
					};
				}

				//Have Game and player



			});
			
			//Create New Game if user dosent have a game

			socket.on('getBoardState', function(value) {
				console.log("getBoardState");
			});
		}
	});
}
