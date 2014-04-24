var socketio = require('socket.io')

module.exports.listen = function(app){
    io = socketio.listen(app)

    //Occures when get new user
    io.sockets.on('connection', function (socket) {
    	console.log(socket);

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