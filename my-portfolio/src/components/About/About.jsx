import React, { useEffect, useState } from 'react';
import "./About.css";

export default function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Suraj-yadav8868")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching GitHub profile:", err));
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="discription">
        <h1>Hi I m {profile ? profile.name : "Loading..."}</h1>
        <h3>{profile ? "MERN Stack Developer" : ""}</h3>
        <p>
          {profile
            ? `Hello, I'm ${profile.name}. ${profile.bio || "Passionate about building and developing modern web applications."}`
            : "Loading profile details..."}
        </p>

        <div className="buttons">
          <button className="btn primary-btn">Hire Me</button>
          <a href={profile ? profile.html_url : "#"} target="_blank" rel="noreferrer">
            <button className="btn secondary-btn">View Projects</button>
          </a>
        </div>
      </div>

      <div className="profile-img">
        <div className="img-box">
          <img
            src={profile ? profile.avatar_url : "https://via.placeholder.com/300"}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
