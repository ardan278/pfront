import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto" aria-label="Footer">
      <Container>
        <Row className="justify-content-between">
          {/* Left section - Copyright */}
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0" role="contentinfo">
              &copy; {currentYear} VTSTechCorp. All rights reserved.
            </p>
          </Col>

          {/* Right section - Links */}
          <Col md={6} className="text-center text-md-end">
            <a
              href="/privacy-policy"
              className="text-light me-3"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-service"
              className="text-light"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
