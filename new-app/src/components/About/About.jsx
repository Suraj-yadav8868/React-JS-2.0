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
    <div>
      <h1>{user.email}</h1>
      <h2>About Page - Products</h2>

      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card p-3">
              <img
                src={product.image}
                alt={product.title}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <h5>{product.title}</h5>
              <p>${product.price}</p>
              <p className="text-muted">{product.category}</p>

              <button
                className="btn btn-info me-2"
                onClick={() => navigate("/product", { state: product })}
              >
                View
              </button>

              <button
                className="btn btn-primary"
                onClick={() => {
                  setCartList((prev) => [...prev, product]); // ✅ add to cart
                  navigate("/cart"); // ✅ redirect to cart
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
