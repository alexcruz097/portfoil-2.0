import React from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function Contact() {
  return (
    <Container className="contact-container pb-5 mb-5" id="contacts">
      <p className="text-center pt-5 mb-5 display-5">Contact Me</p>
      <div className="contact-links">
        <Alert className="alert alert-linkedin">
          <Alert.Link
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/alex-cruz-4202651b0/"
          >
            Lets Connect on LinkedIn
          </Alert.Link>
          .
        </Alert>

        <Alert className="alert alert-email">
          <a
            className="link"
            href="mailto: alexc017@yahoo.com"
            style={{ color: "white" }}
          >
            Email Me: alexc017@yahoo.com
          </a>
        </Alert>
      </div>
    </Container>
  );
}

export default Contact;
