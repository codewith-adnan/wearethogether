// src/components/Contact.jsx

import React from 'react';
import logoImage from '../assets/WAT Logo_ Unity in Design (1).png'; 
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook 
} from 'react-icons/fa';

const Contact = () => {
  const socialLinks = {
    whatsapp: 'https://whatsapp.com/channel/0029Vb7ULltGJP8D3x5Ve005',
    instagram: 'https://www.instagram.com/thetechnicaldoctorsbywatpvtltd?igsh=MW1henplZWRuZzBzZg==',
    facebook: 'https://www.facebook.com/share/16ybuDoz6C/'
  };

  return (
    <footer id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left gap-10">

          {/* === Left Column (Logo aur Text) === */}
          {/* Main ne aapka negative margin hata diya hai, iski zaroorat nahi */}
          <div className="md:w-1/3 mt-[-55px]"> 
            <img 
              src={logoImage} 
              alt="WAT Logo"
              // STEP 1: Logo ko bright karne ke liye filter classes add ki hain
              className="h-40 w-auto mx-auto md:mx-0  filter brightness-0 invert" 
            />
            {/* Maine aapka purana text wapas add kar diya hai jo pehle tha */}
            <p className="text-gray-400 text-sm">
              Delivering more than just services—we deliver peace of mind. Your trusted partner for technical solutions.
              At The Technical Doctors, expertise is not just a claim—it's a standard. Every technician on our team is a certified diploma holder with over five years of hands-on experience, ensuring your needs are handled by seasoned professionals.
            </p>
          </div>

          {/* === Right Column (Contact Info) === */}
          <div className="md:w-2/3 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">Muhammad Ahmad</h3>
                <p className="text-cyan-400">CEO & Founder</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">Muhammad Umar</h3>
                <p className="text-cyan-400">Director</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2 text-lg mb-6">
              <a href="tel:03173284147" className="flex items-center gap-3 hover:text-cyan-400">
                <FaPhone /> 0317 - 3284147
              </a>
              <a href="mailto:Infowat477@gmail.com" className="flex items-center gap-3 hover:text-cyan-400">
                <FaEnvelope /> Infowat4-477@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt /> Rawalpindi, Islamabad
              </p>
            </div>

            <div className="flex justify-center items-center gap-8">
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="text-4xl text-white hover:text-green-500 transition-colors duration-300" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-4xl text-white hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-4xl text-white hover:text-blue-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()}  All Rights Reserved.<br></br>codewithadnan</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;