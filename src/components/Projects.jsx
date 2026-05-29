'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'STRIVO',
      desc: 'Campus Communication & Management System. Facilitates announcements, real-time messaging, and student updates.',
      tech: ['Kotlin', 'Firebase', 'ReactJS'],
      github: 'https://github.com/rohan-benny/Strivo'
    },
    {
      title: 'FleetMinder',
      desc: 'A professional vehicle service tracker application helping users track service histories, gas expenditures, and maintenance reminders.',
      tech: ['Android', 'Kotlin', 'Firebase'],
      github: 'https://github.com/rohan-benny/Fleetminder'
    },
    {
      title: 'Attendance Monitoring System',
      desc: 'Face recognition-based attendance tracking utilizing machine learning models to identify students/staff in real-time.',
      tech: ['Python', 'OpenCV'],
      github: 'https://github.com/rohan-benny/Face-Recognition-System'
    },
    {
      title: 'Leave Management System',
      desc: 'A robust desktop dashboard allowing employees and admins to submit, approve, and audit leave balances.',
      tech: ['VB', 'MS Access'],
      github: 'https://github.com/rohan-benny/Leave-Management-Solution'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="scroll-mt-28 mt-24">

      {/* Section Heading */}
      <div className="mb-12">
        <span className="text-orange-500 font-body text-xs font-bold uppercase tracking-widest block mb-2">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e1b29] tracking-wider uppercase">
          Featured Projects
        </h2>
        <div className="w-12 h-1.5 bg-orange-500 rounded-full mt-3" />
      </div>

      {/* Project Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid md:grid-cols-2 gap-6 font-body"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-orange-400/30 transition-all duration-300 cursor-default group"
          >
            {/* Title + Description */}
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                <h3 className="font-heading font-bold text-xl text-[#1e1b29] tracking-wide group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <p className="text-slate-600 text-[14px] leading-relaxed pl-[18px]">
                {project.desc}
              </p>
            </div>

            {/* Tech Tags + Link */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-2 pl-[18px]">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#282634]/5 text-slate-600 border border-[#282634]/5 hover:bg-[#282634]/10 transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center border-t border-slate-200/60 pt-3 pl-[18px]">
                <a
                  href={project.github}
                  className="text-slate-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
                >
                  <Github size={14} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
