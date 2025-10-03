import React, { useState, useEffect } from "react";

export default function Progress() {
  const [daysCompleted, setDaysCompleted] = useState(0);

  // Load from localStorage
  useEffect(() => {
    const savedDays = localStorage.getItem("daysCompleted");
    if (savedDays) setDaysCompleted(parseInt(savedDays));
  }, []);

  // Save to localStorage
  const updateDays = (newValue) => {
    if (newValue >= 0 && newValue <= 100) {
      setDaysCompleted(newValue);
      localStorage.setItem("daysCompleted", newValue);
    }
  };

  return (
    <div className="container mt-4">
      <h2>📊 Progress Tracker</h2>
      <p><b>Target:</b> 100 Days Winter Arc Challenge</p>
      <p><b>Completed:</b> {daysCompleted} days ✅</p>
      <p><b>Remaining:</b> {100 - daysCompleted} days ⏳</p>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-success" onClick={() => updateDays(daysCompleted + 1)}>
          ➕ Add Day
        </button>
        <button className="btn btn-danger" onClick={() => updateDays(daysCompleted - 1)}>
          ➖ Remove Day
        </button>
        <button className="btn btn-warning" onClick={() => updateDays(0)}>
          🔄 Reset
        </button>
      </div>

      {/* Simple Progress Bar */}
      <div className="progress mt-4" style={{ height: "25px" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${(daysCompleted / 100) * 100}%` }}
        >
          {daysCompleted}%
        </div>
      </div>
    </div>
  );
}
