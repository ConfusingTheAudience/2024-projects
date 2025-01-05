// middleware
// to auth user
function checkAuth(req, res, next) {
  const user = req.session.user;

  if (!user) {
    return res.redirect("/login");
  }
  next();
}

// middleware
// to check if user is loggedIn so he cannot reach /login /register before logout
function isLoggedIn(req, res, next) {
  if (req.session.user) {
    return res.redirect("/profile");
  }
  next();
}

module.exports = { checkAuth, isLoggedIn };
