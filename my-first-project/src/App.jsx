import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact"
import "./App.css";



export default function App() {
  return (
    <>
      <Navbar />
      <About/>
      <Menu/>
      <Contact/>
      <div className="container mt-4">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
