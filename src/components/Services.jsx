// src/components/Services.jsx
import React from 'react';
import { FaBolt, FaPaintBrush, FaTools, FaVideo, FaRulerCombined, FaLaptop, FaCity } from 'react-icons/fa';

const services = [
  { icon: <FaBolt />, name: "Electrical & Plumbing" },
  { icon: <FaPaintBrush />, name: "Renovation & Painting" },
  { icon: <FaTools />, name: "Appliance Installation and Repair" },
  { icon: <FaVideo />, name: "CCTV and Smart Tech Solutions" },
  { icon: <FaRulerCombined />, name: "Carpentry, Flooring and False Ceilings" },
  { icon: <FaLaptop />, name: "IT and Office Management" },
  { icon: <FaCity />, name: "Real Estate" }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.name} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-primary text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-dark">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;