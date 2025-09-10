import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import './Menu.css';

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // This API returns a large array, let's just take the first 9 products
        // to match our layout.
        const firstNineProducts = data.slice(0, 9);
        setProducts(firstNineProducts);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading products...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">
          <Alert.Heading>Oh snap! We got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <div className="product-page">
      <Container className="my-5">
        <h1 className="text-center fw-bold mb-5">Our Products</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <Card className="h-100 product-card shadow-sm">
                <div className="card-img-container">
                  <Card.Img 
                    variant="top" 
                    src={product.images[0]} // Accessing the first image in the array
                    alt={product.title} 
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="product-title">{product.title}</Card.Title>
                  <Card.Text className="product-description">
                    {product.description}
                  </Card.Text>
                  <Card.Text className="product-price">
                    <strong>₹ {product.price}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}