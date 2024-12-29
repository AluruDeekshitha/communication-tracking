import React, { useState, useRef } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'Company 1',
      communications: [
        { type: 'LinkedIn Post', date: '2024-12-20', notes: 'Initial outreach' },
        { type: 'Email', date: '2024-12-22', notes: 'Follow-up email' },
        { type: 'Phone Call', date: '2024-12-18', notes: 'Call regarding project' },
        { type: 'LinkedIn Message', date: '2024-12-17', notes: 'Message follow-up' },
        { type: 'Email', date: '2024-12-15', notes: 'First email contact' },
      ],
      nextCommunication: { type: 'Phone Call', date: '2024-12-25' },
    },
    {
      id: 2,
      name: 'Company 2',
      communications: [
        { type: 'Phone Call', date: '2024-12-19', notes: 'Call regarding project' },
        { type: 'LinkedIn Message', date: '2024-12-21', notes: 'Message follow-up' },
        { type: 'Email', date: '2024-12-18', notes: 'Update email sent' },
        { type: 'Phone Call', date: '2024-12-16', notes: 'Project update call' },
        { type: 'LinkedIn Post', date: '2024-12-14', notes: 'Initial outreach' },
      ],
      nextCommunication: { type: 'Email', date: '2024-12-24' },
    },
  ]);

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [communicationType, setCommunicationType] = useState('');
  const [communicationDate, setCommunicationDate] = useState('');
  const [communicationNotes, setCommunicationNotes] = useState('');
  const [error, setError] = useState('');

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleBackToList = () => {
    setSelectedCompany(null); // Reset selected company to show the list again
  };

  const handleSaveCommunication = () => {
    if (!communicationType || !communicationDate || !communicationNotes.trim()) {
      setError('All fields are mandatory.');
      return;
    }

    const newCommunication = {
      type: communicationType,
      date: communicationDate,
      notes: communicationNotes,
    };

    // Update the selected company's communications
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === selectedCompany.id
          ? {
              ...company,
              communications: [newCommunication, ...company.communications].slice(0, 5),
            }
          : company
      )
    );

    // Clear form fields and errors
    setCommunicationType('');
    setCommunicationDate('');
    setCommunicationNotes('');
    setError('');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Communication Dashboard</h1>

      {/* Render selected company details or the company list */}
      {selectedCompany ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{selectedCompany.name}</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Last 5 Communications:</h3>
            <ul>
              {selectedCompany.communications.map((com, idx) => (
                <li key={idx} className="py-2 border-b">
                  <strong>{com.type}</strong> on {formatDate(com.date)} - {com.notes}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Next Scheduled Communication:</h3>
            <p>
              <strong>{selectedCompany.nextCommunication.type}</strong> on{' '}
              {formatDate(selectedCompany.nextCommunication.date)}
            </p>
          </div>

          {/* Log Communication Form */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Log Communication</h3>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Type of Communication</label>
              <input
                type="text"
                value={communicationType}
                onChange={(e) => setCommunicationType(e.target.value)}
                placeholder="Enter communication type"
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Communication Date</label>
              <input
                type="date"
                value={communicationDate}
                onChange={(e) => setCommunicationDate(e.target.value)}
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Notes</label>
              <textarea
                value={communicationNotes}
                onChange={(e) => setCommunicationNotes(e.target.value)}
                placeholder="Enter details here..."
                className="border rounded w-full p-2"
              ></textarea>
            </div>
            <button
              onClick={handleSaveCommunication}
              className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
            >
              Save
            </button>
          </div>

          <button
            onClick={handleBackToList}
            className="bg-gray-500 text-white px-4 py-2 rounded mt-4 hover:bg-gray-600"
          >
            Back to Company List
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div key={company.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{company.name}</h2>
              <div className="mb-2">
                <strong>Next Scheduled Communication:</strong>
                <p>
                  {company.nextCommunication.type} -{' '}
                  {formatDate(company.nextCommunication.date)}
                </p>
              </div>
              <button
                onClick={() => setSelectedCompany(company)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
              >
                View Company Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
