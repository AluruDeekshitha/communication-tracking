import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; 

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div><h1 className='head'>Communication Tracker</h1></div>
      <div className="container mx-auto px-4">
      
        <div className="flex justify-between items-center py-4">
         
          
          {/* Navigation Links */}
          <ul className="nav-links ">
            <li>
              <Link
                to="/"
                className="hover:bg-blue-700 px-3 py-2 rounded transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className="hover:bg-blue-700 px-3 py-2 rounded transition"
              >
                Admin Module
              </Link>
            </li>
            <li>
              <Link
                to="/calendar"
                className="hover:bg-blue-700 px-3 py-2 rounded transition"
              >
                Calendar
              </Link>
            </li>
            <li>
            <Link to="/engagement-dashboard">Engagement Dashboard</Link> 
            </li>
            <li><img className='image' src='https://img.freepik.com/premium-vector/calendar-icon_1319560-41158.jpg'/></li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
