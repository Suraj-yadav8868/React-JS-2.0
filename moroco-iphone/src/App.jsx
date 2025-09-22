import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar/AppNavbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import products from "./data/products";

export default function App() {
  // 🛒 LocalStorage se cart load karo
  const [cartList, setCartList] = useState(() => {
    const savedCart = localStorage.getItem("cartList");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🔄 Cart update hote hi localStorage me save karo
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <>
      <AppNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About products={products} setCartList={setCartList} />}
          />
          <Route
            path="/product"
            element={<Product setCartList={setCartList} />}
          />
          <Route
            path="/cart"
            element={<Cart cartList={cartList} setCartList={setCartList} />}
          />
        </Routes>
      </div>
    </>
  );
}
