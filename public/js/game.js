


var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var canvas_width = canvas.width;
var canvas_height = canvas.height;
var offset = 0;
var grid = [20, 20]; //height, width

var socket = io.connect( window.location.protocol + '//' + window.location.host , {secure: true});
socket.on('get_board_data', function (data) {
	for(var entity in data){
		console.log(data[entity]);
	}
});

var board_objects = [];

function drawBoard(){
	for (var x=0; x <= canvas_width/grid[0]; x += 1) { //Vertical Lines
		context.moveTo(x*(canvas_width/grid[1]), 0);
		context.lineTo(x*(canvas_width/grid[1]), canvas_height);
	}

	for (var x=0; x <= canvas_height/grid[1]; x += 1) { //Horozontal Lines
		context.moveTo(0, x*(canvas_height/grid[0]));
		context.lineTo(canvas_width, x*(canvas_height/grid[0]));
	}

	context.strokeStyle = "black";
	context.stroke();

	/*for(objects in board_objects)
	{

	}*/

}

drawBoard();


