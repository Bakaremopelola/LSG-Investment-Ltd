import  { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/lsg-logo.jpg" // Import icons for hamburger menu

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); // Toggle mobile menu
  const closeMobileMenu = () => setClick(false); // Close menu on link click

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with Homepage Link */}
        <a href="/" className="navbar-logo">
          <img src={logo}className="logo" /> 
          MyWebsite
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navbar Links */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-links" onClick={closeMobileMenu}>
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-links" onClick={closeMobileMenu}>
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-links" onClick={closeMobileMenu}>
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#register" className="nav-links" onClick={closeMobileMenu}>
              Registration
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
