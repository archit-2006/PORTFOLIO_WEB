import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-3xl font-black text-primary-dark mb-4">Project Not Found</h1>
        <Link to="/" className="text-google-blue font-bold px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all">Go Home</Link>
      </div>
    );
  }

  const stackColors = ['bg-google-blue', 'bg-google-red', 'bg-google-yellow', 'bg-google-green'];
  const textColors = ['text-white', 'text-white', 'text-primary-dark', 'text-white'];

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const getLoomUrl = (url) => {
    const embedUrl = url.includes('?') ? `${url}&` : `${url}?`;
    return `${embedUrl}autoplay=1&muted=1&hideEmbedTopBar=true`;
  };

  return (
    <div className="min-h-screen w-full bg-background pt-24 pb-20 px-6 font-sans selection:bg-pastel-blue selection:text-primary-dark">
      <div className="container mx-auto max-w-[1400px]">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-primary-dark hover:text-google-blue transition-colors mb-10 font-bold text-lg"
        >
          <ArrowLeft size={24} />
          Back
        </Link>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          {/* Header Row */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 px-2">
            <h1 className="text-4xl md:text-6xl font-black text-primary-dark tracking-tighter uppercase drop-shadow-sm">
              {project.title}
            </h1>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noreferrer"
              className="bg-google-blue text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#3367d6] transition-all shadow-lg hover:shadow-google-blue/40 whitespace-nowrap text-sm tracking-widest uppercase inline-flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              Live Demo
            </a>
          </div>

          {/* Main Dark Box */}
          {!project.caseStudy && (
          <div className="w-full mx-auto bg-primary-dark rounded-[3rem] p-10 md:p-16 mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
             
             {/* Glow effect in background */}
             <div className="absolute -top-[50%] -left-[10%] w-[50%] h-[150%] bg-google-blue/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-google-blue/20 transition-all duration-700"></div>
             <div className="absolute -bottom-[50%] -right-[10%] w-[50%] h-[150%] bg-google-red/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-google-red/20 transition-all duration-700"></div>

             <div className="flex flex-col xl:flex-row gap-16 text-white z-10 relative w-full">
                {/* Left Side text content */}
                <div className="flex-1 flex flex-col gap-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white flex items-center gap-4">
                       <span className="w-8 h-1 bg-google-blue rounded-full"></span> 
                       The Challenge & Vision
                    </h3>
                    <div className="space-y-4 opacity-90">
                      {project.overview ? (
                        <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium pl-12">{project.overview}</p>
                      ) : (
                        <div className="flex flex-col gap-3 pl-12">
                          <div className="h-[2px] bg-gray-700 w-full rounded"></div>
                          <div className="h-[2px] bg-gray-700 w-11/12 rounded"></div>
                          <div className="h-[2px] bg-gray-700 w-full rounded"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-white flex items-center gap-4">
                       <span className="w-8 h-1 bg-google-green rounded-full"></span> 
                       Key Deliverables
                    </h3>
                    <div className="space-y-4 opacity-90">
                      {project.features && project.features.length > 0 ? (
                        <ul className="text-lg md:text-xl leading-relaxed list-disc text-gray-300 space-y-3 font-medium pl-[4.5rem] marker:text-google-green">
                           {project.features.map((feat, i) => <li key={i} className="pl-2">{feat}</li>)}
                        </ul>
                      ) : (
                        <div className="flex flex-col gap-3 pl-12">
                          <div className="h-[2px] bg-gray-700 w-full rounded"></div>
                          <div className="h-[2px] bg-gray-700 w-11/12 rounded"></div>
                          <div className="h-[2px] bg-gray-700 w-full rounded"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side Video Box */}
                <div className="shrink-0 bg-black/40 border border-white/10 rounded-[2rem] w-full aspect-video xl:w-[600px] xl:h-[450px] xl:aspect-auto flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:border-white/20 transition-all duration-500">
                    {project.videoUrl ? (
                      project.videoUrl.includes('loom.com') ? (
                        <iframe 
                          src={getLoomUrl(project.videoUrl)} 
                          frameBorder="0" 
                          webkitallowfullscreen="true" 
                          mozallowfullscreen="true" 
                          allowFullScreen 
                          className="w-full h-full object-cover z-20 pointer-events-auto"
                        ></iframe>
                      ) : (
                        <div className="relative w-full h-full z-20 group/video">
                          <video 
                            ref={videoRef}
                            src={project.videoUrl} 
                            autoPlay 
                            muted={isMuted} 
                            loop 
                            playsInline
                            className="w-full h-full object-cover bg-black cursor-pointer"
                            onClick={toggleMute}
                          />
                          <button 
                            onClick={toggleMute}
                            className="absolute bottom-4 right-4 bg-black/70 hover:bg-google-blue text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/video:opacity-100 focus:opacity-100 shadow-xl"
                            aria-label="Toggle mute"
                          >
                            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                          </button>
                        </div>
                      )
                    ) : (
                      <>
                        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-md z-20 hover:scale-110 hover:bg-white/20 transition-all cursor-pointer shadow-xl relative shadow-black/50">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                        <span className="font-bold text-white tracking-[0.2em] text-sm uppercase opacity-90 z-20">Play Demo</span>
                        
                        {/* Decorative grid for video box */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-50"></div>
                      </>
                    )}
                </div>
              </div>
           </div>
          )}

           {/* Case Study Sections */}
           {project.caseStudy && (
             <div className="w-full flex flex-col gap-32 mb-32 mt-10">
               
               {/* Final Screenshots Gallery Carousel */}
               {project.caseStudy.images && project.caseStudy.images.length > 0 && (
                 <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
                    <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
                    <div className="flex overflow-x-auto gap-8 pb-10 pt-4 snap-x snap-mandatory no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                      {project.caseStudy.images.map((img, idx) => (
                        <div key={idx} className="shrink-0 w-[60vw] md:w-[35vw] lg:w-[20vw] xl:w-[16vw] snap-center group">
                          <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] bg-primary-dark/5 border border-primary-dark/10 aspect-[430/932] relative transition-transform duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                            <img src={img} alt={`Final Showcase Screen ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
               )}

               {/* Problem Section */}
               <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                 <div className="lg:col-span-5 sticky top-32">
                   <h2 className="text-5xl md:text-7xl font-black text-primary-dark tracking-tighter uppercase leading-none">
                     The <br/><span className="text-google-red">Problem</span>
                   </h2>
                 </div>
                 <div className="lg:col-span-7 pt-4">
                   <p className="text-xl md:text-3xl text-primary-dark/80 leading-[1.6] font-medium">
                     {project.caseStudy.problem}
                   </p>
                 </div>
               </div>

               {/* Process Timeline */}
               <div className="w-full mt-10">
                 <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 mb-20">
                   <h2 className="text-5xl md:text-7xl font-black text-primary-dark tracking-tighter uppercase leading-none">
                     Design <br/><span className="text-google-blue">Process</span>
                   </h2>
                 </div>
                 
                 <div className="w-full flex flex-col gap-32">
                   {project.caseStudy.process.map((step, idx) => {
                     const colors = ['text-google-blue', 'text-google-yellow', 'text-google-green'];
                     const bgColors = ['bg-google-blue/10', 'bg-google-yellow/10', 'bg-google-green/10'];
                     return (
                       <div key={idx} className="w-full flex flex-col items-center group">
                         <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
                           <div className="lg:col-span-5 relative">
                             <span className={`text-[8rem] md:text-[12rem] font-black ${colors[idx % 3]} opacity-10 absolute -top-16 -left-8 pointer-events-none leading-none select-none transition-all duration-700 group-hover:-translate-y-4 group-hover:opacity-20`}>0{idx + 1}</span>
                             <h3 className="text-4xl md:text-5xl font-black text-primary-dark tracking-tight leading-none mb-8 relative z-10 pt-4 md:pt-10">
                               {step.title}
                             </h3>
                           </div>
                           <div className="lg:col-span-7 pt-4 md:pt-10 relative z-10">
                             <p className="text-xl md:text-2xl text-primary-dark/80 leading-[1.7] font-medium">
                               {step.description}
                             </p>
                           </div>
                         </div>
                       </div>
                     );
                   })}
                 </div>
               </div>

               {/* Solution Section */}
               <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 mt-10">
                  <div className="bg-primary-dark rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-google-green/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
                    
                    <div className="relative z-10 max-w-5xl">
                      <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-10">
                        The <br/><span className="text-google-green">Solution</span>
                      </h2>
                      <p className="text-xl md:text-3xl text-gray-300 leading-[1.6] font-medium">
                        {project.caseStudy.solution}
                      </p>
                    </div>
                  </div>
               </div>
             </div>
           )}

           {!project.caseStudy && (
             <>
               {/* Tech Stack */}
              <div className="w-full text-center mb-28 mx-auto px-4 mt-8">
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark mb-10 tracking-tight">Core Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {project.stack.map((tech, i) => {
                const bgClass = stackColors[i % 4];
                const textClass = textColors[i % 4];
                return (
                  <span 
                    key={tech} 
                    className={`px-8 py-3 ${bgClass} ${textClass} font-bold text-base rounded-full hover:-translate-y-1 transition-transform shadow-md hover:shadow-xl border border-white/20`}
                  >
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Outcome Section */}
          <div className="w-full max-w-5xl flex flex-col items-center mx-auto mb-12 bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-pastel-blue">
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark mb-8 flex items-center gap-3">
               <span className="text-google-red">Final</span> Impact
            </h2>
            {project.outcome ? (
               <p className="text-center font-bold text-xl md:text-2xl leading-relaxed text-primary-dark/80 italic max-w-4xl">
                  "{project.outcome}"
               </p>
            ) : (
              <div className="w-full flex justify-center">
                <div className="flex flex-col gap-6 w-full max-w-3xl">
                  <div className="h-[3px] bg-primary-dark rounded-full w-full opacity-80"></div>
                  <div className="h-[3px] bg-primary-dark rounded-full w-11/12 mx-auto opacity-70"></div>
                  <div className="h-[3px] bg-primary-dark rounded-full w-full opacity-80"></div>
                </div>
              </div>
            )}
          </div>
             </>
           )}

        </motion.div>
      </div>
    </div>
  );
}
