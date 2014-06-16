$(document).ready(function() {
	var game = new Phaser.Game(1024, 32*21, Phaser.AUTO, 'canvas', { preload: preload, create: create });
	var player = {};
	var universe = {};

	var box_size = [32,32];
	var top_labels = {"research": "Research Points:", "espionage": "Esponage Points:", "credits": "Credits:", "political": "Political Points:", "classname": "Class:"}

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

	function createFogOfWar (argument) {
		// body...
	}

	function createStationary(game, plannet){
		universe.planets.create((plannet.index/box_size[0])*box_size[1], (plannet.index%box_size[1])*box_size[0], plannet.name);

		//Set Animations
		universe.planets.animations.add('revolve');
		universe.planets.animations.play('revolve', 10, true);
	}

	function create() {
		//this.state.start('MainMenu');

		//Load inital data from Server
		socket.emit('get_start_data');
		socket.emit('get_player_modifiers');


		//Initalize topbar and sidebar
		renderTopbar();
		renderSidebar();

		universe.planets = game.add.group();

		for (var i = 20; i >= 0; i--) {
			var planet = universe.planets.create(i*box_size[0], (i+1)*box_size[1], 'coin');
			//Set Attributies

			//Set Animations
			universe.planets.animations.add('revolve');
			universe.planets.animations.play('revolve', 10, true);

			//Set Drags
			universe.planets.inputEnabled = true;
			universe.planets.input.enableDrag();
			universe.planets.input.enableSnap(box_size[0], box_size[1], false, true);
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
	
	function renderTopbar () {
		var style = { font: "14px Arial", fill: "#ffffff", align: "left" };

		var research_points, espionage_points, credits, political_points, classname;

		var topbar = game.add.graphics(0, 0);
		topbar.beginFill(0x00008B, 1);
		topbar.drawRect(0, 0, 1024, 32);

		//Draw Reasearch label
		game.add.text(0*(1024/5), 0, top_labels['research'] + research_points || 0, style);

		//Draw espionage label
		game.add.text(1*(1024/5), 0, top_labels['espionage'] + espionage_points || 0, style);

		//Draw Credits label
		game.add.text(2*(1024/5), 0, top_labels['credits'] + credits || 0, style);

		//Draw political label
		game.add.text(3*(1024/5), 0, top_labels['political'] + political_points || 0, style);

		//Draw Class label
		game.add.text(4*(1024/5), 0, top_labels['classname'] + classname || 'n/a', style);
	}

	function renderSidebar(){
		//On update of varables update sidebar

		var sidebar = game.add.graphics(0, 0);
		sidebar.beginFill(0x002387, 1);
		sidebar.drawRect(32*20, 32, 1024, 32*21);

	}

	function render() {

		renderBoard()

		renderSidebar()

		game.debug.body();

	}

	function renderEndOfRound(){

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

	function swap_textures(sprite, new_texture, animation_name){
		// To load the new texture (('key', frame))
		sprite.loadTexture(new_texture, 0);
		// Adding an animation ( 'key' )
		sprite.animations.add(animation_name);
		// To play the animation with the new texture ( 'key', frameRate, loop, killOnComplete)
		sprite.animations.play(animation_name, 7, false, true);
	}

});
