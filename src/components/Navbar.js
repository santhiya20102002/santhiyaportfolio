import React from 'react';
import './Navbar.css';
import { useEffect } from 'react';

const Navbar = () => {
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
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm ">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-outline-info px-3 py-1 rounded-pill ms-2"
                href="https://drive.google.com/file/d/1s3vZYF2DyraTyrXXYE2lk7KBIQchceAQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <div style={{ display: "flex", gap: "20px", paddingLeft: "700px" }}>
              <li>
                <a
                  href="https://github.com/santhiya20102002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="bi bi-github fs-5 text-light"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/santhiya-thangavel-029802319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="bi bi-linkedin fs-5 text-light"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:santhiya6277@gmail.com"
                  className="nav-link"
                >
                  <i className="bi bi-envelope-fill fs-5 text-light"></i>
                </a>
              </li>
              
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
