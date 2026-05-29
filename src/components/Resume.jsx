import React from 'react';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 bg-slate-900 text-white rounded-2xl py-10 px-6 sm:py-12 sm:px-8 md:py-16 md:px-12 text-center space-y-4 md:space-y-6 overflow-hidden relative font-body">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#4C4F66]/40 via-transparent to-transparent pointer-events-none"></div>
      <h2 className="text-2xl md:text-3xl font-heading font-bold">Grab a copy of my Resume</h2>
      <p className="text-slate-400 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
        I've put together a clean, one-page PDF summarizing my background, skills, and project contributions.
      </p>
      <div className="pt-2">
        <a 
          href="/Resume.pdf" 
          download="Rohan_Benny_Resume.pdf"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-orange-500/20"
        >
          <Download size={15} /> Download Resume PDF
        </a>
      </div>
    </section>
  );
}
