import React from "react";

const rules = [
  "Morning 5 baje uthna",
  "1 hour daily workout + Cold Bath",
  "2 hours daily study (Goals)",
  "10 pages Human & Psychology related book",
  "5 liters water daily",
  "10,000 steps before bed",
  "No junk food for 100 days",
  "No emotional relation with girls (Brahmcharya focus)",
  "Note down today activity & next day plan",
];

export default function Rules() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">📜 Core Rules</h2>
      <ul className="list-group">
        {rules.map((rule, i) => (
          <li key={i} className="list-group-item">{rule}</li>
        ))}
      </ul>
    </div>
  );
}
