import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Component, Globe, Triangle, Cpu, Network } from 'lucide-react';
import partnerBg from '../assets/partner background.png';

const PartnersSection = () => {
  // Demo data for partners
  const partners = [
    { id: 1, name: "INNOVATEX", desc: "Leading enterprise cloud provider and AI integration specialist.", icon: <Component size={40} className="text-blue-400" /> },
    { id: 2, name: "GLOBALTECH", desc: "Leading enterprise cloud provider and AI integration specialist.", icon: <Globe size={40} className="text-blue-400" /> },
    { id: 3, name: "APEX SOLUTIONS", desc: "Leading enterprise cloud provider and dynamic AI-driven solutions for global enterprises.", icon: <Triangle size={48} className="text-blue-500" /> },
    { id: 4, name: "NEXUS DYNAMICS", desc: "Leading enterprise cloud provider and AI integration specialist.", icon: <Cpu size={40} className="text-blue-400" /> },
    { id: 5, name: "SYNAPSE CO", desc: "Leading enterprise cloud provider and AI integration specialist.", icon: <Network size={40} className="text-blue-400" /> },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 font-sans text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${partnerBg})`
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 py-20 flex flex-col items-center">

        {/* Header Text */}
        <div className="text-center mb-16 space-y-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.3em] text-blue-400 uppercase font-bold"
          >
            Our Ecosystem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none"
          >
            WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">TOGETHER</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Collaboration is more than just working next to each other—it's about working <span className="text-white font-medium italic">as one</span>.
            We build lasting partnerships because we believe that our greatest innovations happen when we unite our strengths.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex items-center justify-center gap-4 md:gap-6 px-10">

          {/* Left Arrow */}
          <button onClick={prevSlide} className="hidden md:flex absolute left-4 z-20 items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 backdrop-blur-md transition-all">
            <ChevronLeft className="text-white" />
          </button>

          {/* Cards */}
          <div className="flex w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar justify-center items-center gap-4 md:gap-6 pb-8">
            {partners.map((partner, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={partner.id}
                  className={`snap-center shrink-0 transition-all duration-500 ease-out flex flex-col items-center justify-center text-center rounded-3xl p-6 md:p-8 cursor-pointer
                    ${isActive
                      ? 'w-72 md:w-80 h-96 bg-white/10 border-white/30 shadow-[0_0_40px_rgba(59,130,246,0.3)] scale-105 z-20 backdrop-blur-xl border-t'
                      : 'w-60 md:w-64 h-80 bg-white/5 border-white/10 opacity-60 hover:opacity-100 scale-95 z-10 backdrop-blur-md border-t'
                    } border-l-0 border-r-0 border-b-0
                  `}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`mb-6 p-4 rounded-full bg-slate-900/50 shadow-inner ${isActive ? 'shadow-blue-500/20' : ''}`}>
                    {partner.icon}
                  </div>
                  <h3 className={`font-bold tracking-wide mb-3 ${isActive ? 'text-2xl text-white' : 'text-xl text-slate-200'}`}>
                    {partner.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                    {partner.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="hidden md:flex absolute right-4 z-20 items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 backdrop-blur-md transition-all">
            <ChevronRight className="text-white" />
          </button>
        </div>

        {/* Explore Button & Pagination */}
        <div className="flex flex-col items-center mt-12 gap-8">
          <button className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white hover:text-blue-400 transition-colors">
            Explore Partners <ChevronRight size={16} />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-3">
            {partners.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-blue-500' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* CSS for hiding scrollbar directly in the component for convenience */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default PartnersSection;
