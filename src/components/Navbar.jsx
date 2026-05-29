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
    { label: 'Experience', id: 'experience', href: '#experience' },
    { label: 'Projects', id: 'projects', href: '#projects' },
    { label: 'Skills', id: 'skills', href: '#skills' }
  ];

  return (
    <div className="w-full pt-0 md:pt-6 px-0 md:px-4 flex flex-col items-center sticky top-0 z-50 transition-all duration-300 relative">
      {/* Navbar header */}
      <header 
        className={`w-full md:w-full max-w-none md:max-w-[500px] lg:max-w-[540px] rounded-none md:rounded-full px-6 md:px-5 py-4 md:py-2.5 flex items-center justify-between transition-all duration-300 ease-in-out border-b md:border bg-[#242130]/90 border-slate-800/80 backdrop-blur-md shadow-lg`}
      >
        {/* Left: Avatar container with white background */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden border border-white">
            <img 
              src="/Rohan.png" 
              alt="Rohan avatar" 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Center: Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-normal">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={item.href} 
              className={`transition-all duration-300 hover:scale-105 ${
                activeSection === item.id 
                  ? 'text-orange-500 font-bold' 
                  : 'text-slate-300 hover:text-white font-normal'
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
            className="hidden md:inline-flex bg-white text-[#181620] hover:bg-slate-200 hover:scale-105 transition-all duration-300 text-sm font-bold px-6 py-2 rounded-full shrink-0 shadow-sm"
          >
            Contact
          </a>

          {/* Hamburger button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
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
