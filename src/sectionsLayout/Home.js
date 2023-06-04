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
      <Navbar className="fixed-top navbar navbar " expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo-img" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
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
            <button type="button" class="work-btn">
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
                      As a web developer, I enjoy creating websites that are
                      visually appealing, functional, and user-friendly. I have
                      knowledge of programming languages such as HTML, CSS,
                      BootStrap,JavaScript and React to build websites from
                      scratch or modify existing ones. I like to ensure that the
                      website is optimized for speed, search engines, and
                      accessibility. I enjoy working with designers, project
                      managers, and other developers to ensure that the website
                      meets the client's requirements and specifications. I have
                      attention to detail, problem-solving skills, and the
                      ability to work independently as well as part of a team.
                      As a web developer, I have critical role in shaping the
                      online experience of users and businesses.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What do you enjoy about programming?
                    </Accordion.Header>
                    <Accordion.Body>
                      I enjoy the creativity and problem-solving aspects of
                      programming. It's satisfying to take an idea and turn it
                      into a functioning program or website. Being able to see
                      the end result of my work is also very rewarding.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      What would my skills and personality contribute to your
                      team?
                    </Accordion.Header>
                    <Accordion.Body>
                      Based on my skills and passion for programming, I would be
                      a valuable addition to any team. My enjoyment of learning
                      and problem-solving abilities would allow me to contribute
                      to the development of new programs and websites. I enjoy
                      seeing projects through to completion and I always ensure
                      that tasks are finished on time and to a high standard. My
                      attention to detail and ability to work collaboratively
                      makes me a great team player. Overall, my skills and
                      personality would make me a valuable asset to any team.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How do you keep up with current trends and advances in
                      this field?
                    </Accordion.Header>
                    <Accordion.Body>
                      One effective way that I stay up-to-date on current trends
                      and advances in programming is to regularly read industry
                      publications and blogs. Joining online forums and
                      attending industry events and conferences is also a great
                      way to stay informed and connected with other
                      professionals in the field. Additionally, I enjoy
                      networking with other programmers and participating in
                      online communities can help me stay informed and
                      up-to-date on the latest developments in programming.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col cs={1}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
