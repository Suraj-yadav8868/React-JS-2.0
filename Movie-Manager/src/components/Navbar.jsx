import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 w-100">
      <Container className="flex-column text-center">
        <Navbar.Brand href="#" className="mx-auto fs-3 fw-bold">
          🎬 Favorite Movies Manager
        </Navbar.Brand>
        <p className="text-light mb-0">⭐ Manage your favorite movies with ease ⭐</p>
      </Container>
    </Navbar>
  );
}
