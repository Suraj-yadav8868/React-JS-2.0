import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<h2 className="text-center text-danger">404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </>
  );
}
