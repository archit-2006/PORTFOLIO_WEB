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
      className="relative min-h-screen w-full flex justify-center items-center px-6 pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* Decorative abstract shapes with Google colors */}
      <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-google-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-[25%] right-[15%] w-80 h-80 bg-google-red rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-google-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-[10%] right-[25%] w-72 h-72 bg-google-green rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '6s' }} />
      
      <div className="z-10 w-full max-w-[1550px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center px-4 md:px-8">
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left lg:pl-12"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-google-blue/10 border border-google-blue/20 font-bold text-sm tracking-widest uppercase mb-8 shadow-sm">
            <span className="text-google-blue">welcome to </span>
            <span className="text-google-red">Archit</span>
            <span className="text-black">.</span>
            <span className="text-google-red">dev</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-primary-dark mb-6 leading-[1.1]">
            Hi, I'm <br/>
            <span className="inline-flex mt-2">
              <span className="text-google-blue">A</span>
              <span className="text-google-red">r</span>
              <span className="text-google-yellow">c</span>
              <span className="text-google-blue">h</span>
              <span className="text-google-green">i</span>
              <span className="text-google-red">t</span>
              <span className="text-primary-dark">.</span>
            </span>
          </h1>
          
          <div className="text-xl sm:text-3xl lg:text-4xl text-primary-light font-bold h-12 sm:h-16 mb-8">
            <span className="text-primary-dark/60">I am a </span>
            <span className="text-primary-dark">
              <Typewriter
                words={['Software Developer', 'UI/UX Enthusiast', 'Problem Solver']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-lg sm:text-xl text-primary-dark/70 font-medium max-w-lg mb-12 leading-relaxed">
            I craft modern, scalable, and visually stunning digital experiences that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScroll}
              className="px-8 py-4 bg-google-blue text-white font-black rounded-full shadow-lg shadow-google-blue/30 hover:bg-[#3367d6] hover:shadow-google-blue/50 transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/archit-2006"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white border-4 border-blue-300 text-primary-dark font-black rounded-full shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              GitHub Profile
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start items-center w-full max-w-[650px] lg:max-w-[800px] xl:max-w-[900px] mx-auto lg:ml-0"
        >
          {/* Blur aura behind the image */}
          <div className="absolute w-[120%] h-[120%] bg-gradient-to-tr from-google-blue/30 via-google-red/20 to-google-yellow/30 blur-[80px] rounded-full animate-pulse z-0"></div>
          
          <div className="relative z-10 w-full flex justify-center items-center">
             <div className="relative group mask-radial-fade w-full overflow-hidden flex justify-center items-center rounded-[3rem]">
                  {/* Blurred copy of image for glowing effect */}
                  <img src="/hero-image.png" alt="" className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-105" />
                  {/* Actual Image */}
                  <img src="/hero-image.png" alt="Developer Illustration" className="relative w-full max-h-[75vh] lg:max-h-[660px] object-contain z-10 drop-shadow-2xl" />
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 animate-bounce cursor-pointer text-google-red hover:text-google-blue transition-colors z-20 left-1/2 -translate-x-1/2"
        onClick={handleScroll}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
