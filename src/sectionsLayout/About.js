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
    <section className="about-section" id="about">
      <p className="text-center pt-5 mb-5 display-5">About Me</p>

      <Container className="pb-5">
        <Row className="my-5">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img className="about-logo " src={starterLogo} />
            <h2 className="text-center contact-card-header pb-2">
              |Self-Starter
            </h2>
            <p>
              By taking the initiative to stay up-to-date on industry trends and
              developments, I can really set myself apart as a knowledgeable and
              skilled professional.
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
            <h2 className="text-center contact-card-header pb-2">
              |Problem-Solver
            </h2>
            <p>
              As a programmer, I need to be able to identify issues, analyze
              them, and come up with effective solutions. This requires critical
              thinking, creativity, and persistence. By continuing to hone my
              problem solving skills, I am able to be well-equipped to handle
              any challenges that come my way in the programming world.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <img className="about-logo " src={prideLogo} />
            <h2 className="text-center contact-card-header pb-2">|Pride</h2>
            <p>
              By striving to create high-quality code and constantly seeking
              ways to improve, I can create software that truly meets the needs
              of our users and delivers a positive experience. I take pride in
              doing quility work.
            </p>
          </Col>

          <Col className="about-thumnail">
            <Image src={prideIMG} thumbnail />
          </Col>
        </Row>
        <>
          <div className="toolBTN-container">
            <Button className="toolBTN" variant="primary" onClick={handleShow}>
              My Tool Box
            </Button>
          </div>
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
                  <Card className="tool-card" style={{ width: "96px" }}>
                    <Card.Img variant="top" src={icon} />
                    <p className="tool-title text-center">
                      {toolsIconTitle[i]}
                    </p>
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
