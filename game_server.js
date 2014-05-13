var socketio = require('socket.io');

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

module.exports.init = function(sessionSockets){
	sessionSockets.on('connection', function (err, socket, session) {
		console.log(socket.id);
		//var user = verifyUserCookie(socket.handshake.headers.cookie);

		socket.emit('get_board_data', [
				{"ship": { "owner":"test1",
							"picture":"http://example.com/ship.png",
							"posistion": [15,7],
							"sprite_height" : 100,
							"sprite_width" : 100,
							"picture_height" : 500,
							"picture_width" : 100,
							"animate":true,
							"frames":5
						}
				},
				{"ship": { "owner":"test1",
							"picture":"http://example.com/ship.png",
							"posistion": [15,7],
							"sprite_height" : 100,
							"sprite_width" : 100,
							"picture_height" : 500,
							"picture_width" : 100,
							"animate":true,
							"frames":5
						}
				}
		]);

	});
}