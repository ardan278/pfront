import React, { useState } from 'react';
import { Link } from 'react-router-dom';// Optional: add your styles here

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
    alert('Spare part submitted successfully!');
    // You can reset the form here if needed
    setFormData({
      partName: '',
      partNumber: '',
      quantity: '',
      description: '',
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Spare Part Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Part Name:</label><br />
          <input
            type="text"
            name="partName"
            value={formData.partName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Part Number:</label><br />
          <input
            type="text"
            name="partNumber"
            value={formData.partNumber}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Quantity:</label><br />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <Link to="/services">⬅ Go Back</Link>
      </div>
    </div>
  );
};

export default SparePartForm;
