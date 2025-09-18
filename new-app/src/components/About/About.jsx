import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function About({ products, setCartList }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUser = () => {
    const str = localStorage.getItem("user") ?? "{}";
    const res = JSON.parse(str);
    setUser(res);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Welcome {user.email ? user.email : "Guest"}</h2>
          <p className="text-muted">Browse our latest products below</p>
        </div>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/cart")}
        >
          🛒 View Cart
        </button>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {products.map((product, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{
                  height: "180px",
                  objectFit: "contain",
                  background: "#f8f9fa",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="fw-bold text-truncate">{product.title}</h6>
                <p className="text-success fw-semibold mb-1">${product.price}</p>
                <p className="text-muted small">{product.category}</p>

                <div className="mt-auto d-flex gap-2">
                  <button
                    className="btn btn-sm btn-outline-info flex-fill"
                    onClick={() => navigate("/product", { state: product })}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-sm btn-primary flex-fill"
                    onClick={() => {
                      setCartList((prev) => [...prev, product]);
                      navigate("/cart");
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
