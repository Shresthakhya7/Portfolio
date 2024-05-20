import React from 'react';
import profileImage from './assets/logo.jpg'; // Import your profile image
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import './About.css'; // Import CSS for styles

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="text">
          <h1>About Me</h1>
          <p>
            A self-driven and motivated Bsc. CSIT student proficient in problem solving with a keen
            ability to learn quickly, seeking internship opportunities to further enhance technical
            skills, contribute to real-world projects and gain valuable industry experience.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/shreejan-khya-30016a2a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin cicon"></i>
            </a>
            <a
              href="https://github.com/Shresthakhya7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github cicon"></i>
            </a>
            <a
              href="https://www.facebook.com/shreejan.khya7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook cicon"></i>
            </a>
            <a
              href="https://www.instagram.com/shrestha_khya7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram cicon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
