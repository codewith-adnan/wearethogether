import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Import only logos
import logoBrandLines from '../assets/brand line.png';
import logoRP from '../assets/rp.png';
import logoGP from '../assets/gp cor.png';
import logoSSK from '../assets/ssk.png';
import logoELF from '../assets/elf.png';
import logoHL from '../assets/hL.png';
import logoBri from '../assets/the bri.png';
import bgImage from '../assets/partner background.png';

const PartnersSection = () => {
  const partners = [
    { id: 1, name: "Brand Lines Advertising", desc: "A key creative partner specializing in branding, outdoor advertising, and large-scale campaign execution.", logo: logoBrandLines },
    { id: 2, name: "RP Solutions Pvt Ltd", desc: "Provides advanced IT and operational support, ensuring smooth system integration and efficient project management.", logo: logoRP },
    { id: 3, name: "GP Corporation Pvt Ltd", desc: "A reliable partner in industrial support and supply chain management, contributing significantly to large-scale projects.", logo: logoGP },
    { id: 4, name: "SSK Builders Pvt Ltd", desc: "Our trusted partner in construction and infrastructure development, supporting commercial builds and site setups.", logo: logoSSK },
    { id: 5, name: "AA Fabrications", desc: "Experts in custom fabrication and metal works, delivering high-quality on-ground installations.", logo: logoELF },
    { id: 6, name: "Hassan Digital Marketing", desc: "Our digital growth partner, specializing in social media management, paid advertising, and enhancing brand presence.", logo: logoHL },
    { id: 7, name: "KB Tax & Corporate", desc: "Provides professional services in corporate compliance, taxation, and legal structuring.", logo: logoBri },
  ];

  const [activeIndex, setActiveIndex] = useState(partners.length > 2 ? 2 : 0);
  const [direction, setDirection] = useState(0);

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
            <span className="text-[8px] md:text-xs font-extrabold tracking-[0.2em] text-[#0000CC] uppercase">
              Our Strategic Ecosystem
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-6xl font-black tracking-tighter uppercase text-gray-900 leading-tight px-2"
          >
            PARTNERSHIP FOR <span className="text-[#0000CC]">PROGRESS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4 text-center"
          >
            We unite visionary partners because we believe the greatest innovations happen
            when strengths combine. Paving the way{' '}
            <span className="text-[#0000CC] italic font-bold">as one</span>.
          </motion.p>
        </div>
      </div>

      {/* ── LOGO & CAROUSEL SECTION ── */}
      <div 
        className="relative w-full min-h-[600px] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Semi-transparent overlay to ensure text/logos remain readable */}
        <div className="absolute inset-0 z-0 bg-[rgba(17,17,17,0.7)]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl md:px-4 pt-32 md:pt-48 pb-16 flex flex-col items-center">

          <div className="relative w-full flex items-center justify-center">

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 z-30 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center transition-all border border-white/10"
            >
              <ChevronLeft color="white" />
            </button>

            {/* Carousel layout */}
            <div className="relative overflow-hidden w-full py-6">
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
                  transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
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
                        className={`shrink-0 flex flex-col items-center justify-center text-center rounded-3xl cursor-pointer border border-white/5
                          ${isActive
                            ? 'w-[260px] md:w-72 h-[370px] md:h-[400px] bg-white/5 shadow-[0_0_60px_rgba(0,0,170,0.5)] z-20'
                            : isNear
                              ? 'w-[200px] md:w-60 h-[300px] md:h-[340px] bg-white/3 z-10'
                              : 'hidden md:flex w-[160px] md:w-48 h-[260px] md:h-[300px] bg-white/2 z-0'
                          } p-5 md:p-7`}
                      >
                        {/* Logo Image - No background on image itself */}
                        <div className={`mb-5 flex items-center justify-center ${isActive ? 'w-28 h-20' : 'w-20 h-14'} transition-all duration-400`}>
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <h3 className={`font-bold tracking-wide mb-3 ${isActive ? 'text-xl md:text-2xl text-white' : 'text-base text-slate-300'}`}>
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
              className="hidden md:flex absolute right-4 z-30 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 items-center justify-center transition-all border border-white/10"
            >
              <ChevronRight color="white" />
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden gap-6 mt-4">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10">
              <ChevronLeft size={18} color="white" />
            </button>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10">
              <ChevronRight size={18} color="white" />
            </button>
          </div>

          {/* Pagination Dots - Colors updated to dark blue (#0000AA) and semi-transparent white */}
          <div className="flex items-center gap-3 mt-10">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-10 bg-[#0000AA]' : 'w-4 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>

          <button className="mt-12 flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase py-3 px-6 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white">
            Explore Our Partners <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;