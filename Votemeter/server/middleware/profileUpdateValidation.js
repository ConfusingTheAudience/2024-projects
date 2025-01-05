const users = require("../data/users");

const validateProfileUpdate = (req, res, next) => {
  let { username, email } = req.body;
  const currentUser = req.session.user;

  // username validation
  if (username) {
    const trimmedUsername = username.trim();

    if (username !== trimmedUsername) {
      return res.status(400).json({
        error: "Username cannot have spaces at the beginning or end.",
      });
    }

    if (/[^a-zA-Z0-9]/.test(trimmedUsername)) {
      return res
        .status(400)
        .json({ error: "Username cannot contain special characters." });
    }

    if (trimmedUsername.length < 3 || trimmedUsername.length > 12) {
      return res.status(400).json({
        error: "Username must be between 3 and 12 characters",
      });
    }

    if (currentUser.username !== trimmedUsername) {
      const existingUsername = users.find(
        (user) => user.username === trimmedUsername
      );
      if (existingUsername) {
        return res.status(400).json({ error: "Username already exists." });
      }
    }
  }

  // email validation
  if (email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,6}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    if (currentUser.email !== email) {
      const existingEmail = users.find((user) => user.email === email);
      if (existingEmail) {
        return res.status(400).json({ error: "Email already exists." });
      }
    }
  }

  next();
};

module.exports = { validateProfileUpdate };
