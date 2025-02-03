import React from 'react';

interface ExperienceProps {
    experiences: string[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <section>
            <h2>Experience</h2>
            <ul>
                {experiences.map((experience, index) => (
                    <li key={index}>{experience}</li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;