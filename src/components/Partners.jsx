
import React from 'react';
import { motion } from 'framer-motion';

// Import logos from assets
import logo1 from '../assets/download.png';
import logo2 from '../assets/download (1).png';
import logo3 from '../assets/download (2).png';
import logo4 from '../assets/Wall\'s_Logo.svg';
import logo5 from '../assets/download (4).png';
import logo6 from '../assets/national.png';
import logo7 from '../assets/download (6).png';
import logo8 from '../assets/askari.jpg';

const Partners = () => {
  const partners = [
    { id: 1, logo: logo1, name: "Partner 1" },
    { id: 2, logo: logo2, name: "Partner 2" },
    { id: 3, logo: logo3, name: "Partner 3" },
    { id: 4, logo: logo4, name: "Partner 4" },
    { id: 5, logo: logo5, name: "Partner 5" },
    { id: 6, logo: logo6, name: "Partner 6" },
    { id: 7, logo: logo7, name: "Partner 7" },
    { id: 8, logo: logo8, name: "Partner 8" },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-blue-600 uppercase">
              Our Partners
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-gray-900 leading-tight"
          >
            Trusted by <span className="text-blue-600">Leaders</span>
          </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mt-6 rounded-full opacity-20"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-start">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="h-32 md:h-40 bg-white border border-gray-100 rounded-3xl flex items-center justify-center p-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 cursor-default"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
