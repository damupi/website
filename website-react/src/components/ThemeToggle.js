import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Check system preference on mount
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        document.documentElement.setAttribute('color-mode', prefersDark ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.setAttribute('color-mode', newMode ? 'dark' : 'light');
    };

    return (
        <div className="theme-switch-wrapper">
            <em id="mode-label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</em>
            <label className="theme-switch" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                />
                <div className="slider round">
                    <span className="slider-icon"></span>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;

