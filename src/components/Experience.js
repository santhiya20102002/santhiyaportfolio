import React from 'react';
import './Experience.css'; // Create this CSS file

const Experience = () => {
  return (
    <section id="experience" className="experience-section fade-in">
      <div className="container exp">
        <h2 className="section-title">Experience</h2>
        <div className="experience-wrapper glass-box">
          <div className="mb-4 expcontent">
            <h1 className="text-highlight">Creative Engineer Intern</h1>
            <p className="text-muted mb-1"><strong>Company:</strong> Amphisoft Technologies Pvt Ltd</p>
            <p className="text-muted"><strong>Duration:</strong> 2024 (7 Months)</p>
            <p>
              🚀 Gained hands-on experience with <strong className="text-highlight">HTML,CSS,JavaScript,Konvajs</strong>. <br />
              🛠 Develop Games based on the given design using Konva js framework for desktop and
              mobile view and manage the JSON file
              <br />
              🤝 Collaborated in team discussions, design reviews, and debugging sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
