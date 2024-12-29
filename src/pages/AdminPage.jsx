import React from 'react';
import CompanyManagement from '../components/Admin/CompanyManagement';
import CommunicationMethodsManager from '../components/CommunicationMethodsManager';
// import 'tailwindcss/tailwind.css';
import '../styles/AdminModule.css';

const AdminPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Module</h1>
      <div className="space-y-6">
        {/* Companies Management */}
        <section className="bg-white shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Manage Companies</h2>
          <CompanyManagement />
        </section>

        {/* Communication Methods Management */}
        <section className="bg-white shadow-md p-4 ">
          <h2 className="text-xl font-semibold mb-2">Manage Communication Methods</h2>
          <CommunicationMethodsManager />
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
