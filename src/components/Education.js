import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-experience-wrapper">
        {/* Education Column */}
        <div className="education-column">
          <h1 className="education-heading">Education</h1>
          <div className="current-education-container">
            <div className="matrix">
              <div className="matrix-row">
                <div className="matrix-cell">
                  <h3>Bachelor (B.Sc. CSIT)</h3>
                  <p>Bhaktapur Multiple Campus</p>
                  <p>Tribhuvan University</p>
                  <p>Passed Year: 2023</p>
                  <p>Percentage: 80.90%</p>
                </div>
                <div className="matrix-cell">
                  <h3>10+2</h3>
                  <p>Khwopa Secondary School</p>
                  <p>Passed Year: 2019</p>
                  <p>CGPA: 3.24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div className="experience-column">
          <h1 className="education-heading">Experience</h1>
          <div className="current-education-container">
            <div className="matrix">
              <div className="matrix-row">
                <div className="matrix-cell">
                  <h3>Python Developer Internship</h3>
                  <p>Quickfox Consulting</p>
                  <p>Sep 2024 - Dec 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
