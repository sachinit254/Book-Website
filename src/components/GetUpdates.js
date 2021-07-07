import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ModalComp from "../components/ModalComp";
const GetUpdates = () => {
  return (
    <Container className="my-5">
      <div className="text-center">
        <h4>Stay in The Loop</h4>
        <p className="lead mb-4">Get the latest updates as they happen</p>
        <Row className="justify-content-center align-items-center mb-4">
          <Col md={8}>
            <p className="text-muted lh-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              numquam aspernatur, odio quam architecto maxime ea sapiente
              voluptate assumenda, quisquam facere suscipit iste consequuntur
              sequi voluptatibus illo. Perspiciatis autem excepturi tenetur
              provident doloremque maxime totam sint! Asperiores quisquam sequi
              cumque?
            </p>
          </Col>
        </Row>
        <ModalComp />
      </div>
    </Container>
  );
};

export default GetUpdates;
