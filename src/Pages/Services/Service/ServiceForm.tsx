import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../Pages/Forms/FormStyles.css';
import { FaArrowLeft } from 'react-icons/fa';

const ServiceForm: React.FC = () => {
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
        <h2>New Service Form</h2>
      </div>
      
      <form className="service-form">
        <div className="form-section">
          <h3 className="section-title">Elevator/Escalator Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="manufacturer">Manufacturer</label>
              <input type="text" id="manufacturer" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="unitType">Type of Unit</label>
              <input type="text" id="unitType" className="form-input" />
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
              <label htmlFor="servicePeriods">Service Periods</label>
              <input type="text" id="servicePeriods" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="contractType">Type of Contract</label>
              <input type="text" id="contractType" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="numFloors">No. of Floors</label>
              <input type="number" id="numFloors" className="form-input" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Documentation</h3>
          <div className="form-group full-width">
            <label htmlFor="drawingsGad">Drawings/GAD's</label>
            <input type="file" id="drawingsGad" className="form-input" />
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Dimensions</h3>
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
              <label htmlFor="addressInstall">Address of Install</label>
              <textarea id="addressInstall" className="form-input"></textarea>
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
              <label htmlFor="contactMessage">Additional Information</label>
              <textarea id="contactMessage" rows={4} className="form-input"></textarea>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="form-button secondary" onClick={handleClear}>Clear</button>
          <button type="submit" className="form-button primary">Create Service Contractor</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;