import React, { useEffect, useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import AOS from 'aos';
import axios from 'axios';

const Contact: React.FC = () => {
  const [animeLoaded, setAnimeLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  
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

  const text = 'Contact Us';
  const letters = text.split('').map((letter, index) => (
    <span key={index} className="letter" style={{ color: 'black', fontWeight: 'bold', fontSize: '3rem' }}>
      {letter}
    </span>
  ));
  const [submitted, setSubmitted] = useState(false);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const countryCode = formData.phone ? formData.phone.slice(0, 3) : ''; // Assuming the first 3 digits of the phone number are the country code
      const phoneNumber = formData.phone.slice(3); // The rest of the number is the phone number

      await axios.post(
        "https://bright-ewe-inherently.ngrok-free.app/api/send-email/",
        {
          email: formData.email,
          subject: formData.query,
          message: `Hello ${formData.name}, we have received your query: ${formData.query}. Phone: ${countryCode} ${phoneNumber}`,
        }
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", query: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setSubmitted(false);
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handlePhoneChange = (value: string | undefined) => {
      setFormData((prev) => ({
        ...prev,
        phone: value || "",
      }));
    };

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
      <div className="form-wrapper" data-aos="fade-up">
        <div className="contact-card">
          <form onSubmit={handleSubmit} className="contact-form">

            {/* Name input */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label required">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label required">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone number input */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label required">Phone Number</label>
              <PhoneInput
                international
                defaultCountry="IN"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="form-control-phone"
                placeholder="Enter phone number"
                required
              />
            </div>

            {/* Query input */}
            <div className="mb-3">
              <label htmlFor="query" className="form-label required">Your Query</label>
              <textarea
                className="form-control"
                id="query"
                name="query"
                rows={3}
                placeholder="Enter your query"
                value={formData.query}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-secondary w-100 fancy-button"
            >
              Submit
            </button>

            {/* Success message */}
            {submitted && (
              <div className="success-message">
                Email sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
