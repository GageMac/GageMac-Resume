import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">As a recent Computer Science graduate with a diverse range of technical 
                                knowledge and hands-on experience, I am seeking to start my career in 
                                software engineering. My strong work ethic, dedication, and passion for 
                                learning make me an ideal candidate for this field. I have a solid foundation 
                                in programming languages such as C++, Python, and JavaScript, and I am adept 
                                at working with various software tools and platforms. With a keen eye for 
                                detail and a commitment to quality, I am always striving to improve my skills 
                                and take on new challenges. As a collaborative team player, I look forward to 
                                contributing to the success of your organization and advancing my career in 
                                software engineering.</p>
      <a href="../assets/gmac-resume.pdf" download className="download-btn">Download CV</a>
    </div>
  );
}

export default About;
