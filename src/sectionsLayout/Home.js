import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

// bootstrap navbar
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// bootstrap grid imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// logo images
import logo from "../images/Alexlogo.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

// import gif
import gitHub from "../image-icons/navGitHub.png";
function Home() {
  // funtion to toggle Q/A
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="hero-section">
      {/* navbar */}
      <Navbar className="fixed-top navbar " expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo-img" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* link animations */}
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
                href="#about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="fs-5"
                style={{ color: "white" }}
                href="#projects"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className="fs-5"
                style={{ color: "white" }}
                href="#contacts"
              >
                Contacts
              </Nav.Link>
              <Nav.Link
                className="fs-5"
                style={{ color: "white" }}
                href="https://github.com/alexcruz097/portfoil-2.0"
                target="_blank"
              >
                <img src={gitHub} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Hero content */}
      <Container id="home">
        <Row className="d-flex align-items-center" style={{ height: "70vh" }}>
          <Col xs={10} className="mt-5 pt-5">
            <p style={{ color: "white" }} className="display-6">
              Hello, My name is Alex Cruz
              <br />
              Front-end web developer
            </p>
            <button type="button" class="work-btn" >
              <a href="#contacts">Lets work together</a>
            </button>
            {/* Q/A button */}

            <Button
              className="ms-2 QA-BTN"
              variant="primary"
              onClick={handleShow}
            >
              Q&A
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Questions and Answers</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* accordion for QandA */}
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Who am I?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What do you enjoy about programming?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      What would your skills and personality contribute to our
                      team?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How do you keep up with current trends and advances in
                      this field?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col cs={1}>2 of 2</Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
