import React from 'react'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-background min-h-screen relative selection:bg-pastel-blue selection:text-primary-dark font-sans text-primary-dark">
      <CursorGlow />
      <Navbar />
      <main className="w-full mx-auto flex flex-col items-center overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="w-full py-8 text-center text-sm text-primary-light bg-white border-t border-pastel-violet/50">
        <p>© {new Date().getFullYear()} Archit.dev. Built with React & Tailwind.</p>
      </footer>
    </div>
  )
}

export default App
