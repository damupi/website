import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav id="main-nav" className="container">
      <div id="nav-box" className="nav-box">
        <div className="logo">
          <svg width="77" height="84" viewBox="0 0 516 563" xmlns="http://www.w3.org/2000/svg">
            <g>
<ellipse stroke="#ff0000" strokeWidth="20" ry="87.79562" rx="247.99999" id="svg_1" cy="283" cx="257.99999" fill="none" />
              <line stroke="#ff0000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="miter" id="svg_2" y2="553.10233" x2="258" y1="84" x1="258" fill="none" />
              <line stroke="#ff0000" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" id="svg_3" y2="50" x2="258" y1="10" x1="258" fill="none" />
            </g>
          </svg>
        </div>
        {/* Desktop Menu */}
        <nav id="desktop-menu" className="desktop-menu">
          <ul>
            <li><a href="#intro">intro</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#contact">contact me</a></li>
          </ul>
        </nav>
        {/* End of Desktop Menu */}
        {/* Mobile Menu */}
        <nav className="mobile-menu">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <span id="burguer-menu" className="material-symbols-rounded">menu</span>
          </label>
          <div className="nav-mobile">
            <a href="#intro" data-text="Intro">Intro</a>
            <a href="#skills" data-text="Skills">Skills</a>
            <a href="#experience" data-text="Experience">Experience</a>
            <a href="#contact" data-text="Contact me">Contact me</a>
          </div>
        </nav>
        {/* End of Mobile Menu */}
      </div>
    </nav>
  );
};

export default Header;
