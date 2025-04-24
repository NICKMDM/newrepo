import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="bg-primary text-white text-center py-5">
      <Container>
        <h1>Welcome to My Website</h1>
        <p className="lead">We provide awesome services for you!</p>
        <Button variant="light" href="#services">Explore Services</Button>
      </Container>
    </div>
  );
}

export default Hero;
