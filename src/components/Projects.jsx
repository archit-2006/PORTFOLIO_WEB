import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const categories = ['All', 'AI', 'Full-Stack', 'UI/UX'];


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 w-full bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-google-green mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat 
                    ? 'bg-google-blue text-white shadow-md shadow-google-blue/20 border-transparent' 
                    : 'bg-background text-primary-light hover:bg-google-blue/5 hover:border-google-blue/30 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const bgColors = ['bg-google-blue', 'bg-google-red', 'bg-google-yellow', 'bg-google-green'];
              const hoverBgColors = ['bg-[#3367d6]', 'bg-[#d33a2e]', 'bg-[#e0a800]', 'bg-[#2d964a]'];
              const textColors = ['text-white', 'text-white', 'text-primary-dark', 'text-white'];
              
              const bgClass = bgColors[index % 4];
              const backBgClass = hoverBgColors[index % 4];
              const textClass = textColors[index % 4];

              return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group w-full h-80 [perspective:1000px]"
              >
                {/* 3D Flip Card Inner */}
                <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-lg`}>
                  
                  {/* Front Side */}
                  <div className={`absolute w-full h-full p-8 ${bgClass} rounded-3xl [backface-visibility:hidden] flex flex-col items-center justify-center text-center border-8 border-blue-300`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm border border-white/30 bg-white/20`}>
                      <span className={`text-2xl font-bold ${textClass}`}>{project.title.charAt(0)}</span>
                    </div>
                    <h3 className={`text-xl font-bold ${textClass} mb-3`}>{project.title}</h3>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {project.stack.slice(0, 3).map(tech => (
                        <span key={tech} className={`text-[10px] font-bold tracking-wide px-2 py-1 bg-white/20 ${textClass} rounded`}>
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && <span className={`text-[10px] font-bold px-2 py-1 bg-white/20 ${textClass} rounded`}>+{project.stack.length - 3}</span>}
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className={`absolute w-full h-full p-8 ${backBgClass} rounded-3xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between shadow-xl border-8 border-blue-300`}>
                    <div>
                      <h3 className={`text-xl font-bold ${textClass} mb-3`}>{project.title}</h3>
                      <p className={`text-sm ${textClass === 'text-white' ? 'text-white/90' : 'text-primary-dark/90'} leading-relaxed`}>
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-4 mt-6">
                      {project.category === 'UI/UX' ? (
                        project.demo && project.demo !== '#' ? (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noreferrer" 
                            className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl bg-white/20 ${textClass} hover:bg-white/30 transition-colors text-sm font-bold`}
                          >
                            <ExternalLink size={16} /> Prototype
                          </a>
                        ) : (
                          <div 
                            className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl ${textClass === 'text-white' ? 'bg-white/10 text-white/40' : 'bg-black/10 text-primary-dark/40'} cursor-not-allowed text-xs font-bold`} 
                            title="Prototype Not Available"
                          >
                            <ExternalLink size={16} /> Not Available
                          </div>
                        )
                      ) : (
                        project.github && project.github !== '#' ? (
                          <a 
                            href={project.github} 
                            className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl bg-white/20 ${textClass} hover:bg-white/30 transition-colors text-sm font-bold`}
                          >
                            <FaGithub size={16} /> Code
                          </a>
                        ) : (
                          <div 
                            className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl ${textClass === 'text-white' ? 'bg-white/10 text-white/40' : 'bg-black/10 text-primary-dark/40'} cursor-not-allowed text-xs font-bold`} 
                            title="Source Code Not Available"
                          >
                            <FaGithub size={16} /> Not Available
                          </div>
                        )
                      )}
                      <button onClick={() => navigate(`/project/${project.id}`)} className={`flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl bg-white ${bgClass.replace('bg-', 'text-')} hover:bg-gray-100 hover:shadow-md transition-all text-sm font-bold`}>
                        <ExternalLink size={16} /> Details
                      </button>
                    </div>
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
