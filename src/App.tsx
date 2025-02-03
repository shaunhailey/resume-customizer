import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Resume from './pages/Resume';
import { Experience } from './data/experience';

interface SkillCategory {
  category: string;
  items: string[];
}

interface Education {
  institution: string;
  degree: string;
}

const App: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<SkillCategory[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<Experience[]>([]);
  const [selectedEducation, setSelectedEducation] = useState<Education[]>([]);

  const handleSelectionChange = (selection: {
    skills: SkillCategory[];
    experience: Experience[];
    education: { institution: string; degree: string }[];
  }) => {
    setSelectedSkills(selection.skills);
    setSelectedExperience(selection.experience);
    setSelectedEducation(selection.education);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard onSelectionChange={handleSelectionChange} />} />
          <Route path="/resume" element={<Resume skills={selectedSkills} experience={selectedExperience} education={selectedEducation} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;