import React, { useEffect, useState } from 'react';
import "./Navbar.css";

export default function Navbar() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Suraj-yadav8868")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching GitHub profile:", err));
  }, []);

  return (
    <div className="nav-bar">
      {/* Agar profile load ho jaye to dynamic name show karega */}
      <h2 className="logo">
        {profile ? profile.name || "SURYA...INFO" : "Loading..."}
      </h2>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experiance">Experiance</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
