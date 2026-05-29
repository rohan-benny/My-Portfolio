'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [heroError, setHeroError] = React.useState(false);

  return (
    <section 
      id="hero" 
      className="flex flex-col items-start justify-center md:grid md:grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] items-center gap-y-4 md:gap-y-0 md:gap-x-10 max-w-fit mx-auto pt-0 pb-12 md:py-12 min-h-[70vh] -translate-y-10 md:translate-x-0 md:translate-y-0 overflow-visible px-6 sm:px-0"
    >

      {/* Rohan Benny */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative top-[12px] md:top-[36px] md:col-start-1 md:row-start-1 md:justify-self-end md:self-end pb-0 text-left md:text-right"
      >
        <span className="text-[#606060] font-bold text-xl sm:text-2xl md:text-3xl tracking-wide font-body uppercase">
          Rohan Benny
        </span>
      </motion.div>

      {/* SOFTWARE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="md:col-start-1 md:row-start-2 md:justify-self-end md:self-center md:mt-[6px] cursor-default text-left md:text-right"
      >
        <h1 className="text-[2.8rem] xs:text-[3.8rem] sm:text-[5rem] md:text-[6.8rem] leading-[0.8] font-heading font-bold text-[#1e1b29] tracking-tight">
          SOFTWARE
        </h1>
      </motion.div>

      {/* Photo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{
          scale: 1.03,
          rotate: 1.5,
          boxShadow: "0 20px 40px -10px rgba(76, 79, 102, 0.2)"
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-3 md:my-0 md:col-start-2 md:row-start-1 md:row-span-3 md:justify-self-center md:self-center z-10"
      >
        <div className="w-[250px] h-[320px] md:h-[340px] bg-[#4C4F66] rounded-[1.5rem] relative overflow-hidden shadow-2xl border-4 border-[#4C4F66] flex items-center justify-center cursor-pointer transition-all duration-300">
          {!heroError ? (
            <img
              src="/Rohan.png"
              alt="Rohan Benny portrait"
              className="w-full h-full object-cover object-top rounded-[1.25rem]"
              onError={() => setHeroError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#4C4F66] to-[#252936] text-white p-6 text-center space-y-4">
              <svg className="w-20 h-20 text-slate-400/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Place Photo Here</p>
                <p className="text-[10px] text-slate-500">public/Rohan.png</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* DEVELOPER */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="md:col-start-3 md:row-start-2 md:justify-self-start md:self-center md:mt-[6px] cursor-default text-left"
      >
        <h1 className="text-[2.8rem] xs:text-[3.8rem] sm:text-[5rem] md:text-[6.8rem] leading-[0.8] font-heading font-bold text-[#1e1b29] tracking-tight">
          DEVELOPER
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="justify-self-start md:col-start-3 md:row-start-3 md:justify-self-start self-start pt-0.5 md:-mt-[12px] max-w-[300px]"
      >
        <p className="text-orange-500 font-body text-xs md:text-[13px] font-bold leading-tight text-left">
          MCA student passionate about modern <br className="hidden md:inline" /> software development.
        </p>
      </motion.div>

    </section>
  );
}
