//Initalize Socket.io
var socket = io.connect( window.location.protocol + '//' + window.location.host , {secure: true});

socket.on('session', function (session){
	console.log(session);
})

socket.on('get_board_data', function (data) {
	for(var entity in data){
		console.log(data[entity]);
	}
});

$(document).ready(function() {
	var game = new Phaser.Game(1024, 32*21, Phaser.AUTO, 'canvas', { preload: preload, create: create });
	var universe = {};

	var box_size = [32,32];
	var top_labels = {"research": "Research Points:", "espionage": "Esponage Points:", "credits": "Credits:", "political": "Political Points:", "class": "Class:"}

	/*
	game.state.add('Boot', BallonBears.Boot);
	game.state.add('Preloader', BallonBears.Preloader);
	game.state.add('MainMenu', BallonBears.MainMenu);
	game.state.add('Shop', BallonBears.Shop);
	game.state.add('Game', BallonBears.Game);
	game.state.add('Score', BallonBears.Score);
	*/

	function preload() {
		game.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);
	}

	function create() {
		//this.state.start('MainMenu');

		//Initalize topbar
		var topbar = game.add.graphics(0, 0);
		topbar.beginFill(0x00008B, 1);
		topbar.drawRect(0, 0, 1024, 32);

		var sidebar = game.add.graphics(0, 0);
		sidebar.beginFill(0x002387, 1);
		sidebar.drawRect(32*20, 32, 1024, 32*21);
		
		planets = game.add.group();

		for (var i = 20; i >= 0; i--) {
			var planet = planets.create(i*box_size[0], (i+1)*box_size[1], 'coin');
			//Set Attributies

			//Set Animations
			planet.animations.add('revolve');
			planet.animations.play('revolve', 10, true);

			//Set Drags
			planet.inputEnabled = true;
			planet.input.enableDrag();
			planet.input.enableSnap(box_size[0], box_size[1], false, true);
		}
	}

	function update() {
		//Load Visable Planets

		//Load Visable
	}

	function renderBoard(){
		//On input Update board

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

		renderBoard()

		renderSidebar()

		game.debug.body();

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