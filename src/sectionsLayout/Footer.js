import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  let currentyear = new Date().getFullYear();
  return (
    <footer className="footer py-3">
      <Container className="footer-inner">
        <h3>Alex Cruz&copy;{currentyear} </h3>
        <h3>Created with React Js</h3>
      </Container>
    </footer>
  );
}

export default Footer;
