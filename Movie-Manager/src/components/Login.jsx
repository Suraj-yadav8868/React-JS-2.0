import React, { useState } from "react";

export default function Login({ setCurrentUser }) {
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("⚠️ Please enter your name!");
      return;
    }
    sessionStorage.setItem("currentUser", name);
    setCurrentUser(name);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-dark">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">🎬 Favorite Movies Manager</h3>
        <p className="text-center text-muted">Login to continue</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
