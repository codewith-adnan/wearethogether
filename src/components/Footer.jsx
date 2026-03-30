import React from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaInstagram,
  FaFacebook,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';
import MagneticButton from './MagneticButton';
import logo from "../assets/watlogo.png";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1000, smooth: 'easeInOutQuad' });
  };

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Why Us", to: "why-us" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  // Advanced: Added hoverBgColor for the fill-reveal animation
  const iconLinks = [
    { Icon: FaWhatsapp, url: "https://whatsapp.com/channel/0029Vb7ULltGJP8D3x5Ve005", hoverBgColor: "bg-[#25D366]" },
    { Icon: FaInstagram, url: "https://www.instagram.com/thetechnicaldoctorsbywatpvtltd?igsh=MW1henplZWRuZzBzZg==", hoverBgColor: "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]" },
    { Icon: FaFacebook, url: "https://www.facebook.com/share/16ybuDoz6C/", hoverBgColor: "bg-[#1877F2]" },
    { Icon: FaPhone, url: "tel:03173284147", hoverBgColor: "bg-blue-500" },
    { Icon: FaEnvelope, url: "mailto:Infowat477@gmail.com", hoverBgColor: "bg-gray-800" },
  ];

  return (
    <footer id="contact" className="relative  pb-12 px-6 bg-white text-gray-900 font-sans overflow-hidden border-t border-gray-100">

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pt-24 pb-12">

        {/* Left Section: Branding & Contact Icons */}
        <div className="md:col-span-6 flex flex-col md:justify-between gap-8 md:gap-0 font-sans">
          <div>
            {/* Branding - Advanced Logo Style */}
            <div className="flex flex-col items-start  relative">
              <img
                src={logo}
                alt="WAT Logo"
                className="h-28 md:h-36 w-auto object-contain transition-transform hover:scale-105 duration-500 z-10"
              />

            </div>

            <p className="text-gray-500 text-sm md:text-base w-full md:max-w-md font-medium leading-relaxed mb-10 text-justify">
              Delivering more than just services — we deliver peace of mind.
              Your trusted partner for technical solutions. At The Technical Doctors,
              every technician is a certified diploma holder with over five years of hands-on experience.
            </p>


          </div>

          {/* Advanced Social Icons (Fill-Reveal Effect) */}
          <div className="flex flex-wrap gap-4 mt-2">
            {iconLinks.map(({ Icon, url, hoverBgColor }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm text-gray-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden group"
              >
                {/* Background Animation Layer */}
                <span className={`absolute inset-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out ${hoverBgColor}`}></span>

                {/* Icon Layer */}
                <Icon size={20} className="relative z-10 transition-colors duration-500 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Pages Link */}
        <div className="md:col-span-4 flex flex-col items-start md:items-start md:pl-20 mt-4 md:mt-0">
          <h4 className="text-xs uppercase tracking-[4px] text-gray-400 mb-10 font-black">Navigation:</h4>
          <div className="flex flex-row justify-between items-end w-full">
            <nav className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-2xl md:text-xl font-black uppercase transition-all duration-300 hover:text-blue-500 text-gray-800 no-underline cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Scroll Top Trigger */}
            <div
              onClick={scrollToTop}
              className="md:hidden flex flex-col items-center gap-6 mb-2 group cursor-pointer"
            >
              <span className="uppercase tracking-[5px] text-[10px] font-black text-gray-400 [writing-mode:vertical-lr] rotate-180">
                Back to top
              </span>
              <div className="w-12 h-20 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-all transition-colors duration-300">
                <FaArrowUp size={16} className="text-gray-400 group-hover:-translate-y-2 group-hover:text-blue-500 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Top (Magnetic Style) - DESKTOP ONLY */}
        <div className="md:col-span-2 hidden md:flex flex-col items-end justify-end relative">
          <div className="flex flex-col items-center gap-6 mb-4">
            <span className="uppercase tracking-[5px] text-[10px] font-black text-gray-400 [writing-mode:vertical-lr] rotate-180">
              Back to top
            </span>
            <MagneticButton className="bg-transparent border-0 p-0 outline-none">
              <div
                onClick={scrollToTop}
                className="w-14 h-24 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-inner transition-all group cursor-pointer"
              >
                <FaArrowUp className="group-hover:-translate-y-2 group-hover:text-blue-500 transition-all text-gray-400" size={20} />
              </div>
            </MagneticButton>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-15 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center opacity-40 text-center md:text-left gap-4">
        <p className="text-[10px] uppercase tracking-[2px] font-black">© 2026 We Are Together │ All Rights Reserved</p>
        <p className="text-[10px] uppercase tracking-[2px] font-black">Lahore, Pakistan │ The Technical Doctors (Private Limited)</p>
      </div>

    </footer>
  );
};

export default Footer;