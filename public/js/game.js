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
	var game = new Phaser.Game(1024, 32*20, Phaser.AUTO, 'canvas', { preload: preload, create: create });
	var universe = {};

	var box_size = [32,32];
	var planets = {};

	game.state.add('Boot', BallonBears.Boot);
	game.state.add('Preloader', BallonBears.Preloader);
	game.state.add('MainMenu', BallonBears.MainMenu);
	game.state.add('Shop', BallonBears.Shop);
	game.state.add('Game', BallonBears.Game);
	game.state.add('Score', BallonBears.Score);

	function preload() {
		game.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);
	}

	function create() {
		//this.state.start('MainMenu');
		
		planets = game.add.group();

		for (var i = 20; i >= 0; i--) {
			var planet = planets.create(i*box_size[0], i*box_size[1], 'coin');
			//Set Attributies

			//Set Animations
			planet.animations.add('walk');
			planet.animations.play('walk', 10, true);

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

});