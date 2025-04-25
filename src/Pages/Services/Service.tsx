import React, { useEffect, useState } from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTools, FaCogs, FaExchangeAlt, FaBoxOpen, FaBuilding } from 'react-icons/fa';
import aos from 'aos';
import 'aos/dist/aos.css';

const ServicePage: React.FC = () => {
  const [animeLoaded, setAnimeLoaded] = useState(false);

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (!(window as any).anime) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
      script.async = true;
      script.onload = () => setAnimeLoaded(true);
      document.body.appendChild(script);
    } else {
      setAnimeLoaded(true);
    }
  }, []);

  const serviceIcons = {
    'Spare Parts': <FaBoxOpen />,
    'New Sales': <FaBuilding />,
    'Service': <FaTools />,
    'Modernization': <FaExchangeAlt />,
    'Cab Interior': <FaCogs />
  };

  const groups = [
    {
      title: 'Spare Parts',
      description:
        'Order complete spares of any elevator brand here. If you have your own service company maintaining / servicing other brand elevators, we can be your reliable partners',
      link: '/sparepartform',
      color: '#4361ee'
    },
    {
      title: 'New Sales',
      description:
        'VTSTech Corp can help find best fit VT equipment based on usage and type of building. We offer both standard and custom lift car designs, utilizing a variety of materials chosen by you for new elevator installations.',
      link: '/installationfromservices',
      color: '#ef4444'
    },
    {
      title: 'Service',
      description:
        'VTSTech Corp can help find great after sales comprehensive service package that suits YOUR budget.',
      link: '/service',
      color: '#f59e0b'
    },
    {
      title: 'Modernization',
      description:
        "Let's replace what is REQUIRED!! VTSTech Corp will provide you with qualified vendors and service providers near to place. We also specialize in creating new car designs for existing lifts as part of modernization projects, ensuring top-notch workmanship throughout the process.",
      link: '/modernization',
      color: '#10b981'
    },
    {
      title: 'Cab Interior',
      description:
        'We provide lift car standard designs and also manufacture bespoke designs and install assuring best workmanship using different materials to your selection for new elevators.',
      link: '/contact',
      color: '#7c3aed'
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="page-ti">Services</div>
        </div>
      </div>

      <div className="services-grid" >
        <div className="container" style={{alignItems: 'center'}} >
          <div className="service-cards"data-aos="fade-up">
            {groups.map((group, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{'--card-color': group.color} as React.CSSProperties}
              >
                <div className="service-icon">
                  {serviceIcons[group.title as keyof typeof serviceIcons]}
                </div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <Link to={group.link} className="service-link">
                  Request Service <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Ready to elevate your experience?</h2>
              <p>
                Contact our team today to discuss your vertical transportation needs.
                We're here to provide the solutions that work best for your building and budget.
              </p>
              <Link to="/contact" className="cta-button">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ServicePage;
