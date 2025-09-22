import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const products = [
    {
      img: "https://images.unsplash.com/photo-1730037028064-2e5ec3dc7bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      title: "iPhone 16 Pro Max",
      desc: "Experience next-level performance with the A18 chip and Dynamic Island.",
      price: 1299,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      title: "Nike Air Max",
      desc: "Stylish and comfortable sneakers for everyday wear.",
      price: 199,
    },
    {
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
      title: "MacBook Pro",
      desc: "Powerful laptop with M3 chip designed for creators and professionals.",
      price: 2499,
    },
    {
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60",
      title: "Sony WH-1000XM5",
      desc: "Industry-leading noise cancellation wireless headphones.",
      price: 399,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
     <header
  className="d-flex align-items-center justify-content-center text-center text-white"
  style={{
    minHeight: "100vh", // full screen cover
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1600&auto=format&fit=crop&q=60')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // background scroll hone pe bhi fixed rahega
    position: "relative",
    width: "100%",
    margin: 0,
    padding: 0,
  }}
>
  <div className="container-fluid position-relative">
    {/* Heading */}
    <h1 className="display-2 fw-bold mb-3 text-shadow">
      Welcome to <span style={{ color: "#667eea" }}>Moroco Shop</span>
    </h1>

    {/* Tagline */}
    <p className="lead mb-5" style={{ fontSize: "1.3rem", opacity: 0.9 }}>
      Discover exclusive deals & premium shopping experience.
    </p>

    {/* Buttons */}
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      <button
        className="btn btn-lg px-5 py-2 shadow rounded-pill fw-semibold"
        onClick={() => navigate("/about")}
        style={{
          transition: "0.3s",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "white",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        🚀 Browse Products
      </button>
      <button
        className="btn btn-outline-light btn-lg px-5 py-2 rounded-pill fw-semibold"
        onClick={() => navigate("/cart")}
        style={{
          transition: "0.3s",
        }}
        onMouseOver={(e) => {
          e.target.style.background = "white";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "white";
        }}
      >
        🛒 View Cart
      </button>
    </div>
  </div>
</header>



      {/* Featured Section */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">✨ Featured Products ✨</h2>
        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <div
                className="card h-100 shadow-lg border-0 rounded-4"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  overflow: "hidden",
                  minHeight: "420px",
                }}
              >
                {/* Image Box */}
                <div
                  style={{
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title fw-bold">{product.title}</h5>
                  <p className="text-muted small mb-2">{product.desc}</p>
                  <p className="fw-bold text-primary mb-3">
                    ${product.price}
                  </p>
                <button
  className="btn-custom mt-auto"
  onClick={() => navigate("/about")}
>
  View Details
</button>

<style>{`
  .btn-custom {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: #fff;
    font-weight: 600;
    padding: 8px 20px;
    border: none;
    border-radius: 25px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .btn-custom:hover {
    background: linear-gradient(135deg, #764ba2, #667eea);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 18px rgba(0,0,0,0.3);
  }

  .btn-custom:active {
    transform: scale(0.95);
  }
`}</style>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
   <footer
  className="text-white pt-5 pb-3 mt-5"
  style={{
    background: "linear-gradient(135deg, #764ba2, #667eea 100%)",
  }}
>
  <div className="container">
    <div className="row text-center text-md-start">
      {/* Brand / About */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold mb-3">Moroco Shop</h5>
        <p className="small opacity-75">
          Your one-stop shop for the best deals and premium products.
          Shop smart, shop fast 🚀
        </p>
      </div>

      {/* Quick Links */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-semibold mb-3">Quick Links</h6>
        <ul className="list-unstyled">
          <li><a href="/" className="text-white text-decoration-none small">Home</a></li>
          <li><a href="/about" className="text-white text-decoration-none small">About</a></li>
          <li><a href="/cart" className="text-white text-decoration-none small">Cart</a></li>
          <li><a href="/contact" className="text-white text-decoration-none small">Contact</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-semibold mb-3">Contact</h6>
        <p className="small mb-1">📍 New Delhi, India</p>
        <p className="small mb-1">📞 +91 98765 43210</p>
        <p className="small mb-0">✉ support@morocoshop.com</p>
      </div>

      {/* Social Media */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-semibold mb-3">Follow Us</h6>
        <div className="d-flex justify-content-center justify-content-md-start gap-3">
          <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white fs-5"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    <hr className="border-light" />

    {/* Bottom Line */}
    <div className="text-center">
      <p className="mb-0 small opacity-75">
        © {new Date().getFullYear()} <strong>Moroco Shop</strong> — All Rights Reserved
      </p>
    </div>
  </div>
</footer>


      {/* Hover Effect CSS */}
      <style>{`
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }
        .card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
