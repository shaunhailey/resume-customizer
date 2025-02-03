import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <h2>Shaun Hailey</h2>
            <div className="title">Software Developer</div>
            <div>Phone: 813.760.5266</div>
            <div>Email: ediblelysol@gmail.com</div>
            <div>LinkedIn: https://www.linkedin.com/in/shaun-hailey-5a4473143/</div>
        </header>
    );
};

export default Header;