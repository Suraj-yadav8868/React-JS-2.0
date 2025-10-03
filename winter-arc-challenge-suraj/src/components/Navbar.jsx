import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand fw-bold" to="/">Winter Arc Challenge with Suraj</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/progress">Progress</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/">Rules</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/notes">Notes</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/progress">Progress</Link></li>
        </ul>
      </div>
    </nav>
  );
}
