import React, { useState } from "react";

// Random movie posters (unsplash picsum for demo)
const randomImages = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
];

export default function MovieList({ movies, deleteMovie, updateMovie }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editMovie, setEditMovie] = useState({ title: "", genre: "", rating: "" });

  const handleEdit = (index, movie) => {
    setEditIndex(index);
    setEditMovie(movie);
  };

  const handleUpdate = (index) => {
    updateMovie(index, editMovie);
    setEditIndex(null);
  };

  return (
    <div>
      <h4>🎥 Movie List</h4>
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="row">
          {movies.map((movie, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={randomImages[index % randomImages.length]} 
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        className="form-control mb-2"
                        value={editMovie.title}
                        onChange={(e) => setEditMovie({ ...editMovie, title: e.target.value })}
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        value={editMovie.genre}
                        onChange={(e) => setEditMovie({ ...editMovie, genre: e.target.value })}
                      />
                      <input
                        type="number"
                        className="form-control mb-2"
                        value={editMovie.rating}
                        onChange={(e) => setEditMovie({ ...editMovie, rating: e.target.value })}
                      />
                      <button className="btn btn-success btn-sm me-2" onClick={() => handleUpdate(index)}>
                        ✅ Save
                      </button>
                      <button className="btn btn-secondary btn-sm" onClick={() => setEditIndex(null)}>
                        ❌ Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">
                        Genre: {movie.genre} <br />
                        ⭐ {movie.rating}/10
                      </p>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index, movie)}>
                        ✏️ Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteMovie(index)}>
                        🗑️ Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
