StarTrek.MainMenu = function (game) {
	//this.music = null;
	this.playButton = null;
	this.bearButton = null;
	this.scoreButton = null;

};

StarTrek.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		//this.music = this.add.audio('titleMusic');
		//this.music.play();

		this.game.add.sprite(0, 0, 'titlescreen');

		this.playButton = this.add.button(50, 240, 'start_button', this.startGame, this, 1, 0, 2);
		this.scoreButton = this.add.button(115, 320, 'score_button', this.startScore, this, 1, 0, 2);

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	},
		
	startScore: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Score');

	}

};
