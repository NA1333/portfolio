import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [activeSegment, setActiveSegment] = useState('company'); // 'company' or 'personal'

  return (
    <div className="min-h-screen gradient-mesh text-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter glow-text uppercase">
          MD Nabeel <span className="text-yellow-500">Chishty</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        <section id="hero">
          <Hero />
        </section>

        <TechStack />

        <section id="work" className="py-32 px-6 md:px-12">
          {/* Unified Section Header */}
          <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-center gap-8">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              {activeSegment === 'company' ? 'Work ' : ''}
              <span className="text-yellow-500">{activeSegment === 'company' ? 'Experience' : 'Projects'}</span>
            </h3>

            {/* Section Toggle Selector - Styled after Reference Image */}
            <div className="bg-[#111111] p-1.5 rounded-[2rem] border border-white/5 flex items-center gap-1 relative overflow-hidden shadow-2xl">
              <motion.div
                layoutId="segment-bg"
                className="absolute inset-y-1.5 bg-[#ff8c32] rounded-[1.8rem] shadow-xl"
                initial={false}
                animate={{
                  x: activeSegment === 'company' ? 0 : '140px',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                style={{ width: '140px', left: '6px' }}
              />

              <button
                onClick={() => setActiveSegment('company')}
                className={`relative z-10 px-4 py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 w-[140px] ${activeSegment === 'company' ? 'text-black' : 'text-white/60 hover:text-white/80'
                  }`}
              >
                Company
              </button>

              <button
                onClick={() => setActiveSegment('personal')}
                className={`relative z-10 px-4 py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300 w-[140px] ${activeSegment === 'personal' ? 'text-black' : 'text-white/60 hover:text-white/80'
                  }`}
              >
                Personal
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSegment}
              initial={{ opacity: 0, x: activeSegment === 'company' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeSegment === 'company' ? 20 : -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeSegment === 'company' ? <Experience /> : <Projects />}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
