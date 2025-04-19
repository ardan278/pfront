import axios from "axios";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const EventCalendar: React.FC = () => {
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
  
    const text = 'Event Calendar';
    const letters = text.split('').map((letter, index) => (
      <span key={index} className="letter" style={{ color: 'black', fontWeight: 'bold',fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}>
        {letter}
      </span>
    ));
  
    return (
      <div
        className="flex justify-center"
        style={{
          textAlign: 'center',
          borderRadius: '12px',
          margin: '5rem 1rem 2rem 1rem'
        }}
      >
        <h1
          className="bg-light rounded page-logo text-center"
          data-aos="fade-down"
          style={{
            boxShadow: '0 4px 16px rgb(0, 0, 0)'
          }}
        >
          {letters}
        </h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&mode=AGENDA&src=ZW4tZ2IudXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4"
          style={{
            borderRadius: '20px',
            boxShadow: '0 4px 16px rgb(0, 0, 0)'
          }}
          width="100%"
          height="480"
          data-aos="fade-up"
        ></iframe>
      </div>
    );
  }    

export default EventCalendar;
