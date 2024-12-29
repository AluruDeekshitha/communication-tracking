import React from 'react';
import './dashboard.css'
const CompanyDetail = ({ company, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">{company.name} - Communications</h2>
        <ul>
          {company.communications.map((comm, index) => (
            <li key={index} className="mb-3">
              <div>
                <strong>Type:</strong> {comm.type}
              </div>
              <div>
                <strong>Date:</strong> {comm.date}
              </div>
              <div>
                <strong>Notes:</strong> {comm.notes}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
