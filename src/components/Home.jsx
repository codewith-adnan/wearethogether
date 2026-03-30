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

      {/* ---- Subtle Background Typography (Marquee) ---- */}
      <div className="hero-bg-text opacity-[0.08] select-none pointer-events-none w-full overflow-hidden">
        <div className="marquee-container text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
          <span className="mx-8">WE ARE TOGETHER</span>
          <span className="mx-8">WE ARE TOGETHER</span>
          <span className="mx-8">WE ARE TOGETHER</span>
          <span className="mx-8">WE ARE TOGETHER</span>
        </div>
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
            className="mt-8 text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-[0.3em]"
          >
            We Are Together (Private Limited)
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Delivering more than just services—we deliver peace of mind. <br className="hidden md:block" />
            Your trusted partner for cinematic technical solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12"
          >
            <MagneticButton distance={0.5}>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-70}
                className="glow-btn-wrapper"
              >
                <div className="glow-btn-inner px-12 py-5 text-sm">
                  Explore Our Services
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