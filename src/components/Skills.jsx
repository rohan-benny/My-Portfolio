'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      description: 'Core programming languages',
      skills: ['Java', 'Kotlin', 'Python', 'C', 'JavaScript'],
      pillText: 'Core',
      pillColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/10',
      hoverColor: 'hover:bg-indigo-500/5 hover:border-indigo-500/20 hover:text-indigo-600',
      dotColor: 'group-hover:bg-indigo-500'
    },
    {
      title: 'Web Development',
      description: 'Frontend & backend frameworks',
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Next.js', 'TailwindCSS'],
      pillText: 'Core Stack',
      pillColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/10',
      hoverColor: 'hover:bg-emerald-500/5 hover:border-emerald-500/20 hover:text-emerald-600',
      dotColor: 'group-hover:bg-emerald-500'
    },
    {
      title: 'Databases',
      description: 'Data storage engines',
      skills: ['MySQL', 'Firebase', 'MongoDB', 'MS Access'],
      pillText: 'Storage',
      pillColor: 'bg-amber-500/10 text-amber-600 border-amber-500/10',
      hoverColor: 'hover:bg-amber-500/5 hover:border-amber-500/20 hover:text-amber-600',
      dotColor: 'group-hover:bg-amber-500'
    },
    {
      title: 'Tools & Concepts',
      description: 'Workflows & systems',
      skills: ['Android Studio', 'VS Code', 'Figma', 'n8n', 'AWS', 'Vercel', 'Render', 'DSA', 'OOP', 'SDLC', 'DBMS'],
      pillText: 'Architecture',
      pillColor: 'bg-sky-500/10 text-sky-600 border-sky-500/10',
      hoverColor: 'hover:bg-sky-500/5 hover:border-sky-500/20 hover:text-sky-600',
      dotColor: 'group-hover:bg-sky-500'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="scroll-mt-28 mt-24">
      
      {/* Section Heading */}
      <div className="mb-12">
        <span className="text-orange-500 font-body text-xs font-bold uppercase tracking-widest block mb-2">
          Capabilities
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e1b29] tracking-wider uppercase">
          Technical Skills
        </h2>
        <div className="w-12 h-1.5 bg-orange-500 rounded-full mt-3" />
      </div>

      {/* Bento Grid Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body"
      >
        
        {/* 1. Languages (Standard Card - Span 1) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-default relative overflow-hidden"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl text-[#1e1b29] tracking-wide">
                  {skillCategories[0].title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {skillCategories[0].description}
                </p>
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${skillCategories[0].pillColor}`}>
                {skillCategories[0].pillText}
              </span>
            </div>

            <div className="grid gap-2 pt-1">
              {skillCategories[0].skills.map((skill) => (
                <div 
                  key={skill} 
                  className={`flex items-center gap-2 px-3 py-2 bg-slate-500/5 border border-transparent rounded-xl transition-all duration-300 group cursor-default ${skillCategories[0].hoverColor}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-slate-300 transition-colors duration-200 ${skillCategories[0].dotColor}`} />
                  <span className="text-xs font-medium text-slate-700 transition-colors duration-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2. Web Development (Wide Card - Span 2) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-default relative overflow-hidden"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl text-[#1e1b29] tracking-wide">
                  {skillCategories[1].title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {skillCategories[1].description}
                </p>
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${skillCategories[1].pillColor}`}>
                {skillCategories[1].pillText}
              </span>
            </div>

            {/* Structured Compact Skill Blocks Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {skillCategories[1].skills.map((skill) => (
                <div 
                  key={skill} 
                  className={`flex items-center gap-2 px-3.5 py-2.5 bg-slate-500/5 border border-transparent rounded-xl transition-all duration-300 group cursor-default ${skillCategories[1].hoverColor}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-slate-300 transition-colors duration-200 ${skillCategories[1].dotColor}`} />
                  <span className="text-xs font-medium text-slate-700 transition-colors duration-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. Databases (Standard Card - Span 1) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-default relative overflow-hidden"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl text-[#1e1b29] tracking-wide">
                  {skillCategories[2].title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {skillCategories[2].description}
                </p>
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${skillCategories[2].pillColor}`}>
                {skillCategories[2].pillText}
              </span>
            </div>

            <div className="grid gap-2 pt-1">
              {skillCategories[2].skills.map((skill) => (
                <div 
                  key={skill} 
                  className={`flex items-center gap-2 px-3 py-2 bg-slate-500/5 border border-transparent rounded-xl transition-all duration-300 group cursor-default ${skillCategories[2].hoverColor}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-slate-300 transition-colors duration-200 ${skillCategories[2].dotColor}`} />
                  <span className="text-xs font-medium text-slate-700 transition-colors duration-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 4. Tools & Concepts (Wide Card - Span 2) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-default relative overflow-hidden"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl text-[#1e1b29] tracking-wide">
                  {skillCategories[3].title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {skillCategories[3].description}
                </p>
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${skillCategories[3].pillColor}`}>
                {skillCategories[3].pillText}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {skillCategories[3].skills.map((skill) => (
                <div 
                  key={skill} 
                  className={`flex items-center gap-2 px-3.5 py-2.5 bg-slate-500/5 border border-transparent rounded-xl transition-all duration-300 group cursor-default ${skillCategories[3].hoverColor}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-slate-300 transition-colors duration-200 ${skillCategories[3].dotColor}`} />
                  <span className="text-xs font-medium text-slate-700 transition-colors duration-200">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
