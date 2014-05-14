/**
 * GET /
 * Home page.
 */

exports.game = function(req, res) {
  if (!req.user) return res.redirect('/login');
  res.render('game', {
    title: 'Star Trek Game',
    game: true
  });
};
