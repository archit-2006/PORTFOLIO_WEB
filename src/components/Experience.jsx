import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2026',
    role: 'Software Developer Intern',
    company: 'Tech Corp',
    description: 'Developed full-stack web applications using React and Node.js. Optimized database queries improving response time by 30%.',
  },
  {
    year: '2025',
    role: 'Machine Learning Researcher',
    company: 'University AI Lab',
    description: 'Researched and trained predictive models using PyTorch. Co-authored a paper on efficient neural network architectures.',
  },
  {
    year: '2024',
    role: 'Open Source Contributor',
    company: 'Various',
    description: 'Contributed to multiple popular open-source projects including React-based UI libraries and Python tools.',
  },
  {
    year: '2023',
    role: 'B.S. Computer Science',
    company: 'State University',
    description: 'Started advanced coursework in data structures, algorithms, and artificial intelligence.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 w-full bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Experience & Journey</h2>
          <div className="w-24 h-1 bg-google-red mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-google-red/30 hidden md:block top-0 z-0 mt-32" />

        <div className="space-y-12 md:space-y-20 relative z-10">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="flex flex-col md:flex-row items-center justify-between w-full group">
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                  className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:order-2 md:text-left md:pl-8'}`}
                >
                  <div className={`bg-google-red p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-[#d33a2e] transition-all duration-300 relative ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white border border-white/30 text-xs font-bold tracking-wider mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <h4 className="text-base font-medium text-yellow-200 mb-3">{item.company}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {/* Center Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-[5px] border-gray-200 group-hover:scale-125 group-hover:border-google-red transition-all z-10`}
                />

                {/* Empty Space for the other side */}
                <div className={`hidden md:block w-5/12 ${isEven ? 'md:order-2' : ''}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
