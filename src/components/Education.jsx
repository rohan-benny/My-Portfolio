'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationList = [
    {
      degree: 'Master of Computer Applications (MCA)',
      inst: 'Kristu Jayanti University, Bengaluru',
      period: '2024 – 2026'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      inst: 'Kristu Jayanti College, Bengaluru',
      period: '2021 – 2024'
    },
    {
      degree: 'Class XII',
      inst: "St. Peter's, Kerala",
      period: '2021'
    },
    {
      degree: 'Class X',
      inst: "St. Peter's, Kerala",
      period: '2019'
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
    <section id="education" className="scroll-mt-28 mt-24">

      {/* Section Heading */}
      <div className="mb-12">
        <span className="text-orange-500 font-body text-xs font-bold uppercase tracking-widest block mb-2">
          Academic
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e1b29] tracking-wider uppercase">
          Education
        </h2>
        <div className="w-12 h-1.5 bg-orange-500 rounded-full mt-3" />
      </div>

      {/* Education Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid md:grid-cols-2 gap-6 font-body"
      >
        {educationList.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-orange-400/30 transition-all duration-300 cursor-default group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
              <div>
                <h3 className="font-heading font-bold text-xl text-[#1e1b29] tracking-wide leading-snug group-hover:text-orange-500 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-[#4C4F66] font-semibold text-sm mt-1">
                  {edu.inst}
                </p>
              </div>

              {/* Date Pill */}
              <span className="text-[11px] font-bold text-slate-500 bg-[#282634]/5 px-3 py-1.5 rounded-lg border border-[#282634]/5 shrink-0 self-start leading-none uppercase tracking-wide">
                {edu.period}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
