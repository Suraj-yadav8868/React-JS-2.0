import React from "react";
import { Link } from "react-router-dom";

import { Routes, Route, Link } from "react-router-dom";

function Rules() {
  return (
    <div>
      <h2>📜 Core Rules</h2>
      <ul>
        <li>1. Morning 5 baje uthna</li>
        <li>2. 1 hour daily workout + cold bath</li>
        <li>3. 2 hours daily study</li>
        <li>4. 10 pages book (human + psychology)</li>
        <li>5. 5 litre paani daily</li>
        <li>6. 10k steps before sleep</li>
        <li>7. No junk food (100 days)</li>
        <li>8. No emotional relation, focus on brahmacharya</li>
        <li>9. Daily activity note down</li>
        <li>10. Next day plan likhna</li>
      </ul>
    </div>
  );
}

function Notes() {
  return <h2>📝 Notes Page (daily likhne ke liye)</h2>;
}
function Profile() {
  return <h2>👤 Profile Page (apne details change karne ke liye)</h2>;
}
function Progress() {
  return <h2>📊 Progress Tracker</h2>;
}

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">Rules</Link> |{" "}
        <Link to="/notes">Notes</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/progress">Progress</Link>
      </nav>

      {/* Routes */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Rules />}
