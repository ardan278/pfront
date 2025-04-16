import React, { useEffect } from 'react';
import './Styles/HomeLogo.css';

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

  const button1 = 'Services';
  const button2 = 'Forms';

  return (
    <>
      {/* Hero Section */}
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
            <button className="px-6 py-2 rounded">
              Services
            </button>
            <button className="px-6 py-2 rounded">
              Forms
            </button>
          </div>
        </div>

        
      </div>



      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-20 px-6 md:px-20 bg-gray-100 mb-2">
        <div className="card p-3">
          <h1 className="card-header">About Us</h1>
          <p className="mt-2">
            VTSTechCorp is a forward-thinking tech company dedicated to delivering innovative
            software solutions for businesses and individuals. With a passion for quality and a
            drive for perfection, we aim to transform your ideas into reality through modern
            design, robust engineering, and user-centric products.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeLogo;