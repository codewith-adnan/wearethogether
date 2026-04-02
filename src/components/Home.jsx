// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-orange-50/30 pt-32">
      {/* ---- Premium Gradient Glow ---- */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ---- Subtle Background Typography (Diagonal Static) ---- */}
      <div className="absolute inset-0 select-none pointer-events-none z-0 overflow-hidden">

        {/* WE - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-[10%] left-[1%] text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter text-gray-900 leading-none"
        >
          WE
        </motion.div>

        {/* ARE - Center/Slightly Offset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter text-gray-900 leading-none"
        >
          ARE
        </motion.div>

        {/* TOGETHER - Bottom Right */}
        <motion.div
          initial={{ opacity: 1, x: 50 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-[1%] right-[1%] text-right text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter text-gray-900 leading-none"
        >
          TOGETHER
        </motion.div>

      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-gray-900 leading-tight uppercase tracking-tighter"
          >
            The <span className="text-blue-600">Technical</span><br />Doctor's
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-[10px] md:text-2xl font-bold text-gray-400 uppercase tracking-[0.15em] md:tracking-[0.3em] whitespace-nowrap"
          >
            We Are Together (Private Limited)
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed text-center"
          >
            Delivering more than just services—we deliver peace of mind.
            Your trusted partner for cinematic technical solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 "
          >
            <MagneticButton distance={0.5}>
              <Link
                to="services"
                smooth={true}
                duration={2000}
                easing="easeInOutQuart"
                className="glow-btn-wrapper"
              >
                <div className=" mb-2">
                  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold tracking-wide text-sm sm:text-base shadow-lg shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/60 active:scale-95">
                    EXPLORE OUR SERVICES
                  </button>
                </div>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;