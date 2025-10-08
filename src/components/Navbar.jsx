import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/together.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = ["Home", "About", "Why Us", "Services", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6  flex justify-between items-center">
        {/* ---- Logo ---- */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            className="h-20 w-32" 
          />
          <div className="flex justify-center -mt-10 space-x-2">
            <span style={{ color: '#f39c12', fontWeight: 'bold' }}>w</span>
            <span style={{ color: '#945708', fontWeight: 'bold' }}>e</span>
            <span className="mx-1 gap-5"></span>
            <span style={{ color: '#033f66', fontWeight: 'bold' }}>a</span>
            <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>r</span>
            <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>e</span>
          </div>
        </div>


        {/* ---- Desktop Nav Links ---- */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              activeClass="active"
              to={link.toLowerCase().replace(" ", "-")}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link cursor-pointer text-gray-600 hover:text-blue-600 hover:underline underline-offset-4 decoration-2 transition duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* ---- Mobile Menu Button ---- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* ---- Mobile Nav Links ---- */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              activeClass="active"
              to={link.toLowerCase().replace(" ", "-")}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block py-2 cursor-pointer text-gray-600 hover:text-blue-600 hover:underline underline-offset-4 decoration-2 transition duration-300"
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