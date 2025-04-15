import React, { useEffect } from 'react';
import './Styles/HomeLogo.css';

// Functional component for HomeLogo
const HomeLogo: React.FC = () => {
  useEffect(() => {
    // Dynamically load anime.js
    const loadAnimeScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
      script.async = true;
      script.onload = initializeAnime;
      document.body.appendChild(script);
    };

    // Initialize anime.js animation after loading the script
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
    <div className="home-logo h-screen w-full relative overflow-hidden">
      {/* Background slideshow */}
      <div className="bg-slider">
        <div className="bg-slide bg-slide-1"></div>
        <div className="bg-slide bg-slide-2"></div>
        <div className="bg-slide bg-slide-3"></div>
        <div className="bg-slide bg-slide-1"></div> {/* Duplicate for smooth loop */}
      </div>

      {/* Centered animated logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
      <h1 className="home-logo-text font-extrabold text-center">
  {letters}
</h1>

      </div>
    </div>
  );
};

export default HomeLogo;