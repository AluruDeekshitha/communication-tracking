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

  // Load companies from local storage when the component mounts
  useEffect(() => {
    const storedCompanies = localStorage.getItem("companies");
    if (storedCompanies) {
      setCompanies(JSON.parse(storedCompanies));
    }
  }, []);

  // Save companies to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("companies", JSON.stringify(companies));
  }, [companies]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCompany = () => {
    const newCompany = { ...form, id: Date.now() };
    const updatedCompanies = [...companies, newCompany];
    setCompanies(updatedCompanies);
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
    const updatedCompanies = companies.filter((company) => company.id !== id);
    setCompanies(updatedCompanies);
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
                <button
                  onClick={() => handleDeleteCompany(company.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CompaniesManager;
