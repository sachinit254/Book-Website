import React from "react";
import { Row, Col, Form } from "react-bootstrap";
const Getintouch = () => {
  return (
    <section className="my-5">
      <div className="text-center">
        <h2>Get in Touch</h2>
        <p className="fw-light">
          Questions to ask? Fill out the form to contact me directly...
        </p>
      </div>
      <Row className="justify-content-center align-items-center">
        <Col xs={10} md={8} className="text-start">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email Address:</Form.Label>
              <Form.Control type="email" placeholder="e.g. mario@Example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="email" placeholder="e.g. mario" />
            </Form.Group>
            <Form.Group>
              <Form.Label>What is you question about?</Form.Label>
            </Form.Group>
            <select className="form-select mb-3">
              <option selected>Pricing query</option>
              <option >Content query</option>
              <option >Other query</option>
            </select>
            <Form.Control as="textarea" placeholder="Your Query..."
            style={{height: '100px'}}/>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Getintouch;
