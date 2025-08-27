import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Suraj-yadav8868")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching GitHub profile:", err));
  }, []);

  return (
    <div className="home-section" id="home">
      {profile ? (
        <div className="home-content">
          <img
            src={profile.avatar_url}
            alt="Profile"
            className="profile-image"
          />
          <h1 className="profile-name">Hi, I'm {profile.name}</h1>
          <p className="profile-bio">{profile.bio}</p>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Visit My GitHub
          </a>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
