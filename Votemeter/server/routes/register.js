const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const users = require("../data/users");
const { isLoggedIn } = require("../middleware/auth");
const { validateRegistration } = require("../middleware/registerValidation");

// URL
router.get("/", isLoggedIn, (req, res) => {
  res.render("register");
});

// API
router.post("/register", validateRegistration, async (req, res) => {
  const { username, password, email, category } = req.body;

  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ id: newId, username, password: hashedPassword, email, category, ratings: [] });
    res.status(200).json({ message: "Registration successful" });
  } catch (err) {
    console.error("Error hashing password:", err);
    res.status(500).json({ error: "Failed to register user" });
  }
});

module.exports = router;
