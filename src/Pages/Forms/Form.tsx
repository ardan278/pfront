import React, { useEffect, useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const FormPage: React.FC = () => {
  const [animeLoaded, setAnimeLoaded] = useState(false);

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
    AOS.init({ duration: 1000 });
  }, []);

  const text = 'Forms';
  const letters = text.split('').map((letter, index) => (
    <span key={index} className="letter" style={{ color: 'black', fontWeight: 'bold', fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}>
      {letter}
    </span>
  ));

  const groups = [
    {
      title: 'Registration Form',
      description:
        'Order complete spares of any elevator brand here. If you have your own service company maintaining / servicing other brand elevators, we can be your reliable partners.',
      link: '/registrationform',
    },
    {
      title: 'Installation Form',
      description:
        'VTSTech Corp can help find best fit VT equipment based on usage and type of building. We offer both standard and custom lift car designs, utilizing a variety of materials chosen by you for new elevator installations.',
      link: '/installationform',
    },
    {
      title: 'Service Form',
      description:
        'VTSTech Corp can help find great after-sales comprehensive service package that suits YOUR budget.',
      link: '/serviceform',
    },
    {
      title: 'Part Request Form',
      description:
        "Let's replace what is REQUIRED!! VTSTech Corp will provide you with qualified vendors and service providers near to your place. We also specialize in creating new car designs for existing lifts as part of modernization projects, ensuring top-notch workmanship throughout the process.",
      link: '/partrequestform',
    },
  ];

  return (
    <div className="form-card">
      <h1 className="bg-light rounded page-logo" data-aos="fade-down" style={{boxShadow: '0 4px 16px rgb(0, 0, 0)'}}>{letters}</h1>
      <div className="grp-form" data-aos="fade-up">
        {groups.map((group, index) =>
          group.link ? (
            <Link key={index} to={group.link} className="group-form">
              <h2 className="form-head rounded">{group.title}</h2>
              {/* <p className="card-body rounded my-2">{group.description}</p> */}
            </Link>
          ) : (
            <div key={index} className="group-cont">
              <h2 className="">{group.title}</h2>
              {/* <p className="card-body rounded my-2">{group.description}</p> */}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FormPage;
