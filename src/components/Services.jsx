import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Layout, 
  Globe, 
  Sparkles,
  Zap,
  ShieldCheck,
  Rocket,
  Paintbrush,
  Camera,
  Hammer,
  Home,
  Monitor,
  Layers
} from 'lucide-react';
import MagneticButton from './MagneticButton';

const coreServices = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Multi-layered growth strategies combining SEO, social media authority, and conversion-optimized ad campaigns for maximum ROI.",
    features: ["SEO Optimization", "Social Media Management", "PPC Campaigns", "Content Strategy"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 2,
    icon: Layout,
    title: "Landing Pages",
    description: "Ultra-fast, high-converting landing pages built with cinematic animations and psychology-driven layouts that turn clicks into customers.",
    features: ["A/B Testing", "Mobile-First Design", "Psychology-Led UX", "Ultra-Fast Loading"],
    color: "from-teal-500 to-emerald-600"
  },
  {
    id: 3,
    icon: Globe,
    title: "Business Web Pages",
    description: "Professional, scalable, and secure web solutions for modern enterprises that demand a premium digital presence and flawless performance.",
    features: ["Custom CMS", "Enterprise Security", "Cloud Scaling", "Interactive UI"],
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Electrical & Plumbing",
    description: "Certified experts providing safe, efficient, and high-standard electrical and plumbing installations for residential and corporate sectors.",
    features: ["System Design", "Emergency Repairs", "Certified Safety", "Smart Integration"],
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    icon: Paintbrush,
    title: "Renovation & Painting",
    description: "Aesthetic transformations through premium painting and structural renovation that breathe new life into any environment.",
    features: ["Interior Design", "Exterior Coating", "Structural Remodel", "Finish Polishing"],
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 6,
    icon: Zap,
    title: "Appliance & Smart Tech",
    description: "Professional installation and maintenance of modern appliances and smart home systems to simplify your lifestyle.",
    features: ["Smart Home Setup", "Appliance Repair", "Power Optimization", "Testing & Tagging"],
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 7,
    icon: Camera,
    title: "CCTV & Security",
    description: "Advanced surveillance and smart security solutions providing 24/7 protection and remote monitoring for your properties.",
    features: ["4K Surveillance", "Biometric Access", "Smart Alerts", "Cloud Backup"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 8,
    icon: Hammer,
    title: "Carpentry & Flooring",
    description: "Custom woodwork, elegant flooring, and modern false ceilings crafted with precision and premium materials.",
    features: ["Bespoke Furniture", "Hardwood Flooring", "False Ceilings", "Wood Restoration"],
    color: "from-amber-600 to-yellow-700"
  },
  {
    id: 9,
    icon: Rocket,
    title: "IT & Office Management",
    description: "Comprehensive IT infrastructure and streamlined office management solutions to ensure your business operations run without a hitch.",
    features: ["Network Setup", "Cloud Management", "Helpdesk Support", "Infrastructure"],
    color: "from-slate-700 to-slate-900"
  },
  {
    id: 10,
    icon: Home,
    title: "Real Estate",
    description: "Trusted guidance and comprehensive services for buying, selling, or renting properties with expert market insights.",
    features: ["Property Analysis", "Legal Guidance", "Market Listings", "Investment Strategy"],
    color: "from-indigo-500 to-blue-700"
  },
  {
    id: 11,
    icon: Monitor,
    title: "Digital Bill Boarding",
    description: "High-impact digital outdoor advertising solutions featuring ultra-bright LED displays and dynamic content management.",
    features: ["LED Display Setup", "Dynamic Content Control", "24/7 Visibility", "Structural Mounting"],
    color: "from-violet-500 to-fuchsia-600"
  },
  {
    id: 12,
    icon: Layers,
    title: "Wallpaper Installation",
    description: "Professional wallpaper application and custom wall branding to personalize your residential or corporate environments.",
    features: ["Custom Wall Branding", "Professional Fitting", "Texture Analysis", "Surface Preparation"],
    color: "from-lime-500 to-green-600"
  }
];

const luxuryImages = [
  { id: 1, src: '/services.jpeg', title: 'Executive Presence' },
  { id: 2, src: '/services (1).jpeg', title: 'Digital Signage' },
  { id: 3, src: '/services (5).jpeg', title: 'Premium Branding' },
  { id: 4, src: '/services (6).jpeg', title: 'Luxury Display' },
  { id: 5, src: '/services (7).jpeg', title: 'Visual Identity' },
  { id: 6, src: '/services (8).jpeg', title: 'Market Strategy' },
  { id: 7, src: '/services (9).jpeg', title: 'Interactive Board' },
  { id: 8, src: '/services (10).jpeg', title: 'Corporate Events' },
  { id: 9, src: '/services (11).jpeg', title: 'Global Campaign' },
  { id: 10, src: '/services (12).jpeg', title: 'Agency Standard' },
  { id: 11, src: '/services (13).jpeg', title: 'Creative Assets' },
  { id: 12, src: '/services (14).jpeg', title: 'Production Excellence' },
  { id: 13, src: '/services (15).jpeg', title: 'Final Polish' },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative p-10 bg-white rounded-3xl border border-gray-100 shadow-[0_30px_60px_-35px_rgba(37,99,235,0.25),0_30px_60px_-35px_rgba(20,184,166,0.25)] hover:shadow-[0_40px_80px_-25px_rgba(37,99,235,0.3)] transition-all duration-500 group overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl transition-opacity duration-500`}></div>
      
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20`}>
        <motion.div
           animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Icon size={32} />
        </motion.div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed font-medium">
        {service.description}
      </p>

      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-blue-600 transition-colors">
            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3 opacity-60`}></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const [showLuxury, setShowLuxury] = useState(false);

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              We define digital and technical excellence. Our solutions combine cinematic aesthetics with high-performance execution across all industries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="flex justify-center"
          >
            <MagneticButton distance={0.5}>
              <button
                onClick={() => setShowLuxury(!showLuxury)}
                className="px-12 py-5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold tracking-widest text-xs md:text-sm shadow-xl shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/60 active:scale-95 flex items-center gap-3 group"
              >
                {showLuxury ? 'CLOSE GALLERY' : 'VIEW LUXURY SERVICES'}
                <Sparkles className={`w-4 h-4 transition-transform duration-500 ${showLuxury ? 'rotate-180 text-blue-200' : 'group-hover:scale-125'}`} />
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        <AnimatePresence>
          {showLuxury && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="mt-20 overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {luxuryImages.map((img) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-xl cursor-crosshair"
                  >
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInHover={{ y: 0, opacity: 1 }}
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <p className="text-blue-400 text-xs font-black tracking-widest uppercase mb-2">Luxury Tier</p>
                        <h4 className="text-xl font-bold text-white uppercase tracking-tighter">{img.title}</h4>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 text-center">
                 <p className="text-gray-400 font-bold tracking-[0.4em] uppercase text-[10px]">End of Luxury Gallery</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;