import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stack from './components/Stack'
import WhatIBuild from './components/WhatIBuild'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-mono">
      <Header />
      <main>
        <Hero />
        <Stack />
        <WhatIBuild />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
