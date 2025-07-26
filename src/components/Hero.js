import React from 'react';
import profile from './profile.png'; // Replace with your actual image path
import './Hero.css'
const Hero = () => {
  return (
    <header id="hero">
      <div className="container hero-container text-center" style={{display:"flex"}}>
        
        <div style={{paddingLeft:"250px"}}>
        <h1 className="hero-title animate__animated animate__fadeInUp animate__delay-1s">
          Hi, I'm <span className="highlight">Santhiya</span>
        </h1>
         <h3 className="hero-subtitle animate__animated animate__fadeInUp animate__delay-2s" style={{fontSize:"30px",color:"burlywood"}}>
          Fullstack Developer
        </h3>
        <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-2s">
            ReactJS | Bootstrap | JavaScript | Expressjs | Nodejs | Mongodb
        </p>
        <a
          href="#projects"
          className="btn btn-outline-light hero-btn animate__animated animate__fadeInUp animate__delay-3s"
        >
          View My Work
        </a>
        </div>
        <div style={{paddingLeft:"250px"}}>
        <img
          src={profile}
          alt="Santhiya"
          className="hero-img animate__animated animate__fadeInDown"
          style={{height:"300px",width:"250px"}} 
        />
        </div>
      </div>
    </header>
  );
};

export default Hero;
