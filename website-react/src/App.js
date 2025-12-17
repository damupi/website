import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
