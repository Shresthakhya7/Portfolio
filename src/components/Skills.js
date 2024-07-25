import React from 'react';
import './Skills.css';

const Skills = () => {

  return (
    <>
    <section id="skill">
    <div className="skills_section">
            <h2 className="skills_head">My Skills</h2>
            <p className='area'>Here is my skills to represent my Expertise</p>
        <div className="second_head">
          <h2>Technical Skills</h2>
        </div>

        <div className="skills_main">
            <div className="skill_bar">
                          <div className="info">
                    <p>HTML</p>
                    
                </div>
                <div className="bar">
                    <span className="html"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>CSS</p>
                    
                </div>
                <div className="bar">
                    <span className="css"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>JavaScript</p>
                    
                </div>
                <div className="bar">
                    <span className="js"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>C & C++</p>
                    
                </div>
                <div className="bar">
                    <span className="c"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>React js</p>
                    
                </div>
                <div className="bar">
                    <span className="react"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Python</p>
                    
                </div>
                <div className="bar">
                    <span className="python"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Django</p>
                  
                </div>
                <div className="bar">
                    <span className="python"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Node js</p>
                  
                </div>
                <div className="bar">
                    <span className="node"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Express js</p>
                    
                </div>
                <div className="bar">
                    <span className="express"></span>
                </div>
            </div>
            <div className="skill_bar">
                <div className="info">
                    <p>Adobe Photoshop</p>
                    
                </div>
                <div className="bar">
                    <span className="adobe"></span>
                </div>
            </div>
        </div>

        <div className="last_head">
          <h2>Professional Skills</h2>
        </div>
        <div className="skills-container">
        <div className="skill-grid">
        <div className="info">
          <p><span>Collaboration</span></p>
        </div>
        </div>
      <div className="skill-grid">
      <div className="info">
        <p><span>Communication</span></p>
      </div>
      </div>
      
      <div className="skill-grid">
      <div className="info">
        <p><span>Problem Solving</span></p>
      </div>
      </div>
      <div className="skill-grid">
      <div className="info">
        <p><span>Teamwork</span></p>
      </div>
      </div>
      <div className="skill-grid">
      <div className="info">
        <p><span>Time Management</span></p>
      </div>
      </div>
    </div>
  </div>  

    </section>
</>
  );
};

export default Skills;
