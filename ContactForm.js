import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      {submitted && (
        <Alert variant="success" className="mt-3 text-center">
          Thank you, {formData.name}! We’ll get back to you soon.
        </Alert>
      )}
    </Container>
  );
}

export default ContactForm;
