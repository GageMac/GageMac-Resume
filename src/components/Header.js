import React from 'react';
import './Header.css';
import logo from '../assets/logo_transparent.png'; 

function Header() {
  return (
    <div className="header">
      <div className="header-logo">Gage Machado Software Engineer
      </div>
      <div className="header-links">
        <div className="header-link">Home</div>
        <div className="header-link">Experience</div>
        <div className="header-link">Education</div>
        <div className="header-link">Projects</div>
        <div className="header-link">Contact</div>
      </div>
    </div>
  );
}

export default Header;

