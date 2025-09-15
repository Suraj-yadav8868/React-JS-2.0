import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Home/Home"; 
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";

export default function App() {
  return (
    <>
      <AppNavbar />
      <div className="container mt-4">
         <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}
