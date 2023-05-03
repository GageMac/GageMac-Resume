import React from 'react';
import Carousel from './Carousel';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      image: 'https://picsum.photos/id/237/800/500',
      link: 'https://github.com/project1'
    },
    {
      name: 'Project 2',
      image: 'https://picsum.photos/id/238/800/500',
      link: 'https://github.com/project2'
    },
    {
      name: 'Project 3',
      image: 'https://picsum.photos/id/239/800/500',
      link: 'https://github.com/project3'
    },
    {
      name: 'Project 4',
      image: 'https://picsum.photos/id/240/800/500',
      link: 'https://github.com/project4'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <Carousel>
        {projects.map((project, index) => (
          <div key={index} className="carousel-item">
            <img src={project.image} alt={project.name} />
            <div className="carousel-caption">
              <h3>{project.name}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub Link
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
