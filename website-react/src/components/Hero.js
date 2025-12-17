import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero container">
            <h1>Analytics Engineer, Frontend Developer &amp; Crypto fan</h1>
            <p>I track websites, automate processes and learn BTC and Nostr</p>
            <div className="float-area">
                <img src="/img/avatar.jpeg" alt="my avatar" className="avatar" />
            </div>
            <img src="/img/background.png" alt="Hero Footer Image" className="hero-footer container" />
        </section>
    );
};

export default Hero;

