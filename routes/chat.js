/*
 * GET chat page.
 */

exports.index = function(req, res){
  res.render('chat', { title: 'Chat' });
};