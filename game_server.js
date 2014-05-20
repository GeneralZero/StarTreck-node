//Game Database Dependencies
var game = require('./models/game');
var player = require('./models/player');
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
		else{
			if(session){
				socket.emit('session', session.passport);
				User.findById(session.passport, function (err, user) {
					console.log(user);
				});
			}

			User.find({_id:session.passport})

			socket.on('getBoardState', function(value) {
				console.log(value);
			});
		}
	});
}