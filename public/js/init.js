
StarTrek.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

StarTrek.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(500, 500, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//Load Game Assets

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;
				
		this.state.start('MainMenu');
				
	}

};
