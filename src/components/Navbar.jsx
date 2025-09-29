// src/components/Navbar.jsx

import React from 'react'; 
import { Link } from 'react-scroll';
import logoImage from '../assets/WAT Logo_ Unity in Design (1).png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navLinks = ["Home", "About", "Why Us", "Services", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        
       <div className="flex items-center">
  <img 
    src={logoImage}          
    alt="WAT Logo"           
    className="h-16 w-auto object-contain flex-shrink-0" 
  />
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link}
              activeClass="active"
              to={link.toLowerCase().replace(' ', '-')}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link cursor-pointer text-gray-600 hover:text-primary transition duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {navLinks.map(link => (
            <Link
              key={link}
              activeClass="active"
              to={link.toLowerCase().replace(' ', '-')}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block py-2 cursor-pointer text-gray-600 hover:text-primary transition duration-300"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;