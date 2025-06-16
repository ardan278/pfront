import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Forms/FormStyles.css';
import { FaArrowLeft } from 'react-icons/fa';

const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Define prop types
interface DateInputProps {
  label: string;
  id: string;
  max: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, id, max }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
        type="date" 
        id={id} 
        name={id} 
        min={getTodayDate()} 
        max={max}
        className="form-input"
      />
    </div>
  );
};

export default function Part_req_form() {
  const [formData, setFormData] = useState({});

  const handleClear = () => {
    const formElement = document.querySelector('form') as HTMLFormElement;
    if (formElement) formElement.reset();
    setFormData({});
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/forms" className="back-button">
          <FaArrowLeft /> Go Back
        </Link>
        <h2>Part Request Form</h2>
      </div>
      
      <form className="installation-form">
        <div className="form-section">
          <h3 className="section-title">Part Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="manufacturer">Manufacturer</label>
              <input type="text" id="manufacturer" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="partNumber">Part Number</label>
              <input type="text" id="partNumber" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="serialNumber">Serial Number</label>
              <input type="text" id="serialNumber" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" className="form-input" />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="section-title">Part Details</h3>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="description">Description</label>
              <textarea id="description" className="form-input"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="manufactureDate">Year of Manufacture</label>
              <input type="date" id="manufactureDate" min="2020-01-01" max="2030-12-31" className="form-input" />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="section-title">Documentation</h3>
          <div className="form-group full-width">
            <label htmlFor="partImage">Upload Part Image or Drawing</label>
            <input type="file" id="partImage" className="form-input" />
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Contact Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="contactName">Contact Name</label>
              <input type="text" id="contactName" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="contactEmail">Email</label>
              <input type="email" id="contactEmail" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="text" id="contactNumber" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="preferredContact">Preferred Mode of Contact</label>
              <select id="preferredContact" className="form-input">
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="contactMessage">Additional Information</label>
              <textarea id="contactMessage" rows={4} className="form-input"></textarea>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="form-button secondary" onClick={handleClear}>Clear</button>
          <button type="submit" className="form-button primary">Submit Part Request</button>
        </div>
      </form>
    </div>
  );
}