import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Samsung Website Clone',
      description:
   'Developed a responsive and visually engaging Samsung website clone using modern web technologies. The site showcases strong front-end development skills and a keen eye for design. Key features include an Add to Cart system, image upload functionality, and user authentication.',
      tech: ['ReactJS', 'Bootstrap', 'CSS',"NodeJS",'MongoDB','ExpressJS','Redux'],
    },
    {
      title: 'Boat Website Clone',
      description:
        'Crafted a fully adaptive and visually appealing replica of the boAt lifestyle website, showcasing proficiency in modern front-end development. The site includes features such as shopping cart integration, input validation, image submission, and secure user login. Focused on delivering an intuitive browsing experience with attention to responsiveness, performance, and user accessibility.',
      tech: ['JavaScript', 'HTML', 'CSS',"NodeJS",'MongoDB','ExpressJS','ReactStrap'],
    },
    {
      title: 'Get Store',
      description:
        'It provides users with a modern shopping experience. It features a clean,responsive UI with product listings, a search functionality, and a cart.Implemented user authentication (login/signup), allowing users to place orders and manage their profiles, and created an admin panel for product and order management, product images and prices are dynamically displayed.',
      tech: ['HTML', 'CSS', 'JavaScript','ReactJS'],
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section fade-in">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="skills-carousel">
            {projectList.map((project, index) => (
              <div className="skills-card glass-box" key={index}>
                <h2 className="text-highlight mb-3">{project.title}</h2>
                <p>{project.description}</p>
                <p className="text-muted small">
                  <strong>Technologies:</strong> {project.tech.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact container-fluid" >
        <div className='contact-info'>
         <div>
          <i className="bi bi-telephone-fill me-2 text-info"></i>
          +91 9994067710
         </div>
         <div>
          <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
          Coimbatore
        </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
