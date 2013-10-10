function setVarables (vars) {
	var render = function(req, res){
		res.render('user', vars);
	};

	return render;
}

exports.setVarables = setVarables;