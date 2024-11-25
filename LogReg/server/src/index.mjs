import express from "express";
import cors from "cors";
import { users } from "./data/usersData.mjs";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
  console.log(response.send("Hello"));
});

app.post("/login", (request, response) => {
  const { email, password } = request.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return response.status(200).json({
      message: "Login successful",
      user: { name: user.name },
    });
  } else {
    return response.status(400).json({ message: "Invalid email or password" });
  }
});

app.post("/register", (request, response) => {
  const { email, password, name } = request.body;

  if (!email || !password || !name) {
    return response
      .status(400)
      .json({ message: "Please provide all required fields." });
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return response
      .status(400)
      .json({ message: "Email is already registered." });
  }

  const newUser = { email, name, password };
  users.push(newUser);
  console.log("NewUser:", newUser);
  console.log("MY LIST OF USERS:", users);
  return response.status(200).json({ message: "Registration successful" });
});

app.get("/registered/users", (request, response) => {
  console.log(response.send(users));
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
