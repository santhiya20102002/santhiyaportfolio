import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section fade-in">
        <h2 className="section-title">Education</h2>
      <div className="container" >

        <div className="education-carousel">
          <div className="education-box glass-box">
            <h2 className="text-highlight">B.E. - Electronics and Communication Engineering</h2>
            <h4 className="text-muted">Sri Eshwar College of Technology, Coimbatore</h4>
            <p className="mb-1"><strong>Duration:</strong> 2020 – 2024</p>
            <p><strong>CGPA:</strong> 9.02</p>
          </div>

          <div className="education-box glass-box">
            <h2 className="text-highlight">HSC - Higher Secondary Certificate</h2>
            <h4 className="text-muted">Mariyammal Girls Higher Secondary School</h4>
            <p className="mb-1"><strong>Duration:</strong> 2019 – 2020</p>
            <p><strong>Percentage:</strong> 71%</p> 
          </div>

          <div className="education-box glass-box">
            <h2 className="text-highlight">SSLC - Secondary School Leaving Certificate</h2>
            <h4 className="text-muted">Govt Higher Secondary School,Vadasithur</h4>
            <p className="mb-1"><strong>Duration:</strong> 2017 – 2018</p>
            <p><strong>Percentage:</strong> 87%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
