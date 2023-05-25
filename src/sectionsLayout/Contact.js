import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="contact-container pb-5" id="contacts">
      <p className="text-center pt-5 mb-5 display-5">Contact Me</p>
      <div className="contact-links">
        <h3>Lets connect on Linkedin</h3>
        <h3>Email Me: alexc017@yahoo.com</h3>
      </div>
    </Container>
  );
}

export default Contact;
