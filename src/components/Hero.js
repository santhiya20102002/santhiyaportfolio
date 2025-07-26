import React from 'react';
import profile from './profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <header id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title animate__animated animate__fadeInUp animate__delay-1s">
            Hi, I'm <span className="highlight">Santhiya</span>
          </h1>
          <h3 className="hero-subtitle animate__animated animate__fadeInUp animate__delay-2s">
            Fullstack Developer
          </h3>
          <p className="hero-skills animate__animated animate__fadeInUp animate__delay-2s">
            ReactJS | Bootstrap | JavaScript | Expressjs | Nodejs | Mongodb
          </p>
          <a
            href="#projects"
            className="btn btn-outline-light hero-btn animate__animated animate__fadeInUp animate__delay-3s"
          >
            View My Work
          </a>
        </div>
        <div className="hero-image">
          <img
            src={profile}
            alt="Santhiya"
            className="hero-img animate__animated animate__fadeInDown"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
