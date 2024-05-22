import React from 'react';
import Type from './Type.js';
import profileImage from './assets/shrestha.JPG'; // Import your profile image
import resumePDF from './resume.pdf'; // Import your resume PDF file
import './introStyles.css'; // Import external CSS file

const Intro = () => {
  
  // Function to handle opening the resume PDF
  const handleOpenPDF = () => {
    window.open(resumePDF, '_blank'); // Open PDF in a new tab
  };

  return (
    <section id="intro" className="container">
      <div className="content">
        <div className="text">
          <p className="greeting">Hey!</p>
          <p className="name">I am <span>Shreejan Khya Shrestha</span>.</p>
          
          <p className="role">
            I want to join an internship as </p>
          
          <Type/>
          <button className="button" onClick={handleOpenPDF}>
            View Resume
          </button>
        </div>
        <div className="imageContainer">
          <img src={profileImage} alt="Profile" className="image" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
