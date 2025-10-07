

import React, { useState } from "react";
import logoImage from "../assets/watlogo.png";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("03173284147");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = {
    whatsapp: "https://whatsapp.com/channel/0029Vb7ULltGJP8D3x5Ve005",
    instagram:
      "https://www.instagram.com/thetechnicaldoctorsbywatpvtltd?igsh=MW1henplZWRuZzBzZg==",
    facebook: "https://www.facebook.com/share/16ybuDoz6C/",
  };

  const navLinks = ["Home", "About", "Why Us", "Services", "Contact"];

  return (
    <footer id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="text-center md:text-left mt-[-40px]">
            <img
              src={logoImage}
              
              className="h-40 w-auto mx-auto md:mx-0 filter brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mt-1 w-[250px] mx-auto md:mx-0">
              Delivering more than just services — we deliver peace of mind.
              <br />
              Your trusted partner for technical solutions. At The Technical
              Doctors, every technician is a certified diploma holder with over
              five years of hands-on experience.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-1xl font-semibold mb-3">Stay Connected</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>

            <ul className="space-y-3 tracking-wide">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase().replace(" ", "-")}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-1xl font-bold mb-4 text-white">Contact Us</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto md:mx-0 mb-6"></div>
            <div className="flex flex-col gap-3">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">Muhammad Ahmad</h3>
                <p className="text-cyan-400">CEO & Founder</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">Muhammad Umar</h3>
                <p className="text-cyan-400">Director</p>
              </div>
            </div>
            <div className="text-gray-300 my-6 space-y-3">
              <div className="relative flex items-center justify-center md:justify-start gap-3 cursor-pointer group"
                   onClick={handleCopy}>
                <FaPhone />
                <span>0317 - 3284147</span>
                {copied && (
                  <span className="absolute top-[-30px] bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </div>

              <a
                href="mailto:Infowat477@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400"
              >
                <FaEnvelope /> Infowat477@gmail.com
              </a>

              <p className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt /> Rawalpindi, Islamabad
              </p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-6 mb-6">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-3xl text-white hover:text-green-500 transition-colors duration-300" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-3xl text-white hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-3xl text-white hover:text-blue-500 transition-colors duration-300" />
              </a>
            </div>

          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-6 text-gray-400 text-sm mb-[-50px]">
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved.
            <br />
            <span className="text-blue-400 font-semibold ">sendtomadnan@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;