//Game Database Dependencies

var mongoose = require('mongoose');

var Game = mongoose.model('Game', require('./models/game'));
var Player = mongoose.model('Player', require('./models/player'));
var User = require('./models/User');


function loadRequestedData (user) {
	//Verify User's Cookie

	//getVisableSquares()

	//GetData on visable squares
}

function generateNewBoard(){

}

function endOfTurn(user, data){
	//Verify User's Cookie

	//Check Data To see if correct

	//Add Data to database

	//Signal Next Turn
}

var players = [];

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