import React from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import logo from "../assets/watlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = ["Home", "About", "Why Us", "Services", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-12 py-6 flex items-center justify-end pointer-events-none">

      {/* ---- Logo & Branding ---- */}
      <div className="absolute left-6 md:left-12  flex flex-col items-center pointer-events-auto cursor-pointer group z-[101]">
        <img
          src={logo}
          className="h-24 md:h-34 lg:h-36 w-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
          alt="WAT Logo"
        />
      </div>

      {/* ---- Desktop Nav Rail ---- */}
      <div className="relative pointer-events-auto flex items-center gap-4 z-[101]">
        <div className="hidden lg:flex items-center capsule-nav">
          <div className="flex items-center gap-10 px-10 py-1">
            <div className="flex items-center gap-8">
              {navLinks.slice(0, 4).map((link) => (
                <MagneticButton key={link} distance={0.2}>
                  <Link
                    key={link}
                    activeClass="active-capsule"
                    to={link.toLowerCase().replace(" ", "-")}
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={1500}
                    easing="easeInOutQuart"
                    className="nav-link text-[11px] font-extrabold tracking-[2px] uppercase text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="fluid-text-container">
                      <span className="fluid-text-item">{link}</span>
                      <span className="fluid-text-item text-blue-600">{link}</span>
                    </span>
                  </Link>
                </MagneticButton>
              ))}
            </div>

            <MagneticButton distance={0.4}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={1500}
                easing="easeInOutQuart"
                className="glow-btn-wrapper"
              >
                <div className="glow-btn-inner">
                  GET IN TOUCH
                </div>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* ---- Mobile Burger Tool ---- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-14 h-14 rounded-2xl bg-gray-100/50 border border-gray-200/50 backdrop-blur-xl flex flex-col items-center justify-center gap-1.5 transition-all hover:bg-gray-200/80 pointer-events-auto"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            className="w-7 h-[1.5px] bg-gray-800 rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-7 h-[1.5px] bg-gray-800 rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            className="w-7 h-[1.5px] bg-gray-800 rounded-full"
          />
        </button>
      </div>

      {/* ---- Mobile Menu Overlay ---- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center pointer-events-auto"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={link.toLowerCase().replace(" ", "-")}
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={1500}
                    easing="easeInOutQuart"
                    className="text-3xl font-black tracking-widest uppercase text-gray-800 hover:text-blue-600 transition-all cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={1500}
                  easing="easeInOutQuart"
                  className="glow-btn-wrapper scale-125"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="glow-btn-inner px-10 py-4">
                    GET IN TOUCH
                  </div>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;