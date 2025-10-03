import React, { useState, useEffect } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("profileName");
    const savedPhoto = localStorage.getItem("profilePhoto");
    if (savedName) setName(savedName);
    if (savedPhoto) setPhoto(savedPhoto);
  }, []);

  const handleSave = () => {
    localStorage.setItem("profileName", name);
    localStorage.setItem("profilePhoto", photo);
    alert("Profile saved ✅");
  };

  return (
    <div className="container mt-4">
      <h2>👤 My Profile</h2>
      <input 
        className="form-control mb-2"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        className="form-control mb-2"
        type="text"
        placeholder="Enter photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleSave}>Save</button>

      <div className="mt-3">
        {photo && <img src={photo} alt="profile" width="100" />}
        <h4>{name}</h4>
      </div>
    </div>
  );
}
