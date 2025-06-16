import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Forms/FormStyles.css';
import { FaArrowLeft } from 'react-icons/fa';

export default function Reg_form() {
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
        <h2>New Registration Form</h2>
      </div>
      
      <form className="installation-form">
        <div className="form-section">
          <h3 className="section-title">Company Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="manufacturer">Manufacturer</label>
              <input type="text" id="manufacturer" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="companyType">Company Type</label>
              <input type="text" id="companyType" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="expertiseType">Expertise Type</label>
              <input type="text" id="expertiseType" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="numTechs">Number of Techs</label>
              <input type="number" id="numTechs" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="numVehicles">Number of Vehicles</label>
              <input type="number" id="numVehicles" className="form-input" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Service Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="servicePeriods">Service Periods</label>
              <input type="text" id="servicePeriods" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="typeOfContract">Type of Contract</label>
              <input type="text" id="typeOfContract" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="certifiedTechs">Certified Techs</label>
              <input type="text" id="certifiedTechs" className="form-input" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Documentation</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="organizationChart">Organization Chart</label>
              <input type="file" id="organizationChart" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="references">References</label>
              <input type="file" id="references" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="sampleContracts">Sample Contracts</label>
              <input type="file" id="sampleContracts" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="accreditation">Accreditation</label>
              <input type="file" id="accreditation" className="form-input" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Safety & Legal</h3>
          <div className="form-grid">
            <div className="form-group">
              <div className="checkbox-group">
                <input type="checkbox" id="accidents" className="form-input" />
                <label htmlFor="accidents">Accidents</label>
              </div>
            </div>
            <div className="form-group">
              <div className="checkbox-group">
                <input type="checkbox" id="incidents" className="form-input" />
                <label htmlFor="incidents">Incidents</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="claims">Claims</label>
              <input type="text" id="claims" className="form-input" />
            </div>
            <div className="form-group">
              <div className="checkbox-group">
                <input type="checkbox" id="legalCases" className="form-input" />
                <label htmlFor="legalCases">Legal Cases</label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Company Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="turnover">Turnover</label>
              <input type="number" id="turnover" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="yearEstablished">Year Established</label>
              <input type="number" id="yearEstablished" className="form-input" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Management Team</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="headOfOperations">Head of Operations</label>
              <input type="text" id="headOfOperations" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="constructManager">Construction Manager</label>
              <input type="text" id="constructManager" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="projManager">Project Manager</label>
              <input type="text" id="projManager" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="serviceManager">Service Manager</label>
              <input type="text" id="serviceManager" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="enggManager">Engineering Manager</label>
              <input type="text" id="enggManager" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="salesManager">Sales Manager</label>
              <input type="text" id="salesManager" className="form-input" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Address Information</h3>
          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="officeAddress">Address of Office</label>
              <input type="text" id="officeAddress" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="pin">PIN</label>
              <input type="text" id="pin" className="form-input" />
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
          <button type="submit" className="form-button primary">Submit Registration</button>
        </div>
      </form>
    </div>
  );
}