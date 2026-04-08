import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const workProjects = [
  { id: 0, image: '/0.png', title: 'Building Construction', description: 'Gray structure for 10 marla 8 floor plaza in DHA 1 Islamabad execution.' },
  { id: 1, image: '/1.jpeg', title: 'MTJ Kiosk Surveys', description: 'Production and execution of kiosk surveys and site analysis at Giga Mall, Islamabad.' },
  { id: 2, image: '/2.jpeg', title: 'Mall Production Works', description: 'On-site execution and high-end kiosk production at Centaurus Mall, Blue Area, Islamabad.' },
  { id: 3, image: '/3.jpeg', title: 'Premium Retail Signage', description: 'Bespoke signage solutions designed for premium retail environments and luxury brands.' },
  { id: 4, image: '/4.jpeg', title: 'Askari Bank Branding', description: 'Full branding (Vinyls, Standies, Penaflex, Frosting) for Askari Bank branches in North areas, Bahria Phase 4, and Rawalpindi.' },
  { id: 5, image: '/5.jpeg', title: 'Digital Bill Boarding', description: 'Custom 3D backlit and unlit boarding solutions for private clients in Islamabad and Rawalpindi.' },
  { id: 6, image: '/6.jpeg', title: 'Custom 3D Signage', description: 'Premium 3D signs and structural board installations for local business hubs.' },
  { id: 7, image: '/7.jpeg', title: 'Commercial Wall Paper', description: 'Professional wall paper and branding wall setups for corporate offices in Islamabad.' },
  { id: 8, image: '/8.jpeg', title: 'Unlit Board Solutions', description: 'Durable unlit boards and vinyl branding for local shops and private enterprises.' },
  { id: 9, image: '/9.jpeg', title: 'Backlit Signage Work', description: 'High-visibility backlit boards and signage for 24/7 brand exposure in busy commercial areas.' },
  { id: 10, image: '/10.jpeg', title: 'Digital Media Display', description: 'Innovative digital display solutions and wallpaper branding for modern retail spaces.' },
  { id: 11, image: '/11.jpeg', title: 'Private Client Branding', description: 'Tailored branding solutions including vinyls and boards for private clients across Rawalpindi.' },
  { id: 12, image: '/12.jpeg', title: 'Structural Boarding', description: 'Expert design and execution of structural boards and unlit signage for local hubs.' },
  { id: 13, image: '/13.jpeg', title: 'Security System Setup', description: 'High-definition CCTV and biometric access control for a secure perimeter.' },
  { id: 14, image: '/14.jpeg', title: 'Plumbing Infrastructure', description: 'Modernizing the water and drainage systems with leak-proof technology.' },
  { id: 15, image: '/15.jpeg', title: 'Custom Carpentry Work', description: 'Bespoke shelving and furniture handcrafted for a unique home library.' },
  { id: 16, image: '/16.jpeg', title: 'Roofing & Insulation', description: 'Expert roofing replacement with high-efficiency thermal insulation layer.' },
  { id: 17, image: '/17.jpeg', title: 'HVAC Maintenance', description: 'Optimization of heating and cooling systems for maximum energy savings.' },
  { id: 18, image: '/18.jpeg', title: 'Oxbridge College Digital Board', description: 'Design and installation of high-impact digital billboards for Oxbridge College, Islamabad.' },
  { id: 19, image: '/pepsi.jpeg', title: 'Pepsi Brandings & Execution', description: 'Comprehensive branding (Backlit boards, kanopies, vinyls) all over Rawalpindi, Islamabad, and site areas.' },
  { id: 20, image: '/20.jpeg', title: 'Custom Furniture & Structure', description: 'Professional chair poshis, structural furniture, and workspace setup works.' },
];



const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? workProjects : workProjects.slice(0, 6);


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="work" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Work</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our portfolio of successful projects where quality craftsmanship meets innovative solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 border border-gray-100 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15),0_20px_50px_-15px_rgba(20,184,166,0.15)] hover:shadow-[0_25px_60px_-12px_rgba(37,99,235,0.25),0_25px_60px_-12px_rgba(20,184,166,0.25)] hover:border-blue-200/50"



              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>


              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center flex justify-center"
        >
          <MagneticButton distance={0.5}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold tracking-wide text-sm md:text-base shadow-lg shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/60 active:scale-95 flex items-center gap-2"
            >
              <span>
                {showAll ? 'VIEW LESS' : `VIEW MORE PROJECTS (${workProjects.length - 6}+)`}
              </span>

              <svg
                className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default Work;
