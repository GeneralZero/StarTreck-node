function init (Schema, schema) {
	var Player = schema.define('Player', {
		title:           { type: String},
		current_id:      { type: String},
		id:              { type: String},
		is_admin:        { type: Boolean, default: false },
		race:            { type: String},
		power:           { type: String},
		content:         { type: String},
		date:            { type: Date,    default: function () { return new Date;} },
		timestamp:       { type: Number,  default: Date.now },
		industry:        { type: Number},
		research:        { type: Number},
		espionage:       { type: Number},
		credits:         { type: Number},
		political:       { type: Number},
		published:       { type: Boolean, default: false, index: true },
		//Biology Research:
		teraforming:     { type: Boolean, default: false }, // (30) – Lose one factory on a planet to add +1 to a controlled planet’s maximum size. Can be applied to minor race planets and homeworlds, but only once per planet.
		bio_weapon:      { type: Boolean, default: false }, // (20) – Add +3 to invasion rolls. If you gain this technology, you cannot use Underground Resistance. Can not be researched by Borg, Klingons, or Federation.
		cloneing:        { type: Boolean, default: false }, // (25) – New colonies begin with 1 factory. Cannot be researched by Borg
		gen_soldiers:    { type: Boolean, default: false }, // (15) – Add +1 to ground combat defense rolls.
		immunology:      { type: Boolean, default: false }, // (10) – Reduces the bonus from Biological Weapons to +1 instead of +3.
		//Construction Research:
		fleetyards:      { type: Boolean, default: false }, // (15) – You may now build heavy cruisers.
		miniaturization: { type: Boolean, default: false }, // (30) – Each planet can build 2 buildings per turn.
		plasma_torpedo:  { type: Boolean, default: false }, // (20) – Torpedoes damage one weapon on a roll of 6. Cannot be researched by Ferengi.
		starbases:       { type: Boolean, default: false }, // (25) – You may now construct starbases. Cannot be researched by Borg.
		repair_crews:    { type: Boolean, default: false }, // (15) – Damaged Phasers and Torpedoes are repaired after combat.
		//Computer Research:
		sub_scanner:      { type: Boolean, default: false }, // (10) – Planet and scout sensors are increased to 2.
		tachyon_detector: { type: Boolean, default: false }, // (20) – 25% chance to avoid cloak first strike.
		holodecks:        { type: Boolean, default: false }, // (15) – Scouts produce +1 Research per turn. Can only be researched by Federation.
		signal_decoders:  { type: Boolean, default: false }, // (15) – Scouts produce +1 Espionage per turn. Can only be researched by Cardassians
		point_defences:   { type: Boolean, default: false }, // (25) – Phaser rolls of 6 destroy torpedo hits instead of causing enemy damage.
		science_probes:   { type: Boolean, default: false }, // (10) – Ignore negative anomaly results and add +4 Research to other results. Cannot be researched by Klingons.
		//Physics Research:
		gravity_wells:   { type: Boolean, default: false }, // (15) – Scouts may move 4 spaces per turn. Cannot be researched by Bog.
		privateers:      { type: Boolean, default: false }, // (15) – Scouts produce +1 credits per turn. Can only be researched by Ferengi.
		generators:      { type: Boolean, default: false }, // (15) – Destroyers and Heavy Cruisers move 2 spaces per turn.
		sheild_cycling:  { type: Boolean, default: false }, // (25) – Working shields regenerate 2 points per round of combat. Can only be researched by Federation and Borg.
		warp_inhibitors: { type: Boolean, default: false }, // (15) – Prevents enemy ship retreat in combat. Cannot be researched by Federation.
		warp_gates:      { type: Boolean, default: false }, // (30) – One fleet each turn can double its speed at a cost of one point of hull damage to each ship in the fleet.
		gas_alchemy:     { type: Boolean, default: false }, // (15) – A nebula can be collected for 2 credits when a ship moves into its sector.
		rad_shields:     { type: Boolean, default: false }, // (10) – Shields operate normally in nebulae.
		wormhole_matrix: { type: Boolean, default: false }, // (10) – Allows travel through wormhole corridors.
		//Sociology Research:
		com_forgery:      { type: Boolean, default: false }, // (10) – You can lower one major power’s minor race standing by 1 level by spending political points and/or credits equal to the major power’s current level (not 10). Cannot be researched by Borg, Klingons, or Federation.
		xeno_diplomacy:   { type: Boolean, default: false }, // (15) – Add +2 to all minor race negotiation rolls. Cannot be researched by Borg.
		training_academy: { type: Boolean, default: false }, // (15) – A ship begins with a veteran crew if an additional Industry point is spent when built. Cannot be researched by Borg.
		suma_economics:   { type: Boolean, default: false }, // (20) – Your trade agreements now become -2, -1, +0, +1, +2, +3, +4. Cannot be researched by Borg.
		heroic_character: { type: Boolean, default: false }, // (30) – Veteran crews re-roll 1’s and 2’s when fighting in combat. Cannot be researched by Borg.
		pol_resistance:   { type: Boolean, default: false }, // (10) – Available political points are spent on a 1-to-1 ratio to mitigate invasion collateral damage. Cannot be researched by Borg or Klingons.
		ultra_science:    { type: Boolean, default: false }, // (20) – Can be researched multiple times to give you 5 victory points per level.

		standing:        { type: String}// Standing with minor races 
		//Credits may be converted to industry at a rate of 3 to 1.

		// AT WAR
		// Enforced peice 5 turns after war 

		//Borg Collective (B) 
		//Cardassian Union (C) 
		//Ferengi Alliance (F) 
		//Klingon Empire (K) 
		//Romulan Star Empire (R) 
		//United Federation of Planets (U) 
	});

	// User Validate functions

	//User Functions

	return Player;
}

exports.init = init;


