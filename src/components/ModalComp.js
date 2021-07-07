import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
const ModalComp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Register for Updates
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            veniam. Veniam assumenda quibusdam, eius amet et, molestiae
            molestias est rerum aliquam rem quos ea soluta. Atque recusandae
            nesciunt eveniet porro laborum odit eos sapiente. Voluptate nemo
            vero ut facere nam explicabo modi expedita recusandae. Esse a odio
            reprehenderit corrupti quam.
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComp;
