
import React from 'react';
import { motion } from 'framer-motion';

// Import logos from assets
const logo1 = '/download.png';
const logo2 = '/download (1).png';
const logo3 = '/download (2).png';
const logo4 = '/Wall\'s_Logo.svg';
const logo5 = '/download (4).png';
const logo6 = '/national.png';
const logo7 = '/download (6).png';
const logo8 = '/askari.jpg';

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
              Our Clients
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-gray-900 leading-tight"
          >
            Trusted by the <span className="text-blue-600">Best</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg justify-center  leading-relaxed text-justify"
          >
            We take pride in partnering with industry leaders and visionaries.
            From local startups to multinational giants, we deliver technical
            excellence that drives results.
          </motion.p>

          <div className="w-24 h-1 bg-blue-600 mt-8 rounded-full opacity-20"></div>
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
                className="h-32 md:h-40 bg-white border border-blue-100 rounded-3xl flex items-center justify-center p-8 transition-all duration-500 shadow-xl shadow-blue-500/15 cursor-default"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full w-auto object-contain transition-all duration-700 ease-out"
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
