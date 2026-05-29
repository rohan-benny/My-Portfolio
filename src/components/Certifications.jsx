import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Sparkles, BookOpen, Heart } from 'lucide-react';

export default function Certifications() {
  const certificationsList = [
    { title: 'Data Science & ML', provider: 'NASSCOM FutureSkills', year: '2026', initial: 'NS' },
    { title: 'AI Foundations Associate', provider: 'Oracle', year: '2025', initial: 'OR' },
    { title: 'Cloud Developing', provider: 'AWS Academy', year: '2025', initial: 'AWS' },
    { title: 'Cybersecurity Professional Certificate', provider: 'Google', year: '2024', initial: 'G' },
    { title: 'Blockchain Foundation Certification', provider: 'Blockchain Council', year: '2024', initial: 'BC' },
    { title: 'Cloud Computing', provider: 'NPTEL', year: '2023', initial: 'NP' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 font-body mt-24">
      {/* Certifications */}
      <section id="certifications" className="scroll-mt-28 space-y-6">
        {/* Sub-heading consistent with the theme */}
        <div className="mb-8">
          <span className="text-orange-500 font-body text-xs font-bold uppercase tracking-widest block mb-2">
            Credentials
          </span>
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-heading font-bold text-[#1e1b29] tracking-wider uppercase">
              Certifications
            </h3>
          </div>
          <div className="w-12 h-1.5 bg-orange-500 rounded-full mt-3" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-4"
        >
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl px-5 py-4 flex items-center justify-between shadow-sm hover:shadow-md hover:border-orange-400/30 transition-all duration-300 cursor-default group"
            >
              <div className="flex items-center gap-4 pr-4">
                {/* Monogram Badge */}
                <div className="w-10 h-10 rounded-xl bg-slate-100/80 border border-slate-200/40 flex items-center justify-center font-heading font-bold text-[10px] text-slate-500 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200/50 transition-all duration-300 shrink-0">
                  {cert.initial}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[#1e1b29] text-sm font-bold group-hover:text-orange-500 transition-colors duration-300 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-[#4C4F66] text-[11px] font-semibold tracking-wide uppercase">
                    {cert.provider}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-500 bg-[#282634]/5 px-2.5 py-1.5 rounded-lg border border-[#282634]/5 shrink-0 self-center leading-none uppercase tracking-wide">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="scroll-mt-28 space-y-6">
        {/* Sub-heading consistent with the theme */}
        <div className="mb-8">
          <span className="text-orange-500 font-body text-xs font-bold uppercase tracking-widest block mb-2">
            Milestones
          </span>
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-heading font-bold text-[#1e1b29] tracking-wider uppercase">
              Achievements
            </h3>
          </div>
          <div className="w-12 h-1.5 bg-orange-500 rounded-full mt-3" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="space-y-4"
        >
          {/* Research Publication Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-orange-400/30 transition-all duration-300 cursor-default group space-y-4"
          >
            <div className="flex items-start gap-4">
              {/* Specialized Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-slate-100/80 border border-slate-200/40 flex items-center justify-center text-slate-500 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200/50 transition-all duration-300 shrink-0">
                <BookOpen size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-[#1e1b29] text-lg group-hover:text-orange-500 transition-colors duration-300">
                  Research Publication
                </h4>
                <p className="text-[#4C4F66] font-semibold text-xs uppercase tracking-wider">
                  SRS 2025 &middot; Kristu Jayanti University
                </p>
              </div>
            </div>
            <div className="pl-16">
              <p className="text-slate-500 text-sm italic font-medium leading-relaxed border-l-2 border-orange-500/40 pl-3 py-1.5 bg-orange-50/15 rounded-r-xl">
                "Quantum Computing in Autonomous Vehicles, Security, and Medicine"
              </p>
            </div>
          </motion.div>

          {/* Tech Outreach Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="bg-white/45 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-orange-400/30 transition-all duration-300 cursor-default group space-y-4"
          >
            <div className="flex items-start gap-4">
              {/* Specialized Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-slate-100/80 border border-slate-200/40 flex items-center justify-center text-slate-500 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200/50 transition-all duration-300 shrink-0">
                <Heart size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-[#1e1b29] text-lg group-hover:text-orange-500 transition-colors duration-300">
                  Tech Outreach
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed pt-1">
                  Volunteered and conducted sessions teaching emerging technologies to students in government schools.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
