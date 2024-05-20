import React from 'react';
import './Education.css'; // Import CSS for styles

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h1 className="education-heading">Education</h1>

      <div className="current-education-container">
        <div className="matrix">
          <div className="matrix-row">
            <div className="matrix-cell">
              <h3>Secondary Education Examination</h3>
              <p>Naulo Jyoti English School</p>
              <p>Passed Year: 2073</p>
              <p>CGPA: 3.70</p>
            </div>
            <div className="matrix-cell">
              <h3>10+2</h3>
              <p>Khwopa Secondary School</p>
              <p>Passed Year: 2076</p>
              <p>CGPA: 3.24</p>
            </div>
            <div className="matrix-cell">
              <h3>Bachelor (Bsc. CSIT)</h3>
              <p>Bhaktapur Multiple Campus</p>
              <p>Tribhuvan University</p>
              <p>Currently: Eight semester</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
