import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-light p-3 border-end" style={{ width: '200px', height: '100vh' }}>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink to="/home" className="nav-link">
            <i className="bi bi-house-door-fill me-2"></i> Home
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/home/book" className="nav-link">
            <i className="bi bi-calendar-plus me-2"></i> Book Appointment
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/home/history" className="nav-link">
            <i className="bi bi-clock-history me-2"></i> History
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/home/contact" className="nav-link">
            <i className="bi bi-telephone-fill me-2"></i> Contact Us
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/home/about" className="nav-link">
            <i className="bi bi-info-circle-fill me-2"></i> About
          </NavLink>
        </li>

        <li className="nav-item mt-3">
          <NavLink to="/logout" className="nav-link text-danger">
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
