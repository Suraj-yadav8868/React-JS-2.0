// App.jsx
import React from "react";
import AddMovie from "./components/AddMovie.jsx";
import MovieList from "./components/MovieList.jsx";

export default function App() {
  return (
    <div>
      <h1>🎬 Favorite Movies Manager</h1>
      <AddMovie />
      <MovieList movies={[]} />
    </div>
  );
}
