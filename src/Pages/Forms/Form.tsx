import React, { useEffect, useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const FormPage: React.FC = () => {
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

  const text = 'Forms';
  const letters = text.split('').map((letter, index) => (
    <span key={index} className="letter grad-text">
      {letter}
    </span>
  ));

  const groups = [
    { title: 'Registration Form', description: 'Order complete spares of any elevator brand here. If you have your own service company maintaining / servicing other brand elevators, we can be your reliable partners', link: '/sparepartform' },
    { title: 'Installation Form', description: 'VTSTech Corp can help find best fit VT equipment based on usage and type of building. We offer both standard and custom lift car designs, utilizing a variety of materials chosen by you for new elevator installations. ',link: '/newsales' },
    { title: 'Service Form', description: 'VTSTech Corp can help find great after sales comprehensive service package that suits YOUR budget.',link: '/service' },
    { title: 'Part Request Form', description: "Let's replace what is REQUIRED!! VTSTech Corp will provide you with qualified vendors and service providers near to place. We also specialize in creating new car designs for existing lifts as part of modernization projects, ensuring top-notch workmanship throughout the process. ",link: '/modernization' },
    // { title: 'Cab Interior', description: 'We provide lift car standard designs and also manufacture bespoke designs and install assuring best workmanship using different materials to your selection for new elevators. ',link: '/contact' },
  ];

  return (
    <div className="page-card card" style={{ textAlign: 'center', padding: '20px' }}>
      <h1 className='page-h1 card-header rounded page-logo'>{letters}</h1>
      <div className="group-cards" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
        {groups.map((group, index) => (
          group.link ? (
            <Link
              key={index}
              to={group.link}
              className="group-card"
              style={{
                flex: '1 1 calc(20% - 10px)',
                margin: '5px',
                textAlign: 'center',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <h2 className='card-header rounded' style={{fontSize: 20}}>{group.title}</h2>
              {/* <p className='card-body rounded mt-2'>{group.description}</p> */}
            </Link>
          ) : (
            <div
              key={index}
              className="group-card"
              style={{
                flex: '1 1 calc(20% - 10px)',
                margin: '5px',
                textAlign: 'center',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px'
              }}
            >
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default FormPage;
