import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
// bootstrap navbar
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// bootstrap grid imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// logo images
import logo from "../images/logo.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function home() {
  // funtion to toggle Q/A
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="hero-section">
      {/* navbar */}
      <Navbar className="fixed-top navbar" expand="md" >
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo-img" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" >
              <Nav.Link
                className="fs-5"
                style={{ color: "white" }}
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="fs-5"
                style={{ color: "white" }}
                href="#link"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="fs-5"
                style={{ color: "white" }}
                href="#link"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className="fs-5"
                style={{ color: "white" }}
                href="#link"
              >
                Contacts
              </Nav.Link>
              <Nav.Link
                className="fs-5"
                style={{ color: "white" }}
                href="#link"
              >
                Portfolio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Hero content */}
      <Container>
        <Row className="d-flex align-items-center" style={{ height: "70vh" }}>
          <Col xs={10}>
            <p style={{ color: "white" }} className="display-6">
              Hello, My name is Alex Cruz<br />
              Front-end web developer
            </p>
            <button type="button" class="btn btn-danger">
              Lets work together
            </button>
            {/* Q/A button */}
            <Button className="ms-2" variant="primary" onClick={handleShow}>
              Q&A
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col cs={1}>2 of 2</Col>
        </Row>
      </Container>
    </section>
  );
}

export default home;
