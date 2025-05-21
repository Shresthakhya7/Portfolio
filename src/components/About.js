import React from 'react';
import profileImage from './assets/photo.jpg'; // Import your profile image
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import './About.css'; // Import CSS for styles

const About = () => {
  return (
    <section id="about" className="about-container gradient-background">
      <div className="about_content">
      <div className='profile-pic-container'>
        <img src={profileImage} alt="Profile" className="profile-pic" />
        </div>
        <div className="text">
          <h1>About Me</h1>
          <p>
          Hi, I'm Shreejan Khya Shrestha, a B.Sc. CSIT graduate from Bhaktapur Multiple Campus with a strong interest in Backend development. I recently completed a 3-month internship as a Python Developer at Quickfox Consulting, 
          where I worked on the QuickRPA project, contributing to both frontend (React.js) and backend (Django) development. 
          I implemented features like role-based access control and a file download module, gaining hands-on experience with REST APIs, RPA, and system workflows.
          I’m skilled in Python, Django, React.js, HTML, CSS, JavaScript, and familiar with REST framework, RPA, PostgreSQl, Git, and deployment practices. 
          My academic and personal projects include a movie recommendation system using collaborative filtering, a RESTful blog application, an e-commerce website, and a React-based todo list.
          A self-driven and quick learner, I thrive in collaborative environments and enjoy solving real-world problems through clean and scalable code. 
          I’m currently seeking entry-level opportunities where I can apply my skills, contribute to impactful projects, and continue growing as a Backend developer.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/shreejan-khya-shrestha-30016a2a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin icon"></i>
            </a>
            <a
              href="https://github.com/Shresthakhya7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github icon"></i>
            </a>
            <a
              href="https://www.facebook.com/shreejan.khya7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook icon"></i>
            </a>
            <a
              href="https://www.instagram.com/shrestha_khya7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram icon"></i>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
