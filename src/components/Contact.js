import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import './Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <section id="contact">
      <div className="center">
        <h2 className="font">Contact Me</h2>
        <p>Reach out to me through email or social media!</p>
      </div>
      <div className="icontent">
        <div className="left">
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/shreejan-khya-30016a2a9/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icon"></i>
            </a>
            <a href="https://github.com/Shresthakhya7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon"></i>
            </a>
            <a href="https://www.facebook.com/shreejan.khya7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook icon"></i>
            </a>
            <a href="https://www.instagram.com/shrestha_khya7/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icon"></i>
            </a>
          </div>
        </div>
        <div className="right">
          <p className='em'>Email: shresthakhya7@gmail.com</p>
          <p className='em'>Mobile no: +9779866316333</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
