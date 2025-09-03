import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section text-center">
      <div className="container py-5">
        <h1 className="fw-bold">Album Example</h1>
        <p className="lead">
          Something short and leading about the collection below — its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <div className="mt-4">
          <button className="btn btn-primary me-2">Main call to action</button>
          <button className="btn btn-secondary">Secondary action</button>
        </div>
      </div>
    </section>
  );
}
