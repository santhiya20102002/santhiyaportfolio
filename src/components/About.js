import React from 'react';
import './About.css';


const About = () => {
  return (
    <section id="about" className="about-section fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7">
            <div className="about-text">
              <p>👋 Hello! I'm <strong>Santhiya</strong>, a <span>Fullstack Developer</span> passionate about crafting clean, modern user interfaces.</p>
              <p>🎓 I completed my <strong>B.E. in ECE</strong> from Sri Eshwar College of Technology with a CGPA of 9.02.</p>
              <p>💡I'm a passionate and detail-oriented full stack web developer with a strong interest in building scalable, efficient, and user-friendly web applications. I specialize in both front-end and back-end development, using technologies like HTML, CSS, JavaScript, Node.js, and modern frameworks. I enjoy transforming complex problems into clean, functional solutions and continuously strive to expand my knowledge through hands-on development and real-world challenges.</p>
      
              <p>🚀 I'm eager to join a team that values clean code, collaboration, and continuous learning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
