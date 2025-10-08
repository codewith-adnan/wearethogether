// src/components/Services.jsx

import React, { useState } from 'react';

import electricalImage from '../assets/electritcian.jfif';
import paintingImage from '../assets/carpentry.jfif';
import applianceImage from '../assets/install.jfif';
import cctvImage from '../assets/cctv.jfif';
import carpentryImage from '../assets/ceilling.jfif';
import itImage from '../assets/it.jfif';
import realEstateImage from '../assets/real.jfif';

const servicesData = [
  { 
    id: 1, 
    image: electricalImage, 
    name: "Electrical & Plumbing",
    description: "From minor repairs to complete system installations, our certified electricians and plumbers ensure safety and efficiency for your home or office."
  },
  { 
    id: 2, 
    image: paintingImage, 
    name: "Renovation & Painting",
    description: "Transform your space with our expert renovation and painting services. We handle everything from a single room refresh to a full-scale remodel."
  },
  { 
    id: 3, 
    image: applianceImage, 
    name: "Appliance Installation and Repair",
    description: "We install and repair all major home appliances, including refrigerators, washing machines, and ovens, with precision and care."
  },
  { 
    id: 4, 
    image: cctvImage, 
    name: "CCTV and Smart Tech Solutions",
    description: "Secure your property with our advanced CCTV and smart home solutions. We provide installation, maintenance, and expert advice."
  },
  { 
    id: 5, 
    image: carpentryImage, 
    name: "Carpentry, Flooring and False Ceilings",
    description: "Custom furniture, elegant flooring, and modern false ceilings. Our skilled carpenters bring your vision to life with quality craftsmanship."
  },
  { 
    id: 6, 
    image: itImage, 
    name: "IT and Office Management",
    description: "Reliable IT support and office management services to keep your business running smoothly. We handle networking, hardware, and software issues."
  },
  { 
    id: 7, 
    image: realEstateImage, 
    name: "Real Estate",
    description: "Whether you are buying, selling, or renting, our real estate experts provide trusted guidance and comprehensive services to meet your needs."
  }
];

const ServiceCard = ({ image, name, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-dark">{name}</h3>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary text-3xl font-bold rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
          >
            {isOpen ? '−' : '+'}
          </button>
        </div>
        
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-gray-600 pt-2 border-t border-gray-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-dark mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto "></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-[-5px]" >
            Quality work, guaranteed. We build lasting trust by fixing problems right the first time.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard 
              key={service.id} 
              image={service.image}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;