import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Product({ setCartList }) {
  const location = useLocation();
  const navigate = useNavigate();

  // product data jo About.jsx se aaya
  const product = location.state;

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h2>No product selected</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div
        className="card shadow-lg border-0 rounded-4 mx-auto"
        style={{ maxWidth: "800px", padding: "30px" }}
      >
        {/* Image */}
        <div className="text-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: "100%",
              height: "350px",
              objectFit: "contain",
              borderRadius: "15px",
              background: "#f8f9fa",
              padding: "15px",
            }}
          />
        </div>

        {/* Details */}
        <h2 className="fw-bold mb-3">{product.title}</h2>
        <h4 className="text-success fw-semibold mb-3">
          Price: ${product.price}
        </h4>
        <p className="text-muted mb-2">Category: {product.category}</p>
        <p style={{ lineHeight: "1.6" }}>{product.description}</p>

        {/* Buttons */}
        <div className="d-flex gap-3 mt-4">
          <button
            className="btn btn-lg flex-fill"
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              borderRadius: "25px",
              fontWeight: "600",
            }}
            onClick={() => {
              setCartList((prev) => [...prev, product]);
              alert("Added to Cart 🛒");
            }}
          >
            Add to Cart
          </button>

          <button
            className="btn btn-outline-dark btn-lg flex-fill rounded-pill fw-semibold"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
