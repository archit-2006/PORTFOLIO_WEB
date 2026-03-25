import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  { name: 'Python', category: 'Languages', proficiency: 'Advanced', color: 'bg-blue-100 text-blue-700' },
  { name: 'JavaScript', category: 'Languages', proficiency: 'Advanced', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'C++', category: 'Languages', proficiency: 'Intermediate', color: 'bg-indigo-100 text-indigo-700' },
  { name: 'React', category: 'Frameworks', proficiency: 'Advanced', color: 'bg-cyan-100 text-cyan-700' },
  { name: 'Node.js', category: 'Frameworks', proficiency: 'Advanced', color: 'bg-green-100 text-green-700' },
  { name: 'Tailwind CSS', category: 'Frameworks', proficiency: 'Advanced', color: 'bg-teal-100 text-teal-700' },
  { name: 'PyTorch', category: 'AI/ML', proficiency: 'Intermediate', color: 'bg-orange-100 text-orange-700' },
  { name: 'TensorFlow', category: 'AI/ML', proficiency: 'Intermediate', color: 'bg-amber-100 text-amber-700' },
  { name: 'Scikit-Learn', category: 'AI/ML', proficiency: 'Advanced', color: 'bg-sky-100 text-sky-700' },
  { name: 'Git', category: 'Tools', proficiency: 'Advanced', color: 'bg-red-100 text-red-700' },
  { name: 'Docker', category: 'Tools', proficiency: 'Intermediate', color: 'bg-blue-100 text-blue-700' },
  { name: 'AWS', category: 'Tools', proficiency: 'Beginner', color: 'bg-orange-100 text-orange-800' },
];

const categories = ['All', 'Languages', 'Frameworks', 'AI/ML', 'Tools'];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkills = activeFilter === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="py-24 px-6 w-full bg-background relative overflow-hidden">
      <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-google-red/10 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-80 h-80 bg-google-yellow/10 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-google-yellow mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat 
                    ? 'bg-google-blue text-white shadow-md shadow-google-blue/20 border-transparent' 
                    : 'bg-white text-primary-light border border-gray-200 hover:border-google-blue/50 hover:bg-google-blue/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 min-h-[400px] content-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const bgColors = ['bg-google-blue', 'bg-google-red', 'bg-google-yellow', 'bg-google-green'];
              const hoverBgColors = ['hover:bg-[#3367d6]', 'hover:bg-[#d33a2e]', 'hover:bg-[#e0a800]', 'hover:bg-[#2d964a]'];
              const textColors = ['text-white', 'text-white', 'text-primary-dark', 'text-white'];
              
              const bgClass = bgColors[index % 4];
              const hoverBgClass = hoverBgColors[index % 4];
              const textClass = textColors[index % 4];

              return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  opacity: { duration: 0.2 },
                  layout: { 
                    type: "spring", 
                    bounce: 0.3, 
                    duration: 0.6,
                    delay: index * 0.1
                  }
                }}
                className={`group relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full cursor-pointer ${bgClass} shadow-md ${hoverBgClass} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-center z-10 p-2">
                  <span className={`block ${textClass} font-bold text-sm sm:text-base transition-transform group-hover:-translate-y-2`}>
                    {skill.name}
                  </span>
                  
                  {/* Hover info */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full ${bgClass}`}>
                    <span className={`text-xs font-bold ${textClass} mb-1`}>{skill.category}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-white ${textClass === 'text-white' ? bgClass.replace('bg-', 'text-') : 'text-primary-dark'}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                </div>
              </motion.div>
            )})}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
