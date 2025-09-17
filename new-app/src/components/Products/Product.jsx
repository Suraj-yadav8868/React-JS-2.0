import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Product() {
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
    <div className="container mt-5">
      <div className="card p-4">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "200px", objectFit: "cover" }}
          className="mb-3"
        />
        <h2>{product.title}</h2>
        <h4 className="text-success">Price: ${product.price}</h4>
        <p className="text-muted">Category: {product.category}</p>
        <p>{product.description}</p>

        <button
          className="btn btn-secondary mt-3"
          onClick={() => navigate(-1)} // pichle page pe wapas
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
