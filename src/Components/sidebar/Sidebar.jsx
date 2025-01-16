import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiDollarSign, FiSettings, FiActivity } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/admin');

  // Define your sidebar navigation items
  const sidebarItems = [
    { path: '/admin', name: 'Dashboard', icon: <FiHome /> },
    { path: '/admin/properties', name: 'Properties', icon: <FiDollarSign /> },
    { path: '/admin/users', name: 'Users', icon: <FiUser /> },
    { path: '/admin/analytics', name: 'Analytics', icon: <FiActivity /> },
    { path: '/admin/settings', name: 'Settings', icon: <FiSettings /> },
  ];

  // Function to handle click on a navigation item
  const handleItemClick = (path) => {
    setActiveLink(path); // Update active link state
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        {sidebarItems.map((item, index) => (
          <li key={index} className={`sidebar-item ${activeLink === item.path ? 'active' : ''}`}>
            <NavLink
              to={item.path}
              className="sidebar-link"
              activeClassName="active"
              onClick={() => handleItemClick(item.path)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-text">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
