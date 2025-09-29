import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    // YAHAN TABDEELI KI GAYI HAI: 'bg-dark' ko 'bg-gray-800' se badla gaya hai.
    // Yeh ek gehra grey color hai jo hamesha kaam karega.
    <footer id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <div className="text-center">
            <h3 className="text-xl font-bold">Muhammad Ahmad</h3>
            {/* YAHAN BHI TABDEELI KI GAYI HAI: 'text-secondary' ko 'text-cyan-400' se badla hai */}
            <p className="text-cyan-400">CEO & Founder</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Muhammad Umar</h3>
            <p className="text-cyan-400">Director</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
          <a href="tel:03173284147" className="flex items-center gap-3 hover:text-cyan-400">
            <FaPhone /> 0317 - 3284147
          </a>
          <a href="mailto:Infowat477@gmail.com" className="flex items-center gap-3 hover:text-cyan-400">
            <FaEnvelope /> Infowat477@gmail.com
          </a>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt /> Rawalpindi, Islamabad
          </p>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} WAT - We Are Together. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;