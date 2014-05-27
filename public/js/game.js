//Initalize Socket.io
var socket = io.connect();
var session;

socket.on('session', function (data) {
	console.log(JSON.stringify(data));
	session = data;
});

socket.on('update_board', function(data){
	renderBoard(data);
})




//Socket.io Game Functions


$(document).ready(function() {
	//Initlize Phaser
	var game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update, render: render });

	//Initalize Global Varables
	var map = [];
	var sprite_size = [32, 32];


	function preload() {
		//Preload All files

		//Sprite files

		//Sounds
	}

	function create() {
		socket.emit('getBoardState');

	}

	function update() {

	}

	function renderBoard(data){
		for (var i = data.length - 1; i >= 0; i--) {
			if(data[i].type == ""){

			}
			else if(data[i].type == ""){

			}
			else if(data[i].type == ""){
				
			}
			else if(data[i].type == ""){
				
			}
			else if(data[i].type == ""){
				
			}
		};

		//Render the Board

		//Render the Planets
		//Render the Ships and Outposts
		//Render the Blackholes
		//Render Fog of War

	}

	function renderSidebar(){
		//On update of varables update sidebar

		//Render Username

		//Render Class

	}

	function render() {
		renderBoard();

		renderSidebar();

	}

	function renderEndOfRound(){

	}

	function getBoardState(){
		
	}

	function add_sprite_to_board(game, entity_name, location){
		//This sprite is using a texture atlas for all of its animation data
		var entity = game.add.sprite(location.x, location.y, entity_name);

		//Here we add a new animation called 'run'
		//We haven't specified any frames because it's using every frame in the texture atlas
		entity.animations.add('still');

		//And this starts the animation playing by using its key ("run")
		//15 is the frame rate (15fps)
		//true means it will loop when it finishes
		entity.animations.play('still', 15, true);

		//Callback Function for Click
		entity.events.onInputDown.add(listener, this);

		return entity;
	}

	function swap_textures(sprite, new_texture, animation_key){
		// To load the new texture (('key', frame))
		sprite.loadTexture(new_texture, 0);
		// Adding an animation ( 'key' )
		sprite.animations.add(animation_key);
		// To play the animation with the new texture ( 'key', frameRate, loop, killOnComplete)
		sprite.animations.play(animation_key, 7, false, true);
	}
	
});