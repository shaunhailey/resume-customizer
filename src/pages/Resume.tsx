import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import barLine from '../data/image1.png';
import '../styles/Resume.css';
import { Experience } from '../data/experience';

interface ResumeProps {
  skills: { category: string; items: string[] }[];
  experience: Experience[];
  education: { institution: string; degree: string }[];
}

const Resume: React.FC<ResumeProps> = ({ skills, experience, education }) => {
  const navigate = useNavigate();
  return (
    <div className="print-container" style={{ marginLeft: '10px' }}>
      <img 
        src={barLine}
        alt="barLine"
        style={{ 
          width: '100%', 
          height: '6.67px', 
          marginLeft: '0.00px', 
          marginTop: '0.00px', 
          transform: 'rotate(0.00rad) translateZ(0px)', 
          WebkitTransform: 'rotate(0.00rad) translateZ(0px)' 
        }}
      />
      <Header />
      <div className="no-print" style={{ position: 'absolute', top: 10, right: 10 }}>
        <button className="button-link" onClick={() => navigate('/')}>Back to Dashboard</button>
      </div>
      <div>
        <h3 className='section-title'>Skills</h3>
        {skills.map(skillCategory => (
          <div key={skillCategory.category}>
            <div>
              <span className="category-title">{skillCategory.category}</span>: <span className='skill-item'>{skillCategory.items.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className='section-title'>Experience</h3>
        {experience.filter(exp => exp.selected).map(exp => (
          <div key={exp.company}>
            <div style={{paddingBottom: '10px', paddingTop: '10px'}}>
                <span className="company-name">{exp.company}</span> - <span className="job-title">{exp.title}</span>
            </div>
            {exp.datesSelected && <div className='job-date'>{exp.dates}</div>}
            <ul>
              {exp.items.filter(item => item.selected).map(item => (
                <li key={item.description}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
      <h3 className='section-title'>Education</h3>
      <div className="education-container">
          {education.map(item => (
            <div key={item.institution} className="education-item">
              <div className="institution">{item.institution}</div>
              <div className="degree">{item.degree}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;