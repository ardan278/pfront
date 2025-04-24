import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import './Styles/HomeLogo.css';
import Elevator from "../assets/images/Elevator.jpeg";
import Blog2 from "../assets/images/peopleHandOver.jpg";
import Escalator from "../assets/images/Escalator.jpg";
import Blog1 from "../assets/images/1523699544907.png";
import Blog3 from "../assets/images/b3_part.jpg";
import MoveWalks from "../assets/images/MoveWalks.jpg";
import { HashLink } from 'react-router-hash-link';

const sections = [
  {
    title: "Our Mission",
    text: "Our mission is to deliver top-notch solutions to our clients ensuring the highest level of satisfaction.",
    image: Blog1,
  },
  {
    title: "Our Vision",
    text: "We envision a future where technology empowers people and transforms industries.",
    image: Blog2,
  },
  {
    title: "Our Values",
    text: "Integrity, innovation, and commitment to excellence define our core values.",
    image: Blog3,
  },
];

const featuredProducts = [
  {
    id: 1,
    title: "Elevator Systems",
    description: "State-of-the-art elevator systems for commercial and residential buildings.",
    image: Elevator,
  },
  {
    id: 2,
    title: "Escalator Solutions",
    description: "Safe and efficient escalator systems for shopping centers and public spaces.",
    image: Escalator,
  },
  {
    id: 3,
    title: "Moving Walkways",
    description: "Innovative moving walkways for airports, exhibition centers, and malls.",
    image: MoveWalks,
  }
];

const HomeLogo: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="content-overlay container text-center">
          <h1 className="gradient-text">VTSTechCorp</h1>
          <div className="hero-buttons">
            <HashLink smooth to="/services" className="home-logo-h2-btn home-logo-h2-btn-1">
              Services
            </HashLink>
            <HashLink smooth to="/forms" className="home-logo-h2-btn home-logo-h2-btn-2">
              Forms
            </HashLink>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="section-divider mx-auto mb-4"></div>
          <Row className="text-center">
            <Col md={4}>
              <div className="feature-card">
                <i className="fas fa-chart-line feature-icon"></i>
                <h3>Industry Experience</h3>
                <p>Over 20 years of experience in providing vertical transportation solutions.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card">
                <i className="fas fa-cogs feature-icon"></i>
                <h3>Quality Service</h3>
                <p>Committed to delivering exceptional service and maintenance support.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card">
                <i className="fas fa-shield-alt feature-icon"></i>
                <h3>Safety First</h3>
                <p>Adhering to the highest safety standards and regulations in the industry.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products */}
      <section id="products" className="products-section py-5">
        <Container>
          <h2 className="section-title text-center">Our Products</h2>
          <div className="section-divider mx-auto mb-4"></div>
          <Row>
            {featuredProducts.map(product => (
              <Col lg={4} md={6} key={product.id} className="mb-4">
                <div className="product-card">
                  <div
                    className="product-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                    aria-label={product.title}
                  />
                  <div className="product-details">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <Button variant="outline-primary">Learn More</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="about-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">About Us</h2>
          <div className="section-divider mx-auto mb-4"></div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls
            indicators
            interval={5000}
            className="about-carousel"
          >
            {sections.map((section, idx) => (
              <Carousel.Item key={idx}>
                <div className="carousel-slide" style={{ backgroundImage: `url(${section.image})` }}>
                  <div className="carousel-overlay text-center">
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center py-5">
        <Container>
          <div className="cta-content">
            <h2>Ready to elevate your building experience?</h2>
            <p>Contact our team today for a consultation on your vertical transportation needs.</p>
            <HashLink smooth to="/contact" className="cta-button btn btn-primary mt-3">Get in Touch</HashLink>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomeLogo;
