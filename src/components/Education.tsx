import React from 'react';

interface EducationProps {
    educationItems: string[];
}

const Education: React.FC<EducationProps> = ({ educationItems }) => {
    return (
        <section>
            <h2>Education</h2>
            <ul>
                {educationItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default Education;