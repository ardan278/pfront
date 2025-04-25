import React, { useEffect, useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUserPlus, FaWrench, FaHandshake, FaBoxOpen } from 'react-icons/fa';
import aos from 'aos';
import 'aos/dist/aos.css';

const FormPage: React.FC = () => {
  const [animeLoaded, setAnimeLoaded] = useState(false);

  useEffect(() => {
      aos.init({ duration: 1000 });
    }, []);

  // Load Anime.js dynamically
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

  // Trigger animation once anime is loaded
  useEffect(() => {
    if (animeLoaded) {
      const anime = (window as any).anime;
      anime({
        targets: '.page-logo .letter',
        opacity: [0, 1],
        scale: [0.3, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: anime.stagger(300),
        loop: true,
      });
    }
  }, [animeLoaded]);

  // Initialize AOS
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  const formIcons = {
    'Registration Form': <FaUserPlus />,
    'Installation Form': <FaWrench />,
    'Service Form': <FaHandshake />,
    'Part Request Form': <FaBoxOpen />
  };

  const forms = [
    {
      title: 'Registration Form',
      description:
        'Order complete spares of any elevator brand here. If you have your own service company maintaining / servicing other brand elevators, we can be your reliable partners.',
      link: '/registrationform',
      color: '#4361ee'
    },
    {
      title: 'Installation Form',
      description:
        'VTSTech Corp can help find best fit VT equipment based on usage and type of building. We offer both standard and custom lift car designs, utilizing a variety of materials chosen by you for new elevator installations.',
      link: '/installationform',
      color: '#ef4444'
    },
    {
      title: 'Service Form',
      description:
        'VTSTech Corp can help find great after-sales comprehensive service package that suits YOUR budget.',
      link: '/serviceform',
      color: '#f59e0b'
    },
    {
      title: 'Part Request Form',
      description:
        "Let's replace what is REQUIRED!! VTSTech Corp will provide you with qualified vendors and service providers near to your place. We also specialize in creating new car designs for existing lifts as part of modernization projects, ensuring top-notch workmanship throughout the process.",
      link: '/partrequestform',
      color: '#10b981'
    }
  ];

  return (
    <div className="forms-page">
      <div className="forms-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="page-title" style={{fontSize: '3rem'}}>Forms</div>
        </div>
      </div>

      <div className="forms-grid">
        <div className="container">
          <div className="form-cards" data-aos="fade-up">
            {forms.map((form, index) => (
              <div 
                key={index} 
                className="form-card-item"
                style={{'--card-color': form.color} as React.CSSProperties}
              >
                <div className="form-icon">
                  {formIcons[form.title as keyof typeof formIcons]}
                </div>
                <h2>{form.title}</h2>
                <p>{form.description}</p>
                <Link to={form.link} className="form-link">
                  Go to Form <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
