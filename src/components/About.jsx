// src/components/About.jsx

import React from 'react';

// STEP 1: Apni video file ko yahan import karein
import professionalImage from '../assets/whyus.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      {/* Container ko flexbox banayein taake do columns ban sakein */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column (Video) */}
         <div className="md:w-1/2">
            {/* 
              STEP 2: Yahan URL ki jagah import kiya hua variable istemal karein
            */}
            <img 
              src={professionalImage} 
              alt="Professional Technician" 
              className="rounded-lg shadow-xl"
            />
          </div>

        {/* Right Column (Text Content) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-dark mb-4">Introduction</h2>
          {/* Underline ko left align karne ke liye 'md:mx-0' add karein */}
          <div className="w-24 h-1 bg-primary mx-auto md:mx-0 mb-8"></div>
          <p className="text-gray-600 leading-relaxed">
            At The Technical Doctors, we pride ourselves on delivering more than just services—we deliver peace of mind. Our team of trusted technicians is carefully selected for their expertise, professionalism, and commitment to excellence. We understand the value of your time, which is why punctuality is a cornerstone of our promise. From the moment you book with us to the final walkthrough, we ensure every detail meets the highest standards. With quality work guaranteed, we don't just fix problems—we build lasting trust.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;