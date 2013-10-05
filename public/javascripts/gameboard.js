function drawBoard(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");

	var canvas_width = canvas.width;
	var canvas_height = canvas.height;

	var offset = 0;

	var grid = [20, 20]; //height, width
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
}

function ondata(){
	var data = 	{"ship": 
		{
			"owner":"test1",
			"picture":"http://example.com/ship.png",
			"posistion": [15,7],
			"sprite_height" : 100,
			"sprite_width" : 100,
			"picture_height" : 500,
			"picture_width" : 100,
			"animate":true,
			"frames":5
		}
	};

	for(var entity in data){
		
		data[entity]
	};
}

