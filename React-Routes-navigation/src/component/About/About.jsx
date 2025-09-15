import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css";
import AboutImage from "../../assets/about.jpg"; // apni image ka path lagaye

export default function About() {
  return (
    <section className="about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src={AboutImage}
              alt="About Us"
              fluid
              rounded
              className="shadow-lg about-image"
            />
          </Col>

          {/* Text Section */}
          <Col md={6}>
            <h2 className="fw-bold mb-3">About <span className="text-primary">JAKIRO</span></h2>
            <p className="text-muted mb-4">
              Welcome to <b>JAKIRO</b> — your one-stop destination for premium
              clothing, accessories, and lifestyle products.  
              We focus on delivering quality, comfort, and unique style that
              defines your personality.  
            </p>
            <p className="text-muted">
              Our mission is simple: to bring you the best fashion trends with
              affordability in mind. Whether it’s casual, party, or formal wear,
              <b> JAKIRO</b> has you covered.  
              Join us and be a part of the new wave of fashion lovers!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
