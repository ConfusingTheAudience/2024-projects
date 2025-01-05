const users = require("../data/users");

const validateRegistration = (req, res, next) => {
  const { username, email, password, category } = req.body;

  // check for all fields
  if (!username || !email || !password || !category) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // check if users already exist by username or email
  const existingUserByUsername = users.find(
    (user) => user.username === username
  );
  const existingUserByEmail = users.find((user) => user.email === email);

  if (existingUserByUsername) {
    return res.status(400).json({ error: "Username already exists!" });
  }

  if (existingUserByEmail) {
    return res.status(400).json({ error: "Email already exists!" });
  }

  // email validation
  if (!validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // username validation
  if (username.length < 3 || username.length > 12) {
    return res.status(400).json({
      error: "Username must be between 3 and 12 characters",
    });
  }

  // password validation
  if (password.length < 4 || password.length > 10) {
    return res.status(400).json({
      error: "Password must be between 4 and 10 characters",
    });
  }

  // check for charts and spaces in username and password
  if (validateSpacesAndCharts(username)) {
    return res.status(400).json({
      error: "Username cannot contain spaces or special characters",
    });
  }

  if (validateSpacesAndCharts(password)) {
    return res.status(400).json({
      error: "Password cannot contain spaces or special characters",
    });
  }

  next();
};

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function validateSpacesAndCharts(str) {
  const regex = /[^\w]/;
  return regex.test(str);
}

module.exports = { validateRegistration };
