import axios from "axios";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'; // Import style for phone input
import './Contact.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div className="contact-page">
      <h1 className="bg-light rounded con-logo" style={{ boxShadow: '0 4px 16px rgb(0, 0, 0)' }} data-aos="fade-down">
        Contact Us
      </h1>
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
                rows={4}
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

export default ContactUs;
