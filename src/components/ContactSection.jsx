// src/components/ContactSection.jsx
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
      import { FaInfoCircle } from "react-icons/fa";

import { SiUpwork } from "react-icons/si";
import ContactImg from "../assets/Heroimg.jpeg"; 
import CV from "../assets/Muhhamad Adnan.pdf"; 

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g6bo8ne", 
        "template_a6f4sjj", 
        form.current,
        "DNCRjbjp8-L4_pUPa" 
      )
      .then(
        () => {
          alert(" Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          alert(" Something went wrong. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#F8F7F1] py-16 px-6 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-figtree text-[#032737] font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full mb-12">
          {/* Address */}
          <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#f05228] text-2xl mb-5 " />
            <div>
              <h3 className="font-figtree text-[#032737] text-lg font-bold">
                Address
              </h3>
              <p className="font-figtree text-[#032737] text-sm font-medium">
                Lahore, Pakistan
              </p>
            </div>
          </div>
          {/* Email */}
          <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center gap-4">
            <FaEnvelope className="text-[#f05228] text-2xl mb-5 " />
            <div>
              <h3 className="font-figtree text-[#032737] text-lg font-bold">
                Email
              </h3>
              <p className="font-figtree text-[#f05228] text-sm font-medium">
                sendtomadnan@gmail.com
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center gap-4">
            <FaPhoneAlt className="text-[#f05228] text-2xl mb-5" />
            <div>
              <h3 className="font-figtree text-[#032737] text-lg font-bold">
                Phone
              </h3>
              <p className="font-figtree text-[#032737] text-sm font-medium">
                0317-4103743
              </p>
            </div>
          </div>
          {/* Website */}
          <div className="bg-white rounded-xl px-6 py-6 shadow-lg flex items-center gap-4">
            <FaGlobe className="text-[#f05228] text-2xl mb-5" />
            <div>
              <h3 className="font-figtree text-[#032737] text-lg font-bold">
                Website
              </h3>
              <a
                href="https://github.com/codewith-adnan"
                target="_blank"
                rel="noreferrer"
                className="font-figtree text-[#f05228] text-sm font-medium hover:underline"
              >
                github.com/codewith-adnan
              </a>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <img
              src={ContactImg}
              alt="Contact"
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg mb-6"
            />
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between h-[500px]"
          >
            <h3 className="text-2xl font-bold text-[#032737] mb-4">
              Send Me a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4 flex-1">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f05228] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f05228] outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f05228] outline-none"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#f05228] outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#f05228] text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-[#f05228] hover:border hover:border-[#f05228] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* CV Buttons */}



      {/* CV Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-10 w-full max-w-3xl">
        {/* View CV */}
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#032737] text-white py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-[#032737] hover:border hover:border-[#032737] transition"
        >
          <FaDownload className="inline mr-2" />
          View CV
        </a>

        {/* Download CV */}
        <a
          href={CV}
          download
          className="flex-1 bg-[#f05228] text-white py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-[#f05228] hover:border hover:border-[#f05228] transition"
        >
          <FaDownload className="inline mr-2" />
          Download CV
        </a>
      </div>

      {/* ✅ Animated NOTE Section */}
      {/* ✅ Animated NOTE Section with Typing Effect */}
{/* ✅ Animated NOTE Section with Better Layout */}
<motion.div
  className="mt-12 flex items-center gap-3 bg-[#fff3f0] border border-[#f05228] px-6 py-4 rounded-xl shadow-md max-w-6xl mx-auto"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* Icon stays aligned inside box */}
  <FaInfoCircle className="text-[#f05228] text-2xl flex-shrink-0" />

  {/* Animated text */}
  <motion.span
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 2,
    }}
    className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-[#f05228] pr-1 text-[#032737] font-figtree font-medium"
  >
    NOTE: Some projects are private and owned by the company. I do not have permission to use them for personal advertisement and promotions.
  </motion.span>
</motion.div>



    </section>
  );
}
