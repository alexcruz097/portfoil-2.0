import React from "react";

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

function About() {
  return (
    <section className="about-section">
      <p className="text-center pt-5 mb-5 display-5">About Me</p>

      <Container>
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
          <Col>
            <Image src={starterImage} thumbnail />
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
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
          <Col>
            <Image src={prideIMG} thumbnail />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
