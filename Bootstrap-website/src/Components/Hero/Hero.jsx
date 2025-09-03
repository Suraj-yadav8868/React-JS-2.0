import React, { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1470&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [headlines, setHeadlines] = useState([]);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  // Carousel for images and headlines (sync)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length, headlines.length]);

  // Fetch top headlines
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=80e4704501d94bb1b0b25985180dd6c3`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        if (data.status === "ok" && data.articles.length > 0) {
          setHeadlines(data.articles.map((article) => article.title));
        } else {
          setHeadlines(["No news available right now."]);
        }
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setHeadlines(["Failed to fetch top news."]);
      });
  }, []);

  return (
    <section
      className="hero-section text-center"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="overlay">
        <div className="container py-5">
          <h1 className="fw-bold">Top News</h1>
          <p className="lead headline-bold">
            {headlines.length > 0 ? headlines[headlineIndex] : "Loading top news..."}
          </p>
          <div className="main mt-4">
            <a
              href="https://timesofindia.indiatimes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondry me-2"
            >
              Times of India
            </a>
            <a
              href="https://www.aajtak.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              Aaj Tak News
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
