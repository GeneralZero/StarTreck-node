var index = require("./index").setVarables({title: "Express"});
var chat = require("./chat").setVarables({title: "Express"});

exports.route = function(app){
    app.get('/', index);
    app.get('/chat', chat);
};