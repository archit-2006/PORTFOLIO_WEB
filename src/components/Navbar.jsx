import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
           element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      window.history.pushState(null, '', hash);
      document.getElementById(hash.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b-4 border-blue-300">
      <div className="container mx-auto px-6 lg:px-12 py-2 md:py-3 flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center select-none cursor-pointer">
          <img src={logo} alt="Archit.dev Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-dark">
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-google-red transition-colors cursor-pointer">Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-google-yellow transition-colors cursor-pointer">Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-google-green transition-colors cursor-pointer">Contact</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-google-blue transition-colors cursor-pointer">About</a>
        </div>
        <a 
          href="https://drive.google.com/uc?export=download&id=1132cEIbgmiwUyIdhAmRyv9pS0WwkJ9q0" 
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex px-6 py-2 rounded-full text-white font-bold bg-google-blue hover:bg-google-blue/90 transition-colors shadow-md hover:shadow-lg cursor-pointer"
        >
          Resume 
        </a>
      </div>
    </nav>
  );
}
