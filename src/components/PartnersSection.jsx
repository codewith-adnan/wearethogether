import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Component, Globe, Triangle, Cpu, Network } from 'lucide-react';
import partnerBg from '../assets/partner background.png';

const PartnersSection = () => {
  const partners = [
    { id: 1, name: "INNOVATEX", desc: "Leading enterprise cloud provider and AI integration specialist.", icon: <Component size={40} className="text-blue-400" /> },
    { id: 2, name: "GLOBALTECH", desc: "Leading enterprise cloud provider and AI integration specialist.", icon: <Globe size={40} className="text-blue-400" /> },
    { id: 3, name: "APEX SOLUTIONS", desc: "Leading enterprise cloud provider and dynamic AI-driven solutions for global enterprises.", icon: <Triangle size={48} className="text-blue-500" /> },
    { id: 4, name: "NEXUS DYNAMICS", desc: "Leading enterprise cloud provider and AI integration specialist.", icon: <Cpu size={40} className="text-blue-400" /> },
    { id: 5, name: "SYNAPSE CO", desc: "Leading enterprise cloud provider and AI integration specialist.", icon: <Network size={40} className="text-blue-400" /> },
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const [direction, setDirection] = useState(0); // 1 = next (right→left), -1 = prev (left→right)

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };
  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className="w-full font-sans">
      {/* ── WHITE TEXT BLOCK ── */}
      <div className="bg-white py-12 md:py-20 px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-[8px] md:text-xs font-extrabold tracking-[0.2em] text-blue-600 uppercase">
              Our Global Partnership Ecosystem
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-6xl font-black tracking-tighter uppercase text-gray-900 leading-tight px-2"
          >
            WE ARE <span className="text-blue-600">TOGETHER</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4 text-center"
          >
            Collaboration is more than just working side by side—it's about moving{' '}
            <span className="text-blue-600 italic font-bold">as one</span>.
            We unite visionary partners because we believe the greatest innovations
            happen when strengths combine.
          </motion.p>

          <div className="w-24 h-1 bg-blue-600 mt-8 rounded-full opacity-20"></div>
        </div>
      </div>

      {/* ── IMAGE & CAROUSEL SECTION ── */}
      <div className="relative w-full min-h-[600px] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white">

        {/* Background Image - Clearer (Opacity adjusted from 70 to 40) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${partnerBg})` }}
        >
          {/* Overlay ko light kiya hai (bg-slate-950/40) taake image clear dikhay */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl  md:px-4 pt-40 md:pt-72 pb-20 flex flex-col items-center">

          <div className="relative w-full flex items-center justify-center">

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center backdrop-blur-md transition-all border border-white/10"
            >
              <ChevronLeft />
            </button>

            {/* 5-card centered layout with slide animation */}
            <div className="relative overflow-hidden w-full py-10">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={{
                    enter: (d) => ({ x: d > 0 ? '30%' : '-30%', opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d) => ({ x: d > 0 ? '-30%' : '30%', opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-center justify-center gap-3 md:gap-4"
                >
                  {[-2, -1, 0, 1, 2].map((offset) => {
                    const index = (activeIndex + offset + partners.length) % partners.length;
                    const partner = partners[index];
                    const isActive = offset === 0;
                    const isNear = Math.abs(offset) === 1;
                    return (
                      <div
                        key={`${partner.id}-${offset}`}
                        onClick={() => goTo(index)}
                        style={{
                          transform: `scale(${isActive ? 1.05 : isNear ? 0.92 : 0.80})`,
                          opacity: isActive ? 1 : isNear ? 0.60 : 0.35,
                          transition: 'transform 0.4s ease, opacity 0.4s ease',
                        }}
                        className={`shrink-0 flex flex-col items-center justify-center text-center rounded-3xl cursor-pointer border-t border-white/20
                          ${isActive
                            ? 'w-[260px] md:w-72 h-[370px] md:h-[400px] bg-white/15 shadow-[0_0_50px_rgba(59,130,246,0.4)] backdrop-blur-xl z-20'
                            : isNear
                              ? 'w-[200px] md:w-60 h-[300px] md:h-[340px] bg-white/5 backdrop-blur-md z-10'
                              : 'hidden md:flex w-[160px] md:w-48 h-[260px] md:h-[300px] bg-white/5 backdrop-blur-sm z-0'
                          } p-5 md:p-7`}
                      >
                        <div className={`mb-5 p-4 rounded-full bg-slate-900/50 ${isActive ? 'ring-2 ring-blue-500/50' : ''}`}>
                          {partner.icon}
                        </div>
                        <h3 className={`font-bold tracking-wide mb-3 ${isActive ? 'text-xl md:text-2xl text-white' : isNear ? 'text-base text-slate-300' : 'text-sm text-slate-400'}`}>
                          {partner.name}
                        </h3>
                        <p className={`text-xs leading-relaxed px-1 ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                          {isActive || isNear ? partner.desc : ''}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center backdrop-blur-md transition-all border border-white/10"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden gap-6 mt-4">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/10">
              <ChevronLeft size={18} />
            </button>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/10">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-3 mt-10">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-10 bg-blue-500' : 'w-4 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>

          <button className="mt-12 flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase py-3 px-6 rounded-full border border-white/20 hover:bg-white/10 transition-all">
            Explore Partners <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default PartnersSection;