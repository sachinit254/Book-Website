import React from "react";
import ebookCover from "../assets/ebook-cover.png";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
const Hero = () => {
  return (
    <>
      <Container fluid="lg" className="mt-5">
        <Row className="justify-content-center align-items-center">
          <Col md={4} className="text-center text-md-start">
            <div className="display-4">Black-Belt</div>
            <div className="display-6 text-secondary">Your Coding Skills</div>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button variant="secondary">Buy Now</Button>
            <Button
              className="d-block mx-auto mx-md-0 my-3"
              variant="secondary"
            >
              Explore my other books
            </Button>
          </Col>
          <Col md={5} className="d-none d-md-block">
            <span
              className="tt"
              data-bs-placement="bottom"
              title="Net Ninja Book Cover"
            >
              <Image src={ebookCover} fluid className="d-none d-sm-block" />
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
