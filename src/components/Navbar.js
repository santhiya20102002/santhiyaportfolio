import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('.navbar');

    const onScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-dark fixed-top shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo/Brand */}
        

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon bg-light">=</span>
        </button>

        {/* Collapsible Menu */}
        <div className={`custom-collapse ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav ms-auto text-uppercase" onClick={closeNavbar}>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-info px-3 py-1 rounded-pill ms-2"
                href="https://drive.google.com/file/d/1s3vZYF2DyraTyrXXYE2lk7KBIQchceAQ/view?usp=sharing"
                target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/santhiya20102002" target="_blank" rel="noopener noreferrer" className="nav-link">
                <i className="bi bi-github fs-5 text-light"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/santhiya-thangavel-029802319/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <i className="bi bi-linkedin fs-5 text-light"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="mailto:santhiya6277@gmail.com" className="nav-link">
                <i className="bi bi-envelope-fill fs-5 text-light"></i>
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <i className="bi bi-telephone-fill me-2 text-info"></i> +91 9994067710
            </li>
            <li className="nav-item d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-2 text-danger"></i> Coimbatore
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
