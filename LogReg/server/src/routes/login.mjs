import { Router } from "express";
import { users } from "../data/data.mjs";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return res.status(200).json({
      message: "Login successful",
      user: { name: user.name },
    });
  } else {
    return res.status(400).json({ message: "Invalid email or password" });
  }
});

export default router;