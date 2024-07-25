import React from 'react';
import profileImage from './assets/Photo.png'; // Import your profile image
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
          Hi, I'm Shreejan Khya Shrestha, a Bsc. CSIT student of Bhaktapur Multiple Campus with a keen interest in web development. 
          I am proficient in frontend technologies like HTML, CSS, JavaScript, and frameworks such as React and Bootstrap. 
          On the backend, I have experience with Python and frameworks like Django and databases like MySQL. 
          I have also little bit knowledge about Node.js,Express.js and MongoDB.
          Additionally, I have a solid understanding of version control with Git and deployment processes. 
          During my studies, I built several academic projects, including a e-commerce beverage website, 
          movie recommendation syatem, ebook management system
          and a Todo list application. 
          For the e-commerce website, I developed the frontend using HTML, CSS and JavaScript.
          The movie recommendation system  featured user authentication and data storage, using default database provided by Django. 
          In movie recommendation system  collaborative fitering system is used using cosine similarity and pearsons correlation algorithms, 
          where users get movie recommendation based on their behaviours and preferences.
          The Todo list application is developed using React where user can manage their tasks.
          My passion for web development stems from a desire to understand and contribute to all layers of web applications. 
          I enjoy creating seamless and interactive user experiences on the frontend, as well as developing efficient and secure backend systems. 
          My goal is to become a proficient web developer who can build and maintain complex web applications. 
          I am actively seeking opportunities to kickstart my career web development, 
          where I can apply my skills and contribute to innovative projects.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/shreejan-khya-30016a2a9/"
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
