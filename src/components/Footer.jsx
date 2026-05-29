import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#181620] text-slate-300 py-16 mt-32 font-body border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="space-y-6">
          <h3 className="font-heading font-bold text-3xl text-white tracking-wide">Let's Connect</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            I am open to discussions about full-time opportunities, tech collaborations, or engineering questions. Feel free to reach out!
          </p>
          <div className="flex gap-5 pt-2">
            <a 
              href="https://github.com/rohan-benny" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rohan-benny-207161262/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-orange-500 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex flex-col justify-center space-y-4 text-sm font-medium">
          <div className="flex items-center gap-3">
            <span className="w-5 flex justify-center shrink-0">
              <Mail size={16} className="text-orange-500" />
            </span>
            <a href="mailto:rohanbenny99@gmail.com" className="text-white hover:text-orange-500 transition-colors duration-200">
              rohanbenny99@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="w-5 flex justify-center shrink-0">
              <Phone size={16} className="text-orange-500" />
            </span>
            <a href="tel:+916282241801" className="text-white hover:text-orange-500 transition-colors duration-200">
              +91 6282241801
            </a>
          </div>
        </div>

      </div>
      
      {/* Copyright Line */}
      <div className="max-w-6xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 text-center text-xs text-slate-500 font-semibold">
        &copy; {new Date().getFullYear()} Rohan Benny. All rights reserved.
      </div>
    </footer>
  );
}
