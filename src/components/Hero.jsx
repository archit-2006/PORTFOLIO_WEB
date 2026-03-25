import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
    >
      {/* Decorative abstract shapes with Google colors */}
      <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-google-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-[25%] right-[15%] w-80 h-80 bg-google-red rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-google-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-[10%] right-[25%] w-72 h-72 bg-google-green rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '6s' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center max-w-3xl"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, shadow: "0px 0px 0px rgba(0,0,0,0)" }}
          animate={{ scale: 1, opacity: 1, boxShadow: "0px 10px 30px rgba(237, 233, 254, 0.8)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white mb-8 border-4 border-white flex items-center justify-center overflow-hidden shadow-sm"
        >
          {/* Minimal Avatar Placeholder */}
          <span className="text-4xl sm:text-5xl font-bold text-google-blue">
            A.
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-primary-dark mb-4">
          Hi, I'm <span className="inline-flex">
            <span className="text-google-blue">A</span>
            <span className="text-google-red">r</span>
            <span className="text-google-yellow">c</span>
            <span className="text-google-blue">h</span>
            <span className="text-google-green">i</span>
            <span className="text-google-red">t</span>
          </span>
        </h1>
        
        <div className="text-xl sm:text-3xl text-primary-light font-medium h-12 sm:h-16 mb-8 mt-2">
          <span>I am a </span>
          <span className="font-semibold text-primary-dark">
            <Typewriter
              words={['Software Developer', 'AI Engineer', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScroll}
          className="mt-4 px-8 py-3 bg-google-blue text-white font-bold rounded-full shadow-lg shadow-google-blue/30 hover:bg-google-blue/90 hover:shadow-google-blue/50 transition-all duration-300 transform"
        >
          View My Work
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce cursor-pointer text-google-red hover:text-google-blue transition-colors z-10"
        onClick={handleScroll}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
