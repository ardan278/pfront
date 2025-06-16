import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../Pages/Forms/FormStyles.css';
import { FaArrowLeft } from 'react-icons/fa';

const SparePartForm: React.FC = () => {
  const [formData, setFormData] = useState({
    partName: '',
    partNumber: '',
    quantity: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Spare part request submitted successfully!');
    // Reset the form after submission
    setFormData({
      partName: '',
      partNumber: '',
      quantity: '',
      description: '',
    });
  };

  const handleClear = () => {
    setFormData({
      partName: '',
      partNumber: '',
      quantity: '',
      description: '',
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/services" className="back-button">
          <FaArrowLeft /> Go Back
        </Link>
        <h2>Spare Part Request Form</h2>
      </div>
      
      <form className="spare-part-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3 className="section-title">Part Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="partName">Part Name</label>
              <input
                type="text"
                id="partName"
                name="partName"
                value={formData.partName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="partNumber">Part Number</label>
              <input
                type="text"
                id="partNumber"
                name="partNumber"
                value={formData.partNumber}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <h3 className="section-title">Additional Information</h3>
          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="form-input"
            />
          </div>
        </div>
        
        <div className="form-actions">
          <button type="button" className="form-button secondary" onClick={handleClear}>Clear</button>
          <button type="submit" className="form-button primary">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default SparePartForm;
