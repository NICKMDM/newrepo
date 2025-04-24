import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>© 2025 My Website | Follow us on 
          <a href="#" className="text-white ms-1">LinkedIn</a> / 
          <a href="#" className="text-white ms-1">Twitter</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
