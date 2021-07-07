import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand>
          <span className="fw-bold">
            <i className="bi bi-book-half"></i>
            Net Ninja Pro - the Book
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-menu" />
        <Navbar.Collapse id="nav-menu">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className="nav-link text-decoration-none text-secondary"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link text-decoration-none text-secondary"
            >
              About the book
            </NavLink>
            <NavLink
              to="/reviews"
              className="nav-link text-decoration-none text-secondary"
            >
              Reviews
            </NavLink>
            <NavLink
              to="/getintouch"
              className="nav-link text-decoration-none text-secondary"
            >
              Get in Touch
            </NavLink>
            <Button size="sm" className="d-none d-md-block" href="#pricing" variant="secondary">
              buy now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
