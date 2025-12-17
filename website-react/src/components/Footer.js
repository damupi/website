import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Check initial theme
        const colorMode = document.documentElement.getAttribute('color-mode');
        setIsDarkMode(colorMode === 'dark');

        // Watch for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'color-mode') {
                    const newMode = document.documentElement.getAttribute('color-mode');
                    setIsDarkMode(newMode === 'dark');
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['color-mode']
        });

        return () => observer.disconnect();
    }, []);

    const theme = isDarkMode ? 'dark' : 'light';

    return (
        <footer id="footer" className="footer container">
            <svg width="77" height="84" viewBox="0 0 516 563" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <ellipse stroke="#ff0000" strokeWidth="20" ry="87.79562" rx="247.99999" id="svg_1" cy="283" cx="257.99999" fill="none" />
                    <line stroke="#ff0000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="undefined" id="svg_2" y2="553.10233" x2="258" y1="84" x1="258" fill="none" />
                    <line stroke="#ff0000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" id="svg_3" y2="50" x2="258" y1="10" x1="258" fill="none" />
                </g>
            </svg>

            <p className="slogan">Love me or hate me, but mean it.</p>

            <div id="contact" className="container-footer">
                <a href="mailto:damupi[at]damupi.com" target="_blank" rel="noopener noreferrer">
                    <img src={`/img/email-${theme}.png`} alt="email image" data-social_img="email" />
                </a>
                <a href="https://t.me/damupi" target="_blank" rel="noopener noreferrer">
                    <img src={`/img/telegram-${theme}.png`} alt="telegram image" data-social_img="telegram" />
                </a>
                <a href="https://x.com/damupi/" target="_blank" rel="noopener noreferrer">
                    <img src={`/img/twitterx-${theme}.png`} alt="twitter image" data-social_img="twitter" />
                </a>
                <a href="https://njump.me/npub1hka7d6gsy2hetge3amg47png43r9t6m7k5w8s6yhhh9q33cd6j4q0nrvth" target="_blank" rel="noopener noreferrer">
                    <span>Nostr</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

