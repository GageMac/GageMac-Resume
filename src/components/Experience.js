import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-info">
        <h3 className="experience-title">Experience</h3>
        <div className="experience-item">
          <h4>Client Technology Intern</h4>
          <p>Cal Poly Humboldt</p>
          <p className="experience-timeframe">Jan 2022 - Jan 2023</p>
          <ul>
            <li>Developed expertise in PowerShell scripting, with a focus on maintaining and updating virtual machines</li>
            <li>Used various package managers to keep software up to date and enhance performance</li>
            <li>Collaborated with team members to identify and troubleshoot issues, resulting in increased efficiency and smoother operations</li>
            <li>As a Client Technology Intern, I gained hands-on experience 
                in PowerShell scripting and using package managers to maintain 
                and optimize virtual machines. I worked closely with my team 
                to identify and resolve issues, resulting in improved 
                efficiency and streamlined operations. Through this 
                internship, I honed my technical skills and learned the importance of 
                effective collaboration and communication in a team environment.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
