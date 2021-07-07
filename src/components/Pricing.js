import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
const Pricing = () => {
  return (
    <Container className="my-4">
      <div className="text-center">
        <h3>Pricing Plans</h3>
        <p className="lead">Choose a pricing plan to suit you.</p>
      </div>
      <Row className="justify-content-center align-items-center ">
        <Col xs={8} lg={4} xl={3}>
          <Card bg="light" text="center">
            <Card.Body>
              <Card.Title>Starter Edition</Card.Title>
              <Card.Subtitle className="fw-light mb-1">
                eBook download only
              </Card.Subtitle>
              <Card.Text className="display-6 text-danger fw-bold">
                $12.99
              </Card.Text>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam amet ex beatae debitis, ducimus quibusdam inventore.
              </Card.Text>
              <Button variant="outline-primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={9} lg={4} xl={4}>
          <Card bg="light" text="center" className="border-2 border-primary">
            <Card.Header>Most Popular</Card.Header>
            <Card.Body>
              <Card.Title>Complete Edition</Card.Title>
              <Card.Subtitle className="fw-light mb-1">
                eBook download & all updates
              </Card.Subtitle>
              <Card.Text className="display-6 text-danger fw-bold">
                $12.99
              </Card.Text>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam amet ex beatae debitis, ducimus quibusdam inventore.
              </Card.Text>
              <Button variant="outline-primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} lg={4} xl={3}> 
          <Card bg="light" text="center">
            <Card.Body>
              <Card.Title>Ultimate   Edition</Card.Title>
              <Card.Subtitle className="fw-light mb-1">
                download, updates & extras
              </Card.Subtitle>
              <Card.Text className="display-6 text-danger fw-bold">
                $12.99
              </Card.Text>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam amet ex beatae debitis, ducimus quibusdam inventore.
              </Card.Text>
              <Button variant="outline-primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pricing;
