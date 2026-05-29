'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { number: '3', label: 'Internships completed' },
    { number: '5+', label: 'Projects delivered' },
    { number: '6+', label: 'Certifications earned' },
    { number: '20+', label: 'Skills & technologies' }
  ];

  return (
    <section id="about" className="scroll-mt-28 max-w-5xl mx-auto mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-slate-100/10 backdrop-blur-md border border-slate-300/40 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden"
      >
        {/* Subtle decorative color splotch in background */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Text/Content Column */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-orange-500 font-body text-xs font-bold uppercase tracking-widest block mb-2">
                Discover
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e1b29] tracking-wider uppercase">
                About Me
              </h2>
              <div className="w-12 h-1.5 bg-orange-500 rounded-full mt-3" />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-[16px] md:text-[17px] font-body">
              <p className="font-semibold text-slate-900 text-lg md:text-[19px] leading-snug">
                Highly motivated and analytical MCA postgraduate specializing in full-stack web and native Android development.
              </p>
              <p>
                I thrive on structuring clean, maintainable code, optimizing database query performances, and designing robust system architectures. I love bridging technical software engineering principles with smooth, beautiful user experiences.
              </p>
              <p className="text-sm text-[#282634]/70 italic border-l-2 border-[#282634]/50 pl-4 py-0.5">
                Tech outreach advocate with a strong foundation in Data Structures, Algorithms, and Software Engineering methodologies.
              </p>
            </div>
          </div>

          {/* Statistics Grid Column */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="bg-transparent border border-transparent p-5 rounded-xl flex flex-col justify-between cursor-default transition-all duration-300 hover:bg-[#282634]/5 hover:border-[#282634]/10"
              >
                <span className="font-heading font-bold text-4xl md:text-5xl text-orange-500 tracking-tight leading-none">
                  {stat.number}
                </span>
                <span className="text-xs font-semibold text-slate-600 mt-3 leading-snug font-body">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
