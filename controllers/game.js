/**
 * GET /
 * Home page.
 */

exports.game = function(req, res) {
  res.render('game', {
    title: 'Star Trek Game',
    game: true
  });
};
