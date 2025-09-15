import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo Left */}
        <Navbar.Brand as={Link} to="/">Moroco</Navbar.Brand>

        {/* Links Right */}
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/product">Product</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <button className="btn btn-primary">Login</button>
        </Nav>
      </Container>
    </Navbar>
  );
}
