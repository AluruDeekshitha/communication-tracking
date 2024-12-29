import React, { useState, useEffect } from "react";

const CompaniesManager = () => {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    name: "",
    location: "",
    linkedin: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCompany = () => {
    setCompanies([...companies, { ...form, id: Date.now() }]);
    setForm({
      name: "",
      location: "",
      linkedin: "",
      email: "",
      phone: "",
      comments: "",
    });
  };

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  const openDetailsModal = (company) => {
    setSelectedCompany(company);
    setIsDetailsModalOpen(true);
  };

  const openLogModal = (company) => {
    setSelectedCompany(company);
    setIsLogModalOpen(true);
  };

  return (
    <div className="bg-white shadow p-4 rounded">
      {/* Add Company Form */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Add a New Company</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Company Name"
            className="border rounded p-2"
          />
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="border rounded p-2"
          />
          <input
            type="text"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn Profile"
            className="border rounded p-2"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded p-2"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded p-2"
          />
          <textarea
            name="comments"
            value={form.comments}
            onChange={handleChange}
            placeholder="Comments"
            className="border rounded p-2 col-span-1 md:col-span-2"
          ></textarea>
          <button
            type="button"
            onClick={handleAddCompany}
            className="bg-blue-600 text-white p-2 rounded col-span-1 md:col-span-2"
          >
            Add Company
          </button>
        </form>
      </div>

      {/* List of Companies */}
      <div>
        <h3 className="font-semibold mb-2">Companies</h3>
        {companies.length === 0 ? (
          <p>No companies added yet.</p>
        ) : (
          <ul className="space-y-2">
            {companies.map((company) => (
              <li
                key={company.id}
                className="border p-2 rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">{company.name}</p>
                  <p className="text-sm">{company.location}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => openDetailsModal(company)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    View Details
                  </button>
    
                  <button
                    onClick={() => handleDeleteCompany(company.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* View Details Modal */}
      {isDetailsModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Company Details</h3>
            <p><strong>Name:</strong> {selectedCompany.name}</p>
            <p><strong>Location:</strong> {selectedCompany.location}</p>
            <p><strong>Email:</strong> {selectedCompany.email}</p>
            <p><strong>Phone:</strong> {selectedCompany.phone}</p>
            <p><strong>LinkedIn:</strong> {selectedCompany.linkedin}</p>
            <p><strong>Comments:</strong> {selectedCompany.comments}</p>
            <button
              onClick={() => setIsDetailsModalOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CompaniesManager;
