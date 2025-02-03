import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skills } from '../data/skills';
import { experienceItems, Experience, ExperienceItem } from '../data/experience';
import { educationItems } from '../data/education';
import '../styles/Dashboard.css';

interface DashboardProps {
  onSelectionChange: (selection: {
    skills: { category: string; items: string[] }[];
    experience: Experience[];
    education: { institution: string; degree: string }[];  
  }) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectionChange }) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(skills.flatMap(skillCategory => skillCategory.items));
  const [selectedExperience, setSelectedExperience] = useState<Experience[]>(experienceItems);
  const [selectedEducation, setSelectedEducation] = useState<{ institution: string; degree: string }[]>([]);
  const navigate = useNavigate();

  const handleSkillChange = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleExperienceChange = (experience: Experience) => {
    setSelectedExperience((prev) =>
      prev.map(e => e.company === experience.company ? { ...e, selected: !e.selected } : e)
    );
  };

  const handleExperienceItemChange = (experience: Experience, item: ExperienceItem) => {
    setSelectedExperience((prev) =>
      prev.map(e => e.company === experience.company ? {
        ...e,
        items: e.items.map(i => i.description === item.description ? { ...i, selected: !i.selected } : i)
      } : e)
    );
  };

  const handleExperienceDatesChange = (experience: Experience) => {
    setSelectedExperience((prev) =>
      prev.map(e => e.company === experience.company ? { ...e, datesSelected: !e.datesSelected } : e)
    );
  };

  const handleEducationChange = (item: { institution: string; degree: string }) => {
    setSelectedEducation((prev) =>
      prev.some(e => e.institution === item.institution && e.degree === item.degree)
        ? prev.filter(e => !(e.institution === item.institution && e.degree === item.degree))
        : [...prev, item]
    );
  };

  const handleSubmit = () => {
    onSelectionChange({
      skills: skills.map(skillCategory => ({
        category: skillCategory.category,
        items: selectedSkills.filter(skill => skillCategory.items.includes(skill))
      })),
      experience: selectedExperience,
      education: selectedEducation,
    });
    navigate('/resume');
  };

  return (
    <div>
      <h2>Select Items for Resume</h2>
      <button onClick={handleSubmit}>Update Resume</button>
      <div>
        <h3>Skills</h3>
        {skills.map(skillCategory => (
          <div key={skillCategory.category}>
            <h4>{skillCategory.category}</h4>
            {skillCategory.items.map(skill => (
              <label key={skill}>
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                />
                {skill}
              </label>
            ))}
          </div>
        ))}
      </div>
      <div>
        <h3>Experience</h3>
        {experienceItems.map(experience => (
          <div key={experience.company}>
            <label>
              <input
                type="checkbox"
                checked={selectedExperience.find(e => e.company === experience.company)?.selected || false}
                onChange={() => handleExperienceChange(experience)}
              />
              <span className="bold-text">{experience.company} - {experience.title}</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedExperience.find(e => e.company === experience.company)?.datesSelected || false}
                onChange={() => handleExperienceDatesChange(experience)}
              />
              Show Dates
            </label>
            <ul className="experience-items-list">
              {experience.items.map(item => (
                <li key={item.description}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedExperience.find(e => e.company === experience.company)?.items.find(i => i.description === item.description)?.selected || false}
                      onChange={() => handleExperienceItemChange(experience, item)}
                    />
                    {item.description}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h3>Education</h3>
        {educationItems.map(item => (
          <label key={item.institution}>
          <input
            type="checkbox"
            checked={selectedEducation.some(e => e.institution === item.institution && e.degree === item.degree)}
            onChange={() => handleEducationChange(item)}
          />
          {item.institution} - {item.degree}
        </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Update Resume</button>
    </div>
  );
}

export default Dashboard;