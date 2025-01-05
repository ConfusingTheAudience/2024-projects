const express = require("express");
const router = express.Router();

// URL
router.get("/", (req, res) => {
  const user = req.session.user;
  res.render("home", { user: user });
});

module.exports = router;
