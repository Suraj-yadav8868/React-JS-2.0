import React, { useState } from "react";

export default function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre || !rating) {
      alert("⚠️ Please fill all fields!");
      return;
    }
    const newMovie = { title, genre, rating };
    addMovie(newMovie);
    setTitle("");
    setGenre("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body mb-4">
      <h4>Add New Movie</h4>
      <input
        type="text"
        placeholder="Movie Title"
        className="form-control mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        className="form-control mb-2"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-10)"
        className="form-control mb-2"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        ➕ Add Movie
      </button>
    </form>
  );
}
