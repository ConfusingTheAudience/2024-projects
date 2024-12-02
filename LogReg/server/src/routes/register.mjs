import { Router } from "express";
import { users } from "../data/data.mjs";

const router = Router();

router.post("/register", (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields." });
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Email is already registered." });
  }

  const newUser = { email, name, password };
  users.push(newUser);
  return res.status(200).json({ message: "Registration successful" });
});

// server check purposes
router.get("/registered/users", (req, res) => {
  res.send(users);
});

export default router;