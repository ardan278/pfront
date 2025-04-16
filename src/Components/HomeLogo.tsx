import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Blog2 from "../assets/images/peopleHandOver.jpg";
import Escalator from "../assets/images/Escalator.png";
import Blog1 from "../assets/images/1523699544907.png";
import Blog3 from "../assets/images/b3_part.jpg";
import "./Styles/HomeLogo.css";

// Define the section data
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
  const navigate = useNavigate();
  useEffect(() => {
    // Load AOS (Animate On Scroll) library
    const loadAOSScript = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
      script.async = true;
      script.onload = initializeAOS;
      document.body.appendChild(script);
    };

    const initializeAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
          offset: 100
        });
      }
    };

    // Load Anime.js for the logo animation
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

    loadAOSScript();
    loadAnimeScript();

    return () => {
      // Cleanup if needed
    };
  }, []);

  const text = 'VTSTechCorp.';
  const letters = text.split('').map((letter, index) => (
    <span key={index} className="letter gradient-text">
      {letter}
    </span>
  ));

  return (
    <>
      {/* Original Hero Section with VTSTechCorp */}
      <div id="home" className="home-logo h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* Background Slideshow */}
        <div className="bg-slider">
          <div className="bg-slide bg-slide-1"></div>
          <div className="bg-slide bg-slide-2"></div>
          <div className="bg-slide bg-slide-3"></div>
          <div className="bg-slide bg-slide-1"></div>
        </div>

        {/* Logo Text */}
        <div className='items-center'>
          <div className='d-flex flex-col items-center'>
            <h1 className="home-logo-text font-extrabold text-center text-white text-4xl sm:text-6xl">
              {letters}
            </h1>
          </div>
          <div className='col justify-center home-logo-h2 mt-5'>
            <button 
              className="px-6 py-2 rounded"
              onClick={() => navigate('/services')}
            >
              Services
            </button>
            <button 
              className="px-6 py-2 rounded"
              onClick={() => navigate('/services/spareparts')}
            >
              Forms
            </button>
          </div>
        </div>        
      </div>

      {/* New About Sections */}
      <div id="about">
        {/* Hero Section */}
        <Container
          fluid
          className="my-5 text-dark bg-gradient-to-r from-[#A888B5] via-[#E4D2D8] to-[#F2F4F7] shadow-md"
          style={{
            padding: "100px 0",
          }}
          data-aos="fade-up"
        >
          <Row className="align-items-center text-center">
            <Col md={6} className="p-5 text-md-start" data-aos="fade-right" data-aos-delay="200">
              <h1 className="display-4 text-gray-900">Welcome to Our Platform</h1>
              <p className="lead text-gray-700">
                We provide high-quality services to help you achieve your goals.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-center" data-aos="fade-left" data-aos-delay="400">
              <img
                src={Escalator}
                alt="Hero"
                className="img-fluid rounded w-[80%] h-auto"
              />
            </Col>
          </Row>
        </Container>

        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <Container
            key={index}
            fluid
            className={`my-5 py-5 ${section.bgClass} shadow-lg bg-red-50 section-container`}
          >
            <Row className="align-items-center text-center">
              {section.layout === "right-text" && (
                <Col md={6} className="d-flex justify-content-center" data-aos="fade-right" data-aos-delay="200">
                  <img
                    src={section.image}
                    alt={section.title}
                    className={`img-fluid ${section.imageStyle}`}
                  />
                </Col>
              )}
              <Col 
                md={6} 
                className="p-5 text-md-start" 
                data-aos={section.layout === "right-text" ? "fade-left" : "fade-right"} 
                data-aos-delay="400"
              >
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </Col>
              {section.layout === "left-text" && (
                <Col md={6} className="d-flex justify-content-center" data-aos="fade-left" data-aos-delay="200">
                  <img
                    src={section.image}
                    alt={section.title}
                    className={`img-fluid ${section.imageStyle}`}
                  />
                </Col>
              )}
            </Row>
          </Container>
        ))}
      </div>
    </>
  );
};

// Add TypeScript declaration for AOS and anime
declare global {
  interface Window {
    AOS: any;
    anime: any;
  }
}

export default HomeLogo;
