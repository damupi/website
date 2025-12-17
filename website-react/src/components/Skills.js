import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills container">
            <div className="card-container js-scroll fade-in-bottom">
                <div className="card">
                    <span className="material-symbols-rounded" data-card="tag" alt="Digital Analyts">sell</span>
                    <h5>Analytics Engineer</h5>
                    <p>Give me a website or an app, and I'll track it for you.</p>
                    <h6>Tracking tools:</h6>
                    <ul>
                        <li>GTM</li>
                        <li>Tealium</li>
                        <li>GA4</li>
                        <li>MixPanel</li>
                        <li>Metrika</li>
                        <li>...</li>
                    </ul>
                </div>
                <div className="card">
                    <span className="material-symbols-rounded" data-card="code" alt="Frontend Developer Logo">terminal</span>
                    <h5>Frontend Developer</h5>
                    <p>I love to see how websites look like after a few lines of code on them.</p>
                    <h6>Code Languages:</h6>
                    <span>HTML, CSS, JS, Git</span>
                    <h6>Coding tools:</h6>
                    <ul>
                        <li>VS Code</li>
                        <li>Github Desktop</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;

