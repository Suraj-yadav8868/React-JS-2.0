import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar/AppNavbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import products from "./data/products"; // ✅ products data

export default function App() {
  const [cartList, setCartList] = useState([]); // 🛒 Cart state

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
          <Route path="/product" element={<Product />} />
          <Route
            path="/cart"
            element={<Cart cartList={cartList} setCartList={setCartList} />}
          />
        </Routes>
      </div>
    </>
  );
}


// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import AppNavbar from "./components/Navbar/AppNavbar"; 
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Product from "./components/data/Products";
// import Cart from "./components/Cart/Cart";
// import products from "./components/data/products"; // ✅ products data

// export default function App() {
//   const [cartList, setCartList] = useState([]); // 🛒 Cart state

//   return (
//     <>
//       {/* Navbar */}
//       <AppNavbar />

//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route 
//             path="/about" 
//             element={<About products={products} setCartList={setCartList} />} 
//           />
//           <Route path="/product" element={<Product />} />
//           <Route 
//             path="/cart" 
//             element={<Cart cartList={cartList} setCartList={setCartList} />} 
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }
