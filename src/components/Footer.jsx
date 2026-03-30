import React from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle 
} from 'lucide-react';
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

  const socialLinks = [
    { Icon: MessageCircle, url: "https://whatsapp.com/channel/0029Vb7ULltGJP8D3x5Ve005", color: "hover:text-green-500" },
    { Icon: Instagram, url: "https://www.instagram.com/thetechnicaldoctorsbywatpvtltd?igsh=MW1henplZWRuZzBzZg==", color: "hover:text-pink-500" },
    { Icon: Facebook, url: "https://www.facebook.com/share/16ybuDoz6C/", color: "hover:text-blue-500" },
  ];

  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 bg-black text-white font-sans overflow-hidden">
      
      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-t border-white/10 pt-24 pb-12">
        
        {/* Left Section: Branding & Contact */}
        <div className="md:col-span-6 flex flex-col md:justify-between gap-8 md:gap-0 font-sans">
          <div>
            {/* Branding - WAT Style */}
            <div className="flex flex-col mb-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-none text-white uppercase italic flex items-center mb-2">
                WE ARE TOGETHER<span className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full ml-1 md:ml-2 opacity-80 animate-pulse"></span>
              </h1>
              <p className="text-[9px] md:text-[11px] tracking-[3px] md:tracking-[5.5px] uppercase text-gray-500 font-bold">
                The Technical Doctors (Private Limited) ®
              </p>
            </div>

            <p className="text-gray-400 text-sm md:text-base w-full md:max-w-md font-medium leading-relaxed mb-12 text-justify">
              Delivering more than just services — we deliver peace of mind. 
              Your trusted partner for technical solutions. At The Technical Doctors, 
              every technician is a certified diploma holder with over five years of hands-on experience.
            </p>

            {/* Contact Details with Icons */}
            <div className="flex flex-col gap-4 text-gray-400 text-sm mb-10">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                <span>0317 - 3284147</span>
              </div>
              <a href="mailto:Infowat477@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-blue-500" />
                <span>Infowat477@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-500" />
                <span>Rawalpindi, Islamabad</span>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="flex flex-col gap-6 border-l-2 border-blue-500/30 pl-6 mt-8 mb-12">
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Muhammad Ahmad</h3>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">CEO & Founder</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Muhammad Umar</h3>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Director</p>
              </div>
            </div>
          </div>

          {/* Social Icons (Rounded with border) */}
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, url, color }, idx) => (
              <a 
                key={idx} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 text-white group ${color} hover:bg-white/10`}
              >
                <Icon size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Pages Link */}
        <div className="md:col-span-4 flex flex-col items-start md:items-start md:pl-20 mt-4 md:mt-0">
          <h4 className="text-xs uppercase tracking-[4px] text-gray-500 mb-10 font-bold">Navigation:</h4>
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
                  className="text-2xl md:text-xl font-bold uppercase transition-all duration-300 hover:text-blue-500 text-white no-underline cursor-pointer"
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
              <span className="uppercase tracking-[5px] text-[10px] font-bold text-gray-500 [writing-mode:vertical-lr] rotate-180">
                Back to top
              </span>
              <div className="w-12 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                <ArrowUp size={16} className="text-white group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Top (Magnetic Style) - DESKTOP ONLY */}
        <div className="md:col-span-2 hidden md:flex flex-col items-end justify-end relative">
          <div className="flex flex-col items-center gap-6 mb-4">
            <span className="uppercase tracking-[5px] text-[10px] font-bold text-gray-500 [writing-mode:vertical-lr] rotate-180">
              Back to top
            </span>
            <MagneticButton className="bg-transparent border-0 p-0 outline-none">
              <div 
                onClick={scrollToTop}
                className="w-14 h-24 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all group cursor-pointer"
              >
                <ArrowUp className="group-hover:-translate-y-2 transition-transform text-white" size={20} />
              </div>
            </MagneticButton>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-15 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 text-center md:text-left gap-4">
        <p className="text-[10px] uppercase tracking-[2px] font-bold">© 2026 We Are Together │ All Rights Reserved</p>
        <p className="text-[10px] uppercase tracking-[2px] font-bold">Lahore, Pakistan │ thetechnicaldoctors.com</p>
      </div>

    </footer>
  );
};

export default Footer;
