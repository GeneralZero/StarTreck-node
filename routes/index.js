function setVarables (vars) {
	var render = function(req, res){
		res.render('index', vars);
	};

	return render;
}

exports.setVarables = setVarables;
