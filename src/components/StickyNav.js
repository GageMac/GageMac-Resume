import React from 'react';
import './StickyNav.css';

function StickyNav() {
  return (
    <nav className="StickyNav">
      <ul className="StickyNavList">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default StickyNav;
