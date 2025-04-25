import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Carousel, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Styles/HomeLogo.css';
import Elevator from "../assets/images/Elevator.jpeg";
import Blog2 from "../assets/images/peopleHandOver.jpg";
import Escalator from "../assets/images/Escalator.jpg";
import Blog1 from "../assets/images/1523699544907.png";
import Blog3 from "../assets/images/b3_part.jpg";
import MoveWalks from "../assets/images/MoveWalks.jpg";
import { FaChartLine, FaCogs, FaShieldAlt } from 'react-icons/fa';
import aos from 'aos';
import 'aos/dist/aos.css';

// Import three.js for the background animation
import * as THREE from 'three';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(featuredProducts);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  // 3D Animation for hero background
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup - perspective camera for 3D effect
    const camera = new THREE.PerspectiveCamera(
      75, 
      canvasRef.current.width / canvasRef.current.height, 
      0.1, 
      1000
    );
    camera.position.z = 20;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    
    // Create grid of stars/particles
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    
    // Blue-purple color palette
    const colorOptions = [
      new THREE.Color(0x00b7ff), // Bright blue
      new THREE.Color(0x0077ff), // Medium blue
      new THREE.Color(0xff00bf), // Bright pink/magenta
      new THREE.Color(0xcc00ff)  // Purple
    ];
    
    // Create star positions and colors
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      
      // Position in a 3D space
      positions[i3] = (Math.random() - 0.5) * 50;   // x
      positions[i3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 50; // z
      
      // Random color from our palette
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      color.toArray(colors, i3);
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Material for the stars with vertex colors
    const starMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    // Create the star system
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the star field slowly
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;
      
      // Render the scene
      renderer.render(scene, camera);
    };
    
    // Start animation
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (stars) {
        scene.remove(stars);
        starGeometry.dispose();
        starMaterial.dispose();
      }
      
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const results = featuredProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="mb-5">
        <div className="hero-background">
          <canvas ref={canvasRef} className="hero-canvas"></canvas>
        </div>
        <div className="content-overlay container">
          <h1 className="gradient-text">VTSTechCorp</h1>
          <div className="hero-buttons">
            <Link to="/services" className="home-logo-btn btn btn-primary">
              Services
            </Link>
            <Link to="/forms" className="home-logo-btn btn btn-secondary">
              Forms
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 mt-5">
        <Container>
          <h2 className="section-title">Why Choose Us</h2>
          <div className="section-divider mx-auto mb-4"></div>
          <Row className="text-center">
            <Col md={4}>
              <div className="feature-card" data-aos="zoom-in">
                <FaChartLine className="feature-icon" />
                <h3>Industry Experience</h3>
                <p>Over 20 years of experience in providing vertical transportation solutions.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
                <FaCogs className="feature-icon" />
                <h3>Quality Service</h3>
                <p>Committed to delivering exceptional service and maintenance support.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
                <FaShieldAlt className="feature-icon" />
                <h3>Safety First</h3>
                <p>Adhering to the highest safety standards and regulations in the industry.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section py-5">
        <Container>
          <h2 className="section-title">Our Products</h2>
          <div className="section-divider mx-auto mb-4"></div>
          <div className="search-container mb-4">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="product-search"
              />
            </Form.Group>
          </div>
          <Row>
            {filteredProducts.map(product => (
              <Col lg={4} md={6} key={product.id} className="mb-4">
                <div className="product-card" data-aos="fade-up">
                  <div
                    className="product-image"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundColor: '#eee'
                    }}
                    role="img"
                    aria-label={product.title}
                  />
                  <div className="product-details">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <Button variant="outline-primary" className="product-btn" onClick={() => alert('More info coming soon!')}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
            {filteredProducts.length === 0 && (
              <Col xs={12} className="text-center">
                <p>No products found matching your search.</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <Container>
          <h2 className="section-title">About Us</h2>
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
                <div
                  className="carousel-slide"
                  style={{ backgroundImage: `url(${section.image})` }}
                  role="img"
                  aria-label={section.title}
                >
                  <div className="carousel-overlay">
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2>Ready to elevate your building experience?</h2>
            <p>Contact our team today for a consultation on your vertical transportation needs.</p>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomeLogo;