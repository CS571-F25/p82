import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  }

  return (
    <section className="app-page">
      <Container className="page-narrow">
        <h1 className="mb-4">Contact Me</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit">Send</Button>
        </Form>

        {submitted && (
          <Alert variant="success" className="mt-3">
            Thanks! Your message was recorded (check console for now).
          </Alert>
        )}
      </Container>
    </section>
  );
}
