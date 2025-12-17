import React from 'react';
import './Experience.css';

const Experience = () => {
    const companies = [
        {
            name: 'gambling.com',
            title: 'Gambling.com',
            description: 'Managed Google Analytics setup, configuration, and deployment via GTM across multiple web assets.',
            url: 'https://www.gambling.com/corporate'
        },
        {
            name: 'autoscout24',
            title: 'Autoscout24',
            description: 'Managed and developed digital tracking systems at AutoScout24, ensuring quality and compliance.',
            url: 'https://www.autoscout24.com/company'
        },
        {
            name: 'mytheresa',
            title: 'My Theresa',
            description: 'Ad-Tech Analyst, optimizing tracking and data feeds, enhancing quality and processes.',
            url: 'https://www.mytheresa.com'
        },
        {
            name: 'catenamedia',
            title: 'Catena Media',
            description: 'Analyze trends to understand customer behavior, deliver insights, track performance, and improve dashboards.',
            url: 'https://www.catenamedia.com/about-us/'
        },
        {
            name: 'havas',
            title: 'Havas',
            description: 'Implemented GTM, supported GA 360, Adobe tools, and created dashboards for better data visualization.',
            url: 'https://havasmedianetwork.com/'
        },
        {
            name: 'turespana',
            title: 'Turespaña',
            description: 'Created automated dashboards with GA API, managed GTM, and analyzed data using Yandex Metrica and Hotjar.',
            url: 'https://www.tourspain.es/en/activity-report-rules-regs-tourism/'
        }
    ];

    return (
        <section id="experience" className="experience container">
            <h2>Experience</h2>
            <p>This is a list of the companies I work/ed for:</p>

            <div className="companies container">
                {companies.map((company) => (
                    <div key={company.name} className="flip-card" data-company={company.name}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front"></div>
                            <div className="flip-card-back">
                                <h3>{company.title}</h3>
                                <p>{company.description}</p>
                                <a href={company.url} target="_blank" rel="noopener noreferrer" className="cta">
                                    Visit Website
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

