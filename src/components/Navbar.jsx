import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-pastel-blue">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-baseline gap-[1px] select-none text-2xl font-black tracking-tight">
          <span className="text-google-blue">A</span>
          <span className="text-google-red">r</span>
          <span className="text-google-yellow">c</span>
          <span className="text-google-blue">h</span>
          <span className="text-google-green">i</span>
          <span className="text-google-red">t</span>
          <span className="text-primary-dark">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-dark">
          <a href="#about" className="hover:text-google-blue transition-colors">About</a>
          <a href="#skills" className="hover:text-google-red transition-colors">Skills</a>
          <a href="#projects" className="hover:text-google-yellow transition-colors">Projects</a>
          <a href="#experience" className="hover:text-google-green transition-colors">Experience</a>
        </div>
        <a 
          href="#contact" 
          className="hidden md:inline-flex px-6 py-2 rounded-full text-white font-bold bg-google-blue hover:bg-google-blue/90 transition-colors shadow-md hover:shadow-lg"
        >
          Contact me
        </a>
      </div>
    </nav>
  );
}
