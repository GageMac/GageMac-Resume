import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/logo_transparent.png'; // import your logo image

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="My Logo" width="300" height="300" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 My Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
