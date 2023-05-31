import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="contact-container pb-5" id="contacts">
      <p className="text-center pt-5 mb-5 display-5">Contact Me</p>
      <div className="contact-links">
        <h3>
          <a
            className="link"
            href="https://www.linkedin.com/in/alex-cruz-4202651b0/"
            target="_blank"
          >
            Lets connect on Linkedin
          </a>
        </h3>
        <h3>
          <a className="link" href="mailto: alexc017@yahoo.com">
            Email Me: alexc017@yahoo.com
          </a>
        </h3>
      </div>
    </Container>
  );
}

export default Contact;
