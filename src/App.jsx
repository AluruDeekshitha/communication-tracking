import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/DashboardPage';
import CalendarPage from './pages/CalendarPage';
import CompanyDetail from './components/dashboard/companydetails';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/dashboard';
import EngagementDashboard from './components/calender/EngagementDashboard';

import './styles/styles.css';

const App = () => {
  const effectivenessData = [
    { type: 'Emails', value: 40 },
    { type: 'Calls', value: 30 },
    { type: 'Meetings', value: 20 },
    { type: 'Social Media', value: 10 },
  ]; // Example data for EngagementDashboard

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="/engagement-dashboard" element={<EngagementDashboard effectiveness={effectivenessData} />} /> {/* Add the route */}
      </Routes>
    </div>
  );
};

export default App;
