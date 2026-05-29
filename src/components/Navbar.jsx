'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'about', 'experience', 'projects', 'skills'];
      const scrollPos = window.scrollY + 200; // Trigger slightly early
      
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section === 'hero' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home', href: '#' },
    { label: 'About', id: 'about', href: '#about' },
    { label: 'Work', id: 'experience', href: '#experience' },
    { label: 'Projects', id: 'projects', href: '#projects' },
    { label: 'Skills', id: 'skills', href: '#skills' }
  ];

  return (
    <div className="w-full pt-0 md:pt-6 px-0 md:px-4 flex flex-col items-center sticky top-0 z-50 transition-all duration-300 relative">
      {/* Navbar header */}
      <header 
        className={`w-full md:w-full max-w-none md:max-w-2xl lg:max-w-3xl rounded-none md:rounded-full px-6 md:px-5 py-4 md:py-2.5 flex items-center justify-between transition-all duration-300 ease-in-out border-x-0 border-t-0 border-b md:border-2 bg-transparent ${
          scrolled 
            ? 'bg-white/45 md:bg-white/60 border-slate-200/50 backdrop-blur-md shadow-sm' 
            : 'border-transparent'
        }`}
      >
        {/* Empty left div to maintain spacing balance */}
        <div className="w-6 h-6 md:hidden" />

        {/* Center: Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={item.href} 
              className={`transition-all duration-300 hover:scale-105 ${
                activeSection === item.id 
                  ? 'text-orange-500 font-bold' 
                  : 'text-slate-600 hover:text-slate-200'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Desktop Contact button / Mobile hamburger */}
        <div className="flex items-center gap-2">
          <a 
            href="#contact" 
            className="hidden md:inline-flex bg-[#1e1b29] text-white hover:bg-slate-800 hover:scale-105 transition-all duration-300 text-sm font-bold px-6 py-2 rounded-full shrink-0 shadow-sm"
          >
            Contact
          </a>

          {/* Hamburger button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-900 hover:bg-slate-200/50 transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-0 right-0 w-48 bg-[#181620] border-l border-b border-slate-800/60 p-6 md:hidden flex flex-col gap-4 font-space z-50 shadow-2xl animate-in fade-in slide-in-from-right duration-200">
          {/* Close button inside the dropdown positioned identically to the top-right header */}
          <div className="flex justify-end pr-1 mb-2">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {navItems.map((item) => (
            <a 
              key={item.id}
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              className={`pl-4 py-2 text-sm transition-all duration-200 border-l-2 ${
                activeSection === item.id 
                  ? 'text-orange-500 border-orange-500 font-bold' 
                  : 'text-slate-400 border-transparent hover:text-white hover:border-slate-700'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
