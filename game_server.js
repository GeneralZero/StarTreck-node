var socketio = require('socket.io');

//Game Database Dependencies
var gameSchema = require('./models/game');
var playerSchema = require('./models/player');
var UserSchema = require('./models/User');

//Get Cookie return User
function verifyUserCookie (cookies){
	console.log(cookie);
}

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

module.exports.listen = function(app){
	io = socketio.listen(app)

	io.configure(function (){
		io.set('authorization', function (handshakeData, callback) {
			// findDatabyip is an async example function
			findDatabyIP(handshakeData.address.address, function (err, data) {
				if (err) return callback(err);

				if (data.authorized) {
					handshakeData.foo = 'bar';
				for(var prop in data) handshakeData[prop] = data[prop];
					callback(null, true);
				} else {
					callback(null, false);
				}
			}) 
		});
	});

	io.set('authorization', function (handshakeData, accept) {
		if (handshakeData.headers.cookie) {

			handshakeData.cookie = cookie.parse(handshakeData.headers.cookie);
			handshakeData.sessionID = handshakeData.cookie['express.sid'];
			if (handshakeData.cookie['express.sid'] == handshakeData.sessionID) {
				return accept('Cookie is invalid.', false);
			}

		} 
		else{
			return accept('No cookie transmitted.', false);
		} 
		accept(null, true);
	});

	//Occures when get new user
	io.sockets.on('connection', function (socket) {
		console.log(socket.id);
		var user = verifyUserCookie(socket.handshake.headers.cookie);

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