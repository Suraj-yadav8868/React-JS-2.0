import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const productImages = [
    "https://images.unsplash.com/photo-1730037028064-2e5ec3dc7bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTYlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D", // Phone
    "https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww", // Shoes
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60", // Laptop
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60"  // Headphones
  ];

  return (
    <div>
      {/* Navbar */}

      {/* Hero Section */}
      <header
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1600&auto=format&fit=crop&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        ></div>

        <div className="container position-relative">
          <h1 className="display-3 fw-bold mb-3">Welcome to Moroco Shop</h1>
          <p className="lead mb-4">
            Discover the best deals, explore top categories, and shop smart with
            us.
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <button
              className="btn btn-light btn-lg px-4"
              onClick={() => navigate("/about")}
            >
              Browse Products
            </button>
            <button
              className="btn btn-outline-light btn-lg px-4"
              onClick={() => navigate("/cart")}
            >
              View Cart
            </button>
          </div>
        </div>
      </header>

      {/* Featured Section */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-4">Featured Products</h2>
        <div className="row g-4">
          {productImages.map((img, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Product {index + 1}</h5>
                  <p className="card-text text-muted">
                    $ {((index + 1) * 10).toFixed(2)}
                  </p>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate("/about")}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center text-white py-3 mt-5"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <p className="mb-0 small">
            © {new Date().getFullYear()} Moroco Shop — All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
