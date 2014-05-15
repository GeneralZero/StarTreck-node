//Game Database Dependencies
var gameSchema = require('./models/game');
var playerSchema = require('./models/player');
var UserSchema = require('./models/User');


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

exports.init = function(io, sessionSockets){
	io.on('connection',  function (socket) {
		socket.emit('session', { hello: 'world' });

		socket.on('foo', function (data) {
			console.log(data);
		});
	});
}