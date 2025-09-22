import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function AppNavbar() {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
      variant="dark"
      className="shadow-sm"
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3 text-white"
          style={{ letterSpacing: "1px" }}
        >
          Moroco <span style={{ fontSize: "1.5rem" }}>🛍️</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Nav Links */}
          <Nav className="ms-auto align-items-lg-center">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/product", label: "Products" },
              { to: "/cart", label: "🛒 Cart" },
            ].map((link, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={link.to}
                className={`fw-semibold mx-2 nav-link-custom ${
                  location.pathname === link.to ? "active-link" : ""
                }`}
              >
                {link.label}
              </Nav.Link>
            ))}

            {/* Action Buttons */}
            <div className="d-flex ms-lg-3 mt-3 mt-lg-0 gap-2">
              <button className="btn-login">👤 Login</button>
              <button className="btn-signup">Sign Up</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Extra CSS */}
      <style>{`
        .nav-link-custom {
          color: #ffffff !important;
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-link-custom:hover {
          color: #ffde59 !important;
        }
        .nav-link-custom::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background: #ffde59;
          transition: width 0.3s ease;
        }
        .nav-link-custom:hover::after {
          width: 60%;
        }
        .active-link {
          color: #ffde59 !important;
          font-weight: 700;
        }
        .btn-login {
          background: #fff;
          color: #764ba2;
          font-weight: 600;
          border-radius: 25px;
          padding: 5px 15px;
          border: none;
          transition: all 0.3s ease;
        }
        .btn-login:hover {
          background: #ffde59;
          color: #000;
          transform: translateY(-2px);
        }
        .btn-signup {
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          color: #000;
          font-weight: 600;
          border-radius: 25px;
          padding: 5px 15px;
          border: none;
          transition: all 0.3s ease;
        }
        .btn-signup:hover {
          background: linear-gradient(135deg, #fad0c4, #ff9a9e);
          transform: translateY(-2px);
        }
      `}</style>
    </Navbar>
  );
}
