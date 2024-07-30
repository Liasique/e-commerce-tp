import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function FooterSite() {
  return (
    <footer className="bg-dark text-center text-white">
      <Container className="p-4 pb-0">
        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
            <Button
              variant="outline-light"
              className="m-1"
              href="#!"
              role="button"
            >
              <FaFacebookF />
            </Button>

            <Button
              variant="outline-light"
              className="m-1"
              href="#!"
              role="button"
            >
              <FaTwitter />
            </Button>

            <Button
              variant="outline-light"
              className="m-1"
              href="#!"
              role="button"
            >
              <FaGoogle />
            </Button>

            <Button
              variant="outline-light"
              className="m-1"
              href="#!"
              role="button"
            >
              <FaInstagram />
            </Button>

            <Button
              variant="outline-light"
              className="m-1"
              href="#!"
              role="button"
            >
              <FaLinkedinIn />
            </Button>

            <Button
              variant="outline-light"
              className="m-1"
              href="#!"
              role="button"
            >
              <FaGithub />
            </Button>
          </Col>
        </Row>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          Olga Lukianets
        </a>
      </div>
    </footer>
  );
}