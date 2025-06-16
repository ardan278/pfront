import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../Pages/Forms/FormStyles.css';
import { FaArrowLeft } from 'react-icons/fa';

const ModernizationForm: React.FC = () => {
  const [formData, setFormData] = useState({});
  
  const handleClear = () => {
    const formElement = document.querySelector('form') as HTMLFormElement;
    if (formElement) formElement.reset();
    setFormData({});
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/services" className="back-button">
          <FaArrowLeft /> Go Back
        </Link>
        <h2>Modernization Request Form</h2>
      </div>
      
      <form className="modernization-form">
        <div className="form-section">
          <h3 className="section-title">Existing Equipment Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="manufacturer">Current Manufacturer</label>
              <input type="text" id="manufacturer" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="unitType">Type of Unit</label>
              <input type="text" id="unitType" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="yearInstalled">Year Installed</label>
              <input type="number" id="yearInstalled" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="landingDoors">No. of Landing Doors</label>
              <input type="number" id="landingDoors" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="cabinDoors">No. of Cabin Doors</label>
              <input type="number" id="cabinDoors" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="numFloors">No. of Floors</label>
              <input type="number" id="numFloors" className="form-input" />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="section-title">Modernization Requirements</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="modernizationScope">Scope of Modernization</label>
              <select id="modernizationScope" className="form-input">
                <option value="">Select scope...</option>
                <option value="complete">Complete Modernization</option>
                <option value="mechanical">Mechanical Only</option>
                <option value="electrical">Electrical Only</option>
                <option value="aesthetic">Aesthetic/Cabin Only</option>
                <option value="custom">Custom (Please specify)</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="reasonForModernization">Reason for Modernization</label>
              <textarea id="reasonForModernization" rows={3} className="form-input"></textarea>
            </div>
            <div className="form-group full-width">
              <label htmlFor="currentIssues">Current Issues (if any)</label>
              <textarea id="currentIssues" rows={3} className="form-input"></textarea>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="section-title">Existing Documentation</h3>
          <div className="form-group full-width">
            <label htmlFor="existingDrawings">Existing Drawings/GAD (if available)</label>
            <input type="file" id="existingDrawings" className="form-input" />
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="section-title">Current Cabin Dimensions</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="widthCabin">Width Cabin</label>
              <input type="text" id="widthCabin" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="heightCabin">Height Cabin</label>
              <input type="text" id="heightCabin" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="depthCabin">Depth Cabin</label>
              <input type="text" id="depthCabin" className="form-input" />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="section-title">Current Shaft Dimensions</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="widthShaft">Width Shaft</label>
              <input type="text" id="widthShaft" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="heightShaft">Height Shaft</label>
              <input type="text" id="heightShaft" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="depthShaft">Depth Shaft</label>
              <input type="text" id="depthShaft" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="pit">Pit</label>
              <input type="text" id="pit" className="form-input" />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="section-title">Location Information</h3>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" id="zipCode" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="area">Area</label>
              <input type="text" id="area" className="form-input" />
            </div>
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
              <label htmlFor="contactMessage">Additional Information or Requirements</label>
              <textarea id="contactMessage" rows={4} className="form-input"></textarea>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="form-button secondary" onClick={handleClear}>Clear</button>
          <button type="submit" className="form-button primary">Submit Modernization Request</button>
        </div>
      </form>
    </div>
  );
};

export default ModernizationForm;