import axios from "axios";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './EventCalendar.css';

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
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="calendar-page">
      <div className="calendar-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title" style={{fontSize: '3rem'}}>Event Calendar</h1>
        </div>
      </div>

      <div className="calendar-grid p-3 rounded">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&mode=AGENDA&src=ZW4tZ2IudXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4"
          data-aos="fade-up"
          className="full-calendar"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};    

export default EventCalendar;
