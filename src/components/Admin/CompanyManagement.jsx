import React, { useState } from 'react';
import './CompanyManagement.css';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedin: '',
    emails: '',
    phone: '',
    comments: '',
    periodicity: '2 weeks',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCompany = () => {
    setCompanies((prev) => [...prev, { ...formData, id: Date.now() }]);
    setFormData({
      name: '',
      location: '',
      linkedin: '',
      emails: '',
      phone: '',
      comments: '',
      periodicity: '2 weeks',
    });
  };

  const handleDeleteCompany = (id) => {
    setCompanies((prev) => prev.filter((company) => company.id !== id));
  };

  return (
    <div className="company-management">
      <h2>Company Management</h2>
      
      {/* Form to Add/Edit Companies */}
      <div className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={formData.linkedin}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="emails"
          placeholder="Emails (comma-separated)"
          value={formData.emails}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Numbers (comma-separated)"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleInputChange}
        />
        <select name="periodicity" value={formData.periodicity} onChange={handleInputChange}>
          <option value="1 week">1 Week</option>
          <option value="2 weeks">2 Weeks</option>
          <option value="1 month">1 Month</option>
        </select>
        <button onClick={handleAddCompany}>Add Company</button>
      </div>

      {/* List of Companies */}
      <div className="company-list">
        <h3>Companies</h3>
        {companies.length === 0 && <p>No companies added yet.</p>}
        {companies.map((company) => (
          <div key={company.id} className="company-item">
            <p><strong>Name:</strong> {company.name}</p>
            <p><strong>Location:</strong> {company.location}</p>
            <p><strong>LinkedIn:</strong> <a href={company.linkedin}>{company.linkedin}</a></p>
            <p><strong>Emails:</strong> {company.emails}</p>
            <p><strong>Phone:</strong> {company.phone}</p>
            <p><strong>Comments:</strong> {company.comments}</p>
            <p><strong>Periodicity:</strong> {company.periodicity}</p>
            <button onClick={() => handleDeleteCompany(company.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyManagement;
