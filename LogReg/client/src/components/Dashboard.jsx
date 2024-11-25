import React, { useState, useEffect } from "react";

const Dashboard = ({ loggedUsername, loggedUsernameEmail, onLogout }) => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [viewDate, setViewDate] = useState("");
  const [rating, setRating] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchMovies();
  }, [movies]);

  const fetchMovies = () => {
    fetch(`http://localhost:5000/movies?email=${loggedUsernameEmail}`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => setError("Failed to fetch movies"));
  };

  const addMovie = (e) => {
    e.preventDefault();
    if (!title || !viewDate || !rating) {
      setError("All fields are required!");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    setError("");

    const newMovie = { title, viewDate, rating, email: loggedUsernameEmail };

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Movie added successfully") {
          setMovies([...movies, newMovie]);
          setSuccess("Movie added successfully!");
          setTimeout(() => {
            setSuccess("");
          }, 1000);
          setTitle("");
          setViewDate("");
          setRating(1);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        setError("Failed to add movie");
      });
  };

  const deleteMovie = (movieId) => {
    if (!movieId) {
      setError("Movie id is missing");
      return;
    }

    setMovies(movies.filter((movie) => movie.id !== movieId));

    fetch(`http://localhost:5000/movies/${movieId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Movie deleted successfully") {
          setSuccess("Movie deleted successfully");
          setTimeout(() => {
            setSuccess("");
          }, 1000);
        } else {
          setError(data.message);
        }
      })
      .catch((error) => {
        setError("Error deleting movie");
      });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6">
        <div className="text-xl mb-8">
          <h2>Hi, {loggedUsername}!</h2>
        </div>
        <div className="absolute bottom-6 left-6">
          <button
            onClick={onLogout}
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <div className="mb-8">
          <h2 className="text-4xl font-semibold mb-4 p-8 pb-0">Add a Movie</h2>
          {error && <p className="text-red-500 px-8 py-4">{error}</p>}
          {success && <p className="text-green-500 mb-4 p-8 pb-0">{success}</p>}

          <form
            onSubmit={addMovie}
            className="border-b-black border-b border-solid px-8 pb-5"
          >
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-600">
                Movie Title
              </label>
              <input
                type="text"
                id="title"
                className="w-60 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter movie title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="viewDate" className="block text-gray-600">
                View Date
              </label>
              <input
                type="date"
                id="viewDate"
                className="w-60 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={viewDate}
                onChange={(e) => setViewDate(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="rating" className="block text-gray-600">
                Rating (1-5)
              </label>
              <input
                type="number"
                id="rating"
                min="1"
                max="5"
                className="w-60 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-60 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Movie
            </button>
          </form>
        </div>

        {/* Movies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <h3 className="text-xl font-semibold">{movie.title}</h3>
              <p className="text-gray-600">Watched on: {movie.viewDate}</p>
              <p className="text-yellow-500">Rating: {movie.rating} / 5</p>
              <button
                onClick={() => deleteMovie(movie.id)}
                className="absolute bottom-2 right-2 px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
