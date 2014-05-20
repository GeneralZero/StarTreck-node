//Game Database Dependencies
var Game = require('./models/game');
var Player = require('./models/player');
var User = require('./models/User');


function loadRequestedData (user) {
	//Verify User's Cookie

	//getVisableSquares()

	//GetData on visable squares
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

				if(user.games.length == 0){
					var current_game = new Game({id:gameID});
					user.games.push(current_game)
				}
				else{

				}

			});
			
			//Create New Game if user dosent have a game

			socket.on('getBoardState', function(value) {
				console.log("getBoardState");
			});
		}
	});
}