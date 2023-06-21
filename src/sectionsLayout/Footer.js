import React from "react";
import { Slide } from "react-awesome-reveal";
import { Container } from "react-bootstrap";

function Footer() {
  let currentyear = new Date().getFullYear();
  return (
    <footer className="footer py-3">
      <Container className="footer-inner">
        <Slide direction="up" triggerOnce="true">
        <p className="h5">Alex Cruz&copy;{currentyear} </p>
        <p className="h5">Created with React Js</p>
        </Slide>
      </Container>
    </footer>
  );
}

export default Footer;
