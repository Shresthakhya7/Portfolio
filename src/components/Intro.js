import React, { useState, useEffect } from 'react';
import profileImage from './assets/shrestha.JPG'; // Import your profile image
import resumePDF from './resume.pdf'; // Import your resume PDF file
import './introStyles.css'; // Import external CSS file

const Intro = () => {
  const [developerType, setDeveloperType] = useState('frontend'); // State to track developer type
  const [fadeClass, setFadeClass] = useState('fade-in'); // State to track the animation class

  // Function to toggle developer type and handle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out'); // Start fade-out animation
      setTimeout(() => {
        setDeveloperType((prevType) => (prevType === 'frontend' ? 'backend' : 'frontend'));
        setFadeClass('fade-in'); // Start fade-in animation
      }, 2000); // Wait for fade-out to complete before changing text and starting fade-in
    }, 3000); // Change type every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

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
            I want to join an internship as <span className={`developerType ${fadeClass}`}><strong>{developerType === 'frontend' ? 'Frontend' : 'Backend'}</strong> Developer</span>
          </p>
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
