import express from "express";
import cors from "cors";
import movies from "./routes/movies.mjs";
import login from "./routes/login.mjs";
import register from "./routes/register.mjs";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use(movies);
app.use(login);
app.use(register);

// I have no env so I'm using callback 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
