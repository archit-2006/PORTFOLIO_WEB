import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="bg-background min-h-screen relative selection:bg-pastel-blue selection:text-primary-dark font-sans text-primary-dark">
      <CursorGlow />
      <Navbar />
      <main className="w-full mx-auto flex flex-col items-center overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Projects />
              {/* <Experience /> */}
              <About />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
      
      <footer className="w-full py-8 text-center text-sm text-primary-light bg-white border-t border-pastel-violet/50">
        <p>© {new Date().getFullYear()} Archit.dev. Built with React & Tailwind.</p>
      </footer>
    </div>
  )
}

export default App
