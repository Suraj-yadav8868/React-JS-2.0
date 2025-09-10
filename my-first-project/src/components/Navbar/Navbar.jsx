import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="border-bottom">
      <Container className="d-flex flex-column">
        {/* Centered logo */}
        <div className="text-center py-3">
          <Navbar.Brand as={Link} to="/">
            <h2 className="fw-bold">JAKIRO STORE</h2>
          </Navbar.Brand>
        </div>

        {/* Navigation links */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center mb-3">
          <Nav className="text-center">
            {/* MEN dropdown */}
            <NavDropdown title="MEN" id="men-nav-dropdown">
              <NavDropdown.Item href="https://www.google.com/search?q=official+shirts" target="_blank" rel="noopener noreferrer">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/search?q=official+t-shirts" target="_blank" rel="noopener noreferrer">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/search?q=official+jeans" target="_blank" rel="noopener noreferrer">Jeans</NavDropdown.Item>
            </NavDropdown>

            {/* BLAZERS dropdown */}
            <NavDropdown title="BLAZERS" id="blazers-nav-dropdown">
              <NavDropdown.Item href="https://www.google.com/search?q=casual+blazers" target="_blank" rel="noopener noreferrer">Casual</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/search?q=formal+blazers" target="_blank" rel="noopener noreferrer">Formal</NavDropdown.Item>
            </NavDropdown>

            {/* JACKETS dropdown */}
            <NavDropdown title="JACKETS" id="jackets-nav-dropdown">
              <NavDropdown.Item href="https://www.google.com/search?q=leather+jackets" target="_blank" rel="noopener noreferrer">Leather</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/search?q=denim+jackets" target="_blank" rel="noopener noreferrer">Denim</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/search?q=winter+jackets" target="_blank" rel="noopener noreferrer">Winter</NavDropdown.Item>
            </NavDropdown>

            {/* BRANDS dropdown */}
            <NavDropdown title="BRANDS" id="brands-nav-dropdown">
              <NavDropdown.Item href="https://www.nike.com" target="_blank" rel="noopener noreferrer">Nike</NavDropdown.Item>
              <NavDropdown.Item href="https://www.adidas.com" target="_blank" rel="noopener noreferrer">Adidas</NavDropdown.Item>
              <NavDropdown.Item href="https://us.puma.com" target="_blank" rel="noopener noreferrer">Puma</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}