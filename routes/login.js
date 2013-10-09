function setVarables (vars) {
	var render = function(req, res){
		res.render('login', vars);
	};

	return render;
}

exports.setVarables = setVarables;