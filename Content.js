import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  { title: 'Web Development', description: 'Building responsive websites.' },
  { title: 'Mobile Apps', description: 'Cross-platform mobile apps.' },
  { title: 'UI/UX Design', description: 'User-friendly modern interfaces.' },
];

function Content() {
  return (
    <Container className="py-5" id="services">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Content;
