import React from "react";
import { useState } from "react";
// images imported
import starterLogo from "../images/starter-logo.png";
import starterImage from "../images/starter-img.png";
import solverLogo from "../images/solver-logo.png";
import prideLogo from "../images/pride-logo.png";
import prideIMG from "../images/pride-img.png";
import problemIMG from "../images/problem-img.png";
// bootstrap components importer
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Card } from "react-bootstrap";
// importing icons
import htmlIcon from "../about-img/icon-html5.png";
import cssIcon from "../about-img/icons-css.png";
import bootstrap from "../about-img/icons-bootstrap.png";
import jsIcon from "../about-img/icons-javascript.png";
import reactIcon from "../about-img/icons-react-.png";
import nodeIcon from "../about-img/icons-nodejs.png";
import commandIcon from "../about-img/icons-command-line.png";
import gitIcon from "../about-img/icons-git.png";
import gitHubIcon from "../about-img/icons-github.png";
import herokuIcon from "../about-img/icons-heroku.png";
function About({ name, ...props }) {
  // icon title
  const toolsIconTitle = [
    "HTML",
    "CSS",
    "BootStrap",
    "JavaScript",
    "React Js",
    "Node Js",
    " Command Line",
    "Git",
    "GitHub",
    "Heroku",
  ];
  // icon image array
  const toolsIcon = [
    htmlIcon,
    cssIcon,
    bootstrap,
    jsIcon,
    reactIcon,
    nodeIcon,
    commandIcon,
    gitIcon,
    gitHubIcon,
    herokuIcon,
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="about-section">
      <p className="text-center pt-5 mb-5 display-5">About Me</p>

      <Container className="pb-5">
        <Row className="my-5">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img className="about-logo " src={starterLogo} />
            <h3 className="text-center">|Self-Starter</h3>
            <p>
              Being a self-taught web-developer has helped me become a
              self-starter. I am always excited to learn new things and seeing
              the finished product that I am working on.
            </p>
          </Col>
          <Col className="about-thumnail">
            <Image src={starterImage} thumbnail />
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="about-thumnail">
            <Image src={problemIMG} thumbnail />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img className="about-logo " src={solverLogo} />
            <h3 className="text-center">|Problem-Solver</h3>
            <p>
              I always try to be in uncomfortable situations by pushing myself
              to learn new things. Instead of running away afraid of a new
              challenge, I face it head-on.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img className="about-logo " src={prideLogo} />
            <h3 className="text-center">|Pride</h3>
            <p>
              I take pride in the work I do. I am always thinking about better
              ways that I can improve my projects. I take feedback from others
              to improve the user experience.
            </p>
          </Col>
          <Col className="about-thumnail">
            <Image src={prideIMG} thumbnail />
          </Col>
        </Row>
        <>
          <Button className="toolBTN" variant="primary" onClick={handleShow}>
            My Tool Box
          </Button>
          <Offcanvas
            placement="bottom"
            show={show}
            onHide={handleClose}
            {...props}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                This are the technologies that I have used in the past.
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="toolbox-container">
              {toolsIcon.map((icon, i) => {
                return (
                  <Card style={{ width: "96px" }}>
                    <Card.Img variant="top" src={icon} />
                    <Card.Body>
                      <Card.Title className="text-center">{toolsIconTitle[i]}</Card.Title>
                    </Card.Body>
                  </Card>
                );
              })}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </Container>
    </section>
  );
}

export default About;
