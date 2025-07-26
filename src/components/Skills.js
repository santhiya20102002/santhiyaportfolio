import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'ReactJS'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'VS Code','Figma'],
    },
    {
      title: 'Backend',
      skills: ['Nodejs', 'Expressjs' ,'Mongodb','SQL'],
    },
    {
      title: 'Other',
      skills: ['C', 'Basic UI/UX'],
    },
  ];

  return (
    <section id="skills" className="skills-section fade-in skills-carousel ps-5">
      <div className="container ">
        <h2 className="section-title">Skills</h2>
        <div className="skills-carousel">
          {skillGroups.map((group, index) => (
            <div className="skills-card glass-box" key={index} style={{ wordWrap: "break-word",width:"100px"}}>
              <h3 className="text-highlight mb-3">{group.title}</h3>
              <ul className="list-unstyled">
                {group.skills.map((skill, i) => (
                  <li key={i}>
                    <i className="bi bi-check-circle-fill text-info me-2"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <div className="skills-row-wrapper">
          {skillGroups.map((group, index) => (
            <div className="skills-card glass-box" key={index}>
              <h5 className="text-highlight mb-3">{group.title}</h5>
              <ul className="list-unstyled">
                {group.skills.map((skill, i) => (
                  <li key={i} className="mb-2">
                    <i className="bi bi-check-circle-fill text-info me-2"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
