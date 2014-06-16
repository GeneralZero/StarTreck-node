//Initalize Socket.io
var socket = io.connect( window.location.protocol + '//' + window.location.host , {secure: true});

socket.on('session', function (session){
	console.log(session);
})

socket.on('get_start_data', function (data) {
	//data = {race, power, industry, research, espionage, credits, political}

	for(var mods in data){
		player[mods] = data[mods];
	}
})

socket.on('get_player_modifiers', function (data) {
	// data = {teraforming, bio_weapon, cloneing, gen_soldiers, immunology, fleetyards, miniaturization, plasma_torpedo
		//	starbases, repair_crews, sub_scanner, tachyon_detector, holodecks, signal_decoders, point_defences, science_probes
		//	gravity_wells, privateers, generators, sheild_cycling, warp_inhibitors, warp_gates, gas_alchemy, rad_shields
		//	wormhole_matrix, com_forgery, xeno_diplomacy, training_academy, suma_economics, heroic_character, pol_resistance, ultra_science}

	for(var mods in data){
		player[mods] = data[mods];
	}
});

socket.on('set_board_data', function (data) {
	for(var entity in data){
		console.log(data[entity]);
	}
});
