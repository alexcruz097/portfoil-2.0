import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  let currentyear = new Date().getFullYear();
  return (
    <footer className="footer py-3">
      <Container className="footer-inner">
        <p className="h5">Alex Cruz&copy;{currentyear} </p >
        <p className="h5">Created with React Js</p >
      </Container>
    </footer>
  );
}

export default Footer;
