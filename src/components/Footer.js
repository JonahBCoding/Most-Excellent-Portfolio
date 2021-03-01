import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true} bg="info">
        <Row className="justify-content-between p-3 text-white bg-info">
          <Col>
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
                LinkedIn
            </a>
            <a
            href="https://github.com/JonahBCoding"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            >
                GitHub
            </a>
            <a
            href="https://stackoverflow.com/users/story/15303880"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            >
                StackOverflow
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-end text-white" md={3}>
            This site was created by Jonah Benson
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
