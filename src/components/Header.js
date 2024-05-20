import React,{useEffect} from 'react';
import './header.css';

const Header = () => {
  // Function to handle smooth scrolling
  const handleNavigationClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1); // Get the target section id
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth' // Smooth scroll behavior
      });
    }
  

  const navbarList = document.querySelector('.navbar ul');
  navbarList.classList.remove('active');
};
  useEffect(()=>{
    const menuIcon=document.querySelector('.menu-icon');
    const navbarList=document.querySelector('.navbar ul');
    const handleMenuToggle =() => {
      navbarList.classList.toggle('active');
    };
    menuIcon.addEventListener('click',handleMenuToggle);
    return()=>{
        menuIcon.removeEventListener('click',handleMenuToggle);
    };

  },[]);

  return (
    <header className='fixed-header'>
      <h1 className='logo'><a href='#intro' onClick={handleNavigationClick}>Shreejan Khya</a></h1>
      <nav className='navbar'>
      <div className="menu-icon">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul>
          <li><a href="#about" onClick={handleNavigationClick}>About</a></li>
          <li><a href="#education" onClick={handleNavigationClick}>Education</a></li>
          <li><a href="#skill" onClick={handleNavigationClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleNavigationClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleNavigationClick}>Contact</a></li>
        </ul>
      </nav>
    </header>


    
  );
};

export default Header;
