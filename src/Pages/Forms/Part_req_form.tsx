import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Forms/FormStyles.css';
import { FaChevronDown, FaChevronUp, FaArrowLeft } from 'react-icons/fa';

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
    <div>
      <label htmlFor={id} style={{ fontWeight: 'bold' }}>{label}</label>
      <input 
        type="date" 
        id={id} 
        name={id} 
        min={getTodayDate()} 
        max={max}
      />
    </div>
  );
};

export default function Part_req_form() {
  const [openSection, setOpenSection] = useState('form'); // Initially open form section
  const [formData, setFormData] = useState({}); // Add state for form data
  
  const toggleSection = (section: string) => {
    // Only allow toggling if not trying to open contact directly
    if (section !== 'contact' || openSection === 'contact') {
      setOpenSection(openSection === section ? '' : section);
    }
  };

  // Function to handle proceed button click
  const handleProceed = () => {
    setOpenSection('contact');
  };

  // Function to handle clear button click
  const handleClear = () => {
    // Reset the form - you may need to adjust this based on your form implementation
    const formElement = document.querySelector('form') as HTMLFormElement;
    if (formElement) formElement.reset();
    
    // You could also reset your form state if you're using controlled components
    setFormData({});
  };

  return (
    <div className="form-container">
      <div className="back-button-container">
        <Link to="/forms" className="back-button">
          <FaArrowLeft /> Go Back
        </Link>
      </div>
      <h2>Part Request Form</h2>
      
      {/* Form Section Accordion */}
      <div className="accordion-item">
        <div 
          className="accordion-header" 
          onClick={() => toggleSection('form')}
        >
          <h3>Part Request Details</h3>
          {openSection === 'form' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        
        {openSection === 'form' && (
          <div className="accordion-content">
            <form>
              <div className="form-section-header">Part Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="manufacturer">Manufacturer</label>
                  <input type="text" id="manufacturer" />
                </div>
                <div className="form-group">
                  <label htmlFor="partNumber">Part Number</label>
                  <input type="text" id="partNumber" />
                </div>
                <div className="form-group">
                  <label htmlFor="serialNumber">Serial Number</label>
                  <input type="text" id="serialNumber" />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" id="quantity" />
                </div>
              </div>
              
              <div className="form-section-header">Part Details</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea id="description"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="manufactureDate">Year of Manufacture</label>
                  <input type="date" id="manufactureDate" min="2020-01-01" max="2030-12-31" />
                </div>
              </div>
              
              <div className="form-section-header">Documentation</div>
              <div className="form-group">
                <label htmlFor="partImage">Upload Part Image or Drawing</label>
                <input type="file" id="partImage" />
              </div>
              
              {/* Proceed and Clear buttons at the end of the first accordion */}
              <div className="form-actions">
                <button type="button" className="form-button secondary" onClick={handleClear}>Clear</button>
                <button type="button" className="form-button primary" onClick={handleProceed}>Proceed</button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Contact Section Accordion */}
      <div className="accordion-item">
        <div 
          className="accordion-header" 
          onClick={() => toggleSection('contact')}
        >
          <h3>Contact Information</h3>
          {openSection === 'contact' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        
        {openSection === 'contact' && (
          <div className="accordion-content">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="contactName">Contact Name</label>
                <input type="text" id="contactName" />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email</label>
                <input type="email" id="contactEmail" />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="text" id="contactNumber" />
              </div>
              <div className="form-group">
                <label htmlFor="preferredContact">Preferred Mode of Contact</label>
                <select id="preferredContact">
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Additional Information</label>
                <textarea id="contactMessage" rows={4}></textarea>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="button-container">
        <button type="submit" className="form-button">Submit Part Request</button>
      </div>
    </div>
  );
}