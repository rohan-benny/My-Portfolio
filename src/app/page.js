'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative selection:bg-orange-200 selection:text-orange-950 flex flex-col justify-between">
      
      {/* Navigation Capsule */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-6 flex-1 flex flex-col justify-center py-16 space-y-32">
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Work Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Technical Skills Section */}
        <Skills />

        {/* Education Timeline Section */}
        <Education />

        {/* Certifications and Achievements Sections */}
        <Certifications />

        {/* Offline Resume Download Section */}
        <Resume />

      </main>

      {/* Footer & Contact Section */}
      <Footer />

    </div>
  );
}
