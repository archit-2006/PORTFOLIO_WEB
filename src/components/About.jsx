import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 w-full bg-white relative overflow-hidden">
      <div className="absolute top-[5%] right-[10%] w-72 h-72 bg-google-blue/10 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-72 h-72 bg-google-green/10 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">About Me</h2>
          <div className="w-24 h-1 bg-google-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="bg-google-red hover:bg-[#d33a2e] transition-colors duration-300 rounded-3xl p-8 shadow-lg flex flex-col items-center text-center relative overflow-hidden group">
              <h3 className="text-3xl font-black text-white mb-2 z-10 mt-4">Archit</h3>
              <p className="text-white/80 font-semibold mb-8 z-10 text-base">CS / Software & AI Enthusiast</p>

              <div className="w-full space-y-4 text-sm z-10">
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-white flex items-center gap-2 font-medium"><GraduationCap size={18} /> Education</span>
                  <span className="text-white font-semibold">BTech CSE</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-white flex items-center gap-2 font-medium"><MapPin size={18} /> Location</span>
                  <span className="text-white font-semibold">Mumbai</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-white flex items-center gap-2 font-medium"><Briefcase size={18} /> Status</span>
                  <span className="text-emerald-300 font-semibold">Available</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-white flex items-center gap-2 font-medium"><Mail size={18} /> Contact</span>
                  <a href="#contact" className="px-4 py-1.5 bg-white text-google-red font-bold rounded-full hover:bg-gray-100 transition-colors shadow-sm">Get in touch</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-7 lg:col-span-8"
          >
            <h3 className="text-3xl font-semibold text-primary-dark mb-6">
              Engineering solutions blending <span className="text-google-blue">Code</span> and <span className="text-google-red">AI</span>.
            </h3>
            <div className="space-y-4 text-lg text-primary-light leading-relaxed">
              <p>
                Hello! I'm a final-year Computer Science student passionate about building elegant, scalable software and exploring the transformative potential of Artificial Intelligence.
              </p>
              <p>
                My journey began with a simple curiosity about how things work behind the screen, which quickly evolved into a deep dive into full-stack development and machine learning algorithms. I thrive on solving complex problems and translating ideas into clean, efficient code.
              </p>
              <p>
                When I'm not coding or training ML models, you can find me reading up on modern system architecture, contributing to open-source, or refining my aesthetic intuition in UI/UX design.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
