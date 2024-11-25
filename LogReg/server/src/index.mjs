import express from "express";
import cors from "cors";
import { users, movies } from "./data/data.mjs";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
  response.send("Hello");
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
  return response.status(200).json({ message: "Registration successful" });
});

app.get("/registered/users", (request, response) => {
  response.send(users);
});

app.get("/movies", (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const userMovies = movies.filter((movie) => movie.email === email);
  res.status(200).json(userMovies);
});

app.post("/movies", (req, res) => {
  const { title, viewDate, rating, email } = req.body;

  if (!title || !viewDate || !rating) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const lastMovieId =
    movies.length > 0 ? Math.max(...movies.map((movie) => movie.id)) : 0;
  const newId = lastMovieId + 1;

  const newMovie = {
    id: newId,
    title,
    viewDate,
    rating,
    email,
  };

  movies.push(newMovie);

  return res.status(200).json({
    message: "Movie added successfully",
    movies: movies,
  });
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;

  const movieId = parseInt(id, 10);

  if (isNaN(movieId)) {
    return res.status(400).json({ message: "Invalid movie ID" });
  }

  const movie = movies.find((movie) => movie.id === movieId);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  return res.status(200).json(movie);
});

app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;

  const movieIndex = movies.findIndex((movie) => movie.id === parseInt(id, 10));

  if (movieIndex !== -1) {
    const deletedMovie = movies[movieIndex];
    movies.splice(movieIndex, 1);
    return res.status(200).json({
      message: "Movie deleted successfully",
      movie: deletedMovie,
    });
  }

  return res.status(400).json({ message: "Movie not found" });
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
