import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/HomeLogo.css';
import Blog2 from "../assets/images/peopleHandOver.jpg";
import Escalator from "../assets/images/Escalator.png";
import Blog1 from "../assets/images/1523699544907.png";
import Blog3 from "../assets/images/b3_part.jpg";
import { HashLink } from 'react-router-hash-link';

const sections = [
  {
    title: "Our Mission",
    text: "Our mission is to deliver top-notch solutions to our clients ensuring the highest level of satisfaction.",
    image: Blog1,
    layout: "left-text",
    bgClass: "bg-light",
    imageStyle: "w-[75%] h-auto rounded-[25px] mx-auto d-block",
    animation: "fade-right"
  },
  {
    title: "Our Vision",
    text: "We envision a future where technology empowers people and transforms industries.",
    image: Blog2,
    layout: "right-text",
    bgClass: "",
    imageStyle: "w-[70%] h-auto rounded-[50px] mx-auto d-block shadow-md",
    animation: "fade-left"
  },
  {
    title: "Our Values",
    text: "Integrity, innovation, and commitment to excellence define our core values.",
    image: Blog3,
    layout: "left-text",
    bgClass: "bg-light",
    imageStyle: "w-[70%] h-auto object-cover rounded-[20px] mx-auto d-block shadow-md",
    animation: "fade-right"
  },
];

const HomeLogo: React.FC = () => {
  useEffect(() => {
    const loadAnimeScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
      script.async = true;
      script.onload = initializeAnime;
      document.body.appendChild(script);
    };

    const initializeAnime = () => {
      const anime = (window as any).anime;
      if (anime) {
        anime({
          targets: '.home-logo .letter',
          opacity: [0, 1],
          scale: [0.3, 1],
          translateY: [20, 0],
          easing: 'easeOutExpo',
          duration: 800,
          delay: anime.stagger(300),
          loop: true,
        });
      }
    };

    loadAnimeScript();
  }, []);

  const text = 'VTSTechCorp.';
  const letters = text.split('').map((letter, index) => (
    <span key={index} className="letter gradient-text">
      {letter}
    </span>
  ));

  return (
    <>
      {/* Hero Section */}
      <div id="home" className="home-logo h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
        <div className="bg-slider">
          <div className="bg-slide bg-slide-1"></div>
          <div className="bg-slide bg-slide-2"></div>
          <div className="bg-slide bg-slide-3"></div>
          <div className="bg-slide bg-slide-1"></div>
        </div>

        <div className='items-center'>
          <div className='d-flex flex-col items-center'>
            <h1 className="home-logo-text font-extrabold text-center text-white text-4xl sm:text-6xl">
              {letters}
            </h1>
          </div>
          <div className='col justify-center home-logo-h2 mt-5 d-flex gap-3'>
            <HashLink smooth to="/services" className='home-logo-h2-btn'>
              Services
            </HashLink>
            <HashLink smooth to="/forms" className="home-logo-h2-btn">
              Forms
            </HashLink>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <Container fluid className="py-5 text-dark" style={{ backgroundColor: '#f7f7f7a8', borderRadius: '20px' }}>
          <Row className="align-items-center text-center">
            <Col className="p-4 text-md-start" id='tea'>
              <h1>Welcome to Our Platform</h1>
              <p>We provide high-quality services to help you achieve your goals.</p>
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                src={Escalator}
                alt="Hero"
                className="img-fluid rounded w-75"
              />
            </Col>
          </Row>
        </Container>

        {/* Dynamic Sections inside cards */}
        {sections.map((section, index) => (
          <div key={index} className="my-4 justify-content-center" style={{ backgroundColor: '#f7f7f7a8', borderRadius: '20px' }}>
            <Container fluid className="py-5 text-dark">
              <Row className="align-items-center text-center">
                {/* Image on Left if layout is right-text */}
                {section.layout === "right-text" && (
                  <Col md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
                    <img
                      src={section.image}
                      alt={section.title}
                      className={`img-fluid ${section.imageStyle}`}
                    />
                  </Col>
                )}

                {/* Text */}
                <Col className="text-md-start">
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </Col>

                {/* Image on Right if layout is left-text */}
                {section.layout === "left-text" && (
                  <Col className="mt-4 mt-md-0 d-flex justify-content-center">
                    <img
                      src={section.image}
                      alt={section.title}
                      className={`img-fluid ${section.imageStyle}`}
                    />
                  </Col>
                )}
              </Row>
            </Container>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeLogo;
