import React from 'react';
import './Projects.css';
import movieRecommendationImage from './assets/recommend.png'; // Import your project images
import ecomImage from './assets/ecom.png';
import movieImage from './assets/movie.png';
import todoImage from './assets/todo.png';

const projects = [
  {
    title: 'Ecommerce Beverage Website',
    description: 'Ecommerce Beverage Website is a simple project of an ecommerce platform developed using HTML, CSS, and JavaScript. Users can place orders and buy items.',
    image: ecomImage,
    link: 'https://github.com/Shresthakhya7/project',
  },
  {
    title: 'Movie Projects',
    description: 'Movie Projects was developed using Python with the Django framework. This project is a basic implementation of CRUD operations.',
    image: movieImage,
    link: 'https://github.com/Shresthakhya7/python-django-project',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Movie Recommendation System is a project developed using Python Django. It uses collaborative filtering with cosine similarity and Pearson correlation coefficient to recommend movies to users.',
    image: movieRecommendationImage,
    link: 'https://github.com/Shresthakhya7/movie-recommendation-system',
  },
  {
    title: 'ToDo List App',
    description: 'A simple ToDo List App developed using React.js. Users can add, manage, and order their tasks according to their necessity.',
    image: todoImage,
    link: 'https://github.com/Shresthakhya7/todo-app',
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
