import React, { useEffect, useState } from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicePage: React.FC = () => {
  const [animeLoaded, setAnimeLoaded] = useState(false);

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const text = 'Services';
  const letters = text.split('').map((letter, index) => (
    <span key={index} className="letter" style={{ color: 'black', fontWeight: 'bold',fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}>
      {letter}
    </span>
  ));

  const groups = [
    {
      title: 'Spare Parts',
      description:
        'Order complete spares of any elevator brand here. If you have your own service company maintaining / servicing other brand elevators, we can be your reliable partners',
      link: '/sparepartform',
    },
    {
      title: 'New Sales',
      description:
        'VTSTech Corp can help find best fit VT equipment based on usage and type of building. We offer both standard and custom lift car designs, utilizing a variety of materials chosen by you for new elevator installations.',
      link: '/newsales',
    },
    {
      title: 'Service',
      description:
        'VTSTech Corp can help find great after sales comprehensive service package that suits YOUR budget.',
      link: '/service',
    },
    {
      title: 'Modernization',
      description:
        "Let's replace what is REQUIRED!! VTSTech Corp will provide you with qualified vendors and service providers near to place. We also specialize in creating new car designs for existing lifts as part of modernization projects, ensuring top-notch workmanship throughout the process.",
      link: '/modernization',
    },
    {
      title: 'Cab Interior',
      description:
        'We provide lift car standard designs and also manufacture bespoke designs and install assuring best workmanship using different materials to your selection for new elevators.',
      link: '/contact',
    },
  ];

  return (
    <div className="serv-card">
      <h1 className="bg-light rounded page-logo" data-aos="fade-down" style={{boxShadow: '0 4px 16px rgb(0, 0, 0)'}}>{letters}</h1>
      <div className="grp-serv">
        {groups.map((group, index) =>
          group.link ? (
            <Link key={index} to={group.link} className="group-serv" data-aos="fade-up">
              <h2 className="serv-head rounded">{group.title}</h2>
              <p className="text-dark" style={{textAlign: 'justify'}}>{group.description}</p>
            </Link>
          ) : (
            <div key={index} className="group-cont">
              <h2 className="cont-head rounded">{group.title}</h2>
              <p>{group.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServicePage;
