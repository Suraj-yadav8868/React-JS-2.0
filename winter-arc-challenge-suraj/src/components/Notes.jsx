import React, { useState, useEffect } from "react";

export default function Notes() {
  const [today, setToday] = useState("");
  const [tomorrow, setTomorrow] = useState("");

  useEffect(() => {
    setToday(localStorage.getItem("todayNote") || "");
    setTomorrow(localStorage.getItem("tomorrowNote") || "");
  }, []);

  const handleSave = () => {
    localStorage.setItem("todayNote", today);
    localStorage.setItem("tomorrowNote", tomorrow);
    alert("Notes saved ✅");
  };

  return (
    <div className="container mt-4">
      <h2>📝 Daily Notes</h2>
      <textarea 
        className="form-control mb-2"
        placeholder="Write today's activity..."
        value={today}
        onChange={(e) => setToday(e.target.value)}
      />
      <textarea 
        className="form-control mb-2"
        placeholder="Write tomorrow's plan..."
        value={tomorrow}
        onChange={(e) => setTomorrow(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSave}>Save Notes</button>
    </div>
  );
}
