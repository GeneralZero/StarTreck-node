function setVarables (vars) {
	var render = function(req, res){
		res.render('chat', vars);
	};

	return render;
}

exports.setVarables = setVarables;
