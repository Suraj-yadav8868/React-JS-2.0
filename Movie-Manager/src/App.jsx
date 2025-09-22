import React, { useState, useEffect } from "react";
import AppNavbar from "./components/Navbar.jsx";
import AddMovie from "./components/AddMovie.jsx";
import MovieList from "./components/MovieList.jsx";
import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  // Load user + movies from storage on mount
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);

    const user = sessionStorage.getItem("currentUser") || "";
    setCurrentUser(user);
  }, []);

  // Save movies to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  // Add Movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    alert("✅ Movie Added!");
  };

  // Delete Movie
  const deleteMovie = (index) => {
    const updated = movies.filter((_, i) => i !== index);
    setMovies(updated);
    alert("🗑️ Movie Deleted!");
  };

  // Update Movie
  const updateMovie = (index, updatedMovie) => {
    const updated = movies.map((movie, i) => (i === index ? updatedMovie : movie));
    setMovies(updated);
    alert("✏️ Movie Updated!");
  };

  // If no user → show Login page
  if (!currentUser) {
    return <Login setCurrentUser={setCurrentUser} />;
  }

  return (
    <div>
      <AppNavbar />
      <div className="container mt-4">
        {/* Current User + Logout Button */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>👤 Welcome, {currentUser}</h5>
          <button
            className="btn btn-danger"
            onClick={() => {
              sessionStorage.removeItem("currentUser");
              setCurrentUser("");
            }}
          >
            Logout
          </button>
        </div>

        <AddMovie addMovie={addMovie} />
        <MovieList movies={movies} deleteMovie={deleteMovie} updateMovie={updateMovie} />
      </div>
    </div>
  );
}
