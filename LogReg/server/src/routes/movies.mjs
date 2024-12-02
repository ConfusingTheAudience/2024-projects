import { Router } from "express";
import { movies } from "../data/data.mjs";

const router = Router();

router.get("/movies", (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const userMovies = movies.filter((movie) => movie.email === email);
  res.status(200).json(userMovies);
});

router.post("/movies", (req, res) => {
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

// server check purposes
router.get("/movies/:id", (req, res) => {
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

router.delete("/movies/:id", (req, res) => {
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

export default router;