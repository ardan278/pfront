import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Forms/FormStyles.css';
import { FaChevronDown, FaChevronUp, FaArrowLeft } from 'react-icons/fa';

export default function Reg_form() {
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
      <h2>New Registration Form</h2>
      
      {/* Form Section Accordion */}
      <div className="accordion-item">
        <div 
          className="accordion-header" 
          onClick={() => toggleSection('form')}
        >
          <h3>Registration Details</h3>
          {openSection === 'form' ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        
        {openSection === 'form' && (
          <div className="accordion-content">
            <form>
              {/* Section 1 */}
              <div className="form-section-header">Company Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="manufacturer">Manufacturer</label>
                  <input type="text" id="manufacturer" />
                </div>
                <div className="form-group">
                  <label htmlFor="companyType">Company Type</label>
                  <input type="text" id="companyType" />
                </div>
                <div className="form-group">
                  <label htmlFor="expertiseType">Expertise Type</label>
                  <input type="text" id="expertiseType" />
                </div>
                <div className="form-group">
                  <label htmlFor="numTechs">Number of Techs</label>
                  <input type="number" id="numTechs" />
                </div>
                <div className="form-group">
                  <label htmlFor="numVehicles">Number of Vehicles</label>
                  <input type="number" id="numVehicles" />
                </div>
              </div>

              {/* Section 2 */}
              <div className="form-section-header">Service Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="servicePeriods">Service Periods</label>
                  <input type="text" id="servicePeriods" />
                </div>
                <div className="form-group">
                  <label htmlFor="typeOfContract">Type of Contract</label>
                  <input type="text" id="typeOfContract" />
                </div>
                <div className="form-group">
                  <label htmlFor="certifiedTechs">Certified Techs</label>
                  <input type="text" id="certifiedTechs" />
                </div>
              </div>

              {/* File Uploads */}
              <div className="form-section-header">Documentation</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="organizationChart">Organization Chart</label>
                  <input type="file" id="organizationChart" />
                </div>
                <div className="form-group">
                  <label htmlFor="references">References</label>
                  <input type="file" id="references" />
                </div>
                <div className="form-group">
                  <label htmlFor="sampleContracts">Sample Contracts</label>
                  <input type="file" id="sampleContracts" />
                </div>
                <div className="form-group">
                  <label htmlFor="accreditation">Accreditation</label>
                  <input type="file" id="accreditation" />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="form-section-header">Safety & Legal</div>
              <div className="form-grid">
                <div className="form-group">
                  <div className="checkbox-group">
                    <input type="checkbox" id="accidents" />
                    <label htmlFor="accidents">Accidents</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox-group">
                    <input type="checkbox" id="incidents" />
                    <label htmlFor="incidents">Incidents</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="claims">Claims</label>
                  <input type="text" id="claims" />
                </div>
                <div className="form-group">
                  <div className="checkbox-group">
                    <input type="checkbox" id="legalCases" />
                    <label htmlFor="legalCases">Legal Cases</label>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="form-section-header">Company Details</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="turnover">Turnover</label>
                  <input type="number" id="turnover" />
                </div>
                <div className="form-group">
                  <label htmlFor="yearEstablished">Year Established</label>
                  <input type="number" id="yearEstablished" />
                </div>
              </div>

              <div className="form-section-header">Management Team</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="headOfOperations">Head of Operations</label>
                  <input type="text" id="headOfOperations" />
                </div>
                <div className="form-group">
                  <label htmlFor="constructManager">Construction Manager</label>
                  <input type="text" id="constructManager" />
                </div>
                <div className="form-group">
                  <label htmlFor="projManager">Project Manager</label>
                  <input type="text" id="projManager" />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceManager">Service Manager</label>
                  <input type="text" id="serviceManager" />
                </div>
                <div className="form-group">
                  <label htmlFor="enggManager">Engineering Manager</label>
                  <input type="text" id="enggManager" />
                </div>
                <div className="form-group">
                  <label htmlFor="salesManager">Sales Manager</label>
                  <input type="text" id="salesManager" />
                </div>
              </div>

              <div className="form-section-header">Address Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="officeAddress">Address of Office</label>
                  <input type="text" id="officeAddress" />
                </div>
                <div className="form-group">
                  <label htmlFor="pin">PIN</label>
                  <input type="text" id="pin" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" />
                </div>
                <div className="form-group">
                  <label htmlFor="area">Area</label>
                  <input type="text" id="area" />
                </div>
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
        <button type="submit" className="form-button">Create Contractor Registration</button>
      </div>
    </div>
  );
}