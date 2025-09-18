import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function AppNavbar() {
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
          Moroco 🛒
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Nav Links */}
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/" className="text-white fw-semibold mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white fw-semibold mx-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/product" className="text-white fw-semibold mx-2">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="text-white fw-semibold mx-2">
  🛒 Cart
</Nav.Link>
            {/* Action Buttons */}
            <div className="d-flex ms-lg-3 mt-3 mt-lg-0 gap-2">
             <button className="btn btn-light btn-sm fw-bold px-3">
  👤 Login
</button>
              <button className="btn btn-outline-light btn-sm fw-bold px-3">
                Sign Up
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
