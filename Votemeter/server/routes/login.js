const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const users = require("../data/users");
const { isLoggedIn } = require("../middleware/auth");

// URL
router.get("/", isLoggedIn, (req, res) => {
  res.render("login", { error: null });
});

// API
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    req.session.user = user;
    
    res.redirect("/"); 
  });
});

module.exports = router;
