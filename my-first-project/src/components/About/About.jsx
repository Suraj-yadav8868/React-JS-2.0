import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css"; 

export default function About() {
  return (
    <div className="about-page">
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold mb-4">Our Story: More Than Just Fashion</h1>
            {/* <p className="lead">
              JAKIRO was born from a simple idea: to create a brand that celebrates individuality and style. We believe
              that what you wear is a powerful form of self-expression.
            </p> */}
            <p>
              We are committed to quality, sustainability, and ethical fashion. Every piece in our collection is crafted with care,
              using the finest materials to ensure comfort and durability. 
            </p>
          </Col>
          <Col md={6} className="text-center">
            {/* You can add an image here */}
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" // Replace with a relevant image URL from your assets
              alt="img not found" 
              className="img-fluid rounded-3 shadow-lg about-image"
            />
          </Col>
        </Row>
        
        <hr className="my-5" />

        <h2 className="text-center fw-bold mb-5">Our Core Values</h2>

        <Row className="text-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <i className="bi bi-star-fill text-warning display-4 mb-3"></i>
                <Card.Title>Quality First</Card.Title>
                <Card.Text>
                  We are obsessed with quality. From fabric selection to the final stitch, every detail is meticulously
                  crafted to meet our high standards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <i className="bi bi-leaf-fill text-success display-4 mb-3"></i>
                <Card.Title>Sustainable Practice</Card.Title>
                <Card.Text>
                  We are committed to a better future. Our materials are sourced responsibly, and we continuously
                  seek eco-friendly solutions to reduce our environmental footprint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <i className="bi bi-heart-fill text-danger display-4 mb-3"></i>
                <Card.Title>Ethical Manufacturing</Card.Title>
                <Card.Text>
                  Every garment is made with respect for the people who create it. We partner with manufacturers who
                  share our commitment to fair wages and safe working conditions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}