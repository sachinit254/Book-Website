import React from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
  Image,
  Card
} from "react-bootstrap";
import kindle from "../assets/kindle.png";
const About = () => {
  return (
    <>
      <Container className="text-center my-5">
        <h3 className="mb-3">Inside the Book</h3>
        <p className="fw-light">A quick glance at the topics you'll learn</p>
        <Row className="justify-content-around align-items-center">
          <Col lg={4}>
            <Image src={kindle} alt="kindle" fluid />
          </Col>
          <Col lg={6}>
            <Accordion>
              <Card text="start">
                <Card.Header>
                  <Accordion.Toggle
                    className="btn text-decoration-none text-dark outline-secondary"
                    variant="link"
                    eventKey="0"
                  >
                    Chapter 1 - Your First Web Page
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="lh-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi quo porro maxime cupiditate doloremque voluptas, fugit
                    tenetur blanditiis accusantium laudantium reiciendis
                    deserunt corporis aliquid rem officia placeat, pariatur sed
                    incidunt asperiores quam nemo? Quos excepturi quia aut
                    distinctio, animi non voluptas suscipit provident facilis
                    ducimus veritatis vero necessitatibus, cupiditate amet?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card text="start">
                <Card.Header>
                  <Accordion.Toggle
                    className="btn text-decoration-none text-dark outline-secondary"
                    variant="link"
                    eventKey="1"
                  >
                    Chapter 2 - Mastering CSS
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="lh-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi quo porro maxime cupiditate doloremque voluptas, fugit
                    tenetur blanditiis accusantium laudantium reiciendis
                    deserunt corporis aliquid rem officia placeat, pariatur sed
                    incidunt asperiores quam nemo? Quos excepturi quia aut
                    distinctio, animi non voluptas suscipit provident facilis
                    ducimus veritatis vero necessitatibus, cupiditate amet?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card text="start">
                <Card.Header>
                  <Accordion.Toggle
                    className="btn text-decoration-none text-dark outline-secondary"
                    variant="link"
                    eventKey="2"
                  >
                    Chapter 3 - The Power of JavaScript
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="lh-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi quo porro maxime cupiditate doloremque voluptas, fugit
                    tenetur blanditiis accusantium laudantium reiciendis
                    deserunt corporis aliquid rem officia placeat, pariatur sed
                    incidunt asperiores quam nemo? Quos excepturi quia aut
                    distinctio, animi non voluptas suscipit provident facilis
                    ducimus veritatis vero necessitatibus, cupiditate amet?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card text="start">
                <Card.Header>
                  <Accordion.Toggle
                    className="btn text-decoration-none text-dark outline-secondary"
                    variant="link"
                    eventKey="4"
                  >
                    Chapter 4 - Storing Data (Firebase Databases)
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="lh-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi quo porro maxime cupiditate doloremque voluptas, fugit
                    tenetur blanditiis accusantium laudantium reiciendis
                    deserunt corporis aliquid rem officia placeat, pariatur sed
                    incidunt asperiores quam nemo? Quos excepturi quia aut
                    distinctio, animi non voluptas suscipit provident facilis
                    ducimus veritatis vero necessitatibus, cupiditate amet?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card text="start">
                <Card.Header>
                  <Accordion.Toggle
                    className="btn text-decoration-none text-dark outline-secondary"
                    variant="link"
                    eventKey="5"
                  >
                    Chapter 5 - User Authentication
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body className="lh-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi quo porro maxime cupiditate doloremque voluptas, fugit
                    tenetur blanditiis accusantium laudantium reiciendis
                    deserunt corporis aliquid rem officia placeat, pariatur sed
                    incidunt asperiores quam nemo? Quos excepturi quia aut
                    distinctio, animi non voluptas suscipit provident facilis
                    ducimus veritatis vero necessitatibus, cupiditate amet?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
