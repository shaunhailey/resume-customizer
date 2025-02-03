import React from 'react';

interface SkillsProps {
    selectedSkills: string[];
}

const Skills: React.FC<SkillsProps> = ({ selectedSkills }) => {
    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {selectedSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;