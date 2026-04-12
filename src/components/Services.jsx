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
  Layers,
  Car,
  Building2,
  ShoppingBag,
  Utensils
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
    features: ["Buying, Selling & Rentals", "Commercial Properties", "Offices, Shops & Plots", "Expert Guidance & Valuation"],
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
    icon: Utensils,
    title: "Kitchen Kings",
    description: "Premium culinary experiences delivered to your doorstep. From authentic home-made delicacies and professional catering to fresh groceries and seamless online ordering.",
    features: ["Home-Made Food", "Ready Meals & Catering", "Grocery & Food Essentials", "Online Ordering & Home Delivery"],
    color: "from-green-600 to-emerald-700"
  },
  {
    id: 13,
    icon: Sparkles,
    title: "LifeStyleLuxe",
    description: "Elevate your daily living with premium wellness and lifestyle solutions. From holistic skincare and fitness therapies to gourmet meals and home spa experiences, we bring luxury and rejuvenation to your lifestyle.",
    features: ["Skincare & Beauty", "Gourmet Foods & Home-Made Meals", "Yoga, Fitness & Relaxation Therapy", "Home Spa, Massage & Aromatherapy", "Cosmetics, Lifestyle Products & Food"],
    color: "from-rose-400 to-orange-500"
  },
  {
    id: 14,
    icon: Layers,
    title: "Wallpaper Installation",
    description: "Professional wallpaper application and custom wall branding to personalize your residential or corporate environments.",
    features: ["Custom Wall Branding", "Professional Fitting", "Texture Analysis", "Surface Preparation"],
    color: "from-lime-500 to-green-600"
  },
  {
    id: 15,
    icon: Car,
    title: "Move Together",
    description: "Unmatched mobility solutions providing seamless inter-city travel, premium car rentals, and shared commuting with a high-end vehicle fleet.",
    features: ["City to City Tours", "Car Rental", "Car Pooling", "Luxury & Economy Vehicles"],
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 16,
    icon: ShoppingBag,
    title: "E-Commerce Vault",
    description: "A complete end-to-end digital retail ecosystem. We handle everything from store development and product photography to secure payments and global logistics.",
    features: ["Online Store Development", "Product Photography", "E-Commerce Management", "Digital Sales & Marketing", "Secure Payment Solutions", "Warehousing & Delivery"],
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 17,
    icon: Building2,
    title: "Build Together",
    description: "Excellence in infrastructure and real estate, delivering world-class construction and premium property management services.",
    features: ["Civil Construction", "Commercial Projects", "Residential Projects", "Property Buying & Selling"],
    color: "from-amber-600 to-yellow-700"
  },
  {
    id: 18,
    icon: ShieldCheck,
    title: "The Technical Doctors",
    description: "Comprehensive technical and maintenance solutions for modern spaces. From advanced electrical wiring and smart automation to structural repairs and luxury decorating.",
    features: ["Wiring, Lighting & Generators", "Leak Repairs & Installations", "Steel, Glass & Aluminium", "Ceiling & Flooring", "Gypsum, Tiles, Piping & Roofing", "Home & Office Painting", "Interior & Exterior Decorating", "UPS, Solar & Smart Automation"],
    color: "from-slate-600 to-blue-900"
  }
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative p-5 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-[0_30px_60px_-35px_rgba(37,99,235,0.25),0_30px_60px_-35px_rgba(20,184,166,0.25)] hover:shadow-[0_40px_80px_-25px_rgba(37,99,235,0.3)] transition-all duration-500 group overflow-hidden"
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
  const [showAll, setShowAll] = useState(false);
  const initialServices = coreServices.slice(0, 6);
  const additionalServices = coreServices.slice(6);

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-2 md:px-6">
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
          {initialServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="mt-8 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center"
          >
            <MagneticButton distance={0.5}>
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold tracking-widest text-xs md:text-sm shadow-xl shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/60 active:scale-95 flex items-center gap-3 group"
              >
                {showAll ? 'CLOSE SERVICES' : 'VIEW MORE SERVICES'}
                <Sparkles className={`w-4 h-4 transition-transform duration-500 ${showAll ? 'rotate-180 text-blue-200' : 'group-hover:scale-125'}`} />
              </button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;