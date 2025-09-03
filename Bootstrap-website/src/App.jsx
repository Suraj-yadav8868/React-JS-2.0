import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Album from "./Components/Album/Album";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Album/>
      <Footer/>
    </>
  );
}
