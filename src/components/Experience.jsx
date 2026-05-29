'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Website/App Developer Intern – Team Lead',
      company: 'Beepeaks, Bengaluru (Remote)',
      period: 'Apr 2026 – Present',
      description: 'Leading a team of development interns, coordinating project deliverable timelines, and integrating frontends with robust services.',
      tech: ['Team Leadership', 'Project Coordination', 'API Integration', 'Fullstack Dev']
    },
    {
      role: 'React Intern',
      company: 'Rejola IT Services, Chennai',
      period: 'Jun – Jul 2025',
      description: 'Collaborated on frontend modules, building interactive interfaces with React and optimizing layout responsiveness.',
      tech: ['React.js', 'Responsive Design', 'Web Optimization', 'Component Architecture']
    },
    {
      role: 'Web Development Intern',
      company: 'EduPhoenix Solutions, Bengaluru',
      period: 'Jun – Jul 2023',
      description: 'Maintained and enhanced local web application interfaces, writing reusable HTML/JS features and handling basic CSS styling.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'UI Maintenance']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="scroll-mt-28 mt-24">

      {/* Section Heading */}
      <div className="mb-12">
        <span className="text-orange-500 font-body text-xs font-bold uppercase tracking-widest block mb-2">
          History
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e1b29] tracking-wider uppercase">
          Work Experience
        </h2>
        <div className="w-12 h-1.5 bg-orange-500 rounded-full mt-3" />
      </div>

      {/* Timeline Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-l-2 border-slate-200/80 ml-2 md:ml-6 space-y-12 pb-4 font-body"
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative pl-5 md:pl-10 group"
          >
            {/* Timeline Bullet Node */}
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-300 bg-white group-hover:border-orange-500 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-orange-500 transition-all duration-300" />
            </span>

            {/* Content Glass Card */}
            <div className="bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-orange-500/20 transition-all duration-300 cursor-default">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1e1b29] tracking-wide leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-[#5b21b6] font-semibold text-sm mt-1">
                    {exp.company}
                  </p>
                </div>

                {/* Date Pill */}
                <span className="text-[11px] font-bold text-slate-500 bg-[#282634]/5 px-3 py-1.5 rounded-lg border border-[#282634]/5 shrink-0 self-start md:self-start leading-none uppercase tracking-wide">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-[14px] leading-relaxed max-w-2xl mb-5">
                {exp.description}
              </p>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#282634]/5 text-slate-600 border border-[#282634]/5 hover:bg-[#282634]/10 transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
