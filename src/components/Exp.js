import React from "react";
import "./Exp.css";

const Experience = () => {
  return (
    <section className="exp-container">
      <h2 className="section-title">Experience</h2>
      <div className="exp-timeline">
        <div className="exp-item">
          <div className="exp-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="exp-bar"></div>
          <div className="exp-item-content">
            <div className="exp-content">
              <h2>Software Developer</h2>
              <div className="exp-year">May 2021 - Present</div>
              <p>ABC Company</p>
            </div>
            <div className="exp-content exp-right">
              <h3>Job Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim, quis ultrices mi lacinia a. Duis
                nec tempus mauris. Donec eget lectus vitae libero consequat
                sodales sit amet eu mauris. Suspendisse potenti. Integer id
                quam tincidunt, hendrerit enim vel, ullamcorper metus.
              </p>
            </div>
          </div>
        </div>
        <div className="exp-item">
          <div className="exp-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="exp-bar"></div>
          <div className="exp-item-content">
            <div className="exp-content">
              <h2>Web Developer</h2>
              <div className="exp-year">Jan 2019 - May 2021</div>
              <p>XYZ Company</p>
            </div>
            <div className="exp-content exp-right">
              <h3>Job Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim, quis ultrices mi lacinia a. Duis
                nec tempus mauris. Donec eget lectus vitae libero consequat
                sodales sit amet eu mauris. Suspendisse potenti. Integer id
                quam tincidunt, hendrerit enim vel, ullamcorper metus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
