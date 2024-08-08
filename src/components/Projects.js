import React from 'react';
import './Projects.css';
import movieRecommendationImage from './assets/recommend.png'; // Import your project images
import ecomImage from './assets/ecom.png';
import movieImage from './assets/movie.png';
import todoImage from './assets/todo.png';
import blogImage from './assets/blog.png';
import ebookImage from './assets/ebook.png';
const projects = [
  {
    title: 'Ecommerce Beverage Website',
    description: 'Ecommerce Beverage Website is a simple project of an ecommerce platform developed using HTML, CSS, and JavaScript. Users can place orders and buy items.',
    image: ecomImage,
    link1: 'https://github.com/Shresthakhya7/project',
    link2: 'https://Shresthakhya7.github.io/project',
  },
  {
    title: 'ToDo List App',
    description: 'A simple ToDo List App developed using React.js. Users can add, manage, and order their tasks according to their necessity.',
    image: todoImage,
    link1: 'https://github.com/Shresthakhya7/todolist',
    link2: 'https://Shresthakhya7.github.io/todolist',
  },
  {
    title: 'Movie Projects',
    description: 'Movie Projects was developed using Python with the Django framework. This project is a basic implementation of CRUD operations.',
    image: movieImage,
    link1: 'https://github.com/Shresthakhya7/python-django-project',
  },
  {
    title: 'Blog Management Application',
    description: 'Blog Management Application is a project developed using Django Rest Framework and intgerated with Frontend application React Js.',
    image: blogImage,
    link1: 'https://github.com/Shresthakhya7/API/tree/master',
  },
  {
    title: 'Ebook Management System',
    description: 'Ebook Management System is a used to store, manage and analyze the digital books where user can read the books and records the details about user of reading books. ',
    image: ebookImage,
    link1: 'https://github.com/Shresthakhya7/ebook-management-system',
  },
  
  {
    title: 'Movie Recommendation System',
    description: 'Movie Recommendation System is a project developed using Python Django. It uses collaborative filtering with cosine similarity and Pearson correlation coefficient to recommend movies to users.',
    image: movieRecommendationImage,
    link1: 'https://github.com/Shresthakhya7/movie-recommendation-system',
  },
  
  

  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2 className='p'>Projects</h2>
      <div className="project-row">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="card-head">{project.title}</h2>
            <p className="card-details">{project.description}</p>
            <a href={project.link1} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon"></i>
            </a>
            {project.link2 &&(
            <a href={project.link2} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-edge icon"></i>
            </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
