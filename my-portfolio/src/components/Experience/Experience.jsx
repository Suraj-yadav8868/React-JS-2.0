import React, { useEffect, useState } from "react";
import "./Experience.css";

export default function Experience() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Suraj-yadav8868/repos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repos:", err);
        setError("Unable to fetch repositories. Check your username or network.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="experience-section" id="experience">
      <h1 className="experience-title">My GitHub Projects</h1>
      <div className="repos-container">
        {loading ? (
          <p style={{ color: "gray" }}>Fetching your repositories...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : repos.length > 0 ? (
          repos.slice(0, 6).map((repo) => (
            <div key={repo.id} className="repo-card">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description provided."}</p>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View Repository
              </a>
            </div>
          ))
        ) : (
          <p>No repositories found for this username.</p>
        )}
      </div>
    </div>
  );
}
