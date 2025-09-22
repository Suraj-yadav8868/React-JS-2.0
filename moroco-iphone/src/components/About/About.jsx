import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function About({ products = [], setCartList }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const str = localStorage.getItem("user") ?? "{}";
    setUser(JSON.parse(str));
  }, []);

  return (
    <div className="about-page-wrapper" style={{ minHeight: "100vh" }}>
      <div className="about-header" style={{ padding: "36px 24px 8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>
              Welcome {user.email ? user.email : "Guest"} 
            </h2>
            <p style={{ margin: "6px 0 0", color: "#666" }}>
              Explore curated picks — clean layout, faster shopping.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button
              // onClick={() => navigate("/cart")}
              style={{
                background: "linear-gradient(135deg,#667eea,#764ba2)",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: 999,
                fontWeight: 700,
                boxShadow: "0 6px 18px rgba(102,126,234,0.18)",
                cursor: "pointer",
              }}
            >
              🛒 View Cart
            </button>

          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding: "18px 24px 56px" }}>
        <div
          className="product-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {products.map((product, i) => (
            <div
              key={i}
              className="product-card"
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                background: "#ffffff",
                boxShadow: "0 6px 20px rgba(16,24,40,0.06)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(16,24,40,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(16,24,40,0.06)";
              }}
            >
              {/* Ribbon + Price badge */}
              <div style={{ position: "absolute", top: 12, left: 12, zIndex: 3 }}>
                <div style={{
                  background: "linear-gradient(135deg,#ff9a9e,#fad0c4)",
                  color: "#222",
                  padding: "6px 10px",
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 12,
                }}>
                  NEW
                </div>
              </div>
              <div style={{ position: "absolute", top: 12, right: 12, zIndex: 3 }}>
                <div style={{
                  background: "#fff",
                  color: "#1f3c88",
                  padding: "6px 10px",
                  borderRadius: 12,
                  fontWeight: 800,
                  fontSize: 13,
                  boxShadow: "0 6px 14px rgba(0,0,0,0.06)"
                }}>
                  ${product.price}
                </div>
              </div>

              {/* Image area */}
              <div style={{
                padding: 18,
                background: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 170,
              }}>
                <img
                  src={product.image ?? product.img}
                  alt={product.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 140,
                    objectFit: "contain",
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>

              {/* Body */}
              <div style={{ padding: "14px 16px 18px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: 15, color: "#111", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {product.title}
                    </div>
                    <div style={{ marginTop: 6, color: "#6b7280", fontSize: 13 }}>
                      {product.category ?? "General"}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 13, color: "#10b981", fontWeight: 700 }}>
                      ★ {product.rating?.rate ?? "4.5"}
                    </div>
                    <div style={{ fontSize: 11, color: "#9ca3af" }}>
                      ({product.rating?.count ?? 120})
                    </div>
                  </div>
                </div>

                {/* Short description reveal on hover */}
                <div className="desc" style={{ color: "#374151", fontSize: 13, lineHeight: 1.25, opacity: 0.95 }}>
                  {product.description ? product.description.slice(0, 110) + (product.description.length > 110 ? "…" : "") : "High quality product, reliable choice."}
                </div>

                {/* Actions */}
                <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
                  <button
                    onClick={() => navigate("/product", { state: product })}
                    style={{
                      flex: 1,
                      padding: "10px 12px",
                      borderRadius: 999,
                      border: "1px solid #e6e6e6",
                      background: "transparent",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>

                  <button
                    onClick={() => {
                      setCartList((prev) => [...prev, product]);
                      navigate("/cart");
                    }}
                    style={{
                      flex: 1,
                      padding: "10px 12px",
                      borderRadius: 999,
                      border: "none",
                      background: "linear-gradient(135deg,#667eea,#764ba2)",
                      color: "#fff",
                      fontWeight: 800,
                      cursor: "pointer",
                      boxShadow: "0 8px 22px rgba(102,126,234,0.16)"
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* If no products */}
        {products.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "#6b7280" }}>
            No products to show.
          </div>
        )}
      </div>

      {/* Local styles (keeps file self-contained) */}
      <style>{`
        /* small screens tweak */
        @media (max-width: 576px) {
          .about-header h2 { font-size: 20px !important; }
        }

        /* subtle image pop on parent hover */
        .product-card:hover img {
          transform: scale(1.06);
        }

        /* description slightly brighter on hover */
        .product-card:hover .desc {
          color: #111827;
        }
      `}</style>
    </div>
  );
}
