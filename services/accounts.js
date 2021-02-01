/** Middleware for other services to use to check login * */
function checkLogin(req, res, next) {
  try {
    if (req.session.userData.logged_in) {
      next();
    } else {
      res.send({ success: false, error: 'You are not logged in!' });
    }
  } catch (e) {
    res.send({ success: false, error: 'You are not logged in!' });
  }
}
module.exports = checkLogin;
