import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import './Contact.css'; // Import your CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      number: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_1ha22dq', 'template_qbji9bf', e.target, 'Ke2WQrXG7QqBs-AuM')
        .then((result) => {
          alert('Message Sent, We will get back to you shortly', result.text);
        }, (error) => {
          alert('An error occurred, Please try again', error.text);
        });
  
      setFormData({
        name: '',
        email: '',
        number: '',
        message: ''
      });
    };
  return (
    <section id="contact">
      <div className="center">
        <h2 className="font">Contact Me</h2>
        </div>
        <div className='contact'>
        <div className='form'>
        <p>Wanna Send any messages?</p>
        <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label><br></br>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Email</label><br>
              </br>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Mobile Number</label><br>
              </br>
              <input type="text" name="number" value={formData.number} onChange={handleChange} required />
            </div>
            <div>
              <label>Message</label><br></br>
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Send</button>
          </form>
          </div>
        
      
      <div className="icontent">
      <p>Can also connect through my email or social media!</p>
        <div className="left">
          <div className="socialLinks">
            <a href="https://www.linkedin.com/in/shreejan-khya-shrestha-30016a2a9/" target="_blank" rel="noopener noreferrer">
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
      </div>
    </section>
  );
};

export default Contact;
