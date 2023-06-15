import React from "react";
import { Bounce } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function Contact() {
  return (
    <Container className="contact-container pb-5 mb-5" id="contacts">
      <p className="text-center pt-5 mb-5 display-5">Contact Me</p>
      <div className="contact-links">
        <Bounce cascade>
          {/* phone number */}
          <Alert.Link
            href="https://www.linkedin.com/in/alex-cruz-4202651b0/"
            target="_blank"
          >
            <Alert className="alert alert-linkedin" style={{ color: "white" }}>
              Lets Connect on LinkedIn
            </Alert>
          </Alert.Link>
          {/* email */}
          <a className="link " href="mailto: alexc017@yahoo.com">
            <Alert
              className="alert alert-email"
              style={{ color: "white", fontSize: "1rem", fontWeight: "700" }}
            >
              Email Me: alexc017@yahoo.com
            </Alert>
          </a>
        </Bounce>
      </div>
    </Container>
  );
}

export default Contact;
