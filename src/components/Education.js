import React from 'react';
import './Education.css';
import gradPicture from '../assets/grad-pic01.jpg';
function Education() {
  return (
    <div className="education-container">
      <div className="education-info">
        <h3 className="education-title">Education</h3>
        <p className="education-timeframe">2020-2022</p>
        <ul>
          <li>Bachelor's degree in Computer Science</li>
          <li>Cal Poly Humboldt, Arcata Ca</li>
        </ul>
      </div>
      <div className="education-img">
        <img src={gradPicture} alt="Grad Picture" />
      </div>
    </div>
  );
}

export default Education;
