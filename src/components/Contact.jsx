import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 w-full bg-background relative overflow-hidden">
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-google-blue/10 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-google-yellow/10 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-google-yellow mx-auto rounded-full mb-6" />
          <p className="text-primary-light">Have a question or want to work together? Leave a message.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-2/3 bg-google-yellow hover:bg-[#e0a800] transition-colors duration-300 p-8 sm:p-10 rounded-[2.5rem] shadow-xl relative border-8 border-blue-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-dark pl-1">Name</label>
                  <input required type="text" className="w-full bg-white px-5 py-3.5 rounded-2xl border-none focus:outline-none focus:ring-4 focus:ring-white/50 transition-all text-primary-dark shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-dark pl-1">Email</label>
                  <input required type="email" className="w-full bg-white px-5 py-3.5 rounded-2xl border-none focus:outline-none focus:ring-4 focus:ring-white/50 transition-all text-primary-dark shadow-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary-dark pl-1">Message</label>
                <textarea required rows={5} className="w-full bg-white px-5 py-4 rounded-2xl border-none focus:outline-none focus:ring-4 focus:ring-white/50 transition-all text-primary-dark resize-none shadow-sm" placeholder="Your message here..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="w-full sm:w-auto px-8 py-3.5 bg-google-blue text-white font-bold rounded-2xl hover:bg-google-blue/90 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-80"
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-emerald-400" /> Message Sent
                    </motion.div>
                  ) : isSubmitting ? (
                    <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                        <Send size={18} className="opacity-50" />
                      </motion.div>
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

          {/* Social Links Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row md:flex-col gap-6"
          >
            {[
              { icon: <FaGithub size={24} />, href: '#', label: 'GitHub' },
              { icon: <FaLinkedin size={24} />, href: '#', label: 'LinkedIn' },
              { icon: <Mail size={24} />, href: 'mailto:contact@archit.dev', label: 'Email' }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border-[6px] border-blue-300 text-primary-light hover:text-red-500 hover:border-red-200 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
