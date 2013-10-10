function setVarables (vars) {
	var render = function(req, res){
		res.render('register', vars);
	};

	return render;
}

exports.setVarables = setVarables;