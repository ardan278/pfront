import React, { useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './Styles/HomeLogo.css';
import Blog2 from "../assets/images/peopleHandOver.jpg";
import Escalator from "../assets/images/Escalator.png";
import Blog1 from "../assets/images/1523699544907.png";
import Blog3 from "../assets/images/b3_part.jpg";
import { HashLink } from 'react-router-hash-link';

// Declare Bootstrap on the window object for TypeScript
declare global {
  interface Window {
    bootstrap: any;
  }
}

const sections = [
  {
    title: "Our Mission",
    text: "Our mission is to deliver top-notch solutions to our clients ensuring the highest level of satisfaction.",
    image: Blog1,
    layout: "left-text",
    bgClass: "bg-light",
  },
  {
    title: "Our Vision",
    text: "We envision a future where technology empowers people and transforms industries.",
    image: Blog2,
    layout: "right-text",
    bgClass: "",
  },
  {
    title: "Our Values",
    text: "Integrity, innovation, and commitment to excellence define our core values.",
    image: Blog3,
    layout: "left-text",
    bgClass: "bg-light",
  },
];

const HomeLogo: React.FC = () => {
  // Initialize the carousel when component mounts
  useEffect(() => {
    // This ensures Bootstrap's JavaScript is properly initialized
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 5000,
        pause: false
      });
    }
  }, []);

  return (
    <>
      {/* Carousel Background */}
      <div className="carousel-background">
        <Carousel fade controls={false} indicators={true} interval={5000} pause={false}>
          <Carousel.Item>
            <div 
              className="carousel-image" 
              style={{ backgroundImage: "url('/Images/bg1.jpg')" }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div 
              className="carousel-image" 
              style={{ backgroundImage: "url('/Images/bg2.jpg')" }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div 
              className="carousel-image" 
              style={{ backgroundImage: "url('/Images/bg3.jpg')" }}
            ></div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <div id="home" className="hero-section w-100 position-relative">
          <div className="overlay"></div>
          <h1 style={{ 
            fontFamily: "'Roboto Slab', serif",
            background: "linear-gradient(90deg, #ef4444, #f59e0b, #3b82f6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            fontSize: "clamp(2rem, 10vw, 6rem)",
            fontWeight: "bold",
            lineHeight: "1.1",
            margin: "0.5em 0",
            transition: "font-size 0.3s ease",
            position: "relative",
            zIndex: 3
          }}>
            VTSTechCorp
          </h1>

          <div className="mt-2 mb-3 d-flex gap-3 justify-content-center flex-wrap" style={{ marginBottom: "5rem", position: "relative", zIndex: 3 }}>
            <HashLink smooth to="/services" className="home-logo-h2-btn home-logo-h2-btn-1">
              Services
            </HashLink>
            <HashLink smooth to="/forms" className="home-logo-h2-btn home-logo-h2-btn-2">
              Forms
            </HashLink>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="container bg-secondary p-5 text-light" style={{ borderRadius: '20px',marginTop: '1rem', marginBottom: '1rem',marginRight: '1rem',marginLeft: '1rem' }}>
          <Container fluid className="justify-content-center">
            <Row>
              <Col>
                <div className="py-1">
                  <h5 className="mb-3">Product Placeholder</h5>
                  <p>This is an empty card. Add product details here.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* About + Dynamic Sections */}
        <div id="about">
          <Container fluid className="py-5 text-dark" style={{ backgroundColor: '#f7f7f7a8', borderRadius: '20px' }}>
            <Row className="align-items-center text-center text-md-start">
              <Col md={6} className="p-4">
                <h1>Welcome to Our Platform</h1>
                <p>We provide high-quality services to help you achieve your goals.</p>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                <img
                  src={Escalator}
                  alt="Hero"
                  className="img-fluid rounded"
                  style={{ width: "75%" }}
                />
              </Col>
            </Row>
          </Container>

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <div
              key={index}
              className={`my-4 ${section.bgClass}`}
              style={{ borderRadius: '20px' }}
            >
              <Container fluid className="py-5 text-dark">
                <Row className="align-items-center text-center text-md-start">
                  {section.layout === "right-text" && (
                    <Col md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="img-fluid rounded"
                        style={{ width: "70%", height: "auto" }}
                      />
                    </Col>
                  )}

                  <Col md={6}>
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                  </Col>

                  {section.layout === "left-text" && (
                    <Col md={6} className="mt-4 mt-md-0 d-flex justify-content-center">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="img-fluid rounded"
                        style={{ width: "70%", height: "auto" }}
                      />
                    </Col>
                  )}
                </Row>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeLogo;