function roll_dice (sides, number, modifier, global_modifier) {
	global_modifier = global_modifier || 0 ;
	modifier = modifier || 0 ;
	result = 0;
	for (var i = number - 1; i >= 0; i--) {
		result += Math.floor((Math.random()*sides)+1) + modifier ;
	};
	return result + global_modifier;
}